---
layout: page
title: "Q198009: PRB: Calling String Conversion Macros in Catch Block Causes AV"
permalink: kb/198/Q198009/
---

## Q198009: PRB: Calling String Conversion Macros in Catch Block Causes AV

	Article: Q198009
	Product(s): Microsoft C Compiler
	Version(s): 2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbATL kbATL210 kbExceptHandSEH kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL kbExceptHandCPP k
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling one of the string conversion macros, such as OLE2T or T2OLE, inside a
	catch block of a try/catch exception handler causes an access violation.
	
	CAUSE
	=====
	
	Some of the string conversion macros will call _alloca(). However, _alloca()
	cannot be used inside an exception handler.
	
	RESOLUTION
	==========
	
	Use MultiByteToWideChar() or WideCharToMultiByte() rather than string conversion
	macros inside an exception handler.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Exception Handler (EH) routines that run on x86-class processors operate in
	their own memory "frame:" that is, they perform their tasks in memory space that
	is not based on the current location of the stack pointer of the enclosing
	function. Therefore, explicitly calling _alloca in any of the following
	scenarios results in program failure during the return to the calling EH
	routine:
	
	- Windows NT SEH exception filter expression: __except ( alloca() )
	
	- Windows NT SEH final exception handler: __finally { alloca() }
	
	- C++ EH catch clause expression
	
	Steps to Reproduce Behavior
	---------------------------
	
	     try
	     {
	        throw (1);
	     }
	     catch (...)
	     {
	        USES_CONVERSION;
	        LPTSTR str = OLE2T(L"Some String");
	     }
	
	REFERENCES
	==========
	
	Visual C++ Online Documentation for _alloca()
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Samson Tanrena, Microsoft Corporation
	
	
	Additional query words: A2W A2CW T2OLE OLE2W A2OLE A2T T2W W2A W2CA OLE2T W2OLE OLE2A T2A W2T
	
	======================================================================
	Keywords          : kbATL kbATL210 kbExceptHandSEH kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL kbExceptHandCPP kbExceptHandling 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.1,3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
