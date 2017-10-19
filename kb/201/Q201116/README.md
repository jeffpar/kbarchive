---
layout: page
title: "Q201116: BUG: CB_SETTOPINDEX and CB_GETTOPINDEX Always Return 0 on Mac"
permalink: /kb/201/Q201116/
---

## Q201116: BUG: CB_SETTOPINDEX and CB_GETTOPINDEX Always Return 0 on Mac

	Article: Q201116
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbMFC kbVC kbVC400bug kbDSupport kbGrpDSMFCATLkbbuglist
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Macintosh, the combo box messages CB_GETTOPINDEX and CB_SETTOPINDEX fail
	and always return zero (0).
	
	CAUSE
	=====
	
	There are no message handlers for these messages in the combo-box window
	procedure in the Windows Portability Library.
	
	RESOLUTION
	==========
	
	Obtain a pointer to the list box portion of the combo box, and use
	LB_GETTOPINDEX and LB_SETTOPINDEX instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The combo-box control is composed of an edit control and a list-box control. For
	additional information about combo boxes, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q65881 INFO: The Parts of a Windows Combo Box and How They Relate
	
	On the Intel side, the edit control is the first child of the combo box. For a
	simple combo box, the Macintosh has the list-box control as the first control.
	
	The window handle to the list box can be obtained using GetWindow. Once a valid
	handle is obtained, using the LB_GETTOPINDEX and LB_SETTOPINDEX messages
	provides the same functionality as CB_GETTOPINDEX and CB_SETTOPINDEX.
	
	The sample code below shows the MFC implementation:
	
	Sample Code:
	
	  class CCtrlsView : public CFormView
	  {
	  public:
	     CComboBox   m_comboindex;
	     int      m_currentIndex;
	  #ifdef _MAC
	     CListBox m_comboList;
	  #endif
	  ...
	  };
	
	  void CCtrlsView::OnInitialUpdate()
	  {
	     CFormView::OnInitialUpdate();
	
	  #ifdef _MAC
	     // Obtain pointer to combo's list box.
	     HWND hComboList = m_comboindex.GetWindow(GW_CHILD)->m_hWnd;
	     ASSERT(hComboList);
	
	     // Verify class name.
	     char className[50];
	     GetClassName(hComboList, className, 50);
	     ASSERT(lstrcmp(className, "ComboLBox") == 0);
	
	     // Subclass to use CListBox.
	     m_comboList.SubclassWindow(hComboList);
	  #endif
	  ...
	  }
	
	  // A simple combo box with "set" and "get" buttons using
	  // the values from an edit control.
	  void CCtrlsView::OnSetindex()
	  {
	     UpdateData(TRUE);
	  #ifndef _MAC
	     m_comboindex.SetTopIndex(m_currentIndex);
	  #else
	     m_comboList.SetTopIndex(m_currentIndex);
	  #endif
	  }
	
	  void CCtrlsView::OnGetindex()
	  {
	  #ifndef _MAC
	     m_currentIndex = m_comboindex.GetTopIndex();
	  #else
	     m_currentIndex = m_comboList.GetTopIndex();
	  #endif
	     UpdateData(FALSE);
	  }
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: Macintosh CB_GETTOPINDEX CB_SETTOPINDEX combobox listbox
	
	======================================================================
	Keywords          : kbHWMAC kbMFC kbVC kbVC400bug kbDSupport kbGrpDSMFCATL kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:4.0,4.0b
	Issue type        : kbbug
	
	=============================================================================
	
