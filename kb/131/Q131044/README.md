---
layout: page
title: "Q131044: FIX: ClassWizard Incorrectly Reads LPDISPATCH Params from .TLB"
permalink: kb/131/Q131044/
---

## Q131044: FIX: ClassWizard Incorrectly Reads LPDISPATCH Params from .TLB

	Article: Q131044
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbwizard kbAutomation kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200 kbVC200bug k
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassWizard generates improper COleDispatchDriver derived member functions for
	methods that contain one or more LPDISPATCH* parameters. Specifically,
	ClassWizard generates member functions using a LPDISPATCH parameter instead of
	LPDISPATCH*. In other words, the asterisk (*) is missing.
	
	RESOLUTION
	==========
	
	To correct this problem, you must edit the COleDispatchDriver derived member
	directly.
	
	For example, assume there is a type library (.TLB file) for an object that
	supports a method that returns a void and accepts an LPDISPATCH* as its only
	parameter. When ClassWizard reads the .TLB file, it generates a new class from
	COleDispatchDriver. The method for the member function that returns a void and
	accepts an LPDISPATCH* parameter ends up with this incorrect definition:
	
	     void ITestObject::TestMethod(LPDISPATCH lpDispPtr)
	     {
	        static BYTE BASED_CODE parms[] =
	           VTS_DISPATCH;
	        InvokeHelper(0x1, DISPATCH_METHOD, VT_EMPTY, NULL, parms,
	           lpDispPtr);
	     }
	
	To correct this problem, change the parameter type to LPDISPATCH*, and modify the
	parms[] array so that it contains a corresponding VTS_PDISPATCH entry instead of
	VTS_DISPATCH, as illustrated here:
	
	     void ITestObject::TestMethod(LPDISPATCH* lpDispPtr)
	     {
	        static BYTE BASED_CODE parms[] =
	           VTS_PDISPATCH;
	        InvokeHelper(0x1, DISPATCH_METHOD, VT_EMPTY, NULL, parms,
	           lpDispPtr);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This was fixed in Visual C++ version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbwizard kbAutomation kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200 kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420 kbVC420bug kbVC500fix kbClassWizard kbGrpDSMFCATL kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:2.0,2.1,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
