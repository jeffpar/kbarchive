---
layout: page
title: "Q119206: Using WM_COMMNOTIFY in an MFC Application"
permalink: /kb/119/Q119206/
---

## Q119206: Using WM_COMMNOTIFY in an MFC Application

	Article: Q119206
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes (MFC) version 2.0 for Microsoft Windows version
	3.1 does not encapsulate the WM_COMMNOTIFY message and the Windows
	Communications API. Therefore, MFC applications that need to use the Windows
	Communications API have to wrap that API into their classes. This article
	discusses the steps involved in that process.
	
	MORE INFORMATION
	================
	
	The steps to incorporate WM_COMMNOTIFY-based communications support to your
	MFC-based Windows-based application are as follows:
	
	1. Specify a handler for the WM_COMMNOTIFY message using the OnMessage macro.
	  The code to implement this step is shown below:
	
	        // In the class header file,
	        // generated message map functions protected:
	        //{ {AFX_MSG(CMfccommView)
	             afx_msg LRESULT OnCommNotify(WPARAM wParam, LPARAM lParam);
	             <other handlers>
	        //} }AFX_MSG
	        DECLARE_MESSAGE_MAP()
	
	        // In the source file defining the class:
	        BEGIN_MESSAGE_MAP(CMfccommView, CView)
	             //{ {AFX_MSG_MAP(CMfccommView)
	             ON_MESSAGE(WM_COMMNOTIFY, OnCommNotify)
	             <other mappings>
	             //} }AFX_MSG_MAP
	        END_MESSAGE_MAP()
	
	2. Write the handler procedure OnCommNotify() to trap the CN_EVENT, CN_RECEIVE,
	  and CN_TRANSMIT notifications.
	
	3. Because WM_COMMNOTIFY is a message, it is always sent to a window. If you do
	  not already have a window handle to receive this message, use the Create()
	  member of the CWnd class to create a hidden window (do not specify
	  WS_VISIBLE) and use that handle (m_hWnd member) in the call to
	  EnableCommNotification().
	
	  NOTE: Remember that merely creating an instance of CWnd does not create a
	  window. A common error is to derive a class from CWnd and to call
	  EnableCommNotification() in the constructor of the derived class. This fails
	  because the window handle, m_hWnd, is NULL at this point.
	
	4. Because you cannot return values from the constructor, the constructor is not
	  a suitable place for initializing the communications port and device. Perform
	  all initializations outside of the constructor in a member function created
	  for initialization purposes. Remember to check all the return values from the
	  communications API.
	
	Additional query words: 3.10 comm no32bi COM open close
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
