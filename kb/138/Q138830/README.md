---
layout: page
title: "Q138830: FIX: Dismissing Splash Screen from Component Causes Assertion"
permalink: /kb/138/Q138830/
---

## Q138830: FIX: Dismissing Splash Screen from Component Causes Assertion

{% raw %}

	Article: Q138830
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dismissing a Splash Screen Component inserted from the Component Gallery results
	in an Assertion failure in Wincore.cpp on line 863. This happens only when you
	try to dismiss the splash screen early by clicking on a mouse button or pressing
	a key on the keyboard.
	
	CAUSE
	=====
	
	Following is part of the code inserted by the component that is relevant to this
	problem:
	
	     CWinApp derived class' PreTranslateMessage:
	
	        BOOL CMyApp::PreTranslateMessage(MSG* pMsg)
	        {
	          CSplashWnd::PreTranslateAppMessage(pMsg);
	
	          return CWinApp::PreTranslateMessage(pMsg);
	        }
	
	The CSplashWnd::PreTranslateAppMessage() looks like this:
	
	     void CSplashWnd::PreTranslateAppMessage()
	     {
	       if (c_pSplashWnd == NULL)
	         return;
	
	      if (pMsg->message == WM_KEYDOWN ||
	          pMsg->message == WM_SYSKEYDOWN ||
	          pMsg->message == WM_LBUTTONDOWN ||
	          pMsg->message == WM_RBUTTONDOWN ||
	          pMsg->message == WM_MBUTTONDOWN ||
	          pMsg->message == WM_NCLBUTTONDOWN ||
	          pMsg->message == WM_NCRBUTTONDOWN ||
	          pMsg->message == WM_NCMBUTTONDOWN)
	          {
	            c_pSplashWnd->HideSplashScreen();
	          }
	      }
	
	      void CSplashWnd::HideSplashScreen()
	      {
	        DestroyWindow();
	        AfxGetMainWnd()->UpdateWindow();
	      }
	
	If a key is pressed while the splash screen is displayed, HideSplashScreen() is
	called, which destroys the window. When the PreTranslateAppMessage() function
	returns, CWinApp::PreTranslateMessage() is called for the message when its
	window has been destroyed already.
	
	RESOLUTION
	==========
	
	This problem can be avoided by not calling CWinApp::PreTranslateMessage() if the
	splash screen window has alaredy been destroyed. Make the following
	modifications to accomplish this:
	
	1. Change the CWinApp derived class' PreTranslateMessage() from what is show in
	  the "Cause" section of this article to the following:
	
	     BOOL CMyApp::PreTranslateMessage(MSG* pMsg)
	     {
	      if (CSplashWnd::PreTranslateAppMessage(pMsg))
	        return TRUE;
	
	      return CWinApp::PreTranslateMessage(pMsg);
	     }
	
	2. Change the prototype and implementation of the
	  CSplashWnd::PreTranslateAppMessage() function so that it returns a BOOL as
	  follows:
	
	  a. In the .h file, change the prototype so that it returns BOOL:
	
	        BOOL PreTranslateAppMessage(MSG* pMsg);
	
	  b. In the .cpp file, change the implementation of this function from what is
	     shown in the "Cause" section of this article to this:
	
	        BOOL CSplashWnd::PreTranslateAppMessage(MSG* pMsg)
	        {
	          if (c_pSplashWnd == NULL)
	            return FALSE;
	
	          if (pMsg->message == WM_KEYDOWN ||
	              pMsg->message == WM_SYSKEYDOWN ||
	              pMsg->message == WM_LBUTTONDOWN ||
	              pMsg->message == WM_RBUTTONDOWN ||
	              pMsg->message == WM_MBUTTONDOWN ||
	              pMsg->message == WM_NCLBUTTONDOWN ||
	              pMsg->message == WM_NCRBUTTONDOWN ||
	              pMsg->message == WM_NCMBUTTONDOWN)
	              {
	                c_pSplashWnd->HideSplashScreen(); // this destroys the window
	                return TRUE;  // You don't want to call
	                              // CWinApp::PreTranslateMessage
	              }
	          return FALSE;
	        }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
