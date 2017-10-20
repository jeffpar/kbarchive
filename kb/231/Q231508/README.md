---
layout: page
title: "Q231508: MapPoint 2000: Unable to Import Latitude and Longitude Data"
permalink: /kb/231/Q231508/
---

## Q231508: MapPoint 2000: Unable to Import Latitude and Longitude Data

{% raw %}

	Article: Q231508
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool kbimu
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import latitude and longitude data from a tab delimited text file into
	Microsoft MapPoint 2000, the imported data file may be empty.
	
	CAUSE
	=====
	
	This behavior can occur if you enter the latitude and longitude data in degrees,
	minutes, and seconds. MapPoint 2000 only recognizes latitude and longitude data
	entered in decimal degrees.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, enter latitude and longitude data in
	decimal degrees before you import the data into MapPoint 2000, as shown in the
	following table.
	
	+-------------------------------------------------+
	| Decimal degrees | Degrees, minutes, and seconds | 
	+-------------------------------------------------+
	| 47.6000         | 47<B0> 36' 00"                   | 
	+-------------------------------------------------+
	NOTE: Leading zeros on a latitude or longitude decimal number is not recognized
	as a valid format. If you continue to have problems importing, double check your
	numbers and remove any leading zeros.
	
	Additional query words: mp2000 co-ordinates wrong format
	
	======================================================================
	Keywords          : kbtool kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
