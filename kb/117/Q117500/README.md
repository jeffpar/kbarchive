---
layout: page
title: "Q117500: INFO: Using Accelerators with an MFC Modeless Dialog Box"
permalink: kb/117/Q117500/
---

## Q117500: INFO: Using Accelerators with an MFC Modeless Dialog Box

	Article: Q117500
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDlg kbKeyAccel kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchi
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use accelerators with a modeless dialog box, override the
	PreTranslateMessage()function in your derived CDialog class.
	
	MORE INFORMATION
	================
	
	To use accelerators with your modeless dialog box, perform the following steps:
	
	1. Create a modeless dialog box. For additional information, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q103788 Creating a Modeless Dialog Box with MFC Libraries
	
	2. Insert this sample code into the files listed above the code:
	
	     // .h file with your derived CDialog class.
	     class CModeless : public CDialog
	     {
	        .
	      public:
	        virtual BOOL PreTranslateMessage(MSG*);
	        .
	     };
	
	     //.cpp file.
	     BOOL CModeless::PreTranslateMessage(MSG* pMsg)
	     {
	        HACCEL hAccel =
	        ((CMainFrame*)AfxGetApp()->m_pMainWnd)->GetAccelTable();
	        if(!(hAccel &&
	             ::TranslateAccelerator(AfxGetApp()->m_pMainWnd->m_hWnd, hAccel,
	                                    pMsg)))
	             return CDialog::PreTranslateMessage(pMsg);
	        else
	           return TRUE;
	     }
	
	     // Mainfrm.h file, where CMainFrame is the main window class.
	     HACCEL CMainFrame::GetAccelTable() { return m_hAccelTable; }
	
	3. Create the accelerators with App Studio, or with Resource View from the
	  Project Workspace in Visual C++ 32-bit Edition, version 4.0. The accelerators
	  should be in the IDR_MAINFRAME accelerator table. They should also have the
	  same ID as the controls or menu items with which they are associated.
	
	Additional query words: kbinf 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbDlg kbKeyAccel kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture kbAcceleratorKey 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
