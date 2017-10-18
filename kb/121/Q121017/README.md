---
layout: page
title: "Q121017: FIX: Can't Create Directory &gt;1 Deep for Intermediate Files"
permalink: kb/121/Q121017/
---

## Q121017: FIX: Can't Create Directory &gt;1 Deep for Intermediate Files

	Article: Q121017
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++ fails to create the specified directories when the "Intermediate
	Files" field contains a nonexistent path that is multiple levels deep. This
	field is located in the dialog box under the "Project"-"Project Settings" with
	the "General" tab selected. Under these conditions, Visual C++ issues the
	following error when attempting to build the project from within the Visual
	Workbench:
	
	  <Full directory specification>
	
	  This directory could not be created.
	
	The above error applies to Visual C++, version 2.x only. The NMAKE error reported
	below applies to Visual C++, version 2.x and version 4.0. It does not apply to
	version 4.1.
	
	If the project is compiled externally, NMAKE.EXE generates this error:
	
	  if not exist .\Debug/junk3/nul mkdir .\Debug/junk3
	  The syntax of the command is incorrect.
	  NMAKE : fatal error U1077: 'C:\WINDOWS\SYSTEM32\CMD.EXE'
	  : return code '0x1'
	  Stop.
	
	CAUSE
	=====
	
	Visual C++ fails to create a nonexistent path that is multiple levels deep.
	
	RESOLUTION
	==========
	
	Create the directory by using File Manager or from a command session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit edition, version 4.1.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, type the following in the field described above,
	where SUBDIR1 does not exist.
	
	  " SUBDIR1\SUBDIR2, " (without the quotation marks)
	
	Additional query words: 2.00 2.10 2.20 4.00 S_VWB s_NMAKE
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : :2.0,2.1,2.2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
