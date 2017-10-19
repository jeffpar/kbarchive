---
layout: page
title: "Q154652: FIX: Timer Callbacks Not Called in MFC 4.2 Applications"
permalink: /kb/154/Q154652/
---

## Q154652: FIX: Timer Callbacks Not Called in MFC 4.2 Applications

	Article: Q154652
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbThread kbVC400bug kbVC410bug kbVC420fix kbWndwMsg kbGrpDSMFCATL kbN
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An MFC 4.2 application that uses ::SetTimer to set up a timer that uses a timer
	callback function (for example, the hWnd argument in the call to SetTimer is
	NULL) never gets the callback function invoked.
	
	If a menu, message box, or modal dialog box is active, then the timer callback
	function is called.
	
	CAUSE
	=====
	
	MFC 4.2 added the capability to add message map entries for messages that are
	posted to the queue but are not destined for any particular window (for example,
	messages posted with PostThreadMessage).
	
	This can be done using the ON_THREAD_MESSAGE macro. To enable this capability, a
	change was made in CWinThread::PreTranslateMessage that prevents any message
	that does not have an HWND from being routed through the message pump.
	Consequently, messages that do not have an HWND are not passed to the Win32
	DispatchMessage API call.
	
	Timer callback functions are invoked through a posted WM_TIMER message. The
	WM_TIMER message has NULL as the hwnd member and the lParam points to the
	callback function. The callback function is invoked by Windows when a WM_TIMER
	message with a NULL hwnd is passed to DispatchMessage.
	
	Because MFC 4.2 does not pass these messages to DispatchMessage, the timer
	callback function will not be called.
	
	RESOLUTION
	==========
	
	Override CWinThread::PreTranslateMessage in the thread that owns the timer.
	
	Remember that CWinApp is derived from CWinThread, and if your timer is
	established in the primary thread then your application will need to override
	PreTranslateMessage in its CWinApp-derived class.
	
	Implement this function as follows:
	
	     BOOL CMyApp::PreTranslateMessage( MSG *pMsg )
	     {
	         // If this is a timer callback message let it pass on through to the
	         // DispatchMessage call.
	         if( (pMsg->message==WM_TIMER) && (pMsg->hwnd==NULL) )
	             return FALSE;
	         ...
	         // The rest of your PreTranslateMessage goes here.
	         ...
	
	         return CWinApp::PreTranslateMessage(pMsg);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the Visual C++ 4.2b
	technology update.
	
	MORE INFORMATION
	================
	
	Your callback might be called when executing a menu, dialog box, or a modal
	dialog box because these operations all use a different message loop. This
	message loop is provided by Windows, and it does not call PreTranslateMessage.
	Instead, it will just pass the messages on to DispatchMessage, and your timer
	callback will be invoked as expected.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbThread kbVC400bug kbVC410bug kbVC420fix kbWndwMsg kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
