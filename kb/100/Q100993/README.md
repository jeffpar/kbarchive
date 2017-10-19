---
layout: page
title: "Q100993: HOWTO: Create Additional Views with CreateNewFrame() Function"
permalink: /kb/100/Q100993/
---

## Q100993: HOWTO: Create Additional Views with CreateNewFrame() Function

	Article: Q100993
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpD
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CDocTemplate::CreateNewFrame() function creates additional views of a
	document in a multiple document interface (MDI) application written using the
	Microsoft Foundation Class Library. The prototype of the CreateNewFrame()
	function is as follows:
	
	        CFrameWnd * CDocTemplate::CreateNewFrame(CDocument *, CFrameWnd *)
	
	To call this function, specify a pointer to a CDocument object (the document for
	which the function will create a view) and a pointer to a frame window that has
	properties to duplicate. Typically, the second parameter of the function is
	NULL.
	
	When an application calls CreateNewFrame(), the function creates a new frame
	window and a view in the frame window. The frame window type and view type
	depend on the document template (CDocTemplate) associated with the document
	specified in the CreateNewFrame() call.
	
	MORE INFORMATION
	================
	
	To better understand how to use CreateNewFrame(), it might be useful to review
	two examples.
	
	The first example is the WINMDI.CPP file in the Microsoft Foundation Class
	Library source code. WINMDI.CPP defines the function CMIDFrameWnd::OnWindowNew()
	that calls CreateNewFrame() to add an additional frame and view for a specified
	document. The application calls OnWindowNew() each time the user selects New
	from the MDI application's Windows menu.
	
	The OnWindowNew() function contains two significant lines of code, as follows:
	
	        CFrameWnd * pFrame =
	              pTemplate->CreateNewFrame(pDocument, pActiveChild);
	        pTemplate->InitialUpdateFrame(pFrame, pDocument);
	
	This code creates and displays the new frame window and document view.
	
	The other example is the DOCMULTI.CPP file, also in the Microsoft Foundation
	Class Library source code. The CMultiDocTemplate::OpenDocumentFile() function
	includes the following code:
	
	        CFrameWnd * pFrame = CreateNewFrame(pDocument, NULL);
	
	NOTE: The second parameter is NULL because the design of the OpenDocumentFile()
	function assumes that the programmer is not interested in duplicating any of the
	other frames that contain views of this document.
	
	The CHKBOOK sample also demonstrates creating additional frames and views for
	documents. In CHKBOOK.CPP, the CChkBookApp::OpenDocumentFile() function includes
	the following code:
	
	        CChkBookDoc * pDoc =
	              (CChkBookDoc*)CWinApp::OpenDocumentFile(lpszFileName);
	
	        if (pDoc == NULL)
	               return NULL;
	
	        CMDIChildWnd * pframe =
	              ((CMDIFrameWnd *)AfxGetApp()->m_pMainWnd)->MDIGetActive();
	
	        CFrameWnd * pNewFrame =
	              m_pCheckViewTemplate->CreateNewFrame(pDoc, NULL);
	        if (pNewFrame == NULL)
	           return pDoc;
	        m_pCheckViewTemplate->InitialUpdateFrame(pNewFrame, pDoc);
	
	Here are two points to consider when you use the CreateNewFrame():
	
	- The source code for CDocTemplate::CreateNewFrame() is in DOCTEMPL.CPP. It
	  includes the following code:
	
	        if (!pFrame->LoadFrame(m_nIDResource,
	             WS_OVERLAPPEDWINDOW | FWS_ADDTOTITLE, // default frame styles
	             NULL, &context)
	
	  Because this code creates the frame window with a NULL parent window, the
	  Microsoft Foundation Class Library uses the application's main window as the
	  parent window.
	
	- CreateNewFrame() creates both a frame and a view; not only a view.
	
	If, for some reason, CreateNewFrame() does not quite address your situation, the
	source code for CreateNewFrame() is quite useful to demonstrate the steps
	required to create frames and views.
	
	Additional query words: change view
	
	======================================================================
	Keywords          : kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
