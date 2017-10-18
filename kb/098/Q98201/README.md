---
layout: page
title: "Q98201: HOWTO: Change Dialog Box Background Color in MFC 2.0 or Later"
permalink: kb/098/Q98201/
---

## Q98201: HOWTO: Change Dialog Box Background Color in MFC 2.0 or Later

	Article: Q98201
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application developed with the Microsoft Foundation Classes (MFC) version 2.0
	or later can change the background color of its dialog boxes by calling the
	SetDialogBkColor() member function in the CWinApp class.
	
	MORE INFORMATION
	================
	
	SetDialogBkColor() requires two COLORREF values as parameters. The first
	parameter specifies the dialog box background color; the second specifies the
	text color for a control in a dialog box. The application calls
	SetDialogBkColor() in the InitInstance() member function of the CWinApp class.
	For more information on the SetDialogBkColor() function, please refer to the
	"Class Library Reference Guide, Volume 1," or to the online Help file.
	
	The application can use the RGB macro to supply the requested colors. The
	following sample code demonstrates this technique:
	
	     BOOL CTheApp::InitInstance()
	     {
	        TRACE("HELLO WORLD\n");
	
	        // Change colors to red and green.
	        SetDialogBkColor(RGB(192, 0, 19), RGB(19, 192, 0));
	
	        m_pMainWnd = new CMainWindow();
	        m_pMainWnd->ShowWindow(m_nCmdShow);
	        m_pMainWnd->UpdateWindow();
	
	        return TRUE;
	     }
	
	The SetDialogBkColor() function changes the colors of all dialog boxes in an
	application. If each dialog box requires a different background color, process
	the WM_CTLCOLOR message and return a brush that Windows can use to paint the
	dialog box background.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
