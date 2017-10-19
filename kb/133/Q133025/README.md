---
layout: page
title: "Q133025: HOWTO: How to Store MFC Printer Information in a Document"
permalink: /kb/133/Q133025/
---

## Q133025: HOWTO: How to Store MFC Printer Information in a Document

	Article: Q133025
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbprint kbMFC kbPrinting kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to store printer information in a CDocument derived
	class. The printer information can then be used to configure a separate printer
	for each document derived from this class. This can be useful if there are
	multiple types of documents (for example, graphs, bitmaps, text, and overheads)
	that need to be printed on different printers. Storing the printer information
	in the document ensures that the proper printer is used for each document type.
	
	MORE INFORMATION
	================
	
	There are two things that need to be considered when storing the printer
	information in the document:
	
	- When copying the information between the application and the document, you
	  must ensure that separate copies of this information are maintained because
	  both the application object and the document free and reallocate memory for
	  the information structures frequently.
	
	- You must trap all changes to the application printer information, so that
	  consistency is maintained between it and the current document object.
	
	In the following sections, sample code is given for each of these
	considerations.
	
	Copying Information
	-------------------
	
	Below is an example of code that could be added to the CWinApp-derived class and
	CDocument-derived class to safely copy information between the objects. It is
	assumed that CMyApp is a class derived from CWinApp, CMyDoc is derived from
	CDocument, and CMyView is derived from CView. You need to add the function
	prototype for SetPrinterDeviceDefaults to the definition of CMyApp in the header
	file.
	
	     // Note: for 32-bit compilers, replace occurrences of _fmemcpy()
	     //       with memcpy() (or add windowsx.h to your include files)
	
	     void CMyApp::SetPrinterDeviceDefaults(HGLOBAL hDevNames,
	                                           HGLOBAL hDevMode)
	     {
	     // Lock the handles to the structures to get pointers
	        LPDEVNAMES pDevNames = (LPDEVNAMES)::GlobalLock(hDevNames);
	        LPDEVMODE  pDevMode  = (LPDEVMODE)::GlobalLock(hDevMode);
	
	     // Free the old printer information if it exists
	        if (m_hDevNames != NULL)
	           ::GlobalFree(m_hDevNames);
	        if (m_hDevMode != NULL)
	           ::GlobalFree(m_hDevMode);
	
	     // Allocate space for the new printer info structures
	        m_hDevNames = ::GlobalAlloc(GPTR, ::GlobalSize(hDevNames));
	        m_hDevMode = ::GlobalAlloc(GPTR, ::GlobalSize(hDevMode));
	
	     // Lock the new handles
	        LPDEVNAMES m_pDevNames = (LPDEVNAMES)::GlobalLock(m_hDevNames);
	        LPDEVMODE  m_pDevMode  = (LPDEVMODE)::GlobalLock(m_hDevMode);
	
	     // Copy the printer information into the document
	        _fmemcpy(m_pDevNames, pDevNames,
	                 (size_t)::GlobalSize(hDevNames));
	        _fmemcpy(m_pDevMode, pDevMode,
	                 (size_t)::GlobalSize(hDevMode));
	
	     // Unlock the handles
	        ::GlobalUnlock(hDevNames);
	        ::GlobalUnlock(hDevMode);
	
	        ::GlobalUnlock(m_hDevNames);
	        ::GlobalUnlock(m_hDevMode);
	     }
	
	The function prototype for CMyDoc::SetPrinterDeviceDefaults() should be added to
	the class definition of CMyDoc in the header file. The following declarations
	should also be added to CMyDoc: "
	
	     HGLOBAL m_hDevMode;
	     HGLOBAL m_hDevNames;
	
	     void CMyDoc::SetPrinterDeviceDefaults()
	     {
	     // Allocate the structure to store the returned printer info
	        PRINTDLG printDlg;
	
	     // Get the printer information
	        AfxGetApp()->GetPrinterDeviceDefaults(&printDlg);
	
	     // Lock the handles to the structures to get pointers
	        LPDEVNAMES pDevNames =
	         (LPDEVNAMES)::GlobalLock(printDlg.hDevNames);
	        LPDEVMODE  pDevMode  = (LPDEVMODE)::GlobalLock(printDlg.hDevMode);
	
	     // Free the old printer information if it exists
	        if (m_hDevNames != NULL)
	          ::GlobalFree(m_hDevNames);
	        if (m_hDevMode != NULL)
	          ::GlobalFree(m_hDevMode);
	
	     // Allocate space for the new printer info structures
	        m_hDevNames = ::GlobalAlloc(GPTR,
	         ::GlobalSize(printDlg.hDevNames));
	        m_hDevMode = ::GlobalAlloc(GPTR, ::GlobalSize(printDlg.hDevMode));
	
	     // Lock the new handles
	        LPDEVNAMES m_pDevNames = (LPDEVNAMES)::GlobalLock(m_hDevNames);
	        LPDEVMODE  m_pDevMode  = (LPDEVMODE)::GlobalLock(m_hDevMode);
	
	     // Copy the printer information into the document
	        _fmemcpy(m_pDevNames, pDevNames,
	                 (size_t)::GlobalSize(printDlg.hDevNames));
	        _fmemcpy(m_pDevMode, pDevMode,
	                 (size_t)::GlobalSize(printDlg.hDevMode));
	
	     // Unlock the handles
	        ::GlobalUnlock(printDlg.hDevNames);
	        ::GlobalUnlock(printDlg.hDevMode);
	
	        ::GlobalUnlock(m_hDevNames);
	        ::GlobalUnlock(m_hDevMode);
	     }
	
	" (without the quotation marks) These routines are similar. They use the same
	code to allocate a new block of memory and copy the information from one set of
	structures to the other. This ensures that no matter what the application object
	or document object does to its respective printer information, the other object
	is not affected.
	
	Trapping All Changes
	--------------------
	
	Below is a code example that initializes the document's information and traps
	OnFilePrint and OnFilePrintSetup. OnFilePrintPreview is not included here
	because its implementation is virtually identical to OnFilePrint.
	
	Here is the modified constructor for the CDocument derived class that initializes
	the new document with the application's current printer information:
	
	     CMyDoc::CMyDoc()
	     {
	     // Initialize the handles to the printer information
	        m_hDevNames = NULL;
	        m_hDevMode = NULL;
	
	     // Initialize printer settings
	        SetPrinterDeviceDefaults();
	     }
	
	The next two member functions, one from the view and the other from the
	application, guarantee that the application uses the document's printer
	information and that the document's information is updated if the user changes
	it.
	
	CMyView::OnFilePrint is a message handler for the ID_FILE_PRINT message, and
	CMyApp::OnFilePrintSetup is a message handler for the ID_FILE_PRINT_SETUP
	message. The message handlers can be added using ClassWizard.
	
	     void CMyView::OnFilePrint()
	     {
	        CMyDoc* pDoc = GetDocument();
	
	     // Set the application's printer information
	        ((CMyApp *)AfxGetApp())->SetPrinterDeviceDefaults(
	                                       pDoc->m_hDevNames,
	                                       pDoc->m_hDevMode);
	
	        CView::OnFilePrint();
	
	     // Set the new printer information
	        pDoc->SetPrinterDeviceDefaults();
	     }
	
	     void CMyApp::OnFilePrintSetup()
	     {
	        CFrameWnd* pFrame = ((CFrameWnd *)m_pMainWnd)->GetActiveFrame();
	
	        CMyDoc* pDoc = (CMyDoc *)pFrame->GetActiveDocument();
	
	     // Set the application's printer information
	        SetPrinterDeviceDefaults(pDoc->m_hDevNames, pDoc->m_hDevMode);
	
	        CWinApp::OnFilePrintSetup();
	
	     // Set the new printer information
	        pDoc->SetPrinterDeviceDefaults();
	     }
	
	Once these code changes are in place, each object derived from the modified
	document class stores its own printer information. Because this could lead to
	confusion for users who are used to the standard global printer configuration
	model, Microsoft recommends that you include the currently selected printer name
	as part of the document title.
	
	Additional query words: kbinf 1.00 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 4.00 4.10
	
	======================================================================
	Keywords          : kbcode kbprint kbMFC kbPrinting kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
