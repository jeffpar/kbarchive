---
layout: page
title: "Q167731: FIX: Access Violation When Connecting in MFC ODBC Application"
permalink: /kb/167/Q167731/
---

## Q167731: FIX: Access Violation When Connecting in MFC ODBC Application

	Article: Q167731
	Product(s): Microsoft C Compiler
	Version(s): 4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDatabase kbMFC kbODBC kbVC kbVC420bug kbVC500bug kbGrpDSMDAC kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If MFC42.DLL version 4.21.7002 is installed and ODBC 3.0 is not installed, MFC
	ODBC applications hit an access violation when they try to call
	SQLSetConnectOption() in DBCORE.CPP.
	
	CAUSE
	=====
	
	MFC was changed in version 4.21.7002 (the version which is distributed with
	Visual C++ 5.0) to call SQLxxxA versions of the ODBC APIs. For example, the MFC
	DLL now calls 'SQLSetConnectOptionA' instead of 'SQLSetConnectOption'. These new
	function names are only exposed by the ODBC 3.0 Driver Manager. They are not
	available under the ODBC 2.x Driver Manager.
	
	To prevent implicitly loading ODBC32.DLL every time the MFC DLL is loaded, the
	MFC DLL loads the Driver Manager, and performs GetProcAddress calls to get the
	address of the various ODBC API functions. It then calls through these pointers
	into the ODBC32.DLL. In the case where the ODBC 3.0 Driver Manager is not
	installed, the call to GetProcAddress for any of the SQLxxxA functions fails and
	returns a null pointer. This causes the access violation to occur when the
	pointer is dereferenced. MFC does not properly handle checking for the null
	pointer.
	
	RESOLUTION
	==========
	
	It is likely that Visual C++ 4.2x applications will see this problem because
	these applications don't ship with ODBC 3.0. To prevent an application from
	being exposed to this problem, ship the ODBC 3.0 components rather than the ODBC
	2.x components, even if the application is a Visual C++ 4.2x application.
	
	Installing ODBC 3.0 on the system fixes the problem. Redistributing the Visual
	C++ 4.2 application using a static build of MFC also corrects the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbDatabase kbMFC kbODBC kbVC kbVC420bug kbVC500bug kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : :4.2,4.2b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
