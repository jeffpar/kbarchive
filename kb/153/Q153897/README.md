---
layout: page
title: "Q153897: FIX: MFC DAO or ODBC App Crashes on Exit"
permalink: /kb/153/Q153897/
---

## Q153897: FIX: MFC DAO or ODBC App Crashes on Exit

	Article: Q153897
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.5; winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbinterop kbProgramming kbDAOsearch kbDatabase kbMDAC kbMFC kbVC kbVC500fix kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application intermittently crashes on exit and an error similar to the
	following appears:
	
	  <application> caused an invalid page fault in
	  module KERNEL32.DLL at 0137:bff9a07c.
	
	This behavior occurs when the application is using the MFC DAO classes, the MFC
	ODBC classes, or the ODBC API to access a database using the Jet Database
	Engine.
	
	RESOLUTION
	==========
	
	Call the LoadLibrary() function on the Jet Engine as shown in the sample code
	below. This call needs to be done only once during execution of the program. To
	minimize any adverse affect on performance, call LoadLibrary() only after the
	database has been opened. Do not call FreeLibrary() for this DLL. The DLL will
	be automatically unloaded when the application exits.
	
	This bug has been fixed in Jet 3.5 that is included with Visual C++ 5.0. If you
	are using the ODBC, you can simply use the newer ODBC driver that is available
	with Visual C++ 5.0. If you are using DAO, you need to build your application
	using Visual C++ 5.0 to use DAO 3.5. The earlier MFC classes use DAO/Jet 3.0 and
	do not recognize DAO 3.5.
	
	STATUS
	======
	
	This bug has been fixed in Jet 3.5 that is included with Visual C++ 5.0.
	
	MORE INFORMATION
	================
	
	This problem occurs only if a dialog resource is loaded. This includes
	applications that use CFormView-derived classes, such as CRecordView and
	CDaoRecordView, as well as dialog-based applications.
	
	The following sample code shows the workaround for a default MFC AppWizard
	application using the MFC DAO classes. The call to LoadLibrary() is added to the
	Open() function of the CDaoRecordset-derived class named CMySet. Similar logic
	can be used for the MFC ODBC classes.
	
	To fix the DAOEnrol sample, add the LoadLibrary() call in the sample code below
	to the CDaoEnrolDoc::OnNewDocument() function, before the call to the base class
	CDocument::OnNewDocument() function.
	
	To fix the Enroll tutorial, add the LoadLibrary() call in the sample code below
	to the CEnrollDoc::GetDatabase() function, after the call to m_database.Open().
	
	Sample Code
	-----------
	
	     void CMySet::Open(int nOpenType, LPCTSTR lpszSql, int nOptions)
	     {
	         CDaoRecordset::Open(nOpenType, lpszSql, nOptions);
	
	         // Load the Jet Engine to ensure that it remains in memory
	         // during the shutdown process.
	         LoadLibrary( "MSJT3032.DLL" );
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbProgramming kbDAOsearch kbDatabase kbMDAC kbMFC kbVC kbVC500fix kbDSupport kbMDAC250 kbGrpDSODBC kbfixlist
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMDACSearch kbVC410 kbMDAC250 kbVC420 kbVC32bitSearch
	Version           : WINDOWS:2.5; winnt:4.0,4.1,4.2
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
