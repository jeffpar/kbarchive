---
layout: page
title: "Q70076: DOCERR: APT Location of Floating-Point Options in PWB"
permalink: kb/070/Q70076/
---

## Q70076: DOCERR: APT Location of Floating-Point Options in PWB

	Article: Q70076
	Product(s): Microsoft Programming Utilities
	Version(s): 6.0,6.0a
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS, versions 6.0, 6.0a 
	- Microsoft C for OS/2, versions 6.0, 6.0a 
	-------------------------------------------------------------------------------
	
	Page 86 of the "Microsoft C Advanced Programming Techniques" manual
	shipped with the Microsoft C Compiler version 6.00 incorrectly states
	that the C compiler floating-point options may be specified inside the
	Programmer's WorkBench (PWB) in the C Global Build Options dialog box.
	
	The actual location of the floating-point options in PWB are in the C
	Compiler Debug Options and the C Compiler Release Options dialog
	boxes, which can be selected by choosing either Set Debug Options or
	Set Release Options from the C Compiler Options dialog box.
	
	The C Compiler Options dialog box can be accessed by choosing C
	Compiler Options from the Options menu within PWB.
	
	Additional query words: 6.00 6.00a
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCCompSearch kbZNotKeyword3 kbCComp600DOS kbCComp600aDOS kbCComp600OS2 kbCComp600aOS2
	Version           : :6.0,6.0a
	
	=============================================================================
	
