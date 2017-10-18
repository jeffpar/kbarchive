---
layout: page
title: "Q84577: Error in Media Player with Speaker Driver"
permalink: kb/084/Q84577/
---

## Q84577: Error in Media Player with Speaker Driver

	Article: Q84577
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you use the Media Player with the PC
	Speaker driver installed:
	
	  No wave device that can play files in the current format is installed. Use
	  the Drivers option to install the wave device.
	
	CAUSE
	=====
	
	This error occurs because of a limitation with the PC Speaker. The only
	workaround is to use a supported sound board.
	
	MORE INFORMATION
	================
	
	Media Player will not work with the PC Speaker driver installed. The PC Speaker
	driver will only work with applications that use the high level SndPlaySound DLL
	routine (used in Sounds under Control Panel), or most low level wave routines
	(used in Sound Recorder). The PC Speaker driver will not work with MCI command
	strings, which the Media Player uses.
	
	Additional query words: 3.10 3.11 speaker.exe err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
