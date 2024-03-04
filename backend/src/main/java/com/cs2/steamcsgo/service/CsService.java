package com.cs2.steamcsgo.service;

import com.cs2.steamcsgo.model.ApiResponse;
import com.cs2.steamcsgo.model.CollectorSearchResult;
import com.cs2.steamcsgo.model.Segment;
import com.cs2.steamcsgo.model.StatsProfile;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CsService {

    private static final String API_BASE_URL = "https://public-api.tracker.gg/v2/csgo/standard";

    private final RestTemplate restTemplate;

    public CsService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ApiResponse<StatsProfile> getPlayerProfileStats(String platform, String platformUserIdentifier) {
        String url = API_BASE_URL + "/profile/" + platform + "/" + platformUserIdentifier;
        return restTemplate.getForObject(url, ApiResponse.class);
    }

    public ApiResponse<Segment[]> getPlayerStatsSegment(String platform, String platformUserIdentifier, String segmentType) {
        String url = API_BASE_URL + "/profile/" + platform + "/" + platformUserIdentifier + "/segments/" + segmentType;
        return restTemplate.getForObject(url, ApiResponse.class);
    }

    public ApiResponse<CollectorSearchResult[]> searchPlayer(String platform, String query) {
        String url = API_BASE_URL + "/search?platform=" + platform + "&query=" + query;
        return restTemplate.getForObject(url, ApiResponse.class);
    }
}
