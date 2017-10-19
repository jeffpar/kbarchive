---
layout: page
title: "Q201220: Err Msg: The Application Could Not Find a GPS on Your System"
permalink: /kb/201/Q201220/
---

## Q201220: Err Msg: The Application Could Not Find a GPS on Your System

	Article: Q201220
	Product(s): Microsoft Automap
	Version(s): WINDOWS:1.0,98
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbtool kbimu
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Trip Planner 98, version 98 
	- Microsoft Expedia Streets 98, version 98 
	- Microsoft Expedia Streets 98 Deluxe, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click GPS on the Tools menu in one of the programs listed at the
	beginning of this article, you may receive the following error message:
	
	  The Application could not find a GPS on your system. Check to ensure that
	  your reciever is attached properly.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You run the program on a Microsoft Windows 95-based computer.
	
	- Infrared Support for Windows 95 is installed on the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Infrared Communications Driver. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click "Infrared Support for Windows 95 version
	  2.0", and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove Infrared Support for Windows
	  95.
	
	NOTE: When you remove Infrared Support for Windows 95, you may disable
	communication with certain hardware devices.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 1.00 multi multi-media media mm irda auto-map amap
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbtool kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets98 kbExpediaStreets98del kbExpediaTripPlanner98
	Version           : WINDOWS:1.0,98
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
