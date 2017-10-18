---
layout: page
title: "Q87636: PRB: C2660"
permalink: kb/087/Q87636/
---

## Q87636: PRB: C2660

	Article: Q87636
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbGrpDSMFCATL
	Last Modified: 01-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition 
	   - Microsoft Visual C++, 32-bit Professional Edition 
	   - Microsoft Visual C++, 32-bit Learning Edition 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Foundation Classes (MFC), the following error may occur
	when making a Windows application programming interface (API) call from within a
	member function of a window class:
	
	  C2660: 'function' : function does not take 'number' parameters
	
	CAUSE
	=====
	
	Many of the Windows API calls are accessed in the Microsoft Foundation Classes
	through member functions of the same name as the API calls. This means that the
	name will be recognized, but because most member functions require fewer
	parameters than their API counterparts, the C2660 error occurs.
	
	RESOLUTION
	==========
	
	Either of the following two methods eliminates the error:
	
	- Adjust the function call to conform to the format of the member:
	
	     function call.
	
	     -or-
	
	- Use the scope resolution operator (::) to tell the compiler to look for the
	  function name in the global name space.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
