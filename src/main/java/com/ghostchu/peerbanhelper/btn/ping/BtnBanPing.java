package com.ghostchu.peerbanhelper.btn.ping;

import com.google.gson.annotations.SerializedName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BtnBanPing {
    @SerializedName("populate_time")
    private long populateTime;
    @SerializedName("submit_id")
    private String submitId;
    @SerializedName("bans")
    private List<BtnBan> bans;

}
