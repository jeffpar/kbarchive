---
layout: page
title: "Q185728: MFCSocs.exe Avoids Two Common MFC Socket Mistakes"
permalink: /kb/185/Q185728/
---

## Q185728: MFCSocs.exe Avoids Two Common MFC Socket Mistakes

	Article: Q185728
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbSample kbAPI kbMFC kbSDKPlatform kbVC500 kbVC600 kbWinsock kbGrpDSNe
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The MFCSocs sample is a minimal MFC application that demonstrates how to use the
	CSocket and CAsyncSocket classes to communicate in a Transmission Control
	Protocol (TCP) connection. This sample is a dialog-based application. Depending
	on the selection in the user interface, the application can run either as a TCP
	server that listens on a certain TCP port, or as a client that connects to a
	server on the same TCP port.
	
	When running as a client, the application uses the CSocket class to communicate
	with the server. When running as a server, the application uses CAsyncSocket to
	listen to connection requests and communicate with the client after the
	connection is established.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Mfcsocs.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	This sample addresses two common mistakes that MFC socket programmers can make:
	
	1. Issuing more than one Receive call in the OnReceive notification function.
	
	  The CSocket class implements blocking for the Receive and Send calls by
	  looping CAsyncSocket Receive and Send calls until all the data has been
	  received or completely sent. Therefore, the socket type of both Csocket and
	  CAysncSocket is nonblocking. For a nonblocking socket, an FD_READ
	  notification that the TCP stack sends to the application indicates data
	  availability. MFC then maps the FD_READ notification to the OnReceive
	  notification call.
	
	  In Windows Sockets, you should not make multiple recv calls within an FD_READ
	  notification unless you are willing to disable FD_READ notifications prior to
	  calling recv. However, CSocket and CAsyncSocket make no provision for doing
	  so. Therefore, you should make only one Receive call per OnReceive function.
	  Under high data transmission rate, if you make more than one Receive call in
	  the OnReceive function, the application might lose FD_READ, have fake
	  FD_READ, or have no FD_READ (hanging).
	
	  You can use CSocket with CArchive and CSocketFile to directly receive and send
	  MFC CObject-derived objects. However, under high data transmission rates, you
	  should not use CSocket with CArchive and CSocketFile within the OnReceive
	  function because they might internally generate multiple Receive calls.
	
	2. Not issuing enough Send calls to make sure all data has been sent when using
	  the CAsyncSocket::Send function.
	
	  When you issue an asynchronous Send call to send a buffer, there are three
	  possible outcomes:
	
	  1. The call returns the number of bytes sent, and the buffer is completely
	     sent
	
	  2. The call returns the number of bytes sent, and the buffer is partially
	     sent
	
	  3. The call returns the WSAEWOULDBLOCK error, and the buffer is not sent.
	
	  In the second case, the program should continue to issue calls to Send until
	  either all the data has been sent or WSAEWOULDBLOCK occurs.
	
	  In the third case, when the TCP/IP stack frees more buffer space, it
	  dispatches an FD_WRITE notification to the application that is mapped to the
	  OnSend notification function by MFC. At this point, the program should
	  continue to send data until either all the data has been sent or
	  WSAEWOULDBLOCK occurs.
	
	  When you use a CSocket Receive and Send outside OnReceive and OnSend (in other
	  words, when you use a default do-nothing OnSend and OnReceive), it is okay to
	  use Receive and Send in a loop or use them with CArchive and CSocketFile.
	
	Steps to Run the Sample
	-----------------------
	
	1. Run the .exe file (exe1) and select Server. This puts the .exe instance in
	  server listening state.
	
	2. Run the .exe again (exe2) either on the same machine or a remote machine.
	  Select Client and type in the name of the machine on which exe1 is running.
	
	3. In exe2, type anything in the Send box. Click Send to make the connection and
	  send it. Click Yes to accept the incoming connection on the server (exe1).
	  Now you can send messages from either exe1 or exe2. Note that once connected,
	  the application does not reconnect when you click Send.
	
	4. If either exe1 or exe2 wants to quit, type "bye" in either application and
	  click Send. To restart communication, go to step 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork kbSample kbAPI kbMFC kbSDKPlatform kbVC500 kbVC600 kbWinsock kbGrpDSNet 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
