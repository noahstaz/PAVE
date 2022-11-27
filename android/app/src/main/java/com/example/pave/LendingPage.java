package com.example.pave;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class LendingPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.lending_page);
        String uname = getIntent().getStringExtra("EXTRA_SESSION_ID");
        Button bck = (Button) findViewById(R.id.button13);
        bck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myin = new Intent(LendingPage.this, EnteredPage.class);
                myin.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(myin);
            }
        });
    }
}
