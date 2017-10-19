---
layout: page
title: "Q72789: Building .COM File with Main Language = None Causes L1127"
permalink: /kb/072/Q72789/
---

## Q72789: Building .COM File with Main Language = None Causes L1127

	Article: Q72789
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.1; OS/2:1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.1 
	- Microsoft Programmer's Workbench for OS/2, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a tiny model program (.COM file) with the Microsoft Programmer's
	WorkBench (PWB) version 1.1, it is important to have "Main Language" set to "C",
	instead of using "None", which is the default. If Main Language is set to None,
	the following LINK error is generated:
	
	  LINK: fatal error L1127: far segment references not allowed with /TINY
	
	The error occurs because CRTCOM.LIB, which contains the C startup code for .COM
	programs, does not get linked in when Main Language is set to None. This results
	in segment references to both code and data that are in two different segments.
	Since a .COM program must have both the code and data in a single segment, the
	L1127 error is generated.
	
	You can check the Main Language setting by selecting the Options menu and
	choosing Build Options. In the Build Options dialog box you can see your Main
	Language selection and you can also change it there, if necessary. If you
	receive the L1127 error when trying to build a .COM file inside PWB, make sure
	your Main Language is set to an appropriate language and then rebuild your
	project.
	
	Additional query words: kbinf 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB110DOS kbPWB110OS2
	Version           : MS-DOS:1.1; OS/2:1.1
	
	=============================================================================
	
