---
layout: page
title: "Q231501: MapPoint 2000: Cannot Find Address Located on Numbered Street"
permalink: /kb/231/Q231501/
---

## Q231501: MapPoint 2000: Cannot Find Address Located on Numbered Street

	Article: Q231501
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to find an address located on a numbered street using Microsoft
	MapPoint 2000, you may receive the following error message:
	
	  No match was found. Check the spelling of the address and type it again.
	
	CAUSE
	=====
	
	This behavior can occur if you type the street name using a cardinal number, as
	in the following example:
	
	  1000 42 Street
	
	NOTE: This error message can also indicate that the address you typed does not
	exist in the program's database.
	
	RESOLUTION
	==========
	
	To resolve this issue, type the street name using an ordinal number, as in the
	following example:
	
	  1000 42nd Street
	
	MORE INFORMATION
	================
	
	Because numbered street names use ordinal numbers, you must add a suffix to the
	street name. An example of each suffix and a corresponding street name is listed
	in the following table.
	
	+--------------------------------------------------+
	| Street name | Suffix | Corresponding street name | 
	+--------------------------------------------------+
	| 21 Street   | st     | 21st Street               | 
	+--------------------------------------------------+
	| 42 Street   | nd     | 42nd Street               | 
	+--------------------------------------------------+
	| 63 Street   | rd     | 63rd Street               | 
	+--------------------------------------------------+
	| 96 Street   | th     | 96th Street               | 
	+--------------------------------------------------+
	
	Additional query words: mp2000 mp2k search look-up auto-map amap
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
