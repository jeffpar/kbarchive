---
layout: page
title: "Q104542: MemMaker Doesn't Load ATDOSHC2.SYS or ATDOSXL.SYS High"
permalink: /kb/104/Q104542/
---

## Q104542: MemMaker Doesn't Load ATDOSHC2.SYS or ATDOSXL.SYS High

{% raw %}

	Article: Q104542
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Hardcard (and the device driver ATDOSHC2.SYS or ATDOSXL.SYS),
	MS-DOS 6.2 and later MemMaker may not optimize your memory as well as MS- DOS
	6.0 MemMaker does.
	
	CAUSE
	=====
	
	The MS-DOS 6.2 and later MEMMAKER.INF file supports the caret (^) character,
	which indicates MemMaker should move the program following the caret to the top
	of the CONFIG.SYS file. This program is then loaded into memory before HIMEM.SYS
	and EMM386.EXE (and therefore not loaded into upper memory).
	
	The MS-DOS 6.2 and later MEMMAKER.INF file includes ^ATDOSHC2 and ^ATDOSXL, which
	prevent the ATDOSHC2.SYS and ATDOSXL.SYS drivers from being loaded in upper
	memory.
	
	RESOLUTION
	==========
	
	If you don't boot your system from the Hardcard, you can safely load
	ATDOSHC2.SYS or ATDOSXL.SYS into upper memory. To do this:
	
	1. Use a text editor (such as MS-DOS Editor) to edit your MEMMAKER.INF file and
	  remove the caret symbols from the ^ATDOSHC2 and ^ATDOSXL lines.
	
	2. Save the MEMMAKER.INF file and exit the text editor.
	
	3. Run MemMaker.
	
	Additional query words: 6.22 6.20 hard card
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
