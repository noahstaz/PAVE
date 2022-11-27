package com.example.pave;

import android.content.Intent;
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
        myTextView.setText("Username: " + uname);
        Button bck = (Button) findViewById(R.id.button7);
        bck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myin = new Intent(EnteredPage.this, AccountPage.class);
                myin.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(myin);
            }
        });
    }
}
