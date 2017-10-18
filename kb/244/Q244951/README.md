---
layout: page
title: "Q244951: Streets and Trips: Converting Latitude and Longitude Coordinates"
permalink: kb/244/Q244951/
---

## Q244951: Streets and Trips: Converting Latitude and Longitude Coordinates

	Article: Q244951
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	- Microsoft MapPoint 2000 
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft Streets and Trips 2001 
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To find a location on a map by using the latitude and longitude of that
	location, you must enter the coordinates in decimal degrees.
	
	If the coordinates you want to enter are in degrees and minutes, you need to
	convert the number of minutes to a decimal value.
	
	MORE INFORMATION
	================
	
	To convert the number of minutes to a decimal value, use the following formula:
	
	  Decimal value = Minutes/60
	
	As an example, a latitude of 122 degrees 45 minutes North is equal to 122.75
	degrees North.
	
	REFERENCES
	==========
	
	A tool that you can use to convert coordinates from degrees, minutes, and
	seconds to decimal degrees is available at the following MP2K Magazine Web
	site:
	
	  http://www.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html
	
	To convert Seconds to decimals, divide by 3600.
	
	  Decimal value = Seconds/3600
	
	As an example, a latitude of 122 degrees 45 minutes 45 seconds North is equal to
	122.7625 degrees North.
	
	So the complete formula looks similar the following:
	
	  Decimal value = Degrees + (Minutes/60) + (Seconds/3600)
	
	Additional query words: mp2000 mp2001 est2000 st2001 conversion converting latlong Lat Long Latitude Longitude
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001 kbExpediaStreets2000 kbExpediaStreets2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
