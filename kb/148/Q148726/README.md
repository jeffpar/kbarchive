---
layout: page
title: "Q148726: INF: ODBC Desktop Drivers and OLE in a Multithreaded App"
permalink: kb/148/Q148726/
---

## Q148726: INF: ODBC Desktop Drivers and OLE in a Multithreaded App

	Article: Q148726
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Desktop Driver version 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an application makes a SQLConnect or SQLDriverConnect call to ODBC Desktop
	Drivers 3.x, and if the application is idling after SQLConnect or
	SQLDriverConnect has returned, any other application that broadcasts a DDE
	message (message broadcasters) may hang. Once the application disconnects from
	the database, the hanging application works normally.
	
	MORE INFORMATION
	================
	
	When SQLConnect or SQLDriverConnect is called, ODBC DeskTop Drivers initialize
	OLE using threads that they create internally. As a result of OLE
	initialization, three hidden windows--DDEServerWindow, OLEChannelWnd, and
	OLEMainthreadwndname--are created.
	
	If the thread that made the database connection is idle, then the hidden windows
	will not respond to any broadcast DDE messages sent by other applications. For
	example, if an application broadcasts a message such as WM_DDE_INITIATE to all
	windows, the SendMessage hangs until all the top- level windows have received
	the message. Because the thread that created the hidden windows is idle and does
	not respond, the application hangs. This is a known OLE issue in mutithreaded
	applications.
	
	For more detailed information on OLE threads and sample code, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  Q136885 OLE Threads Must Dispatch Messages
	
	
	To prevent the DDE app from continuing to hang after SQLConnect or
	SQLDriverConnect has returned, all threads that call SQLConnect or
	SQLDriverConnect need to handle the DDE messages sent by the DDE app. The
	following example gives an overview of how to accomplish this:
	
	  void doit()
	  {
	  RETCODE rc;             /* Return code for ODBC functions  */ 
	  HENV henv;              /* Environment handle              */ 
	  HDBC hdbc;              /* Connection handle               */ 
	  HSTMT hstmt;            /* Statement handle                */ 
	
	  //variables
	  unsigned char connStrOut[256];
	  MSG msg;
	  HANDLE myhandle;
	
	  myhandle = GetCurrentThread();
	
	  //Allocate ODBC handles and make the connection to the database
	  SQLAllocEnv(&henv);
	  rc = SQLAllocConnect(henv, &hdbc);
	  rc = SQLDriverConnect(hdbc, 0,(unsigned char *)"DSN=hello", SQL_NTS,
	  connStrOut, 256, NULL,
	          SQL_DRIVER_NOPROMPT);
	
	  //Handle messages to prevent other OLE applications from hanging
	  MsgWaitForMultipleObjects( 1, &myhandle, FALSE, INFINITE,QS_ALLINPUT);
	  AfxMessageBox("type in something",MB_OK);
	
	  //Disconnect and free the ODBC handles
	  SQLDisconnect(hdbc);
	  SQLFreeConnect(hdbc);
	  SQLFreeEnv(henv);
	  ExitThread(0);
	  }
	
	  void CTestMultiThread::OnTest()
	  {
	  HANDLE hTestThread;
	  DWORD  dwThreadID ;
	  hTestThread = CreateThread((LPSECURITY_ATTRIBUTES)NULL,0,
	            (LPTHREAD_START_ROUTINE)doit,this,0,&dwThreadID);
	  return;
	  }
	
	NOTE: With the ODBC Desktop Database Drivers 2.0 running on Windows NT 3.5, only
	one thread can make a SQLConnect or SQLDriverConnect call. Other threads in the
	same application cannot make the connection calls at any time while the
	application is running. Once a connection is made on a thread, the connection
	(hdbc) can be shared by other threads. This is because OLE did not support
	multithreading in Windows NT 3.5.
	
	In Windows NT 3.51, the above does not apply as OLE supports multithreading.
	However, you need to ensure that the first thread that calls SQLConnect or
	SQLDriverConnect is the last thread to call SQLDisconnect.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBCDDKSearch kbODBCDDK340
	Version           : :3.4
	
	=============================================================================
	
