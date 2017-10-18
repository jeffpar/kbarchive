---
layout: page
title: "Q254447: MapPoint: Imported Access Data Is Displayed as Numeric Values"
permalink: kb/254/Q254447/
---

## Q254447: MapPoint: Imported Access Data Is Displayed as Numeric Values

	Article: Q254447
	Product(s): Microsoft Automap
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kbdisplay kbinterop kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you import Yes/No, True/False, or On/Off data types from Microsoft Access
	into Microsoft MapPoint, the data is displayed as numeric values.
	
	MORE INFORMATION
	================
	
	Access internally stores Yes/No, True/False, and On/Off data types as the
	numeric values listed in the following table.
	
	+---------------------------+
	| Data type | Numeric value | 
	+---------------------------+
	| Yes       | -1            | 
	+---------------------------+
	| No        | 0             | 
	+---------------------------+
	| True      | -1            | 
	+---------------------------+
	| False     | 0             | 
	+---------------------------+
	| On        | -1            | 
	+---------------------------+
	| Off       | 0             | 
	+---------------------------+
	
	MapPoint displays the internally stored numeric values rather than the formatted
	text equivalent that is used in Access tables.
	
	Additional query words: mp2000 mp2001 map point database numbers zero minus one
	
	======================================================================
	Keywords          : kbdisplay kbinterop kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001
	Version           : WINDOWS:; :
	Issue type        : kbinfo
	
	=============================================================================
	
