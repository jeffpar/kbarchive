---
layout: page
title: "Q67792: FIX: PWB Extensions in MS-DOS Cannot Shell to MS-DOS"
permalink: /kb/067/Q67792/
---

## Q67792: FIX: PWB Extensions in MS-DOS Cannot Shell to MS-DOS

	Article: Q67792
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Extensions written for the Programmer's WorkBench (PWB) versions 1.0 and 1.1
	that require a call to the operating system do not work correctly under DOS. One
	example of this is the FILTER.C sample extension packaged with Microsoft C
	version 6.0.
	
	CAUSE
	=====
	
	When PWB.COM is executed under DOS, it spawns the main editor (PWBED.EXE).
	PWBED.EXE is cleared from memory when a DOS shell is run from within the editor.
	Once the shell has completed, PWBED.EXE is reloaded from disk and initialized.
	The initialization is what causes the problem because it also initializes any
	extensions to the editor at the same time. This means that any information that
	the extension was keeping track of is lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 1.0 and 1.1. This
	problem was corrected in PWV version 2.0.
	
	Additional query words: 1.00 1.10 buglist1.00 buglist1.10 fixlist2.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : MS-DOS:1.0,1.1
	Solution Type     : kbfix
	
	=============================================================================
	
