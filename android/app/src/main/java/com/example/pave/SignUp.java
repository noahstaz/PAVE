package com.example.pave;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.io.FileNotFoundException;

public class SignUp extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.signup);
        SharedPreferences sp = getApplicationContext().getSharedPreferences("MySharedPref", Context.MODE_PRIVATE);
        Button sup = (Button) findViewById(R.id.button4);
        EditText txtname = findViewById(R.id.editTextTextEmailAddress);
        EditText txtname2 = findViewById(R.id.editTextTextEmailAddress3);
        EditText passname = findViewById(R.id.editTextTextPassword2);
        EditText passname2 = findViewById(R.id.editTextTextPassword3);
        SharedPreferences.Editor editor = sp.edit();
        sup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email1 = txtname.getText().toString();
                String email2 = txtname2.getText().toString();
                String pass1 = passname.getText().toString();
                String pass2 = passname2.getText().toString();
                if(email1.equals(email2) && pass1.equals(pass2)){
                    if(sp.getString(email1, "").equals("")) {
                        editor.putString(email1, pass1);
                        editor.commit();
                        editor.apply();
                        startActivity(new Intent(SignUp.this, MainActivity.class));
                    }

                }
                else{
                    if(!email1.equals(email2)){
                        TextView error = findViewById(R.id.textView9);
                        error.setTextColor(Color.parseColor("#FF0000"));
                    }
                    if(!pass1.equals(pass2)){
                        TextView error = findViewById(R.id.textView10);
                        error.setTextColor(Color.parseColor("#FF0000"));
                    }
                }

            }
        });

    }
}
