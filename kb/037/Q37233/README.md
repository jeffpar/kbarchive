---
layout: page
title: "Q37233: INFO: Why System Include Files Prototype Functions as _cdecl"
permalink: /kb/037/Q37233/
---

## Q37233: INFO: Why System Include Files Prototype Functions as _cdecl

	Article: Q37233
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The system include files declare functions that use the C calling and naming
	conventions with the attribute "cdecl".
	
	The compiler uses the C calling and naming conventions by default unless the
	compiler command line specifies the /Gc or /Gz option switches. The /Gc switch
	instructs the compiler to use the Pascal (FORTRAN) calling convention by
	default. The 32-bit compilers do not support the /Gc option switch; they use the
	/Gz option switch that instructs the compiler to use the __stdcall calling and
	naming convention by default.
	
	The "cdecl" attribute instructs the compiler to generate run-time library calls
	using the C calling and naming conventions even when the command line specifies
	the /Gc or /Gz option.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
