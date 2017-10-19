---
layout: page
title: "Q172955: FIX: ATL Service Causes Random Asserts in Run Member Function"
permalink: /kb/172/Q172955/
---

## Q172955: FIX: ATL Service Causes Random Asserts in Run Member Function

	Article: Q172955
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.1,2.1
	Operating System(s): 
	Keyword(s): kbATL210bug kbServer kbService kbVC600fix kbATL300fix kbATL100bug kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 1.1, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Random asserts occur in the ATL services CComModule derived classes Run member
	function.
	
	CAUSE
	=====
	
	In the first line of the member function an HRESULT variable is declared, hr.
	This variable is used throughout the function except in the call to
	CoInitialize(). Right after the call to CoInialize() is an assert on the value
	of hr. Since hr has not yet been initialized, the assert will fail at the point
	where the uninitialized value of hr is negative.
	
	RESOLUTION
	==========
	
	Change the CoInitailize() call to assign its return value to the hr variable,
	not hRes variable. Remove the hRes variable from the following code:
	
	     HRESULT hr;
	
	     _Module.dwThreadID = GetCurrentThreadId();
	
	     HRESULT hRes = CoInitialize(NULL);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create an ATL service. If the hr uninitialized value is negative, the first
	assert in the Run function fails.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Chuck Bell,
	Microsoft Corporation
	
	Additional query words: kbatl110bug kbatl210bug kbvc600fix kbserver
	
	======================================================================
	Keywords          : kbATL210bug kbServer kbService kbVC600fix kbATL300fix kbATL100bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL110 kbATL210
	Version           : WINDOWS:1.1,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
