package com.example.pave;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class SignUp extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.signup);
        Button sup = (Button) findViewById(R.id.button4);
        sup.setBackgroundColor(Color.rgb(26, 28, 31));
        EditText txtname = findViewById(R.id.editTextTextEmailAddress);
        String email1 = txtname.getText().toString();
        EditText txtname2 = findViewById(R.id.editTextTextEmailAddress3);
        sup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(SignUp.this, MainActivity.class));
            }
        });

    }
}
