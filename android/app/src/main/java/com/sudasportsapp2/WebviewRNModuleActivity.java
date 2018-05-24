package com.sudasportsapp2;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
public class WebviewRNModuleActivity extends ReactContextBaseJavaModule {
    private Context mContext;
    public WebviewRNModuleActivity(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext =reactContext;
    }
    @ReactMethod
    public void show(String message){
        Intent intent = new Intent(mContext, WebviewActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        Uri data = Uri.parse(message);
        intent.putExtra("message", message);
        intent.setData(data);
        mContext.startActivity(intent);
    }
    @Override
    public String getName() {
        return "WebviewRNModule";
    }
}