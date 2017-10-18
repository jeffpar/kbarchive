---
layout: page
title: "Q155133: PRB: ClassWizard Doesn't Bring in Proper Header File"
permalink: kb/155/Q155133/
---

## Q155133: PRB: ClassWizard Doesn't Bring in Proper Header File

	Article: Q155133
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbwizard kbMFC kbVC420 kbVC500 kbVC600 kbWinsock kbClassWizard kbGrpDSMFCATL
	Last Modified: 17-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating a new class derived from either CSocket or CAsyncSocket using the
	ClassWizard, one of the following errors occur during compilation:
	
	  
	
	  error C2504: 'CSocket' : base class undefined
	  error C2504: 'CAsyncSocket' : base class undefined
	
	CAUSE
	=====
	
	ClassWizard allows you to derive a class directly from CSocket or CAsyncSocket;
	however, it does not pull in the required header file where these classes are
	declared. Therefore, the compiler displays an error message reflecting that
	CSocket or CAsyncSocket was not defined.
	
	RESOLUTION
	==========
	
	Include the header file, afxsock.h, into your project, preferably in your
	project's StdAfx.h header file:
	
	       ...
	       #include <afxsock.h>  //MFC support for Sockets
	       ...
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The header file, afxsock.h, contains the class definitions for CAsyncSocket and
	CSocket. If you are using these classes or any classes that are derived from
	these classes, you must make sure to include afxsock.h in your project. Also
	note that if you use AppWizard to start your project and select the Socket
	Support option on the fourth page of the wizard, you will automatically get
	afxsock.h inserted into your StdAfx.h file. In addition, you will get the
	function call, AfxSocketInit(), inserted into your project. This is very
	important because you must make a call to AfxSocketInit() if you want to use
	Sockets in your MFC application. This function is usually called from your
	InitInstance() method of your CWinApp derived object.
	
	     BOOL CMyApp::InitInstance()
	     {
	
	          if (!AfxSocketInit())
	          {
	               AfxMessageBox("Socket Initialization Failed");
	               return FALSE;
	          }
	
	          ...
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbwizard kbMFC kbVC420 kbVC500 kbVC600 kbWinsock kbClassWizard kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
