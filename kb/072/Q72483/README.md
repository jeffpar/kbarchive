---
layout: page
title: "Q72483: QuickHelp Categories Menu May Be Shorter with MASM 6.0"
permalink: /kb/072/Q72483/
---

## Q72483: QuickHelp Categories Menu May Be Shorter with MASM 6.0

	Article: Q72483
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing the Microsoft Macro Assembler (MASM) version 6.0, the Setup
	program will copy the .HLP help files to the directory you specify. If you
	install the files in the same directory in which you installed Microsoft C
	version 6.0a, you may notice that the following entries in the Categories menu
	in QuickHelp are missing:
	
	  NMAKE       NMK      LINK     ILINK       LIB
	  BIND        EXEHDR   CVPACK   HELPMAKE    QuickHelp
	
	In the place of these entries is a single entry called "Utilities". This is
	correct behavior because the new version of PWB.HLP defines all the utility
	categories under one title.
	
	Additional query words: kbinf 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
