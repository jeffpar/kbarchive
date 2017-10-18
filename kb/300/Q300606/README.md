---
layout: page
title: "Q300606: HOWTO: Design a Resizable MFC Property Sheet"
permalink: kb/300/Q300606/
---

## Q300606: HOWTO: Design a Resizable MFC Property Sheet

	Article: Q300606
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbgrpdsvc
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are times when an application requires more flexibility from the property
	sheets it uses than Microsoft Foundation Classes (MFC) can offer. This article
	demonstrates the steps to implement a resizable property sheet class that also
	contains a menu bar.
	
	MORE INFORMATION
	================
	
	The following instructions show you how to add a new property sheet class to an
	existing MFC project and customize the sheet by handling resize requests and by
	providing a menu for the sheet. These steps demonstrate how to write a base
	class, CMyPropertySheet, that can be used to provide this functionality. This
	new class would be a drop-in replacement for MFC's CPropertySheet and would
	provide the additional functionality described in the "Summary" section.
	
	1. To any MFC based project add a new property sheet by using the component
	  gallery. Accept all the defaults. To do so, from the Project menu, click Add
	  to project, and then click Component and Controls. In the dialog box
	  double-click the "Components" folder and then select Property Sheet.
	
	2. In order to enable resizable borders you must override DoModal() and provide
	  a callback function that will set the appropriate styles for the property
	  sheet. Therefore, you must provide the following two functions (in both the
	  header file and the source file for the CMyPropertySheet class.):
	
	   - The static property sheet callback function, XmnPropSheetCallback():
	
	  // This function must be a STATIC member function. 
	  //Callback to allow us set the default window styles 
	  //    for the property sheet
	  int CALLBACK CMyPropertySheet::XmnPropSheetCallback(HWND hWnd, UINT message, LPARAM lParam)
	  {
	     extern int CALLBACK AfxPropSheetCallback(HWND, UINT message, LPARAM lParam);
	     // XMN: Call MFC's callback
	     int nRes = AfxPropSheetCallback(hWnd, message, lParam);
	
	     switch (message)
	     {
	     case PSCB_PRECREATE:
	        // Set our own window styles
	        ((LPDLGTEMPLATE)lParam)->style |= (DS_3DLOOK | DS_SETFONT
	           | WS_THICKFRAME | WS_SYSMENU | WS_POPUP | WS_VISIBLE | WS_CAPTION);
	        break;
	     }
	     return nRes;
	  }
	   
	
	   - The DoModal() override:
	
	  // Overriding DoModal() allows us to hook our callback into
	  //    the prop sheet creation
	  int CMyPropertySheet::DoModal() 
	  {
	     // Hook into property sheet creation code
	     AFX_OLDPROPSHEETHEADER* psh = GetPropSheetHeader();
	     psh->dwFlags |= PSH_USECALLBACK;
	     psh->pfnCallback = XmnPropSheetCallback;
	     return CPropertySheet::DoModal();
	  }
	
	3. At this point you have a property sheet that you can drag to resize by using
	  the mouse. In order to add a menu, you must provide an override for
	  OnInitDialog(). From the View menu, click Class Wizard, and then select the
	  project and the property sheet class from the Class Wizard dialog box. Next,
	  select the OnInitDialog entry from the Messages drop-down list. The following
	  code fragment provides an override for OnInitDialog():
	
	  BOOL CMyPropertySheet::OnInitDialog() 
	  {
	     BOOL bResult = CPropertySheet::OnInitDialog();
	      
	     // Add a new menu
	     CMenu *pMenu = new CMenu; pMenu->LoadMenu(IDR_PS_MENU);
	     SetMenu(pMenu);
	
	     // Adjust propsheet size to account for the new menu
	     CRect r;  GetWindowRect(&r);
	     r.bottom += GetSystemMetrics(SM_CYMENU);
	     MoveWindow(r);
	
	     return bResult;
	  }
	
	4. You should provide a resize policy. The most straightforward way to do so is
	  to resize the embedded tab control according to the resize request and move
	  the buttons present on the sheet. To do so:
	
	  a. Add the following data members to the CMyPropertySheet class:
	
	  protected:
	     BOOL   m_bNeedInit;
	     CRect  m_rCrt;
	     int    m_nMinCX;
	     int    m_nMinCY;
	
	  b. Initialize these new data members and set m_bNeedInit to TRUE in the
	     CMyPropertySheet constructor:
	
	  CMyPropertySheet::CMyPropertySheet(CWnd* pWndParent)
	  	 : CPropertySheet(IDS_PROPSHT_CAPTION, pWndParent) 	 
	  	 , m_bNeedInit(TRUE)
	  	 , m_nMinCX(0)
	  	 , m_nMinCY(0)
	
	  {
	     AddPage(&m_Page1);
	     AddPage(&m_Page2);
	
	  }
	
	  c. Add the following lines to the end of OnInitDialog():
	
	  BOOL CMyPropertySheet::OnInitDialog() 
	  {
	     // ...
	     // Init m_nMinCX/Y
	     m_nMinCX = r.Width();
	     m_nMinCY = r.Height();
	     // After this point we allow resize code to kick in
	     m_bNeedInit = FALSE;
	     GetClientRect(&m_rCrt);
	
	     return bResult;
	  }
	
	  d. Provide a handler for the WM_SIZE event. From the View menu, click Class
	     Wizard, and then select the project and the property sheet class from the
	     Class Wizard dialog box. Next, select the WM_SIZE entry from the Messages
	     drop-down list. The following is the message handler implementation:
	
	  // Handle WM_SIZE events by resizing the tab control and by 
	  //    moving all the buttons on the property sheet.
	  void CMyPropertySheet::OnSize(UINT nType, int cx, int cy) 
	  {
	     CRect r1; 
	     CPropertySheet::OnSize(nType, cx, cy);
	
	     if (m_bNeedInit)
	        return;
	
	     CTabCtrl *pTab = GetTabControl();
	     ASSERT(NULL != pTab && IsWindow(pTab->m_hWnd));
	      
	     int dx = cx - m_rCrt.Width();
	     int dy = cy - m_rCrt.Height();
	     GetClientRect(&m_rCrt);
	
	     HDWP hDWP = ::BeginDeferWindowPos(5);
	
	     pTab->GetClientRect(&r1); 
	     r1.right += dx; r1.bottom += dy;
	     ::DeferWindowPos(hDWP, pTab->m_hWnd, NULL,
	                      0, 0, r1.Width(), r1.Height(),
	                      SWP_NOACTIVATE|SWP_NOMOVE|SWP_NOZORDER);
	
	     // Move all buttons with the lower right sides
	     for (CWnd *pChild = GetWindow(GW_CHILD);
	          pChild != NULL;
	          pChild = pChild->GetWindow(GW_HWNDNEXT))
	     {
	        if (pChild->SendMessage(WM_GETDLGCODE) & DLGC_BUTTON)
	        {
	           pChild->GetWindowRect(&r1); ScreenToClient(&r1); 
	           r1.top += dy; r1.bottom += dy; r1.left+= dx; r1.right += dx;
	           ::DeferWindowPos(hDWP, pChild->m_hWnd, NULL,
	                            r1.left, r1.top, 0, 0,
	                            SWP_NOACTIVATE|SWP_NOSIZE|SWP_NOZORDER);
	        }
	        // Resize everything else...
	        else
	        {
	           pChild->GetClientRect(&r1); 
	  	 r1.right += dx; r1.bottom += dy;
	  	 ::DeferWindowPos(hDWP, pChild->m_hWnd, NULL, 0, 0, r1.Width(), r1.Height(),SWP_NOACTIVATE|SWP_NOMOVE|SWP_NOZORDER);
	        }
	
	     }
	
	     ::EndDeferWindowPos(hDWP);
	  }
	
	  e. Lastly, you must provide a handler for the WM_GETMINMAXINFO message. From
	     the View menu, click Class Wizard, and then select the project and the
	     property sheet class from the Class Wizard dialog box. Next, select
	     WM_GETMINMAXINFO from the Messages drop-down list. The following is the
	     WM_GETMINMAXINFO handler implementation:
	
	  void CMyPropertySheet::OnGetMinMaxInfo(MINMAXINFO FAR* lpMMI) 
	  {
	     CPropertySheet::OnGetMinMaxInfo(lpMMI);
	     lpMMI->ptMinTrackSize.x = m_nMinCX;
	     lpMMI->ptMinTrackSize.y = m_nMinCY;
	  }
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q143291 HOWTO: Resize CPropertyPages at Run Time
	
	  Q146916 HOWTO: Create a Modeless CPropertySheet with Standard Buttons
	
	Additional query words: property sheet, resize, customize, setmenu
	
	======================================================================
	Keywords          : kbDSupport kbgrpdsvc 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
