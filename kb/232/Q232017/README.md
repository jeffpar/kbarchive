---
layout: page
title: "Q232017: HOWTO: Add Text to Toolbar Buttons"
permalink: /kb/232/Q232017/
---

## Q232017: HOWTO: Add Text to Toolbar Buttons

	Article: Q232017
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbMFC kbToolbar KbUIDesign kbGrpDSMFCATL
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After adding button labels to a toolbar that is already created, it is necessary
	to resize the toolbar to accommodate the labels. This can be done using the
	CToolBar::SetSizes() function.
	
	MORE INFORMATION
	================
	
	A toolbar can display text labels in two different ways: below the button icon
	or to the right of the icon. In order to display it at the right of the icon the
	style bit TBSTYLE_LIST needs to be specified when creating the toolbar.
	
	The following steps show how to add button labels and resize the standard toolbar
	for an AppWizard generated MFC SDI or MDI application. The code handles the case
	of a regular toolbar or a toolbar with the list style set. TBSTYLE_LIST raises
	one problem that you need to be aware of: when hiding the text labels you need
	to remove this style bit in order for the button icons to be drawn correctly.
	
	1. Create an SDI or MDI MFC AppWizard project.
	
	2. Add a class derived from CToolBar to the project; in the code below, this is
	  CMyToolBar.
	
	3. Copy the following code to the .cpp file for the CMyToolBar class.
	
	     struct tbblabel
	     {
	        UINT id;
	        char *label;
	     };
	
	     static tbblabel standardBarLabels[] = 
	     {
	        { ID_FILE_NEW, "File New" },
	        { ID_FILE_OPEN, "File Open" },
	        { ID_FILE_SAVE, "File Save" },
	        { ID_EDIT_CUT, "Cut" },
	        { ID_EDIT_COPY, "Copy" },
	        { ID_EDIT_PASTE, "Paste" },
	        { ID_FILE_PRINT, "Print" },
	        { ID_APP_ABOUT, "About" }
	     };
	
	     void CMyToolBar::SetLabels(BOOL bShow /*= TRUE*/)
	     {
	        if (m_rBigBtn.Size() != CSize(0, 0))
	           return;
	
	        // Get the first button size before adding the labels.
	        GetItemRect(0, &m_rSmallBtn);
	
	        int cButtons = sizeof(standardBarLabels) / sizeof(standardBarLabels[0]);
	        for( int nButton = 0; nButton < cButtons; nButton++ )
	        {
	           int nButtonIndex = CommandToIndex( standardBarLabels[nButton].id );
	           if (!SetButtonText( nButtonIndex, standardBarLabels[nButton].label ))
	              TRACE("failed SetButtonText(%d, \"%s\").\n",
	                     nButtonIndex, standardBarLabels[nButton].label);
	        }
	
	        // Get the first button size after adding the labels.
	        GetItemRect(0, &m_rBigBtn);
	
	        ShowLabels(bShow);
	     } 
	
	     void CMyToolBar::ShowLabels(BOOL bShow /*= TRUE*/)
	     {
	        // Remember that if the toolbar had the TBSTYLE_LIST set 
	        //    the first time ShowLabels() was called.
	        static BOOL bIsList = GetStyle() & TBSTYLE_LIST;
	        // Set the toolbar button sizes.
	        if (bShow)
	        {
	           if (bIsList)
	              ModifyStyle(0, TBSTYLE_LIST);
	           SetSizes(m_rBigBtn.Size(), m_sizeImage);
	        }
	        else
	        {
	           if (bIsList)
	              ModifyStyle(TBSTYLE_LIST, 0);
	           SetSizes(m_rSmallBtn.Size(), m_sizeImage);
	        }
	     }
	
	Note that the last statement in CMyToolBar::ShowLabels() uses the protected
	member variable of CToolBar, m_sizeImage. As this is an undocumented member
	variable of CToolBar, this variable may not exist in future implementations of
	CToolBar.
	
	4. Add a declaration for the SetLabels() and ShowLabels() functions to the
	  CMyToolBar class. Also add two protected data members of type CRect as shown
	  below:
	
	  public:
	  	void SetLabels(BOOL bShow /*= TRUE*/);
	  	void ShowLabels(BOOL bShow /*= TRUE*/);
	  protected:
	  	CRect	m_rBigBtn;
	  	CRect	m_rSmallBtn;
	
	5. Change the type of the CMainFrame::m_wndToolBar member to CMyToolBar. The
	  file where CMyToolBar is defined must be #included in the MainFrm.h file.
	
	6. After the toolbar has been created in CMainFrame::OnCreate() call SetLabels()
	  like this:
	
	  m_wndToolBar.SetLabels(m_wndToolBar.GetStyle() & TBSTYLE_LIST);
	
	  This call ensures that the toolbar is initially displayed with the text labels
	  if the toolbar has the TBSTYLE_LIST style or without, if the toolbar does not
	  have this style.
	
	7. You can now add a message handler to your main frame class that toggles the
	  toolbar labels on/off by calling CMyToolBar::ShowLabels() and RecalcLayout().
	
	  m_wndToolBar.ShowLabels(TRUE);
	  RecalcLayout(TRUE);
	
	REFERENCES
	==========
	
	- CToolBar::SetSizes located in \MFC\SRC\BARTOOL
	
	- CPPCFrameWnd::RecalcLayout() located in \MFC\SRC\WINFRM.CPP.
	
	- Toolbar styles
	
	Additional query words: CToolbarCtrl resize text labels
	
	======================================================================
	Keywords          : kbCmnCtrls kbMFC kbToolbar KbUIDesign kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
