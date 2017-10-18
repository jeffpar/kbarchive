---
layout: page
title: "Q147629: PRB: Problems If ODBC or DAO in DLL's InitInstance or DLLMain"
permalink: kb/147/Q147629/
---

## Q147629: PRB: Problems If ODBC or DAO in DLL's InitInstance or DLLMain

	Article: Q147629
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.5; winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming kbDAOsearch kbDatabase kbMFC kbODBC kbVC kbVC400 kbVC410 kbVC42
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use ODBC or DAO in the InitInstance or DLLMain functions of a DLL, your
	application may fail with an "Access Violation" or display some other
	unanticipated behavior. This can occur when you use the MFC Database Classes
	(ODBC-based or DAO-based), the ODBC API, or the dbDao classes provided with the
	DAO SDK.
	
	CAUSE
	=====
	
	The reason for this behavior is that ODBC drivers, DAO, or any of their
	underlying components may spawn multiple threads. Creating threads during
	initialization of a Win32 DLL can leave Windows in an undefined state.
	
	When a Win32 DLL is loaded, Windows calls the DLL's DllMain function with a
	reason for calling of DLL_PROCESS_ATTACH.
	
	When a new thread is created in Win32, each DLL in the process space will have
	its DllMain function called by Windows. Windows signals that a new thread has
	been created by passing a reason for calling of DLL_THREAD_ATTACH.
	
	For a regular DLL that uses MFC, MFC supplies a DllMain that calls InitInstance.
	If you call a function in InitInstance that directly or indirectly creates one
	or more threads, you may experience unexpected behavior. This is because your
	application is within the context of DllMain (in InitInstance) with a
	DLL_PROCESS_ATTACH call, and creating a thread will result in Windows needing to
	call your DllMain again with a DLL_THREAD_ATTACH. The behavior resulting from
	this action is undefined.
	
	If you are writing an extension DLL, you must supply your own implementation of
	the DllMain function. If you directly or indirectly create threads within this
	DllMain function, you will also experience this problem.
	
	RESOLUTION
	==========
	
	Do not create threads explicitly or implicitly within the context of DllMain.
	
	Provide a function in your DLL for complex initialization that you can call
	outside of the scope of DllMain.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Currently the behavior described in this article is exhibited when using the
	Microsoft Access version 3 ODBC driver, using the ODBC SDK, or using MFC
	ODBC-based database classes. It can also occur when instantiating instances of
	MFC DAO-based database classes or the dbDao classes.
	
	This behavior is not limited to a specific ODBC driver, DAO, or ODBC in general.
	You may experience this type of behavior with any API that creates threads.
	
	If you suspect that this might be the cause of failure in your application, you
	can verify it by putting a breakpoint in the DllMain function and examining how
	many times it is called and by examining the dwReason parameter that is passed
	to it. If this is a regular DLL that uses MFC, set the breakpoint in MFC's
	DllMain function.
	
	Sample Code
	-----------
	
	The following code is for MFC ODBC-based database classes but applies equally
	well to MFC DAO-based database classes, or the dbDao classes.
	
	     // This code should reproduce the problem for a regular DLL that uses
	     // MFC.
	
	     BOOL CMyDllApp::InitInstance()
	     {
	       CDatabase db;
	       if(db.Open("MyDataSource")) //Open Microsoft Access 3 ODBC datasource
	         db.Close();
	       ...
	     }
	
	     // To fix the problem, put the code in your own initialize function
	     // that you call explicitly from your application.
	
	     BOOL CMyDllApp::MyInitFunction()
	     {
	       CDatabase db;
	       if(db.Open("MyDataSource")) //Open an Access 3 ODBC datasource
	         db.Close();
	       ...
	     }
	
	REFERENCES
	==========
	
	"Advanced Windows" (Chapter 11) by Jeffery Richter, ISBN 1-55615-677-4.
	
	For more information, please see the following related articles in the Microsoft
	Knowledge Base:
	
	  Q138812 Calls to an OLE Object Should Not Be Done from DllMain
	
	  Q142243 PRB: Cannot Create an MFC Thread During DLL Startup
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbprogramming kbDAOsearch kbDatabase kbMFC kbODBC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSVCDB kbMDAC250 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINDOWS:2.5; winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
