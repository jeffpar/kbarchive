---
layout: page
title: "Q195032: PRB: Incorrect Function Signatures May Cause Problems in Release"
permalink: /kb/195/Q195032/
---

## Q195032: PRB: Incorrect Function Signatures May Cause Problems in Release

	Article: Q195032
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When developing applications in Visual C++ with MFC, you may receive an invalid
	page fault in Mfc42.dll in release builds due to an incorrect function signature
	for any of the following MFC macros:
	
	  ON_MESSAGE()
	  ON_REGISTERED_MESSAGE()
	  ON_THREAD_MESSAGE()
	  ON_REGISTERED_THREAD_MESSAGE()
	
	CAUSE
	=====
	
	The message handlers for ON_MESSAGE(), ON_REGISTERED_MESSAGE(),
	ON_THREAD_MESSAGE(), and ON_REGISTERED_THREAD_MESSAGE() require the programmer
	to have the correct function signatures. By not having a correct function
	signature for the handler, an invalid page fault in Mfc42.dll results after the
	handler executes in release builds. A crash in debug builds does not occur
	because the stack frame is set up differently for debug builds than it is for
	release builds.
	
	RESOLUTION
	==========
	
	Make sure your message handlers for ON_MESSAGE(), ON_REGISTERED_MESSAGE(),
	ON_THREAD_MESSAGE(), and ON_REGISTERED_THREAD_MESSAGE() have the correct
	signatures.
	
	The correct signature for ON_MESSAGE() is:
	
	     afx_msg LRESULT OnMyMsg(WPARAM, LPARAM)
	
	The correct signature for ON_REGISTERED_MESSAGE is:
	
	     afx_msg LRESULT OnMyRegisteredMsg(WPARAM, LPARAM)
	
	The correct signature for ON_THREAD_MESSAGE is:
	
	     afx_msg void OnMyThreadMsg(WPARAM, LPARAM)
	
	The correct signature for ON_REGISTERED_THREAD_MESSAGE is:
	
	     afx_msg void OnMyRegisteredThreadMsg(WPARAM, LPARAM)
	
	For signatures for other versions of Visual C++, please consult help for
	ON_MESSAGE(), ON_REGISTERED_MESSAGE(), ON_THREAD_MESSAGE() and
	ON_REGISTERED_THREAD_MESSAGE().
	
	To get a compile-time error when using these macros, you can re-define the macros
	after the "#include <afxwin.h>" line in your Stdafx.h file. The code below
	uses the static_cast<> operator to aid the compiler and developer by doing
	strict type conversion on the function pointer:
	
	     #undef  ON_MESSAGE
	     #define ON_MESSAGE(message, memberFxn)    \ 
	         { message, 0, 0, 0, AfxSig_lwl, \ 
	             (AFX_PMSG) (AFX_PMSGW) (static_cast< LRESULT (AFX_MSG_CALL
	     CWnd::*)(WPARAM, LPARAM) > (&memberFxn)) },
	   
	
	     #undef  ON_REGISTERED_MESSAGE
	     #define ON_REGISTERED_MESSAGE(nMessageVariable, memberFxn) \ 
	        { 0xC000, 0, 0, 0, (UINT)(UINT*)(&nMessageVariable), \ 
	           (AFX_PMSG)(AFX_PMSGW)(static_cast<LRESULT (AFX_MSG_CALL
	     CWnd::*)(WPARAM, LPARAM)>(&memberFxn)) },
	   
	
	     #undef  ON_THREAD_MESSAGE
	     #define ON_THREAD_MESSAGE(message, memberFxn) \ 
	        { message, 0, 0, 0, AfxSig_vwl, \ 
	           (AFX_PMSG)(AFX_PMSGT)(static_cast<void (AFX_MSG_CALL
	     CWinThread::*)(WPARAM, LPARAM)>(&memberFxn)) },
	   
	
	     #undef  ON_REGISTERED_THREAD_MESSAGE
	     #define ON_REGISTERED_THREAD_MESSAGE(nMessageVariable, memberFxn) \ 
	        { 0xC000, 0, 0, 0, (UINT)(UINT*)(&nMessageVariable), \ 
	           (AFX_PMSG)(AFX_PMSGT)(static_cast<void (AFX_MSG_CALL
	     WinThread::*)(WPARAM, LPARAM)>(&memberFxn)) },
	
	The ON_MESSAGE(), ON_REGISTERED_MESSAGE(), ON_THREAD_MESSAGE() and
	ON_REGISTERED_THREAD_MESSAGE() macros are defined in \mfc\include\afxmsg_.h.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Application Wizard MFC dialog project named Sample with default
	  settings.
	
	2. Add the following line of code to the dialog header file above the line class
	  Sample:
	
	        #define WM_MYMSG WM_USER+555
	
	3. Add a custom message handler to the dialog class with incorrect function
	  signature, for example:
	
	        afx_msg void OnMyMsg(void);        //in header file
	        void CSampleDlg::OnMyMsg(void) {}  //in source file
	
	4. Add the following line of code inside of the message handler:
	
	        AfxMessageBox("Got WM_MYMSG");
	
	5. Add a ON_MESSAGE entry in the message map in the dialog source file, for
	  example:
	
	        ON_MESSAGE(WM_MYMSG, OnMyMsg)
	
	6. Add the following line of code inside of the OnInitDialog of the class after
	  CDialog::OnInitDialog();:
	
	        SendMessage(WM_MYMSG);
	
	In debug builds, the message box appears and no invalid page fault occurs. In
	release builds, the message box appears and an invalid page fault in Mfc42.dll
	occurs after you dismiss the message box.
	
	REFERENCES
	==========
	
	ON_MESSAGE() in the Visual C++ Product Documentation.
	
	ON_REGISTERED_MESSAGE() in the Visual C++ Product Documentation.
	
	ON_THREAD_MESSAGE() in the Visual C++ Product Documentation.
	
	ON_REGISTERED_THREAD_MESSAGE() in the Visual C++ Product Documentation.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Nathan
	Manis, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Nathan Manis, Microsoft Corporation
	
	
	Additional query words: crash access violation release debug message map
	
	======================================================================
	Keywords          : kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
