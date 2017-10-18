---
layout: page
title: "Q173645: FIX: Access Violation in MSDAER.DLL with _com_error Exceptions"
permalink: kb/173/Q173645/
---

## Q173645: FIX: Access Violation in MSDAER.DLL with _com_error Exceptions

	Article: Q173645
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbATM kbVC500bug kbVC600fix kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the compiler #import feature, ADO, the OLE DB 1.1 ODBC Provider, and
	trapping _com_error exceptions, an access violation occurs in MSDAER.DLL when
	closing an application.
	
	CAUSE
	=====
	
	A method created with #import can throw a _com_error exception. When it throws
	the exception, Release() is not called on the IErrorInfo pointer which is
	returned from GetErrorInfo(). This leaves the internal error object in the OLEDB
	ODBC Provider stranded which causes the access violation to occur as the
	application shuts down.
	
	RESOLUTION
	==========
	
	Create a macro which can be used to Release() the IErrorInfo interface at the
	end of the "catch" block. For example:
	
	     #define BUGFIX_RELEASE_IERRORINFO(error) \ 
	             IErrorInfo * pErr = error.ErrorInfo();  \ 
	             pErr->Release();                        \ 
	             pErr->Release();
	
	Here is an example of how you would use it:
	
	     try
	     {
	       //.... call a #import generated method
	       if ( m_connection == NULL )   {
	        if(S_OK == m_connection.CreateInstance("ADODB.Connection.1", NULL,
	     CLSCTX_INPROC_SERVER))
	           m_connection->Open(varDataSource, varUserId, varPwd);
	        }
	     }
	     catch(_com_error & err)
	     {
	       // Error handling code...
	       ::MessageBox(NULL, (LPCSTR)err.Description(), _T("ADO Error"), MB_OK);
	
	       BUGFIX_RELEASE_IERRORINFO(err);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3 and Visual C++ version 6.0.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words: unhandled exception AV
	
	======================================================================
	Keywords          : kbATM kbVC500bug kbVC600fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
