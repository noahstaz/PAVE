var marketPricing = require("market-pricing");

function crossV2(buyQueue, sellQueue, bpCol, bqCol, spCol, sqCol) {
  if (
    bpCol === undefined ||
    bqCol === undefined ||
    spCol === undefined ||
    sqCol === undefined
  )
    throw new Error(
      "marketPricing.cross: missing 1 or more col parameters: " +
        [bpCol, bqCol, spCol, sqCol].join(",")
    );
  let bidx = 0,
    sidx = 0,
    bl = buyQueue.length,
    sl = sellQueue.length;
  if (!bl || !sl) return undefined;
  let buyQ = [],
    sellQ = [],
    deltaQ = 0,
    totalQ = 0;
  let ibp,
    isp,
    ebp = buyQueue[0][bpCol],
    esp = sellQueue[0][spCol];
  if (ebp >= esp) {
    buyQ[0] = 0;
    sellQ[0] = 0;
  }
  while (ebp >= esp && bidx < bl && sidx < sl) {
    deltaQ = Math.min(
      buyQueue[bidx][bqCol] - buyQ[bidx],
      sellQueue[sidx][sqCol] - sellQ[sidx]
    );
    totalQ += deltaQ;
    // increment or initialize quantity bought/sold by deltaQ
    buyQ[bidx] += deltaQ;
    sellQ[sidx] += deltaQ;
    ibp = ebp; // lowest buying
    isp = esp; // highest selling
    if (buyQueue[bidx][bqCol] === buyQ[bidx]) {
      bidx++;
      buyQ[bidx] = 0;
      ebp = bidx < bl ? buyQueue[bidx][bpCol] : undefined;
    }
    if (sellQueue[sidx][sqCol] === sellQ[sidx]) {
      sidx++;
      sellQ[sidx] = 0;
      esp = sidx < sl ? sellQueue[sidx][spCol] : undefined;
    }
  }
  if (totalQ === 0) return undefined;
  const priceRange = marketPricing.marshallianCEPriceRange(ibp, isp, ebp, esp);
  const price = (priceRange[0] + priceRange[1]) / 2;
  if (buyQ[bidx] === 0) buyQ.pop();
  if (sellQ[sidx] === 0) sellQ.pop();
  return {
    CEprice: price,
    totalQ,
    buyQ,
    sellQ,
    newBuyerList: buyQueue.slice(bidx, bl),
    newSellerList: sellQueue.slice(sidx, sl),
    lendDone: sellQueue.slice(0, sidx),
    borrowDone: buyQueue.slice(0, bidx),
  };
}

export default crossV2;
