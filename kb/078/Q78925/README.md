---
layout: page
title: "Q78925: EMM386.EXE Err Msg: WARNING: User Specified Ranges Overlap"
permalink: /kb/078/Q78925/
---

## Q78925: EMM386.EXE Err Msg: WARNING: User Specified Ranges Overlap

{% raw %}

	Article: Q78925
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the EMM386.EXE exclude switch X=MMMM-NNNN, you may receive the
	following error message:
	
	  WARNING: User Specified Ranges Overlap.
	  Press any key when ready...
	
	For example, this error message can be generated with the following CONFIG.SYS
	file command:
	
	  device=c:\dos\emm386.exe x=F000-FFFF
	
	CAUSE
	=====
	
	This error occurs when the ranges you are including and excluding overlap, or
	when you attempt to exclude memory in the ff00-ffff range.
	
	RESOLUTION
	==========
	
	To eliminate the error message, exclude a range below ff00 and ensure the ranges
	you are including and excluding do not overlap. The largest range you can
	exclude is A000-FEFF.
	
	MORE INFORMATION
	================
	
	The F000-FFFF range is not included in the EMM386.EXE search algorithm. If you
	are using EMM386.EXE version 4.45 or later, you can have EMM386.EXE search this
	range by adding the HIGHSCAN parameter. The F000- FFFF address range is
	typically occupied by the System ROM BIOS.
	
	Additional query words: 6.22 4.20 4.33 4.44 4.45 4.48 5.00 5.00a 6.00 6.20 wfw wfwg win31 x= i= errmsg err msg 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
