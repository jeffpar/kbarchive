---
layout: page
title: "Q89013: IBM 3363 Optical Disk Drive Not Recognized by Windows"
permalink: /kb/089/Q89013/
---

## Q89013: IBM 3363 Optical Disk Drive Not Recognized by Windows

	Article: Q89013
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.03,2.1,2.11,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	IBM makes an attachment for the PS/2 Model 80 called the 3363 Optical
	Disk Drive. This device is designed to intercept all INT 21 function
	calls and reroute them to its software program, IBM3363.EXE, for
	processing. Because this device uses INT 21, Microsoft Windows cannot
	recognize it. Windows works with nonremovable drives that use INT 13H
	only.
	
	NOTE: Windows version 3.1 has not been tested with this device.
	
	
	Additional query words: 2.03 2.10 2.11 3.00 3.00a 3.10 3.11 cd cd-rom worm ps-2 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.03,2.1,2.11,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
