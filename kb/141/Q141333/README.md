---
layout: page
title: "Q141333: VSWAP Demos Multiple-View Switching in SDI"
permalink: /kb/141/Q141333/
---

## Q141333: VSWAP Demos Multiple-View Switching in SDI

{% raw %}

	Article: Q141333
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbDocView kbMFC KbUIDesign kbVC150 kbVC152 kbGrpDSMFCATL kbNoUpd
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VSWAP demonstrates methods of switching between multiple views on a single
	document in a single-document interface (SDI) application. VSWAP displays two
	form views and a normal view that displays the list of data collected in the two
	form views.
	
	NOTE: This is the 16-bit version of this sample. There is an equivalent 32-bit
	sample available under the name VSWAP32.
	
	This sample application demonstrates using DDX/DDV (dialog data exchange/dialog
	data validation), with correct document updating and data validation when
	switching between views. It also correctly catches unsaved/unvalidated data when
	the application is closed.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Vswap.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After downloading the file, use the following command to extract the sample and
	build the appropriate directory structure:
	
	  VSWAP.EXE -d
	
	MORE INFORMATION
	================
	
	The most important implementations of this are in:
	
	  CVswapApp::InitInstance
	  CVswapApp::SwitchView
	  CVswapApp::SaveActiveViewsData
	
	The standard InitInstance code creates an initial frame, document, and view
	during the call to OnFileNew. The code added to the end of the InitInstance in
	this sample creates the view objects for the extra views used in this
	application and stores their pointers in a CVswapApp member array. It then
	cycles through a loop which creates the windows for the view objects. Each view
	window is created with a unique child window ID and a CCreateContext object that
	associates each view with the same CDocument object, which was created by
	OnFileNew. Finally, the sample code triggers the OnInitialUpdate for the extra
	views.
	
	The SwitchView function created in this sample swaps the current view with a
	previously hidden view. It accomplishes this by first switching their child
	window IDs. This is necessary because MFC relies on the standard view pane
	having the child window ID of AFX_IDW_PANE_FIRST. The rest of the code hides the
	current view and tells MFC to repaint and begin using the new view.
	
	The SaveActiveViewsData is used to save the information from the active view to
	the document object. It is called by SwitchView whenever a view is switched.
	SaveActiveViewsData subsequently calls the view's SetToDoc, which actually
	updates the data from the form view to the document by calling UpdateData with
	an argument of TRUE. This function uses the DDX/DDV functions specified in the
	view's DoDataExchange.
	
	Sample Code
	-----------
	
	     The SwitchView function is included here as a reference.
	
	     CView* CVswapApp::SwitchView( UINT nIndex )
	     {
	         ASSERT( nIndex >=0 && nIndex < NUMVIEWS );
	
	         CView* pNewView = m_pViews[nIndex];
	
	         CView* pActiveView =
	         ((CFrameWnd*) m_pMainWnd)->GetActiveView();
	
	         if ( !pActiveView )    // No currently active view
	             return NULL;
	
	         if ( pNewView == pActiveView )    // Already there
	             return pActiveView;
	
	         // Update Doc's data if needed
	         // Don't change view if data valiation fails
	         if ( ! SaveActiveViewsData() )
	         {
	             return pActiveView;
	         }
	
	         m_nCurView = nIndex;    // Store the new current view's index
	
	         // exchange view window IDs so RecalcLayout() works
	         UINT temp = ::GetWindowWord(pActiveView->m_hWnd, GWW_ID);
	         ::SetWindowWord(pActiveView->m_hWnd, GWW_ID,
	               ::GetWindowWord(pNewView->m_hWnd, GWW_ID));
	         ::SetWindowWord(pNewView->m_hWnd, GWW_ID, temp);
	
	         // Display and update the new current view - hide the old one
	         pActiveView->ShowWindow(SW_HIDE);
	         pNewView->ShowWindow(SW_SHOW);
	         ((CFrameWnd*) m_pMainWnd)->SetActiveView(pNewView);
	         ((CFrameWnd*) m_pMainWnd)->RecalcLayout();
	         pNewView->Invalidate();
	         return pActiveView;
	     }
	
	REFERENCES
	==========
	
	For examples of other applications that switch views, please refer to the
	following SAMPLES:
	
	  COLLECT (SDI)
	  ENROLL  (SDI)
	  VWRPLC  (MDI)
	  SPLIT   (Splitter).
	
	For more information on DDX and DDV routines, please see Technical Note 26: DDX
	and DDV Routines in the Microsoft Development Library.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q99562 Switching Views in a Single Document Interface Program
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: VSWAP VSWAP32
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbDocView kbMFC KbUIDesign kbVC150 kbVC152 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52
	
	=============================================================================
	

{% endraw %}
