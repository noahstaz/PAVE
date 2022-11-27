package com.example.pave;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class EnteredPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_page);
        TextView myTextView = (TextView) findViewById(R.id.textView8);
        String uname = getIntent().getStringExtra("EXTRA_SESSION_ID");
        myTextView.setText("Hello " + uname + "!");
        Button btn = (Button) findViewById(R.id.button7);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(EnteredPage.this, AccountPage.class);
                intent.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(intent);

            }
        });
        Button btn2 = (Button) findViewById(R.id.button3);
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(EnteredPage.this, LendingPage.class);
                intent.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(intent);
            }
        });
        Button btn3 = (Button) findViewById(R.id.button6);
        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(EnteredPage.this, MovePage.class);
                intent.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(intent);

            }
        });
        Button btn4 = (Button) findViewById(R.id.button8);
        btn4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(EnteredPage.this, ReqPage.class));
                Intent intent = new Intent(EnteredPage.this, ReqPage.class);
                intent.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(intent);

            }
        });
    }
}
