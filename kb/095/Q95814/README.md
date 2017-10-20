---
layout: page
title: "Q95814: EMM386.EXE May Cause PS/2 to Hang with HIGHSCAN"
permalink: /kb/095/Q95814/
---

## Q95814: EMM386.EXE May Cause PS/2 to Hang with HIGHSCAN

{% raw %}

	Article: Q95814
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use version 1.31 of the IBM Reference Diskette for the PS/2 model 90 or
	95, you may not be able to use the HIGHSCAN switch with EMM386.EXE. Using
	HIGHSCAN may cause your system to stop responding (hang).
	
	This problem does not occur with version 1.10 of the Reference Diskette.
	
	CAUSE
	=====
	
	The newer Reference Diskette uses memory addresses in the F000-F7FF range
	(although it may use additional memory elsewhere in the upper memory area).
	
	WORKAROUND
	==========
	
	To work around this problem, run MemMaker Custom Setup and choose No when
	prompted to "Scan the Upper Memory Area Aggressively?"
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
