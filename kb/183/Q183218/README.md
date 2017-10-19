---
layout: page
title: "Q183218: HOWTO: Subclass a Dialog Item in ATL"
permalink: /kb/183/Q183218/
---

## Q183218: HOWTO: Subclass a Dialog Item in ATL

	Article: Q183218
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbATL200 kbATL210 kbCtrl kbDlg kbVC420 kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL kbArchite
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. Part or all of the information in this article applies to managed Visual C++ code and may be applied only by using the .NET Framework.
	
	SUMMARY
	=======
	
	This article describes how to subclass a control on the dialog box resource
	template using ATL.
	
	MORE INFORMATION
	================
	
	You need to perform the following steps to subclass a control, such as the
	ComboBox, on the dialog template in an ATL project:
	
	1. Declare a member of type CContainedWindow in the CDialogImpl-derived class
	  for the Dialog Template as:
	
	     CContainedWindow   m_ComboBox;
	
	2. Initialize the CContainedWindow member in the constructor of the
	  CDialogImpl-derived class (CMyDialog class) with the appropriate class name
	  as:
	
	     CMyDialog::CMyDialog() : m_ComboBox(_T("COMBOBOX"), this, 1)
	
	3. Add WM_INITDIALOG and WM_DESTROY message handlers, and an Altered Message Map
	  (ALT_MSG_MAP), to the default Message Map of the CDialogImpl-derived class.
	  The Altered Message Map is used to trap messages that are sent to the
	  subclassed control, as in the following example:
	
	  Sample Code:
	
	  BEGIN_MSG_MAP(CMyDialog)
	     MESSAGE_HANDLER(WM_INITDIALOG, OnInitDialog)
	     MESSAGE_HANDLER(WM_DESTROY, OnDestroy)
	
	  ALT_MSG_MAP(1)   // Handlers for the subclassed combo box.
	     MESSAGE_HANDLER(WM_RBUTTONDOWN, OnRBtnDown) // Trap a right[ASCII 150]click.
	  END_MSG_MAP()
	
	4. In the WM_INITDIALOG handler of the CDialogImpl-derived class, subclass the
	  ComboBox as:
	
	     m_ComboBox.SubclassWindow(::GetDlgItem(m_hWnd,IDC_SUB_COMBOBOX));
	
	5. In the WM_DESTROY handler of the CDialogImpl derived class unsubclass the
	  ComboBox as:
	
	     m_ComboBox.UnsubclassWindow();
	
	The previous steps ensure that the ALT_MSG_MAP traps the messages meant for the
	subclassed control. They also work for a property page in an ATL control instead
	of a standard dialog box.
	
	Additional query words: ocx kbATL200 kbATL210 kbATL300 kbvc400 kbvc410 kbvc420 kbvc500 kbvc600 kbserver kbctrl
	
	======================================================================
	Keywords          : kbATL200 kbATL210 kbCtrl kbDlg kbVC420 kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,3.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
