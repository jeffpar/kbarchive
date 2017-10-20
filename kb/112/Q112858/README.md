---
layout: page
title: "Q112858: RAM Drive Icon in Anti-Virus Is Incorrect with DoubleSpace"
permalink: /kb/112/Q112858/
---

## Q112858: RAM Drive Icon in Anti-Virus Is Incorrect with DoubleSpace

{% raw %}

	Article: Q112858
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a RAM drive with Microsoft MS-DOS version 6.0 or later, it is
	represented by a regular hard disk drive icon rather than the RAM drive icon in
	the Microsoft Anti-Virus for Windows drive list.
	
	CAUSE
	=====
	
	This problem occurs in the following situations:
	
	- The line DEVICE=C:\DOS\RAMDRIVE.SYS is listed before the line
	  DEVICE=C:\DOS\DBLSPACE.SYS /MOVE in the CONFIG.SYS file.
	
	- There is no DEVICE=C:\DOS\DBLSPACE.SYS /MOVE or DEVICE=C:\DOS\DRVSPACE.SYS
	  /MOVE line in the CONFIG.SYS file.
	
	RESOLUTION
	==========
	
	To correct this problem, move the line DEVICE=C:\DOS\RAMDRIVE.SYS below the line
	DEVICE=C:\DOS\DBLSPACE.SYS /MOVE in the CONFIG.SYS file.
	
	NOTE: The DEVICE=C:\DOS\DBLSPACE.SYS /MOVE line must be in the CONFIG.SYS file.
	If it is not, the host drive is set to the first drive designated after the RAM
	drive, even if the DBLSPACE.INI file is configured differently.
	
	Additional query words: 6.00 6.20 normal
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
