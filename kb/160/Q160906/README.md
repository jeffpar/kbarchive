---
layout: page
title: "Q160906: HOWTO: Use MFC 4.2 ODBC Classes in an ISAPI DLL"
permalink: kb/160/Q160906/
---

## Q160906: HOWTO: Use MFC 4.2 ODBC Classes in an ISAPI DLL

	Article: Q160906
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbDatabase kbMFC kbODBC kbService kbVC400 kbVC420 kbVC500 kbVC600 kbGrpDSODBC
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
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
	
	SUMMARY
	=======
	
	Beginning with MFC 4.2, it is possible to use the MFC ODBC classes within the
	multithreaded environment of an ISAPI DLL. Versions of MFC ODBC classes prior to
	Visual C++ 4.2 were not thread-safe and should not be used in a ISAPI DLL.
	
	The remainder of this article explores the use of MFC-based Database classes
	within an ISAPI DLL and includes the following:
	
	- General Rules or Using MFC ODBC in a ISAPI DLL
	- How ISAPI and Internet Information Server Work
	- Debugging Tips
	- Sample Code
	
	MORE INFORMATION
	================
	
	General Rules for Using MFC ODBC in a ISAPI DLL
	-----------------------------------------------
	
	An ISAPI DLL is running as part of an NT Service. Therefore, all the rules and
	best practices using MFC ODBC in a NT Service apply. Specifically:
	
	- Use an ODBC driver that is thread-safe.
	
	- Use a global instance of CCriticalSection to provide synchronization when
	  using MFC ODBC classes.
	
	- Avoid using MFC ODBC globally or across multiple threads.
	
	- Use a system DSN for your ODBC DataSource.
	
	- It may be necessary to impersonate a valid NT user to connect to a remote
	  data source such as SQL Server.
	
	- Do not use MFC DAO or the DAO SDK within your ISAPI DLL.
	
	
	Details for these procedures are provided in the Knowledge Base MFC ODBC and NT
	Services listed in the REFERENCES section of this article.
	
	How ISAPI and Internet Information Server Work
	----------------------------------------------
	
	Internet Information Server (IIS) maintains a thread pool to handle requests made
	to an ISAPI DLL. If a request is made of an ISAPI DLL, the thread will call the
	DLL's entry point (HttpExtensionProc) and follow it to whatever the extension
	does until it returns. If multiple users are hitting the page, then the DLL
	entry point gets called by an additional thread before the prior thread (or
	threads) have returned.
	
	If a user hits "refresh" repeatedly, the browser ignores the responses to any
	outstanding requests and submits a new request. Because of the "stateless"
	nature of HTTP, there is no way for the server to know that the browser is not
	still waiting for the request. Therefore, when a user hits "refresh" repeatedly,
	he or she is emulating a large group of users hitting the DLL simultaneously.
	
	You can use CCriticalSection to provide safety in your code, and hit the refresh
	button of a browser repeatedly to verify that your code and its underlying
	components are thread-safe. Use of Critical Sections will help create
	thread-safe code, but it also will impact performance of the ISAPI DLL. If a
	user keeps hitting refresh, more and more threads will be blocked waiting for
	the original thread (and then successive threads) to exit the critical section.
	
	Debugging Tips
	--------------
	
	There is a separate Microsoft Knowledge Base article that lists useful debugging
	tips for ISAPI DLLs. However, the following three areas stand out:
	
	Tip 1: IIS and Caching of ISAPI DLLs
	
	Internet Information Server will load an ISAPI DLL the first time the DLL is
	called, and will then cache it. It will not unload the ISAPI DLL until IIS
	stops. When you are making frequent changes to an ISAPI DLL, it can be time
	consuming to start and stop IIS with each rebuild of the DLL. There is a
	registry entry, however, that will force IIS to flush the ISAPI DLL from memory
	after it is no longer used. Consult the IIS 2.0 on-line documentation, Chapter
	10 "Configuring Registry Entries," for details on how to use the CacheExtensions
	registry entry. Note that CacheExtensions should only be used for debugging and
	not in a production environment for performance reasons.
	
	Tip 2: Validating Thread Safety with a Console Application
	
	You may also want to validate your code in a multithreaded environment other than
	an ISAPI DLL. Sample code is provided below for a console application that
	spawns threads and performs database operations within them. This will help
	determine if a problem is in your code or in the underlying ODBC components used
	by your code. Debugging a console application can also be easier than debugging
	a ISAPI DLL. For tips on using MFC ODBC in a console application, see the
	REFERENCES section below.
	
	Tip 3: Identifying the Reason for Network Errors
	
	When attempting operations with MFC ODBC, you may get an exception thrown with
	information such as this:
	
	  
	
	  *   [State=01000][Error=1326][Microsoft][ODBC SQLServer
	      Driver][dbnmpntw]ConnectionOpen (CreateFile()).
	
	  
	
	  *   [State=08001][Error=1326][Microsoft][ODBC SQL Server Driver]Unable
	      to connect to datasource.
	
	A error message with "[Error=1326]" usually relates to a network error. You won't
	find these error numbers explained in the ODBC documentation. For the sample
	message given above, you can discover what the network error is with the
	following command:
	
	  net helpmsg 1326
	
	Sample Code
	-----------
	
	Sample 1: Using CCriticalSection within an ISAPI DLL
	
	The following sample code demonstrates how to use a global instance of
	CCriticalSection to protect use of MFC ODBC classes with an MFC ISAPI DLL:
	
	      CCriticalSection crit;
	
	      void CMyExtension::Default(CHttpServerContext* pCtxt)
	      {
	          int nRecCount = 1;
	
	          StartContent(pCtxt);
	          WriteTitle(pCtxt);
	
	          CMyRecSet rs;
	
	          // Safely open recordset
	          crit.Lock();
	          rs.Open();
	          crit.Unlock();
	
	          // Safely traverse through recordset
	          while( !rs.IsEOF() )
	          {
	              // BEGIN ... your code goes here ...
	              CString tmp;
	              tmp.Format( _T("Record #%d<BR>"), nRecCount++ );
	              *pCtxt << tmp;
	              // END ... your code goes here ...
	
	              crit.Lock();
	              rs.MoveNext();
	              crit.Unlock();
	          }
	
	          // Safely close recordset
	          crit.Lock();
	          rs.Close();
	          crit.Unlock();
	
	          EndContent(pCtxt);
	      }
	
	Sample 2: Validating Code in a Console Application
	
	The console application below emulates the multithreaded environment of an ISAPI
	DLL. This provides a simple way to debug your code as well as verify that the
	code and its underlying ODBC components are thread-safe.
	
	Use the following steps to build this test code:
	
	1. Create a new project workspace.
	
	2. Select console.
	
	3. Modify the project's Build Settings to:
	
	   - use MFC in a shared DLL (from the General tab).
	
	   - use the "Debug Multithreaded DLL" for the Run Time library (from the C++
	     tab, Code Generation category). If building a release version, use the
	     "Multithreaded DLL."
	
	4. Insert a file with the following code:
	
	      #include <afxwin.h>             // MFC core and standard components
	      #include <afxdb.h>              // MFC Database classes
	      #include <afxmt.h>              // MFC Multithreading Support
	
	      #include <iostream.h>
	
	      #define MT_MAX_OPENEX   10      // # of times open DB per/thread
	      #define MT_MAX_THREAD   10      // # of threads to spawn
	      #define MT_MILLISECONDS 10000   // # of millisec to wait for per/thread
	
	      int ThreadNo = 0;               // instance of thread giving output
	
	      CCriticalSection lock;          // Lock critical sections
	
	      UINT ThreadProc(LPVOID)
	      {
	          CString     strConnect = _T("DSN=CharlotteTown; "
	                                      "SERVER=CharlotteTown; UID=sa; PWD=;");
	          CDatabase   *pDb=NULL;
	
	          lock.Lock();
	          int m_ThreadNo = ++ThreadNo;
	          lock.Unlock();
	
	          pDb = new CDatabase();
	
	          for( int i = 0; i < MT_MAX_OPENEX; i++)
	          {
	              lock.Lock();
	              // Your code goes here. This sample just tests opening/closing
	              // a database.
	              pDb->OpenEx(strConnect,
	                          CDatabase::noOdbcDialog |
	                          CDatabase::useCursorLib);
	              pDb->Close();
	              lock.Unlock();
	
	              cout << "Thread #" << m_ThreadNo;
	              cout << "  Iteration #" << i << endl;
	          }
	
	          if (pDb != NULL)
	              delete pDb;
	
	          cout << "Thread #" << m_ThreadNo << " finished." << endl;
	
	          return 0;
	      }
	
	      void main ( void )
	      {
	          DWORD   dwThread[ MT_MAX_THREAD ];  // Thread ID
	          HANDLE  hThreads[ MT_MAX_THREAD ];  // Thread Handle
	
	          // Spawn Threads
	          for( int i = 0; i < MT_MAX_THREAD; i++ )
	          {
	              hThreads[i] = CreateThread( NULL,
	                                          0,
	                                          (LPTHREAD_START_ROUTINE)ThreadProc,
	                                          NULL,
	                                          0,
	                                          &dwThread[ i ] );
	          }
	
	          // Wait for threads to finish, then clean up
	          WaitForMultipleObjects( (DWORD) MT_MAX_THREAD,
	                                  hThreads,
	                                  TRUE,
	                                  (DWORD) MT_MAX_THREAD * MT_MILLISECONDS);
	
	          for( i = 0; i < MT_MAX_THREAD; i++ )
	          {
	              CloseHandle(hThreads[i]);
	          }
	      }
	
	REFERENCES
	==========
	
	
	For more information about thread safety with MFC ODBC, please see:
	
	"ODBC Classes and Threads" in the Visual C++ Books On-Line, or the following
	article in the Microsoft Knowledge Base:
	
	  Q156138 HOWTO: Use MFC ODBC/DAO, DAO SDK in NT Service or with Threads
	
	For more information about MFC in a console application, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q152696 HOWTO: Use the MFC Database Classes in Console Applications
	
	  Q150764 PRB: CString::LoadString Fails in Console Application
	
	
	Additional query words: MfcDatabase
	
	======================================================================
	Keywords          : kbusage kbDatabase kbMFC kbODBC kbService kbVC400 kbVC420 kbVC500 kbVC600 kbGrpDSODBC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
