---
layout: page
title: "Q272757: MapPoint 2001 Err Msg: Remove Corrupt Devices from Registry"
permalink: /kb/272/Q272757/
---

## Q272757: MapPoint 2001 Err Msg: Remove Corrupt Devices from Registry

	Article: Q272757
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the GPS Add-on for one of the programs listed at the
	beginning of this article, you may receive the following error message:
	
	  Remove corrupt devices from registry. Was unable to register itself in the
	  system registry.
	
	  Add-on setup not completed successfully.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft Windows registry is damaged and Setup
	cannot register the files that are necessary to run the GPS Add-on program.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Restart your computer in MS-DOS mode.
	
	2. At the MS-DOS prompt, type "scanreg /fix" (without the quotation marks), and
	  then press ENTER.
	
	3. Restart the computer in normal mode, and then install the GPS add-on.
	
	Additional query words: mp2001 st2001 map point auto-map amap addon global positioning system
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbMapptSearch kbMapPoint2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
