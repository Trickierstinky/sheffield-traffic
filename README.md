# sheffield-traffic

Orignally forked from https://github.com/alykat/snowzilla-traffic

<img src="http://sheffield-traffic.point.ly/sheffield/all_animation.gif" alt="Traffic animation" width="580px" />

A set of scripts to capture the Sheffield Traffic at periods of the day.

----------

## Crontabs

This is the current Cron tasks I have set up

```
# m h  dom mon dow   command
*/15 * * * * /usr/bin/nodejs /usr/share/traffic/runloopsheffield.js > /usr/share/traffic_loop_sheff.log
*/5 * * * * /usr/bin/nodejs /usr/share/traffic/runloopsheffieldcentre.js > /usr/share/traffic_loop_sheff_centre.log
0 * * * * /usr/bin/nodejs /usr/share/traffic/creategif.js day sheffield-centre animation.gif > /usr/share/traffic_animation_sheff_centre.log
30 * * * * /usr/bin/nodejs /usr/share/traffic/creategif.js day sheffield animation.gif > /usr/share/traffic_animation_sheff.log

```
