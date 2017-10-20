---
layout: page
title: "Q94554: HIMEM.SYS and EMM386.EXE Are Not Verbose by Default"
permalink: /kb/094/Q94554/
---

## Q94554: HIMEM.SYS and EMM386.EXE Are Not Verbose by Default

{% raw %}

	Article: Q94554
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	In Microsoft MS-DOS version 6.0 and 6.2, HIMEM.SYS and EMM386.EXE do not display
	any initialization information by default. When you start your computer, no
	information is displayed by either device driver as CONFIG.SYS is processed. To
	show data such as A20 handling switches and upper memory area (UMA) information,
	you must add the /VERBOSE (/V) switch to each device driver statement in the
	CONFIG.SYS file. For example:
	
	  DEVICE=C:\DOS\HIMEM.SYS /V
	  DEVICE=C:\DOS\EMM386.EXE NOEMS X=D000-D7FF /V
	
	MORE INFORMATION
	================
	
	You can also display startup information by pressing the ALT key while your
	computer is starting. This is useful for a one-time status check of these
	drivers.
	
	If either device driver finds an error during initialization, it automatically
	switches to verbose mode, displaying both the error and its normal startup
	information.
	
	HIMEM.SYS requires a forward slash before the word VERBOSE (or V); EMM386.EXE
	does not. Omitting the forward slash on HIMEM.SYS causes the following message
	(although the verbose information is displayed):
	
	  Warning: Invalid parameter ignored: V
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
