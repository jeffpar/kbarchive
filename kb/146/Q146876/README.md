---
layout: page
title: "Q146876: PRB: DAO Error 3028 When Creating a DAO Workspace"
permalink: /kb/146/Q146876/
---

## Q146876: PRB: DAO Error 3028 When Creating a DAO Workspace

{% raw %}

	Article: Q146876
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 5.0 6.0
	Operating System(s): 
	Keyword(s): kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The DAO SDK, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following DAO error 3028 may occur when you try to create a workspace DAO
	object:
	
	  Can't start application. The system database is missing or opened
	  exclusively by another user.
	
	CAUSE
	=====
	
	This error can occur if you have failed to specify a system database or have
	assigned the system database after performing operations with the database
	engine.
	
	RESOLUTION
	==========
	
	It is important that the SystemDB property of the database engine be set prior
	to performing any operations with the database engine. If you are using the
	dbDAO C++ classes included with the DAO SDK, you can set the system database by
	using code similar to this code:
	
	     // get database engine object but don't fill its collections
	     CdbDBEngine eng(FALSE, FALSE);
	
	     // set the system database
	     eng.SetSystemDB(_T("d:\\work\\sectest.mdw"));
	
	     // Finish initializing the engine object
	     eng.Start();
	
	     CdbWorkspace wsp;
	
	     // The following function call will generate the 3028
	     // error if a System Database hasn't been assigned or if the
	     // second argument of the constructor for CdbDBEngine didn't
	     // receive FALSE.
	
	     wsp= eng.CreateWorkspace(_T("Test"),_T("MyUserName"),
	                              _T("MyPassword"));
	
	Or, alternately, use the CdbDBEngine::SetInitPath() method before opening or
	creating a CdbWorkspace object.
	
	If you are using the MFC DAO classes, use code similar to this code:
	
	     //Initialize global MFC DAO engine
	     AfxDaoInit( );
	     DAODBEngine* pDBEngine = AfxDaoGetEngine( );
	
	     // Set up system database
	     COleVariant var( _T("d:\\work\\sectest.mdw"), VT_BSTRT );
	     // NOTE: put_SystemDB was a late addition to DAO
	     // and is not yet wrapped by MFC
	     DAO_CHECK( pDBEngine->put_SystemDB( var.bstrVal ) );
	
	     CDaoWorkspace wsp;
	     wsp.Create(_T("Test"),_T("MyUserName"), _T("MyPassword"));
	
	Or, alternately, use the CDaoWorkspace::SetInitPath() method before opening or
	creating a CDaoWorkspace object.
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          : kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0 4.1 4.2 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
