---
layout: page
title: "Q105789: Memory Conflict Occurs Immediately After Upgrading to 6.2"
permalink: /kb/105/Q105789/
---

## Q105789: Memory Conflict Occurs Immediately After Upgrading to 6.2

{% raw %}

	Article: Q105789
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to MS-DOS 6.2x, your system may stop responding (hang) or
	encounter other problems related to memory management or memory conflicts.
	
	CAUSE
	=====
	
	This problem occurs when you have existing problems in your upper memory area
	(UMA) that are now uncovered in the boot process due to changes in EMM386.EXE
	versions 4.48 and 4.49.
	
	The problem occurs during the boot process because EMM386.EXE now fills the upper
	memory blocks (UMBs) it believes are free with zeros (often called "zeroing
	out") to better determine whether something is already there. In the past, when
	EMM386.EXE created a UMB, it would place a copy of whatever used to be in that
	memory region in the UMB. Therefore, if you have a memory conflict, you don't
	notice it until something is actually loaded into that UMB and overwrites the
	ROM code. EMM386.EXE 4.48 and 4.49 fills the apparently free UMBs with zeros
	rather than copying the ROM code into the UMB. Using this design, the upper
	memory conflict is likely to be noticed right away.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	1. If your system hangs, reboot your computer and press the F5 key when the
	  "Starting MS-DOS..." prompt is displayed.
	
	2. Use MS-DOS Editor to edit your CONFIG.SYS file.
	
	3. Delete or remark out the DEVICE command for EMM386.EXE.
	
	4. Save the CONFIG.SYS file and exit MS-DOS Editor.
	
	5. Reboot your computer to ensure you are using a stable memory configuration.
	
	6. Run MemMaker.
	
	Additional query words: 6.20 6.21 6.22 restart startup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
