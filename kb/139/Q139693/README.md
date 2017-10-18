---
layout: page
title: "Q139693: FIX: Assertion Failed, Line 505 of Sockcore.cpp"
permalink: kb/139/Q139693/
---

## Q139693: FIX: Assertion Failed, Line 505 of Sockcore.cpp

	Article: Q139693
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2
	Operating System(s): 
	Keyword(s): kbMFC kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrpDSMFCATL kb
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC application that uses the socket classes fails with a message similar to
	the following:
	
	In MFC 3.1 or 3.2, the assertion appears as:
	
	  Assertion Failed: <app name>: File sockcore.cpp, Line 505
	
	In MFC 2.52, the assertion appears as:
	
	  Assertion Failed: <app name>: File sockcore.cpp, Line 484
	
	CAUSE
	=====
	
	When all sockets are closed, the socket handle maps are emptied and the socket
	notification window is destroyed.
	
	MFC maintains an auxiliary queue of socket notification messages. If any messages
	remain in this queue when the last socket is closed, then this assertion failure
	will occur when any new sockets are opened and an attempt is made to process
	these left-over notifications.
	
	RESOLUTION
	==========
	
	Purge the auxiliary queue of all messages when the last socket is closed. In
	this context, last does not mean previous; it means the socket that was closed,
	leaving no sockets open for that thread.
	
	This problem can be remedied by overriding the CAsyncSocket::Close member
	function in your CAsyncSocket-derived or CSocket-derived class. The following
	implementation of this override will take care of the problem:
	
	  void CMySocket::Close()
	  {
	    // If Deriving from CSocket, then use:
	    CSocket::Close();
	    // Otherwise, use:
	    // CAsyncSocket::Close();
	    AFX_THREAD_STATE* pThreadState = AfxGetThreadState();
	    if (pThreadState->m_mapSocketHandle.IsEmpty())
	    {   // **** LAST SOCKET ****
	      while (!pThreadState->m_listSocketNotifications.IsEmpty())
	        delete pThreadState->m_listSocketNotifications.RemoveHead();
	      pThreadState->m_listSocketNotifications.RemoveAll();
	    }
	  }
	
	
	To handle the case where a socket object is deleted before Close is called, also
	override the virtual destructor to make sure the correct version of Close is
	called:
	
	  CMySocket::~CMySocket()
	  {
	    if (m_hSocket != INVALID_SOCKET)
	      Close();
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the version of MFC that
	ships with Microsoft Visual C++, 32-bit Edition, version 4.0.
	
	Additional query words: 1.52 2.10 2.20 2.52 3.10 3.20 4.00 CSocket CAsyncSocket
	
	======================================================================
	Keywords          : kbMFC kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
