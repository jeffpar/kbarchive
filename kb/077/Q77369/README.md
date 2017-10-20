---
layout: page
title: "Q77369: Automatically Loading MIRROR High"
permalink: /kb/077/Q77369/
---

## Q77369: Automatically Loading MIRROR High

{% raw %}

	Article: Q77369
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS 5.0 MIRROR deletion tracking utility may be loaded high
	automatically without specifying a LOADHIGH or LH statement.
	
	MORE INFORMATION
	================
	
	To following are requirements to automatically load MIRROR high:
	
	- An 80386 machine (required to load any device drivers and/or TSRs high under
	  MS-DOS 5.0 memory management).
	
	- Include the following lines in the CONFIG.SYS file:
	
	  device=c:\dos\himem.sys
	  device=c:\dos\emm386.exe NOEMS [or] RAM
	  dos=umb
	
	- A majority of the upper memory area (UMA) must not already be occupied by
	  other device drivers or TSRs.
	
	- There should be an upper memory block (UMB) of at least 20K available even
	  though MIRROR only occupies 6.4K of UMA after loading. The additional memory
	  is required for initialization code and to preserve room for a growing
	  deletion tracking table.
	
	To load MIRROR automatically, you should load MIRROR before any network drivers
	in the AUTOEXEC.BAT file.
	
	For more information on the MS-DOS MIRROR utility, query on the following words:
	
	  "MIRROR" (without the quotation marks) and "MS-DOS" (without the quotation
	  marks) and "5.0" (without the quotation marks) and "UTILITIES" (without the
	  quotation marks)
	
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
