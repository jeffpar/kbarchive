---
layout: page
title: "Q141334: VSWAP32 Demos Multiple-View Switching in SDI"
permalink: /kb/141/Q141334/
---

## Q141334: VSWAP32 Demos Multiple-View Switching in SDI

	Article: Q141334
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbDocView kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VSWAP32 demonstrates methods of switching between multiple views on a single
	document in a single-document interface (SDI) application. VSWAP32 displays two
	form views and a normal view that displays the list of data collected in the two
	form views.
	
	NOTE: This is the 32-bit version of this sample. There is also a 16-bit version
	available called VSWAP.EXE.
	
	This sample application demonstrates using DDX/DDV (dialog data exchange/dialog
	data validation), with correct document updating and data validation when
	switching between views. It also correctly catches unsaved/unvalidated data when
	the application is closed.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Vcswap32.exe now
	  (http://download.microsoft.com/download/vc60pro/Sample/3/WIN98/EN-US/Vswap32.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Vcswap32vcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.17/win98mexp/en-us/Vcswap32vcnet.exe)
	
	Release Date: June 26, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	After downloading the file, use the following command to extract the sample and
	build the appropriate directory structure:
	
	  VSWAP32.EXE -d
	
	MORE INFORMATION
	================
	
	The most important implementations of this are in:
	
	  CVswapApp::InitInstance
	  CVswapApp::SwitchView
	  CVswapApp::SaveActiveViewsData
	
	The standard InitInstance code creates an initial document template, document,
	and view during the call to ProcessShellCommand. The code added to the end of
	InitInstance creates the view objects for the extra views used in this
	application and stores their pointers in a CVswapApp member array. It then
	cycles through a loop which creates the windows for the view objects. Each view
	window is created with a unique child window ID and a CCreateContext object that
	associates each view with the same CDocument object, which was created by
	ProcessShellCommand. Finally, the sample code triggers the OnInitialUpdate for
	the extra views.
	
	In this sample, both views persist for the lifetime of the application; however,
	the application could create the new view dynamically.
	
	The SwitchView function created in this sample swaps the current view with a
	previously hidden view. It accomplishes this by first switching their child
	window IDs. This step is necessary because MFC relies on the standard view pane
	having the child window ID of AFX_IDW_PANE_FIRST. The rest of the code hides the
	current view and tells MFC to repaint and begin using the new view.
	
	The SaveActiveViewsData is used to save the information from the active view to
	the document object. It is called by SwitchView whenever a view is switched.
	SaveActiveViewsData subsequently calls SetToDoc, which actually updates the data
	from the form view to the document by using MFC's DDX/DDV mechanisms in
	DoDataExchange.
	
	Sample Code
	-----------
	
	  The SwitchView function is included here as a reference.
	
	        CView* CVswapApp::SwitchView( UINT nIndex )
	        {
	            ASSERT( nIndex >=0 && nIndex < NUMVIEWS );
	
	            CView* pNewView = m_pViews[nIndex];
	
	            CView* pActiveView =
	            ((CFrameWnd*) m_pMainWnd)->GetActiveView();
	
	            if ( !pActiveView )    // No currently active view.
	                return NULL;
	
	            if ( pNewView == pActiveView )    // Already there.
	                return pActiveView;
	
	            // Update Doc's data if needed
	            // Don't change view if data validation fails
	            if ( ! SaveActiveViewsData() )
	            {
	                return pActiveView;
	            }
	
	            m_nCurView = nIndex;    // Store the new current view's index.
	
	            // Exchange view window ID's so RecalcLayout() works.
	            UINT temp = ::GetWindowLong(pActiveView->m_hWnd, GWL_ID);
	            ::SetWindowLong(pActiveView->m_hWnd, GWL_ID,
	                  ::GetWindowLong(pNewView->m_hWnd, GWL_ID));
	            ::SetWindowLong(pNewView->m_hWnd, GWL_ID, temp);
	
	            // Display and update the new current view - hide the old one.
	            pActiveView->ShowWindow(SW_HIDE);
	            pNewView->ShowWindow(SW_SHOW);
	            ((CFrameWnd*) m_pMainWnd)->SetActiveView(pNewView);
	            ((CFrameWnd*) m_pMainWnd)->RecalcLayout();
	            pNewView->Invalidate();
	            return pActiveView;
	        }
	
	REFERENCES
	==========
	
	For other examples of applications that switch views, please refer to the
	following samples:
	
	  COLLECT   (SDI)
	  ENROLL    (SDI)
	  VWRPLC32  (MDI)
	  SPLIT32   (Splitter).
	
	For more information on DDX and DDV routines, please see Technical Note 26: DDX
	and DDV Routines in the Microsoft Development Library.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: mfc Vcswap32 Vcswap32vcnet
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbDocView kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
