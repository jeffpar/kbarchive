---
layout: page
title: "Q254312: GPS Icon Drifts or Appears in Unexpected Locations"
permalink: /kb/254/Q254312/
---

## Q254312: GPS Icon Drifts or Appears in Unexpected Locations

	Article: Q254312
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbhw kbimu kbHardware
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets and Trips 2001 
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft MapPoint 2001 
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use a Global Positioning System (GPS) receiver with either of the
	programs listed at the beginning of this article, you may encounter the
	following symptoms:
	
	- The GPS icon may drift even though you remain stationary.
	
	- The GPS icon may appear in an unexpected location, such as over water.
	
	These symptoms can occur for a variety of reasons. The most common causes are
	discussed in the "More Information" section of this article.
	
	MORE INFORMATION
	================
	
	Signal Strength
	---------------
	
	GPS signal strength may be insufficient to produce an accurate result. The GPS
	receiver may also be searching for available satellites with a stronger signal.
	
	Incorrect Map Datum
	-------------------
	
	The map information in the Microsoft programs listed at the beginning of this
	article is generally based on the World Geodetic System 1984 (WGS-84) map
	datum.
	
	Because of the methods these programs use to display map information, there may
	be a discrepancy between the displayed position of a point on the map and the
	actual latitude and longitude of the point based on the WGS-84 map datum.
	
	Some Global Positioning System (GPS) instruments can be configured to use
	different map data for their basic map functions. To obtain the best results
	with Microsoft programs that support GPS input, configure your GPS receiver to
	use the WGS-84 map datum.
	
	Signal Updates
	--------------
	
	Because the products listed at the beginning of this article poll the GPS
	receiver for positioning data every 15 seconds, the GPS icon may appear to lag
	behind your actual position.
	
	Additional query words: st2001 mp2001 auto-map amap wrong incorrect location off course st2002 mp2002
	
	======================================================================
	Keywords          : kbdisplay kbhw kbimu kbHardware 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
