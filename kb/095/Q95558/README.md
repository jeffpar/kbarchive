---
layout: page
title: "Q95558: MemMaker Doesn't Remove All References to QEMM"
permalink: /kb/095/Q95558/
---

## Q95558: MemMaker Doesn't Remove All References to QEMM

	Article: Q95558
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
	
	You previously had QEMM installed on your system, and after you run MemMaker,
	you receive an error message stating that another expanded memory manager (EMM)
	is already running.
	
	CAUSE
	=====
	
	MemMaker removes all references to QEMM. However, if one of your QEMM statements
	in the CONFIG.SYS file does not have an equal sign (=), MemMaker ignores it; the
	driver is not loaded by MemMaker, nor is it removed from the CONFIG.SYS file.
	MemMaker also fails to remove DEVICE=QDPMI statements in your CONFIG.SYS file if
	you are using QEMM version 7.01.
	
	WORKAROUND
	==========
	
	To work around this problem, edit your CONFIG.SYS file with a text editor such
	as MS-DOS Editor, and put equal signs in your DEVICE commands and/or remove the
	DEVICE=QDPMI reference.
	
	Additional query words: 6.22 6.0 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
