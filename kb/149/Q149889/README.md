---
layout: page
title: "Q149889: PRB: Assertion or Problems Using DAO in a DLL"
permalink: /kb/149/Q149889/
---

## Q149889: PRB: Assertion or Problems Using DAO in a DLL

	Article: Q149889
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.1b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article provides some guidelines for using DAO in regular DLLs. In general,
	avoid performing any DAO construction, destruction, or operations inside the
	DLL's InitInstance or ExitInstance functions. Otherwise, you might see the
	following assertions:
	
	  Assertion failed in DAOCORE.CPP, line 36
	
	  (in Visual C++ 4.0)
	
	  Assertion failed in APPCORE.CPP, line 585 (in Visual C++ 4.1)
	
	  (in Visual C++ 4.1)
	
	STATUS
	======
	
	This behavior is by design. MFC/DAO objects need to be created after
	CWinApp::InitInstance and destroyed before terminating DAO. By default, MFC
	attempts to terminate DAO within CWinApp::ExitInstance.
	
	MORE INFORMATION
	================
	
	The AfxDaoTerm helper function terminates the DAO database engine. In
	applications, AfxDaoTerm is called automatically, but in DLLs, it must be
	explicitly invoked before the DLL's ExitInstance function.
	
	Here are some general guidelines to follow:
	
	- Create any MFC/DAO objects after the DLL's InitInstance function. For
	  additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q147629 PRB: Problems If ODBC or DAO in DLL's InitInstance or DLLMain
	
	- Destroy these objects before calling AfxDaoTerm.
	
	- Call AfxDaoTerm before calling the DLL's ExitInstance function.
	
	Because the AfxDaoTerm helper function terminates the database engine, it must be
	called after all MFC/DAO objects have been destroyed.
	
	AfxDaoInit
	----------
	
	This function initializes the DAO database engine. In most cases, you don't need
	to call AfxDaoInit because the application calls it when it is needed.
	AfxDaoInit is called during the construction of the first MFC/DAO object.
	
	AfxDaoTerm
	----------
	
	This function terminates the DAO database engine. Typically, this function only
	needs to be called in a DLL; an application automatically calls AfxDaTerm when
	it is needed.
	
	When DAO is initialized, MFC will set the m_lpfnDaoTerm pointer in the CWinApp
	class to point to AfxDaoTerm(). When CWinApp::ExitInstance is invoked, by
	default it invokes the value of m_lpfnDaoTerm if it is set.
	
	In a Regular DLL, you need to call AfxDaoTerm() before the default ExitInstance
	is invoked because ExitInstance is invoked by DllMain. Visual C++ 4.0 had a
	documented bug where the .exe's ExitInstance would shut down DAO, causing an
	assertion when the Regular DLL's ExitInstance was called.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q143084 FIX: Problems with Using the MFC DAO Classes in a .DLL or .OCX
	
	All MFC/DAO objects in the DLL must be destroyed before the call to AfxDaoTerm.
	Be careful about the scope of local and global DAO objects. For example, the
	following code causes an assert:
	
	     SomeExportedFunc( .. )
	     {
	        // Only call for regular MFC DLL's
	        #ifndef _AFXDLL
	        AFX_MANAGE_STATE(AfxGetStaticModuleState());
	        #endif
	
	        CDaoDatabase db;
	        db.Open(..);
	        db.Close();
	        AfxDaoTerm();
	     }
	
	Because the DAO object db is a local variable, it remains in scope until
	SomeExportedFunc returns. The call to AfxDaoTerm causes an assertion because DAO
	terminates while db still has scope. Similarly, a global DAO object has scope
	throughout the life of the DLL, so a call to AfxDaoTerm also results in an
	assertion.
	
	To ensure that your MFC/DAO objects are destroyed before calling AfxDaoTerm,
	avoid global objects and create local objects dynamically by using the new
	operator as in this example:
	
	     SomeExportedFunc( .. )
	     {
	        // Only call for regular MFC DLL's
	        #ifndef _AFXDLL
	        AFX_MANAGE_STATE(AfxGetStaticModuleState());
	        #endif
	
	        CDaoDatabase *DB = new CDaoDatabase;
	        pDB->Open(..);
	
	        // do something
	
	        pDB->Close();
	
	        // Destroy the object with delete
	        delete pDB;
	
	        // can now safely terminate DAO
	        AfxDaoTerm();
	     }
	
	A variation is to export special creation and termination functions as in the
	following example. The advantage of this method is that DAO is running and
	connections remain open during the life of the DLL. The disadvantage is that the
	user of the DLL is responsible for explicitly calling these special functions.
	
	     SomeExportedInitializeDAO( .. )
	     {
	        // Only call for regular MFC DLL's
	        #ifndef _AFXDLL
	        AFX_MANAGE_STATE(AfxGetStaticModuleState());
	        #endif
	
	        m_pDB = new CDaoDatabase;
	        m_pDB->Open(..);
	     }
	
	Then, to terminate MFC/DAO:
	
	     SomeExportedDestroyObjectsAndTerminateDAO( .. )
	     {
	        // Only call for regular MFC DLL's
	        #ifndef _AFXDLL
	        AFX_MANAGE_STATE(AfxGetStaticModuleState());
	        #endif
	
	       m_pDB->Close();
	       delete m_pDB;
	       AfxDaoTerm();
	     }
	
	REFERENCES
	==========
	
	For related information, see Technical Note 54. Technical Notes are available
	under MFC Technical Notes, under MFC Books Online.
	
	For additional information on how to use AFX_MANAGE_STATE correctly, please see
	MFC Technical Note 58 (TN058) and the following article in the Microsoft
	Knowledge Base:
	
	  Q140850 HOWTO: Properly Export Functions Using the MFC Shared Library
	
	AFX_MANAGE_STATE should be used in Regular DLLs only.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
