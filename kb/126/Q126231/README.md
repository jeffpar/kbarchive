---
layout: page
title: "Q126231: Printer Configuration Options Unavailable"
permalink: kb/126/Q126231/
---

## Q126231: Printer Configuration Options Unavailable

	Article: Q126231
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are changing printers in Control Panel or an application, some of the
	printer configuration options (such as Network or Settings) are unavailable.
	
	CAUSE
	=====
	
	Some of the parallel port entries in the [ports] section of the WIN.INI file
	contain lowercase letters.
	
	RESOLUTION
	==========
	
	To make the printer configuration options available, edit the parallel port
	entries in the [ports] section of the WIN.INI file. Change the parallel port
	entries so that they are in all uppercase letters.
	
	MORE INFORMATION
	================
	
	The affected ports will appear in lowercase letters in the Control Panel
	Printers utility. Network connections for the affected ports are lost and you
	cannot create new network connections for the ports.
	
	Additional query words: 3.10 3.11 timeouts greyed out grayed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
