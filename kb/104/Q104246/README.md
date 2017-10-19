---
layout: page
title: "Q104246: Causes of L2023 : Entry WEP : Export Imported"
permalink: /kb/104/Q104246/
---

## Q104246: Causes of L2023 : Entry WEP : Export Imported

	Article: Q104246
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.3,5.31.009,5.5,5.6,7.0; WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.3, 5.31.009, 5.5, 5.6 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a dynamic-link library (DLL) with Visual C++, the following linker
	error can occur:
	
	  L2023 : entry WEP : export imported
	
	CAUSE
	=====
	
	This error is usually caused by linking with a third-party DLL's import library
	that publicly exports its WEP (Windows exit procedure) routine.
	
	RESOLUTION
	==========
	
	Although removing the lines
	
	  EXPORTS
	  WEP @1 RESIDENTNAME
	
	from your .DEF file may avoid the error, this method is not recommended because
	there can be problems with Windows calling the WEP (either your own or the WEP
	provided by the DLL run-time library) when your DLL is unloaded.
	
	As stated, the most common cause of this error is linking with another DLL's
	import library that was built to publicly export a WEP function. If you are
	linking your DLL with other third-party or in-house import libraries, you may
	want to examine them closely. If some of these import libraries are yours, you
	can modify the way they are built so that they don't put their WEP routines into
	the import library.
	
	Either of the following steps will cause a DLL's exported WEP not to be added to
	its import library:
	
	- Build the import library using the IMPLIB switch /NOWEP. The /NOWEP switch
	  causes IMPLIB not to attempt to put a DLL's WEP function into the import
	  library it is creating. This is the default when building a DLL with Visual
	  C++ 1.0. This is described in IMPLIB.WRI, in the Visual C++ Tech Notes.
	
	-or-
	
	- In the DLL's .DEF file, specify the WEP as PRIVATE, using the following
	  syntax:
	
	  EXPORTS
	  WEP @1 RESIDENTNAME PRIVATE
	
	  This will cause the WEP of the DLL to be exported, but will make IMPLIB ignore
	  it, so it shouldn't conflict with anything else. This is described in the
	  Visual C++ MSCOPTS.HLP file, which can be reached from the Visual C++
	  Professional Edition's Integrated Development Environment (IDE) by selecting
	  Help, Build Tools, Module-Definition File Statements, EXPORTS, PRIVATE.
	
	If you do not have control over the way the other DLLs are built, then you have a
	few other options:
	
	- Attempt to obtain (from the DLL's developers) an import library without a
	  publicly exported WEP.
	
	-or-
	
	- Use the IMPLIB utility with the /NOWEP switch on the DLL you are linking to,
	  to create a new import library without a WEP in it. If you do this, first
	  make a backup copy of the import library.
	
	-or-
	
	- Specify the WEP of the DLL you are building as PRIVATE, as described above.
	  This will cause the WEP of THIS DLL to be ignored by IMPLIB, so it shouldn't
	  conflict with anything else. This probably won't work around the L2023 error,
	  however.
	
	You should also make sure that you are linking with /NOE /NOD (no extended
	dictionary and no default libraries). You should also be linking your libraries
	in the following order:
	
	  Windows libraries, C run-time libraries, third-party DLLs
	
	This ensures that the correct WEP is pulled in from the Windows C run-time
	libraries (libraries matching the pattern xDLLCEW.LIB).
	
	NOTE: It is not recommended that you create your own WEP, rather than exporting
	the default WEP. DLL termination code should be in an _WEP routine, which the
	default WEP will call. This is described on page 119 and 120 of the Visual C++
	1.0 "Programming Techniques" manual, and on page 27 and 28 of the Visual C++ 1.0
	"C/C++ Version 7.0 Update" manual.
	
	If for some reason you must use your own WEP routine, you may want to examine
	WEP.ASM in the \MSVC\SOURCE\WIN directory. This is the source for the default
	WEP that is pulled in from the C run-time libraries. In such a WEP, if your
	application is a C++ application, you need to make sure to call all destructors
	of global class objects.
	
	If you are creating a Microsoft Foundation Class (MFC) libraries version 2.0 DLL,
	then you can override the CWinApp::ExitInstance() member function to do your
	termination processing.
	
	Additional query words: kbinf 1.00 technote
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbPTProdChange kbvc100 kbZNotKeyword3 kbLINKSearch kbCVC700DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS
	Version           : MS-DOS:5.3,5.31.009,5.5,5.6,7.0; WINDOWS:1.0
	
	=============================================================================
	
