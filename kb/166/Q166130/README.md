---
layout: page
title: "Q166130: HOWTO: Overriding Initial Setting on Print Setup Dialog"
permalink: kb/166/Q166130/
---

## Q166130: HOWTO: Overriding Initial Setting on Print Setup Dialog

	Article: Q166130
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.52; winnt:2.0,2.1,2.2,4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbprint kbnokeyword kbCmnDlgPrint kbMFC kbPrinting kbVC152 kbVC200 kbVC210 kbVC4
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, versions 1.52, 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Changing the initial value of the settings on the Print Setup Dialog is a
	non-trivial operation that requires you to override several non-virtual
	functions. This article demonstrates how to override by using the Page
	Orientation setting as an example.
	
	MORE INFORMATION
	================
	
	The DEVMODE data structure contains information about the device initialization
	and environment of a printer. Changing the Print Setup Dialog settings involves
	modifying this structure. The hDevMode structure that you need to modify is a
	CWinApp member variable. The function that initializes this variable is
	CWinApp::UpdatePrinterSelection. To set the initial page orientation to
	DMORIENT_LANDSCAPE, you'll need to override this function, clone the base class
	code and make a modification similar to the following:
	
	     extern void AFXAPI AfxGlobalFree(HGLOBAL hGlobal); // 4.1 or later
	
	     void CMyApp::UpdatePrinterSelection(BOOL bForceDefaults)
	     {
	        if (!bForceDefaults && m_hDevNames != NULL)
	        {
	           CWinApp::UpdatePrinterSelection(bForceDefaults);
	        }
	        else
	        {
	           // First time or Forced -- Get defaults
	           CPrintDialog pd(TRUE);
	           pd.GetDefaults();
	
	           if (m_hDevMode != NULL)
	              ::GlobalFree(m_hDevMode);
	              // AfxGlobalFree for 4.1 or later
	           if (m_hDevNames != NULL)
	              ::GlobalFree(m_hDevNames);
	              // AfxGlobalFree for 4.1 or later
	
	           m_hDevMode = pd.m_pd.hDevMode;
	           m_hDevNames = pd.m_pd.hDevNames;
	
	           // new code to set DMORIENT_LANDSCAPE
	           LPDEVMODE lp = (LPDEVMODE) ::GlobalLock(m_hDevMode);
	           ASSERT(lp);
	           lp->dmOrientation = DMORIENT_LANDSCAPE;
	           ::GlobalUnlock(m_hDevMode);
	        }
	     }
	
	Unfortunately, this is not a virtual function, so you'll need to override all the
	functions in its call tree in the three cases below:
	
	     (CMyApp::UpdatePrinterSelection)
	     CWinApp::GetPrinterDeviceDefaults
	       Non-virtual, copy from MFC src
	     CView::DoPreparePrinting (non-virtual)
	       Non-virtual, copy from MFC src, change CWinApp* to CMyApp* in code,
	       include "docobj.h"
	     CView::OnPreparePrinting
	       Virtual, must override anyway
	     CView::OnFilePrint
	       Use ClassWizard
	
	     (CMyApp::UpdatePrinterSelection)
	     CWinApp::DoPrintDialog
	       Non-virtual, copy from MFC src, include "cderr.h"
	     CView::DoPreparePrinting
	       Non-virtual, see above
	
	     (CMyApp::UpdatePrinterSelection)
	     CWinApp::DoPrintDialog
	       Non-virtual, see above
	     CWinApp::OnFilePrintSetup
	       Use ClassWizard
	
	For the non-virtual functions, just clone the base class code.
	
	This example works for dmOrientation, dmPaperSize and other DEVMODE values that
	can be set by your program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbprint kbnokeyword kbCmnDlgPrint kbMFC kbPrinting kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC420b kbVC500Search
	Version           : WINDOWS:1.52; winnt:2.0,2.1,2.2,4.0,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
