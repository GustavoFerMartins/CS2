package com.cs2.steamcsgo.controller;

import com.cs2.steamcsgo.model.ApiResponse;
import com.cs2.steamcsgo.model.CollectorSearchResult;
import com.cs2.steamcsgo.model.Segment;
import com.cs2.steamcsgo.model.StatsProfile;
import com.cs2.steamcsgo.service.CsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/csgo")
public class CsController {

    @Autowired
    private CsService csService;

    @GetMapping("/profile/{platform}/{platformUserIdentifier}")
    public ApiResponse<StatsProfile> getPlayerProfileStats(@PathVariable String platform, @PathVariable String platformUserIdentifier) {
        return csService.getPlayerProfileStats(platform, platformUserIdentifier);
    }

    @GetMapping("/profile/{platform}/{platformUserIdentifier}/segments/{segmentType}")
    public ApiResponse<Segment[]> getPlayerStatsSegment(@PathVariable String platform, @PathVariable String platformUserIdentifier, @PathVariable String segmentType) {
        return csService.getPlayerStatsSegment(platform, platformUserIdentifier, segmentType);
    }

    @GetMapping("/search")
    public ApiResponse<CollectorSearchResult[]> searchPlayer(@RequestParam String platform, @RequestParam String query) {
        return csService.searchPlayer(platform, query);
    }
}
