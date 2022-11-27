package com.example.pave;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class AccountPage extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.account_page);
        TextView myTextView = (TextView) findViewById(R.id.textView15);
        String uname = getIntent().getStringExtra("EXTRA_SESSION_ID");
        myTextView.setText("Hello " + uname + "!");
        Button bck = (Button) findViewById(R.id.button5);
        bck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myin = new Intent(AccountPage.this, EnteredPage.class);
                myin.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(myin);
            }
        });
    }
}
