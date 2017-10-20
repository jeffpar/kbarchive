---
layout: page
title: "Q140527: PRB: Assertion Failed on Line 837 - Sockcore.cpp"
permalink: /kb/140/Q140527/
---

## Q140527: PRB: Assertion Failed on Line 837 - Sockcore.cpp

{% raw %}

	Article: Q140527
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC kbThread kbVC210 kbVC400 kbVC500 kbVC600 kbWinsock kbGrpDSMFCATL
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A multi-threaded application that uses MFC's socket classes encounters a message
	box or debug output line that contains an error message similar to the
	following:
	
	For Visual C++ 2.x:
	
	  Assertion failed - <app name>:File sockcore.cpp, Line 837
	
	For Visual C++ 4.0:
	
	  Assertion failed - <app name>:File sockcore.cpp, Line 1041
	
	CAUSE
	=====
	
	Most frequently, this problem is due to the sharing of CSocket objects between
	multiple threads.
	
	A CSocket object should be used only in the context of a single thread because
	the SOCKET handle encapsulated by a CAsyncSocket object is stored in a
	per-thread handle map. (CSocket is derived from CAsyncSocket.) Other information
	is stored on a per-thread basis, including a hidden notification window that MFC
	uses for socket notifications.
	
	The assertion failure line, which can be found in Sockcore.cpp in the
	\Msvc20\Mfc\Src directory, is:
	
	     ASSERT(pThreadState->m_hSocketWindow != NULL);
	
	This assertion failure occurs because the CSocket object was either created or
	accepted in the context of another thread. The socket notification window was
	created in a different thread, and the m_hSocketWindow for the current thread is
	NULL, thus the assertion failure.
	
	RESOLUTION
	==========
	
	As already mentioned, a CAsyncSocket object should be used only in the context
	of a single thread. If you need to switch the thread that is accessing a SOCKET
	connection with another thread, then you should use a separate CAsyncSocket
	object in each thread, and use the Detach and Attach functions to attach the
	CAsyncSocket object to the SOCKET handle in the thread that is about to use the
	socket. Use this sequence:
	
	1. Use Detach() to detach the CAsyncSocket object from the SOCKET handle in the
	  thread that is currently using the CAsyncSocket object.
	
	2. Use Attach() to attach a different CAsyncSocket object to the SOCKET handle
	  while in the context of the MFC UI thread in which you wish to begin
	  accessing the SOCKET connection.
	
	The code shown in the "Code Sample" section of this article shows how to handle
	the moment when a listening socket accepts a connection request and then begins
	a new thread to handle the new connection.
	
	NOTE: One concern often arises that socket notification messages might be lost
	between the time the call to Detach() is made and the subsequent call to
	Attach() is made. This is not a concern because of the way socket notifications
	are handled. The implementation of CAsyncSocket::Attach() makes a call to
	WSAAsyncSelect to enable notifications. As mentioned in the documentation for
	WSAAsyncSelect, if any socket noficiations were already pending for the SOCKET,
	they will be re-posted.
	
	MORE INFORMATION
	================
	
	To Accept a socket in the context of one thread and then begin using it in the
	context of another thread, you need to be sure to detach the CAsyncSocket object
	in the first thread and attach a different CAsyncSocket object in the second
	thread. The following code snippet shows how to do it.
	
	Code Sample
	-----------
	
	  // ...
	  class CSockThread : public CWinThread
	  {
	  // ... Other function and member declarations
	  protected:
	    CSocket m_sConnected;
	  };
	
	  SOCKET hConnected;
	
	  BOOL CSockThread::InitInstance()
	  {
	    // Attach the socket object to the socket handle
	    // in the context of this thread.
	    // 
	    m_sConnected.Attach(hConnected);
	
	    return TRUE;
	  }
	
	  // This listening socket has been constructed
	  // in the primary thread.
	  // 
	  void CListeningSocket::OnAccept(int nErrorCode)
	  {
	    // This CSocket object is used just temporarily
	    // to Accept the incoming connection.
	    // 
	    CSocket sConnected;
	    Accept(sConnected);
	
	    // Detach the newly accepted socket and save
	    // the SOCKET handle
	    hConnected = sConnected.Detach();
	
	    // After Detaching it, it should no longer be
	    // used in the context of this thread
	
	    // Start the other thread
	    AfxBeginThread(RUNTIME_CLASS(CSockThread));
	  }
	
	REFERENCES
	==========
	
	MFC Technical Note #2 - Although this technical note does not directly address
	the CAsyncSocket class, it does discuss the mapping of handles to objects. The
	relationship between a SOCKET handle and a CAsyncSocket object is maintained in
	much the same way.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbMFC kbThread kbVC210 kbVC400 kbVC500 kbVC600 kbWinsock kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
