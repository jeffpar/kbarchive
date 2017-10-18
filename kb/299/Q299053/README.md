---
layout: page
title: "Q299053: MapPoint 2002: Program May Hang While Creating Territories"
permalink: kb/299/Q299053/
---

## Q299053: MapPoint 2002: Program May Hang While Creating Territories

	Article: Q299053
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft MapPoint may stop responding (hang) while it attempts to create new
	territories.
	
	CAUSE
	=====
	
	This behavior can occur if you create a territory by using ZIP Codes that have
	no geographical points, such as one associated with a government building.
	
	RESOLUTION
	==========
	
	Do not use ZIP Codes that have no geographical points that can be mapped.
	
	MORE INFORMATION
	================
	
	Point ZIP Codes, such as 01066 in Massachusetts, are ZIP Codes that are assigned
	to designated areas, such as government buildings. If a point ZIP Code is within
	a regular ZIP Code, it may be mapped. But, if the ZIP Code does not have a
	geographical location within the program, MapPoint cannot map it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2002
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
