---
layout: page
title: "Q83129: WordPerfect Office SHELL.EXE Cannot Be Loaded High"
permalink: /kb/083/Q83129/
---

## Q83129: WordPerfect Office SHELL.EXE Cannot Be Loaded High

	Article: Q83129
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WordPerfect has confirmed that all versions of the WordPerfect Office Shell
	program, SHELL.EXE, should NOT be loaded in the upper memory area (UMA).
	
	MORE INFORMATION
	================
	
	The WordPerfect Office application includes a shell program (SHELL.EXE) that
	provides the following services:
	
	- Manages all available expanded memory (for WordPerfect Office) and creates
	  virtual memory via hard disk swapping when needed.
	
	- Allows task swapping among different programs.
	
	- Creates macros to run under the shell.
	
	- Sets up a menu system.
	
	Machine lock-ups and/or incorrect memory allocation may occur if SHELL.EXE is
	loaded high.
	
	Other applications included with WordPerfect Office are File Manager (FM.EXE),
	Calendar (CL.EXE), Notebook (NB.EXE) and Editor (ED.EXE). These applications may
	load in upper memory; however, this is not supported by WordPerfect. These
	applications, as well as SHELL.EXE, were written to be loaded in conventional
	memory.
	
	
	The product included here (WordPerfect Office) is manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 5.x 6.00 6.20 wp hang lockup 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
