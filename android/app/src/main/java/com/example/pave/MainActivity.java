package com.example.pave;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.io.FileNotFoundException;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        SharedPreferences sp = getSharedPreferences("MySharedPref", MODE_PRIVATE);
        Button sin = (Button) findViewById(R.id.button);
        Button sup = (Button) findViewById(R.id.button2);
        EditText txtname = findViewById(R.id.editTextTextEmailAddress2);
        EditText passname = findViewById(R.id.editTextTextPassword);
        sin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String uname = txtname.getText().toString();
                String pass = passname.getText().toString();
                String retrive = sp.getString(uname, "");
                if(retrive.equals(pass)) {
                    Intent myin = new Intent(MainActivity.this, EnteredPage.class);
                    myin.putExtra("EXTRA_SESSION_ID", uname);
                    startActivity(myin);
                }
                else{
                    TextView errormsg = findViewById(R.id.textView4);
                    errormsg.setTextColor(Color.parseColor("#FF0000"));
                }

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