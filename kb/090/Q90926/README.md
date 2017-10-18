---
layout: page
title: "Q90926: Device Contention Errors with Parallel Port Network Cards"
permalink: kb/090/Q90926/
---

## Q90926: Device Contention Errors with Parallel Port Network Cards

	Article: Q90926
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Windows for Workgroups with a network interface card (NIC) that plugs
	into the parallel port, device contention errors may occur. (Only two supported
	NICs plug into the parallel port: the Xircom Pocket Ethernet I and II.)
	
	CAUSE
	=====
	
	These errors occur because Windows for Workgroups sees the LPT port as being
	used by two different resources: the network and the printer.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the methods below.
	
	Workaround 1
	------------
	
	If you do not need the LPT port for local printing, you can disable the check for
	device contention by removing the following line in the SYSTEM.INI file:
	
	       DEVICE=VPD.386
	
	Disabling VPD.386 doesn't affect the ability of Windows for Workgroups to print
	over the network. However, if you are printing locally, no warning appears and
	printouts may have garbled characters, or you may experience network
	communication problems.
	
	Workaround 2
	------------
	
	In Control Panel, choose the 386 Enhanced Mode icon. Set the Idle Time for the
	port in question to zero (0). This turns off VPD trapping for that port.
	
	MORE INFORMATION
	================
	
	For more information about device contention in Windows, query on the following
	words in the Microsoft Knowledge Base:
	
	  device contention windows
	
	Additional query words: 3.10 3.11 notebook laptop adapter
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
