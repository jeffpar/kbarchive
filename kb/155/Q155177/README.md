---
layout: page
title: "Q155177: FIX: Sockets Application Hangs or Exhibits Poor Performance"
permalink: /kb/155/Q155177/
---

## Q155177: FIX: Sockets Application Hangs or Exhibits Poor Performance

	Article: Q155177
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbMFC kbVC400bug kbVC410bug kbVC420fix kbWinsock kbGrpDSMFCATL kbNoUpdate
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Foundation Classes (MFC) sockets application seems to hang until a
	message is generated for the application (for example, by moving the mouse over
	a window), or an application appears to take more than two seconds on single
	calls to Receive or Send.
	
	In other cases the socket operations might execute more quickly if messages are
	being continuously generated (for example, by moving the mouse quickly over the
	application's window).
	
	CAUSE
	=====
	
	There is code in Sockcore.cpp that can prevent proper processing of socket
	notification messages if the messages arrive at a very specific time interval.
	The "More Information" section below describes this problem in further detail.
	
	RESOLUTION
	==========
	
	In your CSocket derived class, provide an override of the virtual function
	CSocket::OnMessagePending as follows:
	
	  #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410
	
	  #define WM_SOCKET_NOTIFY  0x0373
	  #define WM_SOCKET_DEAD    0x0374
	  #define WM_KICKIDLE       0x036A
	
	  #endif
	
	  BOOL CMySocket::OnMessagePending()
	  {
	  #if _MFC_VER >= 0x0420
	
	    return CSocket::OnMessagePending();
	
	  #else
	
	    if(CSocket::OnMessagePending())
	      return TRUE;
	
	    MSG msg;
	    // Don't flood the queue with WM_KICKIDLE messages.
	    while(::PeekMessage(&msg,NULL,WM_KICKIDLE,WM_KICKIDLE,PM_REMOVE));
	
	    if(::PeekMessage( &msg,
	                     NULL,
	                     WM_SOCKET_NOTIFY,
	                     WM_SOCKET_DEAD,
	                     PM_NOREMOVE))
	    {
	      // Post another message so that we don't block on the
	      // WaitMessage call in CSocket::OnMessagePending.
	      ::PostMessage(NULL,WM_KICKIDLE,0,0);
	    }
	    return FALSE;
	
	  #endif  // _MFC_VER
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	version 4.2.
	
	MORE INFORMATION
	================
	
	The following code can be found in CSocket::PumpMessages in Sockcore.cpp:
	
	    ...
	
	    if (::PeekMessage(&msg, NULL, 0, 0, PM_NOREMOVE) &&
	        OnMessagePending())
	    {
	      // allow user-interface updates
	      pThread->OnIdle(-1);
	    }
	    else
	    {
	      // no work to do -- allow CPU to sleep
	      WaitMessage();
	    }
	
	The problems mentioned in the [ASCII 147]Symptoms[ASCII 148] section are caused
	by this block of code, for the following reasons:
	
	Application Hangs Until Mouse Moves
	-----------------------------------
	
	The behavior of WaitMessage is such that if a message in the queue has been
	peeked at, then WaitMessage will not return until a new message arrives.
	
	So if the socket notification we are looking for arrives just before the call to
	PeekMessage, then the PeekMessage call looks at it and WaitMessage won't return
	until a new message arrives. So, a new message must be generated before
	WaitMessage breaks out.
	
	Socket Operations Are Very Slow
	-------------------------------
	
	MFC has a built-in protection against cases where notifications are not arriving;
	it provides occasional time-outs so that the socket operation is attempted again
	even though the notification never arrived. The default time-out period is two
	seconds.
	
	If the notification message was peeked at (as described above), then WaitMessage
	won't return even though the operation is ready to be completed. The application
	won't continue for at least two seconds. In some cases, the WM_TIMER message is
	also inadvertently peeked at, in which case the application exhibits the
	behavior shown above (hangs until a new message, such as a WM_MOUSEMOVE
	arrives).
	
	In some situations, even though the application does not hang, it could take two
	seconds to perform the operation even though the notification message for the
	socket action has already arrived. This is what can cause the poor performance.
	
	IMPORTANT NOTE: The CSocket class was written with the assumption that the socket
	has notifications enabled [that is, AsyncSelect(0) has NOT been called]. MFC
	provides protection against some cases where the notification posting has been
	disabled by using a time-out mechanism, which causes the operation to be
	re-tried. However, the workaround shown above does not take into account timer
	messages primarily because it can cause a CPU burden if another timer is active
	in the application. Thus, MFC's mechanism for protecting CSocket objects that
	have disabled their notifications won't necessarily be fixed when this
	workaround is implemented.
	
	So you should ensure that notifications are always enabled for your CSocket
	objects. One of the reasons some developers disable notifications is to prevent
	multiple FD_READ notifications. If that is the case, then perhaps a better
	workaround might be to use IOCtl to determine whether there is data available on
	the socket.
	
	For additional information on this approach, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q138694 FIX: Using CSocket w/ CArchive Causes Block from Extra FD_READ
	
	Additional query words: kbVC400bug kbVC420fix 4.00 4.10 kbDSupport kbdsd CasyncSocket CsocketFile MfcSockets
	
	======================================================================
	Keywords          : kbMFC kbVC400bug kbVC410bug kbVC420fix kbWinsock kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
