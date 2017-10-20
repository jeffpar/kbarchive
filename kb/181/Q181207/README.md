---
layout: page
title: "Q181207: FIX: CRuntimeClass Not Available for CInternetException"
permalink: /kb/181/Q181207/
---

## Q181207: FIX: CRuntimeClass Not Available for CInternetException

{% raw %}

	Article: Q181207
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:97,97sp3
	Operating System(s): 
	Keyword(s): kbcode kbVC500bug kbVC600fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to obtain run-time class information for CInternetException by using
	the RUNTIME_CLASS macro fails. The CRuntimeClass structure returned for
	CInternetException is empty.
	
	RESOLUTION
	==========
	
	C++ exception handling can determine the type of exception thrown. A typical
	handler has a format similar to the following:
	
	     try
	     {
	        // Execute some code that might throw an exception.
	     }
	     catch( CInternetException* e )
	     {
	        // Handle the Internet exception here.
	     }
	     catch( CException* e )
	     {
	        // Handle all other types of exceptions here.
	     }
	
	If for some reason it is still necessary to obtain the run-time class information
	for a class that may be CinternetException, it is possible to use the Run-Time
	Type Information (RTTI) provided by Visual C++. To use RTTI, the Run-Time Type
	Information must be enabled in the C++ Language settings for the project. Then,
	the dynamic_cast operator can be used to attempt a conversion of the exception
	to CInternetException. If the cast fails, the exception is of another type. It
	is also possible to obtain the Run-Time Type Information directly as follows:
	
	     const type_info& info = typeid(*e);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem:
	
	     CRuntimeClass* prt;
	     prt = RUNTIME_CLASS( CInternetException );
	
	Looking at prt in the debugger shows that the CRuntimeClass structure is empty.
	This behavior is not observed in projects that are statically linked to MFC.
	
	Additional query words: RTTI
	
	======================================================================
	Keywords          : kbcode kbVC500bug kbVC600fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINDOWS:97,97sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
