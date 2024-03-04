package com.cs2.steamcsgo.service;

import com.cs2.steamcsgo.model.PlayerStats;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SteamAPIService {

    @Value("${api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    public SteamAPIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public PlayerStats getPlayerStats(String appId, String profileId) {
        String url = "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/";
        String fullUrl = url + "?appid=" + appId + "&key=" + apiKey + "&steamid=" + profileId;
        return restTemplate.getForObject(fullUrl, PlayerStats.class);
    }
}
