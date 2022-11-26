package com.example.pave;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button sin = (Button) findViewById(R.id.button);
        sin.setBackgroundColor(Color.rgb(26,28,31));
        Button sup = (Button) findViewById(R.id.button2);
        sup.setBackgroundColor(Color.rgb(26,28,31));
        sin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText txtname = findViewById(R.id.editTextTextEmailAddress2);
                String uname = txtname.getText().toString();
                Intent myin = new Intent(MainActivity.this, EnteredPage.class);
                myin.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(myin);
            }
        });
        sup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this, SignUp.class));
            }
        });

    }
}