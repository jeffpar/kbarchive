---
layout: page
title: "Q169484: FIX: CString::MakeUpper and MakeLower Don't Work with Some Char"
permalink: /kb/169/Q169484/
---

## Q169484: FIX: CString::MakeUpper and MakeLower Don't Work with Some Char

	Article: Q169484
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC500SP1fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MakeUpper() and MakeLower() in Visual C++ 5.0 do not convert the extended
	characters, such as A (with circle accent), A or O (with umlauts). 
	
	CAUSE
	=====
	
	MakeUpper() and MakeLower() were working correctly with the extended characters
	in Visual C++ 4.0, but not in Visual C++ 5.0. In Visual C++ 4.0,
	CString::MakeUpper() and MakeLower() functions are wrappers for the SDK
	functions CharUpper() and CharLower(). They work correctly for the extended
	characters, such as [ASCII 197],[ASCII 196],[ASCII 214]. In Visual C++ 5.0, the
	MakeUpper() and MakeLower() functions use the C Runtime _tcslwr and _tcsupr to
	convert the characters, instead of CharUpper and CharLower. As a result, the
	extended characters are not being converted anymore.
	
	RESOLUTION
	==========
	
	This problem can be avoided by using the SDK APIs CharUpper() and CharLower()
	instead of the CString functions.
	
	STATUS
	======
	
	This problem has been corrected in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500bug kbVC500SP1fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
