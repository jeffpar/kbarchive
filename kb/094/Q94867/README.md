---
layout: page
title: "Q94867: Err Msg after Running MemMaker: Double-Buffering Driver..."
permalink: /kb/094/Q94867/
---

## Q94867: Err Msg after Running MemMaker: Double-Buffering Driver...

{% raw %}

	Article: Q94867
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a device= statement for SMARTDRV.EXE in your CONFIG.SYS file, but
	you are not using the /DOUBLE_BUFFER switch, MemMaker may change the device=
	statement to devicehigh=. If so, you receive the following error message:
	
	  Double-buffering driver cannot be loaded into a UMB. Do not use the
	  devicehigh command or other load-high utilities to load Smartdrv.exe
	
	CAUSE
	=====
	
	MemMaker recognizes and ignores the device= statement for SMARTDRV.EXE only if
	you are using the /DOUBLE_BUFFER switch.
	
	A device= statement in the CONFIG.SYS file does not load the SMARTDrive cache; it
	loads only the double-buffering device driver embedded in the SMARTDRV.EXE file.
	This device driver cannot be loaded into upper memory.
	
	WORKAROUND
	==========
	
	To correct this problem, in the CONFIG.SYS file, change the devicehigh=
	statement for SMARTDRV.EXE to device= and add the /DOUBLE_BUFFER switch, then
	run MemMaker again.
	
	MORE INFORMATION
	================
	
	For more information on SMARTDrive and double buffering, query on the following
	words in the Microsoft Knowledge Base:
	
	  smartdrive and double and buffer and bus and mastering
	
	Additional query words: 6.22 6.00 line smart drive memaker 6.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
