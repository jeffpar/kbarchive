---
layout: page
title: "Q152696: HOWTO: Using the MFC Database Classes in Console Applications"
permalink: /kb/152/Q152696/
---

## Q152696: HOWTO: Using the MFC Database Classes in Console Applications

{% raw %}

	Article: Q152696
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 2.2 4.0 4.1 4.2 5.0 6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbusage kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MFC database classes found in Visual C++ versions 1.x, 2.x, 4.0, and 4.1
	were not written to be used in a console application. However, with some
	modification, you can use the 32-bit database classes in a console application.
	The techniques presented here apply to both the MFC ODBC and MFC DAO classes.
	
	Starting with Visual C++ 4.2, the MFC ODBC classes were rendered safe for use
	within console applications. Many of the internal dependencies listed below are
	no longer present in the 4.2 and later MFC ODBC class libraries.
	
	MORE INFORMATION
	================
	
	Both the MFC ODBC and MFC DAO classes have dependencies upon non-Database MFC
	classes, particularly with the existence of a global CWinApp-derived object. The
	following list presents these dependencies along with suggestions for working
	around them.
	
	For either MFC ODBC or MFC DAO, it is very important to test your code not only
	for successful execution, but for graceful recovery on unexpected conditions
	(such as the database not being in an expected path). The majority of the
	"dependencies" these classes have on MFC come from error recovery and reporting
	code within the database classes.
	
	It is also important to remember that the Visual C++ MFC database classes
	released through version 4.1 were not intended or tested for use in a console
	application.
	
	Both MFC ODBC and MFC DAO Classes
	---------------------------------
	
	- Exception Handling
	
	  Microsoft recommends that you wrap exception handling code around each of your
	  calls to an MFC Database class method.
	
	- Exception Handling and Resource Handles
	
	  Internally, MFC ODBC uses AfxThrowDBException to throw exceptions, and MFC DAO
	  uses AfxThrowDaoException() to throw exceptions. Both functions can result in
	  a call to CString::LoadString(), which requires a resource handle for the
	  application. In addition, the MFC DAO method
	  CDaoException::GetErrorMessage(), used to get more information about a DAO
	  error, also calls CString::LoadString().
	
	  Within CString::LoadString() is a call to AfxLoadString(), which calls
	  AfxGetResourceHandle(), which expects a valid resource handle to be defined
	  for the EXE.
	
	  To work around this, define a valid resource handle for your application as
	  shown in this code:
	
	        hMod = ::GetModuleHandle( "MyApp.Exe" );
	        ASSERT( hMod );
	        AfxSetResourceHandle( hMod );
	
	MFC ODBC Classes
	----------------
	
	- Use of AfxGetApp() in the MFC ODBC Classes
	
	  In synchronous mode when an error is encountered, CDatabase::Open() attempts
	  to get a pointer to a global CWinApp-derived object and assert if it is not
	  found. To avoid this, you can:
	
	   - Invoke CDatabase::SetSynchronousMode( TRUE ) to disable asynchronous
	     processing.
	
	     -or-
	
	   - Create a global instance of a CWinApp-derived class in your application
	     similar to the one shown below. This will give you a global CWinApp object
	     in your console application without actually invoking MFC in any way.
	
	           class CMyApp : public CWinApp
	           {
	           public:
	               virtual BOOL InitInstance( ) { return FALSE };
	           };
	
	           CMyApp theApp;
	
	  This dependency was removed in Visual C++ 4.2. Use of Synchronous mode was
	  also removed, as was the OnWaitForDataSource and InWaitForDataSource methods
	  for both CDatabase and CRecordset.
	
	- Avoiding the Need for a Valid Windows Handle
	
	  The CDatabase::Open() method also attempts to acquire a valid Windows handle
	  to pass to SQLDriverConnect. If the application using the classes can't
	  provide one, the GetDesktopWindow method is called. This handle is used by
	  the ODBC API call SQLDriverConnect as a parent handle to create a dialog if
	  the database connection information provided is incomplete or inaccurate.
	
	  It is possible to prevent this dialog from being displayed. For information on
	  how to do it, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q150552 How to Avoid ODBC Login Dialog When Using MFC
	
	MFC DAO Classes
	---------------
	
	The MFC DAO classes are relatively independent of the MFC library. However here
	are some considerations to keep in mind when using them in a console
	application:
	
	- Use of AfxGetApp() in the MFC DAO Classes
	
	  The initialization of a CDaoWorkspace object -- whether explicitly or
	  implicitly by way of creation of a CDaoDatabase or CDaoRecordset object --
	  forces a call to AfxDaoInit(). AfxDaoInit() attempts to ensure that DAO is
	  properly terminated by setting the m_lpfnDaoTerm member of CWinApp to point
	  to the AfxDaoTerm() function.
	
	  If you do not have a global instance of a CWinApp-derived class, you need to
	  call AfxDaoTerm() yourself to terminate DAO properly. For more information on
	  the use of AfxDaoTerm(), please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q145992 PRB: Global MFC DAO Objects Cause Assertions
	
	Additional query words: kbvc200 kbvc210 kbvc220 kbvc400 kbvc410 kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbProgramming kbusage kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 2.0 2.1 2.2 4.0 4.1 4.2 5.0 6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
