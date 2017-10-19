---
layout: page
title: "Q99848: INFO: Use ON_MESSAGE() Macro to Map Less-Common Messages"
permalink: /kb/099/Q99848/
---

## Q99848: INFO: Use ON_MESSAGE() Macro to Map Less-Common Messages

	Article: Q99848
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC600 kbWndwMsg kbGrpDSMFCATL kbArchitecture
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Class Library includes macros that an application can
	include in the message map of a CWnd or CWnd derived object.These macros, such
	as ON_WM_PAINT() and ON_WM_SIZE(), map common messages to default handler
	functions. The Microsoft Foundation Class Library provides macros for all
	standard window messages. To process user-defined message or less-common window
	messages (like WM_COMMNOTIFY), use the ON_MESSAGE() macro. The ON_MESSAGE macro
	must be used in a CWnd derived class. For example, it cannot be used in a
	CWinApp class or a CDocument class because neither of these classes is derived
	from CWnd.
	
	MORE INFORMATION
	================
	
	Here's an example of how an application could use ON_MESSAGE:
	
	    // inside the class declaration
	    afx_msg LRESULT OnMyMessage(WPARAM wParam, LPARAM lParam);
	
	    ...
	
	    #define WM_MYMESSAGE (WM_USER + 100)
	
	    BEGIN_MESSAGE_MAP(CMyWnd, CMyParentWndClass)
	       ON_MESSAGE(WM_MYMESSAGE, OnMyMessage)
	    END_MESSAGE_MAP()
	
	    LRESULT CMyWnd::OnMyMessage(WPARAM WParam, LPARAM LParam)
	    {
	       return (LRESULT)0;
	    }
	
	The function specified by the second parameter of the ON_MESSAGE macro must be a
	function that takes two parameters, a WPARAM and an LPARAM, and returns a
	LRESULT. For more information about the ON_MESSAGE() macro, see Technical Note
	#6 in the MFC Tech Notes Help file distributed with Microsoft Visual C++ version
	1.0 and in the MFC Technical Notes included in the Visual C++ Books Online. Or
	search the Visual C++ Books Online on the keyword "ON_MESSAGE."
	
	Additional query words: kbinf 7.00 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC600 kbWndwMsg kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
