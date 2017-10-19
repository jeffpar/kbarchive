---
layout: page
title: "Q174667: HOWTO: Subclass CListBox and CEdit Inside of CComboBox"
permalink: /kb/174/Q174667/
---

## Q174667: HOWTO: Subclass CListBox and CEdit Inside of CComboBox

	Article: Q174667
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbComboBox kbCtrl kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
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
	
	SUMMARY
	=======
	
	While it is simple to directly subclass a combo box control, it is not simple to
	subclass the edit or list box inside a combo box. The problem is that it is
	difficult to get the HWNDs of the child controls in a portable manner.
	
	One safe way to subclass the internal edit and list box controls is to subclass
	them in the WM_CTLCOLORXXX messages. Because Win32 sends separate
	WM_CTLCOLOREDIT and WM_CTLCOLORLISTBOX messages, these messages are safe and
	easy ways to get the HWNDs of the child controls of the combo box.
	
	Below is a CSuperComboBox class, which is an MFC implementation of this method.
	Because MFC routes all the WM_CTLCOLOR messages to OnCtlColor, the subclassing
	takes place there.
	
	MORE INFORMATION
	================
	
	Use ClassWizard to derive a class from CComboBox and add message handlers for
	WM_CTLCOLOR and WM_DESTROY. Then manually edit the header file to add the data
	members, m_edit and m_listbox. Finally, copy the code from the message handlers
	below:
	
	Sample Code
	-----------
	
	     // SuperComboBox.h : header file
	     class CSuperComboBox : public CComboBox
	     {
	     public:
	        CEdit      m_edit;
	        CListBox   m_listbox;
	     protected:
	        afx_msg HBRUSH OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor);
	        afx_msg void OnDestroy();
	     ...
	     };
	
	     // SuperComboBox.cpp : implementation file
	     HBRUSH CSuperComboBox::OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor)
	     {
	        if (nCtlColor == CTLCOLOR_EDIT)
	        {
	           //[ASCII 160][ASCII 160][ASCII 160]Edit control
	           if (m_edit.GetSafeHwnd() == NULL)
	              m_edit.SubclassWindow(pWnd->GetSafeHwnd());
	        }
	        else if (nCtlColor == CTLCOLOR_LISTBOX)
	        {
	           //ListBox control
	           if (m_listbox.GetSafeHwnd() == NULL)
	              m_listbox.SubclassWindow(pWnd->GetSafeHwnd());
	        }
	        HBRUSH hbr = CComboBox::OnCtlColor(pDC, pWnd, nCtlColor);
	        return hbr;
	     }
	
	     void CSuperComboBox::OnDestroy()
	     {
	        if (m_edit.GetSafeHwnd() != NULL)
	           m_edit.UnsubclassWindow();
	        if (m_listbox.GetSafeHwnd() != NULL)
	           m_listbox.UnsubclassWindow();
	        CComboBox::OnDestroy();
	     }
	
	Note that for subclassing to occur, the dialog box must be painted at least once.
	There are cases when the dialog box doesn't paint at all (for example, closing
	the dialog box before it is displayed, hidden dialog boxes). This method may not
	be suitable when access to the subclassed windows are needed in these cases.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Kelly Marie Ward, Microsoft Corporation
	
	
	Additional query words: combobox listbox
	
	======================================================================
	Keywords          : kbcode kbComboBox kbCtrl kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
