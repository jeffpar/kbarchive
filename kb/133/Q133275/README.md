---
layout: page
title: "Q133275: HOWTO: Print from a Class Other Than CView"
permalink: kb/133/Q133275/
---

## Q133275: HOWTO: Print from a Class Other Than CView

	Article: Q133275
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbprint kbMFC kbPrinting kbVC kbVC150 kbVC200 kbVC400 kbVC410 kbGr
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The standard method to support printing capability in an MFC application is to
	override the OnDraw(CDC* pDC) member function of the CView class that provides
	the pointer to the device context (pDC). If the application does not possess a
	CView class (for example, a dialog-based application), you can use the code
	listed in this article to obtain a pointer to the printing device context to
	implement printing.
	
	MORE INFORMATION
	================
	
	In this example, CMyDialog is publicly derived from CDialog, OnPrintBuf() is a
	message handler that is mapped to BN_CLICKED, and SetPrintAlign() is used to
	select print settings specified to an application. The sample code prints the
	contents of the 'pbuf' buffer.
	
	Sample Code
	-----------
	
	     void CMyDialog::OnPrintBuf()
	         {
	         char   pbuf[100] = "Hello World.";
	         HDC    hdcPrn ;
	
	         // Instantiate a CPrintDialog.
	         CPrintDialog *printDlg =
	             new CPrintDialog(FALSE, PD_ALLPAGES | PD_RETURNDC, NULL);
	
	         // Initialize some of the fields in PRINTDLG structure.
	         printDlg->m_pd.nMinPage = printDlg->m_pd.nMaxPage = 1;
	         printDlg->m_pd.nFromPage = printDlg->m_pd.nToPage = 1;
	
	         // Display Windows print dialog box.
	         printDlg->DoModal();
	
	         // Obtain a handle to the device context.
	         hdcPrn = printDlg->GetPrinterDC();
	         if (hdcPrn != NULL)
	             {
	             CDC *pDC = new CDC;
	             pDC->Attach (hdcPrn);      // attach a printer DC
	
	             pDC->StartDoc("test");  // begin a new print job
	                                     // for Win32 use
	                                     // CDC::StartDoc(LPDOCINFO) override
	
	             pDC->StartPage();          // begin a new page
	             SetPrintAlign(pDC, hdcPrn);// set the printing alignment
	             pDC->TextOut(10, 10, pbuf);// write the string in pbuf
	             pDC->EndPage();            // end a page
	
	             pDC->EndDoc();             // end a print job
	
	             pDC->Detach();             // detach the printer DC
	             delete pDC;
	             }
	
	         delete printDlg;
	         }
	
	     void CMyDialog::SetPrintAlign(CDC *pDC, HDC hdcPrn)
	         {
	         short cxPage, cyPage;
	
	         cxPage = ::GetDeviceCaps (hdcPrn, HORZRES) ;
	         cyPage = ::GetDeviceCaps (hdcPrn, VERTRES) ;
	         pDC->SetMapMode (MM_ISOTROPIC) ;
	         pDC->SetWindowExt ( 1000, 1000) ;
	         pDC->SetViewportExt (cxPage / 2, -cyPage / 2) ;
	         pDC->SetViewportOrg (cxPage / 2,  cyPage / 2) ;
	         pDC->SetTextAlign (TA_BASELINE | TA_CENTER) ;
	         }
	
	REFERENCES
	==========
	
	For more information about the MFC printing, please see "Programming with the
	Microsoft Foundation Class Library" in Books Online.
	
	Additional query words: 2.52 3.0 3.00 3.1 3.10
	
	======================================================================
	Keywords          : kbcode kbProgramming kbprint kbMFC kbPrinting kbVC kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
