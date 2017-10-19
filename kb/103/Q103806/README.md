---
layout: page
title: "Q103806: PRB: C2642 Error When Adding Message Handler"
permalink: /kb/103/Q103806/
---

## Q103806: PRB: C2642 Error When Adding Message Handler

	Article: Q103806
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message can occur after adding a message handler for a class
	when using the Microsoft Foundation Classes (MFC):
	
	  error C2642: cast to pointer to member must be from related pointer to member
	
	CAUSE
	=====
	
	This compiler error message occurs if a window message handler macro has been
	added to the message map of a class that is not derived from CWnd. For example,
	if you declare a class as
	
	     class CMyApp: public CWinApp
	     {
	        ...
	        DECLARE_MESSAGE_MAP()
	        afx_msg LRESULT OnMyRegisteredMessage( WPARAM, LPARAM );
	        ...
	     };
	
	with a message map such as the following
	
	     BEGIN_MESSAGE_MAP(CMyApp,CWinApp)
	        ON_REGISTERED_MESSAGE( MyMSGID, OnMyRegisteredMessage )
	     END_MESSAGE_MAP()
	
	the C2642 error will occur. Examine the macro ON_REGISTERED_MESSAGE() in
	AFXMSG_.H; you can see why the error occurs. Here is the definition of the
	macro:
	
	     // For registered Windows messages
	     #define ON_REGISTERED_MESSAGE(nMessageVariable, memberFxn) \ 
	       { 0xC000, 0, (UINT)(UINT NEAR*)(&nMessageVariable), \ 
	       /*implied 'AfxSig_lwl'*/ \ 
	       (AFX_PMSG)(AFX_PMSGW)  <not actual line break>
	       (LRESULT (AFX_MSG_CALL CWnd::*)(WPARAM, LPARAM))memberFxn },
	
	In MFC 4.0 (included with Visual C++ 4.0), this macro is defined as:
	
	     // for Registered Windows messages
	     #define ON_REGISTERED_MESSAGE(nMessageVariable, memberFxn) \ 
	       { 0xC000, 0, 0, 0, (UINT)(UINT*)(&nMessageVariable), \ 
	       /*implied 'AfxSig_lwl'*/ \ 
	       (AFX_PMSG)(AFX_PMSGW)  <not actual line break>
	       (LRESULT (AFX_MSG_CALL CWnd::*)(WPARAM, LPARAM))memberFxn },
	
	Notice that the function pointer is cast to a pointer to a function in the CWnd
	scope. In the example above, CMyApp is derived only from CWinApp. As it does not
	have CWnd as a base class, CMyApp will not receive window messages. It only
	receives command messages that are sent through the command routing process.
	
	RESOLUTION
	==========
	
	The following are two possible workarounds to resolve the problem:
	
	- Trap the message in a CWnd object. If necessary, then send a WM_COMMAND
	  message or notification to the CCmdTarget.
	
	-or-
	
	- Trap the message in a CWnd object and then call a member function of the
	  intended object directly.
	
	MORE INFORMATION
	================
	
	Message maps contain six different categories of messages:
	
	- Control notification messages
	
	- Update command UI messages
	
	- Command messages
	
	- VBX and OCX event notifications
	
	- Normal window messages
	
	- Registered window messages
	
	The first four categories are notifications that are routed through MFC's
	command-routing methods. You can handle these messages in any CCmdTarget-
	derived class.
	
	The last two categories are standard window messages and can be handled only in a
	CWnd-derived class. These messages are not routed via the framework's command
	routing mechanism.
	
	REFERENCES
	==========
	
	Information about command routing can be found in Chapter 3 of the "Class
	Library Reference," MFC Technical Note 21, and Chapter 6 of the "Class Library
	User's Guide."
	
	Additional query words: 7.00 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
