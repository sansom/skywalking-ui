/*
 * Copyright 2017, OpenSkywalking Organization All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Project repository: https://github.com/OpenSkywalking/skywalking-ui
 */

/**
 * @author pengys5
 * @author ascrutae
 */
requirejs(['/main.js'], function () {
    require(["jquery", "vue", "head", "dagDraw", "timeAxis", "bootstrap"], function ($, Vue, head, dagDraw, timeAxis) {
        timeAxis.autoUpdate().load().registryTimeChangedHandler(function (timeBucketType, startTime, endTime) {
            console.log("time changed, start time: " + startTime + ", end time: " + endTime);
            dagDraw.startNetwork("dagViewDiv").load(timeBucketType, startTime, endTime);
        }).render("timeAxisDiv");
    });
})
