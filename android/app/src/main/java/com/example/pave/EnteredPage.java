package com.example.pave;

import android.os.Bundle;
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
    }
}
