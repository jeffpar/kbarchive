---
layout: page
title: "Q230049: HOWTO: Highlight Row of Multi-Column Report-View CListCtrlR"
permalink: /kb/230/Q230049/
---

## Q230049: HOWTO: Highlight Row of Multi-Column Report-View CListCtrlR

{% raw %}

	Article: Q230049
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbListView kbMFC kbVC400 kbVC500 kbVC600 kbhowto kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The ListView common control in a multi-column report view mode highlights only
	the first column when a row is selected. This behavior is by design.
	
	MORE INFORMATION
	================
	
	To enable complete row selection, you need to send the
	LVM_SETEXTENDEDLISTVIEWSTYLE message to the control and specify the
	LVS_EX_FULLROWSELECT extended style.
	
	Create a CListCtrl derived class, CMyListCtrl. Using ClassWizard, create a
	handler for the WM_CREATE message for CMyListCtrl. Then, in the definition of
	the handler, copy the code shown below. Now use CMyListCtrl in place of
	CListCtrl in your project.
	
	  int CMyListCtrl::OnCreate(LPCREATESTRUCT lpCreateStruct) 
	  {
	     if (CListCtrl::OnCreate(lpCreateStruct) == -1)
	        return -1;
	
	     DWORD dwStyle = ::SendMessage(m_hWnd,LVM_GETEXTENDEDLISTVIEWSTYLE,0,0);
	     dwStyle |= LVS_EX_FULLROWSELECT;
	     ::SendMessage(m_hWnd,LVM_SETEXTENDEDLISTVIEWSTYLE,0,dwStyle);
	
	  // or you could also use
	
	  // ListView_SetExtendedListViewStyle(
	  //            m_hWnd, 
	  //            ListView_GetExtendedListViewStyle(m_hWnd)
	  //            | LVS_EX_FULLROWSELECT);
	
	  // or you could also use
	
	  // SetExtendedStyle(GetExtendedStyle() | LVS_EX_FULLROWSELECT);
	
	     return 0;
	  }
	
	The code above works only for dynamically created list controls. For controls
	created on the dialog resource, similar code should be placed in the
	OnInitDialog function.
	
	REFERENCES
	==========
	
	1. Q147842 HOWTO: Detect a Mouse Click on Any Column of List View Control
	
	2. LISTHDR: Demonstrates the List View and Header Common Controls
	
	3. Q181440 Add Full Row Select Functionality to a ListView Control
	
	  NOTE: Article Q181440 shows how this could be achived in Visual Basic.
	
	4. Q131788 SAMPLE: OdListVw.exe Highlighs Entire Row in a ListView Control[win32
	  sdk]
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand, Microsoft Corporation
	
	
	Additional query words: Select Highlight Report CListCtrl ListView
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbListView kbMFC kbVC400 kbVC500 kbVC600 kbhowto kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
