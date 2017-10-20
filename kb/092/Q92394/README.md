---
layout: page
title: "Q92394: HOWTO: Filter Keystrokes in Controls Derived from CEdit Class"
permalink: /kb/092/Q92394/
---

## Q92394: HOWTO: Filter Keystrokes in Controls Derived from CEdit Class

{% raw %}

	Article: Q92394
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbKeyIn kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDS
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Using the Microsoft Foundation Classes (MFC), if an application derives an edit
	control of the CEdit class, it can capture messages for that control, process
	the messages, and then pass them to the Default member function for default
	processing, if desired.
	
	MORE INFORMATION
	================
	
	One of the messages a control receives is the WM_CHAR message, which is
	processed by the OnChar member function. By default, OnChar calls the Default
	member function.
	
	Attempting to change the character passed to an edit control using the following
	technique can create problems:
	
	     afx_msg void CMyEdit::OnChar(UINT nChar, UINT nRepCnt, UINT nFlags)
	     {
	        if (nChar == 'a' || nChar == 'A')
	           nChar = 'X';
	
	        CEdit::OnChar(nChar, nRepCnt, nFlags);
	     }
	
	NOTE: This code attempts to change every "A" or "a" character into an "X"
	character by changing the wChar value before calling the base class
	CEdit::OnChar function. However, CEdit::OnChar calls the Default member function
	inherited from CWnd. Default uses the original wParam sent to the edit control
	with the WM_CHAR message and not the wChar value passed to the CEdit::OnChar
	member function.
	
	To perform this type of processing, the application must directly call the
	DefWindowProc member function. The following code demonstrates this technique:
	
	     /*
	        Assume that CMyEdit is derived from the CEdit class.
	     */ 
	
	     afx_msg void CMyEdit::OnChar(UINT nChar, UINT nRepCnt, UINT nFlags)
	     {
	        if (nChar == 'a' || nChar == 'A')
	           nChar = 'X';
	        DefWindowProc(WM_CHAR, nChar, MAKELONG(nRepCnt, nFlags));
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbKeyIn kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
