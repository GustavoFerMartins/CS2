package com.cs2.steamcsgo.controller;

import com.cs2.steamcsgo.model.PlayerStats;
import com.cs2.steamcsgo.service.SteamAPIService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SteamStatsController {

    private final SteamAPIService steamAPIService;

    public SteamStatsController(SteamAPIService steamAPIService) {
        this.steamAPIService = steamAPIService;
    }

    @GetMapping("/player/stats")
    public PlayerStats getPlayerStats(@RequestParam String appId, @RequestParam String profileId) {
        return steamAPIService.getPlayerStats(appId, profileId);
    }
}
