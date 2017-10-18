---
layout: page
title: "Q92516: WFWG and Windows: System Hangs When Copying Files"
permalink: kb/092/Q92516/
---

## Q92516: WFWG and Windows: System Hangs When Copying Files

	Article: Q92516
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your machine may stop responding (hang) or suddenly exit to the MS-DOS command
	prompt when you copy a large number of files over the network.
	
	Usually Windows for Workgroups provides an error message that says to increase
	NetHeapSize, but the machine may also exit to the MS-DOS command prompt or hang.
	
	RESOLUTION
	==========
	
	To correct this problem, increase the NetHeapSize in the [386Enh] section of
	your SYSTEM.INI file. The default value is 12; for troubleshooting, try 32, 64,
	or 128.
	
	Increasing NetHeapSize can reduce problems when your network is running under a
	heavy load and you are running the real mode redirector.
	
	NOTE: NetHeapSize is ignored by the virtual redirector.
	
	Additional query words: 3.1 3.10 freeze crash novell 3.11 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
