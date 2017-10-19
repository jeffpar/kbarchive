---
layout: page
title: "Q154649: FIX: CSocket Operation Hangs if a Timer is Active"
permalink: /kb/154/Q154649/
---

## Q154649: FIX: CSocket Operation Hangs if a Timer is Active

	Article: Q154649
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbnetwork kbMFC kbVC420fix kbWinsock
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A call to CSocket Connect, Accept, Send, or Receive hangs if a timer is active.
	
	CAUSE
	=====
	
	CSocket operations are written using "pseudo-blocking." The WinSock API call is
	not a true blocking call, but if it doesn't return immediately then CSocket will
	call PumpMessages. PumpMessages looks for the FD_xxx notification and the
	CSocket function will not return until the FD_xxx notification arrives.
	
	PumpMessages will not detect the socket notification if a timer is active because
	it looks for WM_TIMER messages first. When a WM_TIMER message arrives, the
	function doesn't look any further for other messages.
	
	The PumpMessages function is looking for WM_TIMER messages because it sets up its
	own timer to cause the application to retry its socket calls and do periodic
	idle-time processing while waiting for the socket notification.
	
	RESOLUTION
	==========
	
	There are two possible resolutions:
	
	1. Disable all timers while making CSocket calls.
	
	2. Override the PumpMessages function so that it only looks for its own WM_TIMER
	  messages and does not pick up other timer messages. This can be done by
	  borrowing the CSocket::PumpMessages function from SOCKCORE.CPP and changing
	  it as follows:
	
	     #if _MFC_VER == 0x0420
	
	     #define _AFX_SOCK_THREAD_STATE AFX_MODULE_THREAD_STATE
	     #define WM_SOCKET_NOTIFY    0x0373
	     #define WM_SOCKET_DEAD      0x0374
	
	     #define _afxSockThreadState AfxGetModuleThreadState()
	
	     #endif
	
	     BOOL CMySocket::PumpMessages(UINT uStopFlag)
	     {
	     #if _MFC_VER != 0x0420
	       return CSocket::PumpMessages(uStopFlag);
	     #else
	
	       // The same socket better not be blocking in more than one place.
	       ASSERT(m_pbBlocking == NULL);
	
	       _AFX_SOCK_THREAD_STATE* pState = _afxSockThreadState;
	
	       ASSERT(pState->m_hSocketWindow != NULL);
	
	       BOOL bBlocking = TRUE;
	       m_pbBlocking = &bBlocking;
	       CWinThread* pThread = AfxGetThread();
	
	       // This is not a timeout in the WinSock sense, but more
	       // like a WM_KICKIDLE to keep message pumping alive
	       UINT nTimerID = ::SetTimer(pState->m_hSocketWindow, 0,
	                                m_nTimeOut, NULL);
	
	       if (nTimerID == 0)
	         AfxThrowResourceException();
	
	       BOOL bPeek = TRUE;
	
	       while (bBlocking)
	       {
	         TRY
	         {
	           MSG msg;
	           if (::PeekMessage(&msg, pState->m_hSocketWindow,
	             WM_SOCKET_NOTIFY, WM_SOCKET_DEAD, PM_REMOVE))
	           {
	             if (msg.message == WM_SOCKET_NOTIFY &&
	                (SOCKET)msg.wParam == m_hSocket)
	             {
	               if (WSAGETSELECTEVENT(msg.lParam) == FD_CLOSE)
	               {
	                 break;
	               }
	               if (WSAGETSELECTEVENT(msg.lParam) == uStopFlag)
	               {
	                 if (uStopFlag == FD_CONNECT)
	                   m_nConnectError = WSAGETSELECTERROR(msg.lParam);
	                 break;
	               }
	             }
	             if (msg.wParam != 0 || msg.lParam != 0)
	               CSocket::AuxQueueAdd(msg.message, msg.wParam, msg.lParam);
	
	             bPeek = TRUE;
	           }
	           else if (::PeekMessage(&msg, pState->m_hSocketWindow,
	             WM_TIMER, WM_TIMER, PM_REMOVE))
	           {
	               break;
	           }
	
	           if (bPeek && ::PeekMessage(&msg, NULL, 0, 0, PM_NOREMOVE))
	           {
	             if (OnMessagePending())
	             {
	               // allow user-interface updates
	               pThread->OnIdle(-1);
	             }
	             else
	             {
	               bPeek = FALSE;
	             }
	           }
	           else
	           {
	             // no work to do -- allow CPU to sleep
	             WaitMessage();
	             bPeek = TRUE;
	           }
	         }
	         CATCH_ALL(e)
	         {
	           TRACE0("Error: caught exception in PumpMessage - continuing.\n");
	           bPeek = TRUE;
	         }
	         END_CATCH_ALL
	       }
	
	       ::KillTimer(pState->m_hSocketWindow, nTimerID);
	
	       if (!bBlocking)
	       {
	         WSASetLastError(WSAEINTR);
	         return FALSE;
	       }
	       m_pbBlocking = NULL;
	
	       ::PostMessage(pState->m_hSocketWindow,WM_SOCKET_NOTIFY,0,0);
	
	       return TRUE;
	
	     #endif // _MFC_VER
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed with the Visual C++ 4.2b
	patch. For more information on this patch, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q156934 PATCH: Visual C++ 4.2b Patch
	
	  Q160491 Information on Files Modified by VC42b Patch: Part 1 of 4
	
	  Q160496 Information on Files Modified by VC42b Patch: Part 2 of 4
	
	  Q160505 Information on Files Modified by VC42b Patch: Part 3 of 4
	
	  Q160506 Information on Files Modified by VC42b Patch: Part 4 of 4
	
	Additional query words: kbVC420bug kbDSupport CAsyncSocket CSocket hangs timer
	
	======================================================================
	Keywords          : kbnetwork kbMFC kbVC420fix kbWinsock 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
