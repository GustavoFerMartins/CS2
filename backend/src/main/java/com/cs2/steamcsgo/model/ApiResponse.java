package com.cs2.steamcsgo.model;

public class ApiResponse<T> {
    private T data;
    // Adicione outros campos conforme necessário

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
