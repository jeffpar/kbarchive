---
layout: page
title: "Q153004: PRB: Error C2065: '&#95;&#95;emul/&#95;&#95;emulu' : Undeclared Identifier"
permalink: /kb/153/Q153004/
---

## Q153004: PRB: Error C2065: '&#95;&#95;emul/&#95;&#95;emulu' : Undeclared Identifier

	Article: Q153004
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbVC kbHWPowerPC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0, on platform(s):
	   - the hardware: PowerPC Processor 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a file that includes the system header file LARGEINT.H, the
	following errors are reported:
	
	  C:\msdev\include\largeint.h(70) : error C2065: '__emul' :
	  undeclared identifier
	
	  C:\msdev\include\largeint.h(70) : error C2064: term does not
	  evaluate to a function
	
	  C:\msdev\include\largeint.h(87) : error C2065: '__emulu' :
	  undeclared identifier
	
	  C:\msdev\include\largeint.h(87) : error C2064: term does
	  not evaluate to a function
	
	CAUSE
	=====
	
	LARGEINT.H and LARGEINT.LIB are not fully supported in Visual C++ RISC edition
	version 4.0 for the PowerPC.
	
	RESOLUTION
	==========
	
	Use the compiler-supported __int64 data type (64-bit integer) in place of the
	LARGE_INTEGER and ULARGE_INTEGER structures in LARGEINT.H that are used to
	emulate a 64-bit integer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following is an excerpt from the header file LARGEINT.H that is included in
	RISC edition of Visual C++ 4.0 for the Power PC:
	
	  Note that this version (of LARGEINT.H) has not been completely tested. It is
	  provided solely as an aid for portability. We strongly suggest the use of
	  __int64 types in preference to LARGE_INTEGER.
	
	All platforms supported by the 32-bit edition of Visual C++ 4.0 now support the
	__int64 data type. For maximum portability and ease of use, the __int64 data
	type should be used for all new code development. For existing code that uses
	LARGEINT.H, a port to the __int64 data type will be necessary if the problem
	mentioned above is encountered.
	
	The header file LARGEINT.LIB and its associated library, LARGEINT.LIB, were
	originally created for early versions of 32-bit Microsoft C/C++ compiler. These
	versions of the compiler did not support a native 64-bit data type. Later
	versions of the compiler were extended to add this data type, replacing the need
	for the LARGE_INTEGER and ULARGE_INTEGER structures provided by LARGEINT.H.
	
	
	Sample Code
	-----------
	
	     /* Compile options needed: CL TEST.CPP
	     */ 
	
	     #include <largeint.h>
	
	     void main(void) {}
	
	REFERENCES
	==========
	
	Please see the Microsoft Visual C++ 4.0 RISC edition for the PowerPC header file
	LARGEINT.H.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC kbHWPowerPC 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
