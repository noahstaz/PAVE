package com.example.pave;

import android.content.Intent;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MovePage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.move_page);
        String uname = getIntent().getStringExtra("EXTRA_SESSION_ID");
        Button bck = (Button) findViewById(R.id.button12);
        Button camBtn = (Button) findViewById(R.id.button9);
        bck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myin = new Intent(MovePage.this, EnteredPage.class);
                myin.putExtra("EXTRA_SESSION_ID", uname);
                startActivity(myin);
            }
        });
        camBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myin = new Intent();
                myin.setAction(MediaStore.ACTION_IMAGE_CAPTURE);
                startActivity(myin);
            }
        });

    }
}
