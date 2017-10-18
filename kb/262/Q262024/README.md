---
layout: page
title: "Q262024: HOWTO: Use CPropertySheet as a Child of CSplitterWnd"
permalink: kb/262/Q262024/
---

## Q262024: HOWTO: Use CPropertySheet as a Child of CSplitterWnd

	Article: Q262024
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDlg kbDocView kbMFC kbPropSheet kbDSupport kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a property sheet or tabbed view on the left
	or right pane of a splitter window (CSplitterWnd), similar to the MSDN library
	property sheet.
	
	MORE INFORMATION
	================
	
	Steps to Create a Sample Project:
	---------------------------------
	
	1. Create a Microsoft Foundation Class Library (MFC) AppWizard (.exe) based
	  project named Sample.
	
	2. In step 1 of the MFC AppWizard, select the Single Document check box.
	
	3. For steps 2 through 4 of the MFC AppWizard, select the default settings.
	
	4. In step 5 of the MFC AppWizard, select the Windows Explorer check box as the
	  project style.
	
	5. For step 6 of the MFC AppWizard, select the default setting.
	
	6. Form the Project menu, point to Add to Project, and then select Components
	  and Controls.... Under Visual C++ Components, select Property Sheet, and then
	  click Insert and OK.
	
	7. In the Property Sheet wizard, select Property Sheet, select Yes for Modeless,
	  and then give CSampleView access to this property sheet. Select the default
	  for the remaining items on the wizard. Close the Components and Controls
	  dialog box. The property sheet is displayed in the right pane.
	
	8. Add a protected member variable to CSampleView, as demonstrated in the
	  following example:
	
	  protected:
	           CMyPropertySheet* m_pSheet;
	
	9. Add the following line to the CSampleView Constructor:
	
	  m_pSheet = new CMyPropertySheet();
	
	10. Add a WM_CREATE message to CSampleView with Windows Message and Event
	  Handler, and then add the following code to the handler:
	
	  m_pSheet->Create(this,WS_CHILD | WS_VISIBLE | WS_THICKFRAME);
	
	The code for the handler looks like the following:
	
	  int CSampleView::OnCreate(LPCREATESTRUCT lpCreateStruct) 
	  {
	  	if (CListView::OnCreate(lpCreateStruct) == -1)
	  		return -1;
	  	
	  	m_pSheet->Create(this,WS_CHILD | WS_VISIBLE | WS_THICKFRAME);
	  	return 0;
	  }
	
	11. Use Windows Message and Event Handler to add a WM_SIZE message to
	  CSampleView, and then add the following code to the handler:
	
	  void CSampleView::OnSize(UINT nType, int cx, int cy) 
	  {
	  	CListView::OnSize(nType, cx, cy);
	  	
	  	// TODO: Add your message handler code here
	  	m_pSheet->MoveWindow(CRect(0,0,cx,cy));
	  	m_pSheet->GetTabControl()->MoveWindow(0,0,cx,cy);
	  }
	
	12. Use the Windows Message and Event Handler to add a WM_DESTROY message to
	  CSampleView, and then add the following code to the handler:
	
	  void CSampleView::OnDestroy() 
	  {
	      CListView::OnDestroy();
	      m_pSheet->DestroyWindow();
	  }
	
	13. Select Build, and then select Rebuild All. Correct any errors, and then
	  execute the sample.
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDlg kbDocView kbMFC kbPropSheet kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
