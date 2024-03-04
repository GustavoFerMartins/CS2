package com.cs2.steamcsgo.model;

import java.util.List;

public class StatsProfile {
    private List<Segment> segments;
    // Adicione outros campos conforme necessário

    public List<Segment> getSegments() {
        return segments;
    }

    public void setSegments(List<Segment> segments) {
        this.segments = segments;
    }
}