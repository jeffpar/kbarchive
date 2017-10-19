---
layout: page
title: "Q187882: Memory Allocation Error During MS-DOS Share Access"
permalink: /kb/187/Q187882/
---

## Q187882: Memory Allocation Error During MS-DOS Share Access

	Article: Q187882
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.11,6.22
	Operating System(s): 
	Keyword(s): kbenv kberrmsg msdos
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Microsoft Workgroup Add-on for MS-DOS client with
	MS-DOS 6.22, you may receive the following error message if you run an MS-DOS
	command while a local share on your computer is being access over the network:
	
	  Program too big to fit in memory. Memory Allocation Error. Cannot load
	  COMMAND.COM, System Halted.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a a 3Com EtherLink III (3C509B) network
	adapter with the driver included with Workgroup Add-On for MS-DOS. Other network
	adapter and driver combinations do not exhibit this behavior.
	
	
	RESOLUTION
	==========
	
	To work around this issue, try using a different network adapter and driver.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg msdos 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:3.11,6.22
	Issue type        : kbprb
	
	=============================================================================
	
