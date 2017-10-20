---
layout: page
title: "Q128767: DriveSpace Does Not Compress Existing Drive"
permalink: /kb/128/Q128767/
---

## Q128767: DriveSpace Does Not Compress Existing Drive

{% raw %}

	Article: Q128767
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using DriveSpace to compress an existing drive, the mini- Windows
	portion of DriveSpace does not load.
	
	CAUSE
	=====
	
	This problem can occur if you are using a Diamond SpeedStar Pro VLB video
	adapter, and the following line has been removed from the AUTOEXEC.BAT file:
	
	  C:\UTIL1\SPEED\PROMODE MONITOR
	
	This line is needed in order for the video adapter to support VGA mode in
	mini-Windows.
	
	RESOLUTION
	==========
	
	To correct the problem, follow these steps:
	
	1. Add PROMODE.EXE to the [FAILSAFE] section of the DRVSPACE.INF file.
	
	2. Copy the PROMODE.EXE file to the fail-safe directory on the host drive.
	
	3. Add a line in the AUTOEXEC.BAT file to load PROMODE.EXE and then restart the
	  computer.
	
	MORE INFORMATION
	================
	
	Some older Diamond video adapters need the PROMODE.EXE driver for VGA support.
	When you try to compress an existing drive, the computer restarts and cannot
	load mini-Windows and no compression takes place. There is no support for
	computers that load required drivers from the AUTOEXEC.BAT file.
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: compress in place
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
