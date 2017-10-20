---
layout: page
title: "Q245434: PRB: Serialization with CSocketFile and CArchive Might Stop"
permalink: /kb/245/Q245434/
---

## Q245434: PRB: Serialization with CSocketFile and CArchive Might Stop

{% raw %}

	Article: Q245434
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 28-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, versions 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are doing serialization with the MFC CSocketFile and CArchive classes
	in a multiprocessor environment, an application may stop (hang) while it is
	waiting for data to be received.
	
	CAUSE
	=====
	
	The following are possible causes:
	
	- The read-ahead behavior described by the following Microsoft Knowledge Base
	  article might cause the missing of FD_READ notification from the lower
	  Winsock layer:
	
	  Q192704 PRB: CArchive::Read Might Hang When Using CSocketFile
	
	- The IOCtl(FIONREAD, &nBytes) call inside the CAsyncSocket::DoCallBack
	  class implementation of the Sockcore.cpp file in the MFC source might also be
	  subject to possible error, because of the report of incorrect data count, as
	  described by the following Microsoft Knowledge Base article:
	
	  Q192599 INFO: Avoid Data Peeking in Winsock
	
	RESOLUTION
	==========
	
	Avoid using serialization in network programming. For additional information and
	guidelines, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q185728 SAMPLE: MFCSocs.exe Avoids Two Common MFC Socket Mistakes
	
	  Q192570 MFCAsync: Message-Oriented TCP and Multithreaded Client/Server
	
	Or, avoid data peeking by overriding the MFC CAsyncSocket::DoCallBack class
	implementation by performing the following steps:
	
	1. MF6 and ealier: On the Project menu, click Settings, and then click the
	  General tab. Under the Microsoft Foundation Classes box, click Use MFC in a
	  Static Library. Click the Link tab, click Customize in the Category box, and
	  then click Force File output.
	
	  VC .NET: Select Project, and then right-click and select Properties. Select
	  Configuration Properties, and then on the General tab, select "Use MFC in a
	  Static Library". Select Linker, and then on the command line, type "/FORCE"
	  (without the quotation marks).
	
	2. Append the following to your StdAfx.cpp file:
	
	  void PASCAL CAsyncSocket::DoCallBack(WPARAM wParam, LPARAM lParam)
	  {
	      if (wParam == 0 && lParam == 0)
	          return;
	
	      // Has the socket been closed?
	      CAsyncSocket* pSocket = CAsyncSocket::LookupHandle((SOCKET)wParam, TRUE);
	
	      // If yes, ignore message.
	      if (pSocket != NULL)
	          return;
	
	      pSocket = CAsyncSocket::LookupHandle((SOCKET)wParam, FALSE);
	      if (pSocket == NULL)
	      {
	          // Must be in the middle of an Accept call.
	          pSocket = CAsyncSocket::LookupHandle(INVALID_SOCKET, FALSE);
	          ASSERT(pSocket != NULL);
	          pSocket->m_hSocket = (SOCKET)wParam;
	          CAsyncSocket::DetachHandle(INVALID_SOCKET, FALSE);
	          CAsyncSocket::AttachHandle(pSocket->m_hSocket, pSocket, FALSE);
	      }
	
	      int nErrorCode = WSAGETSELECTERROR(lParam);
	      switch (WSAGETSELECTEVENT(lParam))
	      {
	      case FD_READ:
	          {   // Comment out the data peeking code here
	              //DWORD nBytes;
	              //if (!pSocket->IOCtl(FIONREAD, &nBytes))
	              //  nErrorCode = WSAGetLastError();
	              //if (nBytes != 0 || nErrorCode != 0)
	                  pSocket->OnReceive(nErrorCode);
	          }
	          break;
	      case FD_WRITE:
	          pSocket->OnSend(nErrorCode);
	          break;
	      case FD_OOB:
	          pSocket->OnOutOfBandData(nErrorCode);
	          break;
	      case FD_ACCEPT:
	          pSocket->OnAccept(nErrorCode);
	          break;
	      case FD_CONNECT:
	          pSocket->OnConnect(nErrorCode);
	          break;
	      case FD_CLOSE:
	          pSocket->OnClose(nErrorCode);
	          break;
	      }
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: CSocket CAsyncSocket
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC210 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
