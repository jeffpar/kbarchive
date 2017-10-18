---
layout: page
title: "Q133249: FIX: Fatal Error U1052: File 'win32.mak' Not Found"
permalink: kb/133/Q133249/
---

## Q133249: FIX: Fatal Error U1052: File 'win32.mak' Not Found

	Article: Q133249
	Product(s): Microsoft C Compiler
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbsetup kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When invoking NMAKE on some of the make files that are distributed with the
	Win32 samples, you may encounter an error message similar to this one:
	
	  c:\msvc20\include\ntwin32.mak(3) : fatal error U1052: file 'win32.mak' not
	  found.
	
	The problem is a result of the following command:
	
	     NMAKE MAKEFILE<Enter>
	
	CAUSE
	=====
	
	This is caused by the Visual C++ setup program failing to copy WIN32.MAK to your
	INCLUDE directory.
	
	RESOLUTION
	==========
	
	Copy WIN32.MAK from the \MSVC20\INCLUDE directory on the Visual C++ installation
	CD to your INCLUDE directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The Win32 samples that encounter this error are:
	
	  IOSTUTOR,
	  NAMPIPE\NPCLIENT and,
	  NAMPIPE\NPSERVER
	
	Additional query words: Windows 95
	
	======================================================================
	Keywords          : kbsetup kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC220
	Version           : :2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
