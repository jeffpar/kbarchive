---
layout: page
title: "Q153292: FIX: Compiler Errors with COleDateTime::Format"
permalink: kb/153/Q153292/
---

## Q153292: FIX: Compiler Errors with COleDateTime::Format

	Article: Q153292
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbAutomation kbDateTime kbMFC kbVC400bug kbVC410bug kbVC420fix kbDSupport kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling the COleDateTime::Format member function with VAR_DATEVALUEONLY or
	VAR_TIMEVALUEONLY, you will get the following compiler error:
	
	  
	
	  error C2668: 'Format' : ambiguous call to overload function (new
	                          behaviour; please see help)
	
	CAUSE
	=====
	
	The problem is caused by not defining VAR_DATEVALUEONLY and VAR_TIMEVALUEONLY as
	DWORD in Oleauto.h.
	
	RESOLUTION
	==========
	
	The workaround is to type cast these constants to DWORD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 4.2.
	
	Additional query words: kbVC400bug vcfixlist420 MfcOLE
	
	======================================================================
	Keywords          : kbAutomation kbDateTime kbMFC kbVC400bug kbVC410bug kbVC420fix kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
