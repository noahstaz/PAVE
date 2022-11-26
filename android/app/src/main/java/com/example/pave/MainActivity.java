package com.example.pave;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button sin = (Button) findViewById(R.id.button);
        sin.setBackgroundColor(Color.rgb(26,28,31));
        Button sup = (Button) findViewById(R.id.button2);
        sup.setBackgroundColor(Color.rgb(26,28,31));

    }
}