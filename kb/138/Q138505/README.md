---
layout: page
title: "Q138505: HOWTO: Add Context-Sensitive Help Button to Win 95 Dialog Boxes"
permalink: kb/138/Q138505/
---

## Q138505: HOWTO: Add Context-Sensitive Help Button to Win 95 Dialog Boxes

	Article: Q138505
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbui kbCmnDlg kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 k
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 provides DS_CONTEXTHELP as a dialog box style to implement
	context-sensitive help in dialog boxes. The Dialog Editor included with Visual
	C++ versions 2.1 and 2.2, does not provide a way to set this style when
	designing the dialog box. This article shows, by example, how to add the
	context-sensitive help button to the title bar of dialog boxes.
	
	Starting with version 4.0 of Visual C++, the resource editor does allow this
	extended style to be set. However, this causes the resource editor to generate a
	DIALOGEX resource that is not supported on Win32s. Therefore, to stay compatible
	with Win32s, you can still apply the method discussed in this article.
	
	In Visual C++ version 5.0 and 6.0, the resource editor allows you to set both
	options.
	
	In Visual C++.NET, open the Resource View of the project and set the "Context
	Help" property of the dialog box to "True".
	
	MORE INFORMATION
	================
	
	If the DS_CONTEXTHELP style is set for a dialog box, Windows 95 adds a question
	mark button to the title bar of the dialog box. When the user clicks the
	question mark, the mouse pointer changes to a question mark with a pointer. If
	the user then clicks a control in the dialog box, the control receives a WM_HELP
	message.
	
	To set this style, override the OnInitDialog member function of the
	CDialog-derived class, and add the WS_EX_CONTEXTHELP style to the extended
	styles for the dialog box. The following code illustrates this:
	
	     BOOL CAboutDlg::OnInitDialog()
	     {
	          CDialog::OnInitDialog();
	          LONG style = ::GetWindowLong(m_hWnd, GWL_EXSTYLE);
	          style |= WS_EX_CONTEXTHELP;
	          ::SetWindowLong(m_hWnd, GWL_EXSTYLE, style);
	          return TRUE;
	     }
	
	NOTE: DS_CONTEXTHELP is just a placeholder. When the dialog box is created, the
	system checks for DS_CONTEXTHELP and, if it is there, adds WS_EX_CONTEXTHELP to
	the extended style of the dialog box.
	
	Additional query words: kbGrpPropSheet
	
	======================================================================
	Keywords          : kbcode kbui kbCmnDlg kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 kbFAQ 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
