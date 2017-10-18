---
layout: page
title: "Q231177: BUG: Permission Denied Error by Building From PWB"
permalink: kb/231/Q231177/
---

## Q231177: BUG: Permission Denied Error by Building From PWB

	Article: Q231177
	Product(s): Microsoft Macro Assembler
	Version(s): winnt:6.11,6.11a,6.11c,6.11d,6.12,6.13,6.14
	Operating System(s): 
	Keyword(s): kbide kbMASM613bug
	Last Modified: 29-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.11, 6.11a, 6.11c, 6.11d, 6.12, 6.13, 6.14 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first time an assembler project is built in the Programmer's Workbench
	(PWB), there are no problems. Subsequent attempts to build the project cause an
	error similar to the following:
	
	  file.$c\temp\pw02681.msg permission denied
	
	CAUSE
	=====
	
	PWB is a MS-DOS application that does not work properly when run on Windows 95
	and later.
	
	RESOLUTION
	==========
	
	To work around the problem, select DOS Shell from the PWB file menu and build
	your project by using the NMAKE utility as the following code illustrates:
	
	  Syntax: "nmake /fMyProject.mak"
	
	You may also be able to work around the problem with one of the following
	methods:
	
	1. Use the real-mode version of NMAKE, the Nmaker.exe file. First, locate
	  Nmake.exe in the \Bin directory under the root Macro Assembler (MASM)
	  installation directory. Then rename Nmake.exe to Nmakep.exe, and rename
	  Nmaker.exe to Nmake.exe. The protect-mode version of NMAKE can still be
	  accessed using Nmakep.exe.
	
	2. Use a 32-bit version of the Nmake.exe file, such as the versions included
	  with Visual C++ 32-bit Editions.
	
	  For Visual C++, NMAKE can typically be found in the \Bin directory under the
	  root Visual C++ installation directory. Copy Nmake.exe from the Visual C++
	  \Bin directory to the MASM \Bin directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: MASM PWB Programmer's Workbench
	
	======================================================================
	Keywords          : kbide kbMASM613bug 
	Technology        : kbMASMsearch kbAudDeveloper kbMASM32bit611c kbMASM611
	Version           : winnt:6.11,6.11a,6.11c,6.11d,6.12,6.13,6.14
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
