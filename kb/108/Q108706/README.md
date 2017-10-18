---
layout: page
title: "Q108706: Common Q&amp;A for Visual C++ 32-bit edition, ver 1.0"
permalink: kb/108/Q108706/
---

## Q108706: Common Q&amp;A for Visual C++ 32-bit edition, ver 1.0

	Article: Q108706
	Product(s): Microsoft C Compiler
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Common Q&A for Microsoft Visual C++, 32-Bit Edition
	---------------------------------------------------
	
	You can find the answers to more common questions by choosing "Technical Support"
	from the Help menu in the Visual Workbench. The README.WRI file, located in the
	\MSVCNT\HELP directory, also addresses many common issues.
	
	1. Q. When I build my application, I get the warning, "LNK4016: unresolved
	  external symbol `__doserrno'". What is causing this warning?
	
	  A. The most likely cause of this error is using /MT (multithreaded run time)
	  or /MD [run time in a DLL (dynamic-link library)] when building your
	  application and linking with the supplied versions of the Microsoft
	  Foundation Class (MFC) Libraries. To resolve this problem, you must rebuild
	  the MFC libraries to use the same version of the run-time library as your
	  application. Please see the README.WRI file located in \MSVCNT\HELP for more
	  details.
	
	2. Q. Can I use the Microsoft Foundation Class (MFC) Libraries in a
	  multithreaded program?
	
	  A. Yes. However, all use of the Microsoft Foundation Classes must be in the
	  same thread. Please see TechNote #37 for more detailed information.
	
	3. Q. I copied a sample project from the Visual C++ CD to my hard drive. Visual
	  C++ is treating the sample as a read-only project. What's wrong?
	
	  A. When files are copied from a CD to a hard drive, the files are given the
	  read-only attribute. You can change the attribute by using the ATTRIB command
	  in MS-DOS, or by choosing Properties from the File menu in the File Manager.
	  Note that if you change the attribute of the file, you should also change the
	  attribute of its directory.
	
	4. Q. Where is the MFC200.DLL file located?
	
	  A. MFC 2.0 does not support AFXDLLs (MFC in a DLL and extension DLLs) in this
	  version of the Visual C++ development system for Windows NT. For more
	  information, see the "Microsoft Foundation Class Library Update" at the
	  beginning of the Class Library Reference.
	
	5. Q. Can I use .VBX controls with App Studio and MFC 2.0?
	
	  A. .VBX controls are 16-bit DLLs and are not supported in the 32-bit Visual
	  C++ environment.
	
	6. Q. I rebuilt my program with the 32-bit version of Visual C++, but now I get
	  heap errors when I run my program. What is wrong?
	
	  A. If you were using the Win32 Software Development Kit (SDK) before, it's
	  very possible that you were writing past the memory block and not being
	  caught. The Win32 SDK run-time libraries often allocate more space than is
	  requested. The Visual C++ run time is more strict with heap allocations.
	
	7. Q. In Windows 3.1, I could send my diagnostic output (OutputDebugString
	  messages and MFC TRACE output) to the communications (com) port or my
	  monochrome monitor. How do I do that in the Visual C++ development system for
	  Windows NT?
	
	  A. Under Windows NT, debug output is available only to the debugger of the
	  process that issues the message. If you want to see the debug output of a
	  program, run it under Visual Workbench integrated debugger or use the DEB
	  (Debug Event Browser) sample in MSVCNT\SAMPLES\DEB.
	
	Additional query words: kbinf 1.00
	======================================================================
	Keywords          : kbGenInfo kbVC kbArtTypeINF 
	Technology        : kbVCsearch kbAudDeveloper kbvc100
	Version           : 1.00
	
	=============================================================================
	
