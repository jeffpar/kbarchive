---
layout: page
title: "Q177425: INFO: Replacing #import's Exception Raising Mechanism for ADO"
permalink: /kb/177/Q177425/
---

## Q177425: INFO: Replacing #import's Exception Raising Mechanism for ADO

	Article: Q177425
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbATM kbCompiler kbDatabase kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the #import statement to create your client application introduces
	exception handling through the _com_error exception class when a wrapper for an
	object's method encounters a failed HRESULT. You might have valid reasons to
	replace this mechanism with your own implementation.
	
	MORE INFORMATION
	================
	
	There are two ways to use #import and not have it raise exceptions for failed
	HRESULTS. The first is simply to use the raw_interfaces_only clause with the
	#import statement. However, this negates some of the advantages of the wrapper
	classes that #import provides.
	
	The second technique is by providing your own implementation for
	_com_raise_error, which has the following prototype and default implementation:
	
	     void __stdcall _com_raise_error(HRESULT hr, IErrorInfo* perrinfo = 0)
	     throw(_com_error);
	
	     void __stdcall
	     _com_raise_error(HRESULT hr, IErrorInfo* perrinfo = 0) throw(_com_error)
	     {
	         throw _com_error(hr, perrinfo);
	     }
	
	This function is declared but not implemented in the Comdef.h file. If you
	provide your own implementation in an .OBJ file, the linker uses that
	implementation as opposed to bringing it in from the Comsupp.lib file.
	_com_raise_error exists in its own object in the Comsupp.lib file so it can be
	easily replaced by your code.
	
	Following is a sample implementation of the #import's exception raising
	function.
	
	NOTE: Currently the compiler ignores a function exception-specification and
	generates the following warning:
	
	  warning C4290: C++ Exception Specification ignored.
	
	At this time, the implementation details of exception specification have not been
	standardized, and are accepted but not implemented in Microsoft Visual C++. Code
	compiled with ignored exception specifications may need to be recompiled and
	linked to be reused in future versions supporting exception specifications. You
	can avoid this warning by using the warning pragma:
	
	  #pragma warning( disable : 4290 ) 
	
	Sample Code
	-----------
	
	     void __stdcall
	     _com_raise_error(HRESULT hr, IErrorInfo* perrinfo = 0) throw(_com_error)
	         {
	             //This message box is for demonstration purpose only.
	             AfxMessageBox( "_com_raise_error (HRESULT, IErrorInfo*)" );
	             //Your own error handling code or just an abort.
	         }
	
	      #import <msado15.dll>
	          ...
	
	       _bstr_t     bstrEmpty(L"");
	       _ConnectionPtr  Conn1 = NULL;
	       Conn1.CreateInstance( __uuidof( Connection ) );
	       Conn1->Open( bstrEmpty, bstrEmpty, bstrEmpty );
	
	This code attempts to open an ActiveX Data Objects (ADO) connection object
	without providing any valid connection information. Replacing _com_raise_error
	prevented the _com_error from being raised.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATM kbCompiler kbDatabase kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
