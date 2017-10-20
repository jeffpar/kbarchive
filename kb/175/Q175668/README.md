---
layout: page
title: "Q175668: MultiSoc : Illustrates Using Sockets in Multiple Threads"
permalink: /kb/175/Q175668/
---

## Q175668: MultiSoc : Illustrates Using Sockets in Multiple Threads

{% raw %}

	Article: Q175668
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbSample kbAPI kbMFC kbSDKPlatform kbThread KbUIDesign kbVC kbVC210 kb
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	This sample illustrates how to pass a socket connection between threads in an
	MFC application. The sample consists of two projects, the Server and the Client.
	The server creates a new thread for each connection to communicate with the
	client.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	MultiSoc.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	Server
	------
	
	The server illustrates using sockets in multiple threads in an MFC application.
	The server listens for connections. When a new connection is requested, the
	server accepts the connection and then creates the thread to handle the
	connection. When the server receives a message, it reverses the message and
	sends it back to the client.
	
	In MFC when you have a new connection it is necessary to accept the connection in
	the thread that the listening socket is in. The Accept call requires that you
	pass in a CAsyncSocket object. MFC then sets up everything correctly so that the
	connection can be handle in the thread. If you want to handle this connection in
	a different thread, just passing the MFC object to the thread will not work
	correctly. To correctly set up everything for the connection to be handled in a
	different thread, the following steps are required:
	
	1. Detach the socket handle from the CAsyncSocket object in the thread where the
	  connection was accepted.
	
	2. Pass the socket handle to the thread.
	
	3. In the thread, attach this handle to a CAsyncSocket derived object.
	
	The Attach call in the thread sets up everything correctly for the socket
	notifications to be sent to the thread you want to handle the connection.
	
	The following code from the Server project illustrates this:
	
	OnAccept for the listening socket.
	
	     void CListensoc::OnAccept(int nErrorCode)
	     {
	        // New connection is being established
	
	        CSocket soc;
	
	        // Accept the connection using a temp CSocket object.
	        Accept(soc);
	
	        // Create a thread to handle the connection.
	        // The thread is created suspended so that we can
	        // set variables in CConnectThread before it starts executing.
	        CConnectThread* pThread =
	           (CConnectThread*)AfxBeginThread(
	              RUNTIME_CLASS(CConnectThread),
	              THREAD_PRIORITY_NORMAL,
	              0,
	              CREATE_SUSPENDED);
	     ...
	        // Pass the socket to the thread by passing the socket handle.
	        // You cannot pass a CSocket object across threads.
	        pThread->m_hSocket = soc.Detach();
	
	        // Now start the thread.
	        pThread->ResumeThread();
	
	        CAsyncSocket::OnAccept(nErrorCode);
	     }
	
	InitInstance of the thread.
	
	     BOOL CConnectThread::InitInstance()
	     {
	     ...
	        // Attach the socket handle to a CSocket object.
	        // This makes sure that the socket notifications are sent
	        // to this thread.
	        m_socket.Attach(m_hSocket);
	     ...
	     }
	
	The above code makes sure that the socket is set up correctly in the secondary
	thread.
	
	Client
	------
	
	The client accepts a host name to connect to. Once the connection is made, the
	client allows you to send messages to the server. The client then displays the
	message returned from the server.
	
	The server listens on port 9000. The client tries to connect to this port on the
	specified host.
	
	The projects were created with Visual C++ version 5.0. However the code in the
	samples should apply to the versions of MFC mentioned above.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Sridhar S
	Madhugiri, Microsoft Corporation
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Sridhar S Madhugiri, Microsoft Corporation
	
	
	Additional query words: socket thread multithreaded
	
	======================================================================
	Keywords          : kbfile kbnetwork kbSample kbAPI kbMFC kbSDKPlatform kbThread KbUIDesign kbVC kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbWinsock kbFAQ kbGrpDSNet 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
