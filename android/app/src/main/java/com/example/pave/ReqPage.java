package com.example.pave;

import android.content.Intent;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class ReqPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.req_page);
        Button camBtn = (Button) findViewById(R.id.button7);
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
