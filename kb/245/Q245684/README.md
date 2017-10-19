---
layout: page
title: "Q245684: PRB: SWP_NOREDRAW Not Defined for PPC 2.11 or HPC Pro 2.11"
permalink: /kb/245/Q245684/
---

## Q245684: PRB: SWP_NOREDRAW Not Defined for PPC 2.11 or HPC Pro 2.11

	Article: Q245684
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVC600bug kbOSWinCEsearch kbWndw kbGrpDSMFCATL
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to use SetWindowPos() with the flag SWP_NOREDRAW on Palm PC (PPC)
	2.11 or Handheld PC (HPC) Pro 2.11 the compiler indicates that the SWP_NOREDRAW
	flag is undefined. The same code compiles on PPC 2.01 and HPC 2.00.
	
	CAUSE
	=====
	
	In the Winuser.h file, the SetWindowPos() function has a #define SWP_NOREDRAW
	flag that exists on PPC 2.01 and HPC 2.00 but is not in PPC 2.11 or HPC Pro
	2.11. This flag is removed from Winuser.h since it is not supported on Windows
	CE computers.
	
	RESOLUTION
	==========
	
	To avoid the compiler error caused by the undefined SWP_NOREDRAW flag, add the
	following lines of code to your StdAfx.h file:
	
	  #ifndef SWP_NOREDRAW
	  #define SWP_NOREDRAW 0x0008
	  #endif
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use AppWizard to create a Windows CE Application.
	
	2. Add the following line:
	
	  int Flags = SWP_NOREDRAW;
	
	3. Compile the program for H/PC Pro Ver. 2.11
	
	Additional query words: H/PC Pro 2.11 Palm-size PC
	
	======================================================================
	Keywords          : kbVC600bug kbOSWinCEsearch kbWndw kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : WINDOWS:6.0
	Hardware          : WinCE
	Issue type        : kbprb
	
	=============================================================================
	
