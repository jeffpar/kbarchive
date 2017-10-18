---
layout: page
title: "Q199707: PRB: Some VB 5.0 Programs Do Not Run on Multiprocessor PCs"
permalink: kb/199/Q199707/
---

## Q199707: PRB: Some VB 5.0 Programs Do Not Run on Multiprocessor PCs

	Article: Q199707
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbDLL kbKernBase kbVBp500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Visual Basic 5.0 application attempts to load a 32-bit generic thunking
	DLL, it might not run properly on a multiprocessor computer.
	
	The term "32-bit generic thunking DLL" describes any 32-bit DLL that links with
	WOW32.DLL to provide 16-bit code with access to 32-bit code. This type of DLL is
	loaded by a 16-bit program through the LoadLibraryEx32W() API.
	
	CAUSE
	=====
	
	For a 32-bit program to map a 32-bit generic thunking DLL into its address
	space, you must also map the Windows NT Virtual DOS Machine (NTVDM.EXE) into the
	address space. The Visual Basic 5.0 Runtime Library, MSVBVM50.DLL, collides with
	NTVDM.EXE. Both MSVBVM50.DLL and NTVDM.EXE are based at 0x0F000000.
	
	On a uniprocessor computer, the operating system successfully relocates NTVDM.EXE
	and the program runs correctly. However, on a multiprocessor computer, NTVDM.EXE
	cannot be relocated. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q199671 Relocation of NTVDM.EXE fails on multiprocessor machines
	
	RESOLUTION
	==========
	
	A 32-bit generic thunking DLL should be loaded by a 16-bit program only. The
	loading of a 32-bit thunking DLL into the address space of a 32-bit process is
	unsupported.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When a Visual Basic 5.0 application makes a call to a function in a 32-bit
	generic thunking DLL on a multiprocessor computer, the call fails. A query of
	Err.LastDllError returns the error code 998 "Invalid access to memory location"
	(ERROR_NOACCESS).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDLL kbKernBase kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
