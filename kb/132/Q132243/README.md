---
layout: page
title: "Q132243: HOWTO: How to Create Controls w/ a 3D Border at Run Time Using M"
permalink: /kb/132/Q132243/
---

## Q132243: HOWTO: How to Create Controls w/ a 3D Border at Run Time Using M

	Article: Q132243
	Product(s): Microsoft C Compiler
	Version(s): ; winnt:2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 21-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Controls placed in a dialog box under Windows 95 have a 3D border. If you want
	to create a control at run time that has a 3D border, specify the
	WS_EX_CLIENTEDGE extended style.
	
	MORE INFORMATION
	================
	
	The new extended-window style WS_EX_CLIENTEDGE specifies that a window is to
	have a 3D border. All controls created by the dialog manager are created with
	that style automatically added. To create a control at run time that has a 3D
	border, you have to add that style yourself.
	
	Because WS_EX_CLIENTEDGE is an extended style, you cannot use the Create() member
	function to create a control. You must call CreateEx(), and pass the appropriate
	Windows class name as well. For example, to create an edit control at run time,
	you could use this code:
	
	     m_Edit.Create(WS_CHILD | WS_BORDER | WS_VISIBLE,
	                   CRect(10,10,100,100),pParent,nID);
	
	Here m_Edit is a CEdit object, pParent is a pointer to a parent window, and nID
	is an ID of an edit control. To add a 3D border, create control by using this
	code:
	
	     m_Edit.CreateEx(WS_EX_CLIENTEDGE,"EDIT","",
	                     WS_CHILD | WS_BORDER | WS_VISIBLE,
	                     10,10,100,100,pParent->GetSafeHwnd(),(HMENU)nID);
	
	NOTE: While Visual C++ versions 2.2 and above define WS_EX_CLIENTEDGE in
	WINUSER.H, Visual C++ version 2.1 does not. Therefore, if you're using version
	2.1, you must include the following definition in your code:
	
	     #define WS_EX_CLIENTEDGE        0x00000200L
	
	If you're using Visual C++ versions 2.2 and above, the WS_EX_CLIENTEDGE constant
	is automatically defined when you include AFXWIN.H, so no additional work is
	necessary.
	
	Keep in mind that the WS_EX_CLIENTEDGE style applies to any window, not just
	controls. In Visual C++ versions 2.2 and above, MFC automatically adds
	WS_EX_CLIENTEDGE for frames and views but not for CWnd-based windows or
	controls.
	
	To create other standard controls, you have to specify their pre-defined Windows
	class name: BUTTON, COMBOBOX, LISTBOX, SCROLLBAR, or STATIC.
	
	REFERENCES
	==========
	
	For more information about Create and CreateEx, please see the Class Library
	Reference in Books Online.
	
	For more information about the new Windows styles, please see the Win32 Software
	Development Kit (SDK) documentation.
	
	Additional query words: kbinf 3D border sunken 2.10 2.20 4.00 runtime run-time
	
	======================================================================
	Keywords          : kbCtrl kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbWin95search kbMFC kbWin95
	Version           : :; winnt:2.1,2.2,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
