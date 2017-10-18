---
layout: page
title: "Q193103: HOWTO: Implement a View-Based Default Printer in MFC"
permalink: kb/193/Q193103/
---

## Q193103: HOWTO: Implement a View-Based Default Printer in MFC

	Article: Q193103
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbGDI kbMFC kbPrinting kbVC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may sometimes want the "default" printer for your MFC application to be
	other than the actual system-defined default printer. This article shows how you
	can:
	
	- Retrieve the system default printer.
	
	- Define your own application default printer based on the current view.
	
	- Modify the settings for this default printer.
	
	- Properly use the MFC CPrintDialog class to allow the user to override your
	  application's default printer settings.
	
	MORE INFORMATION
	================
	
	The sample code provided in the section illustrates how to:
	
	- Create and install your own DEVMODE and DEVNAMES for your printer (or obtain
	  a copy of the DEVMODE and DEVNAMES from the system default printer in case
	  your chosen default printer is unavailable).
	
	- Modify the default settings for your default printer (such as orientation and
	  resolution).
	
	- Have CPrintDialog use your default printer and settings based on the current
	  view when presenting the user with the Windows standard Print Common dialog
	  box.
	
	- Have MFC's print logic use your default printer based on the current view
	  when printing your report (by temporarily changing and then resetting MFC's
	  default printer).
	
	The following code shows how to implement these setting in your CView-derived
	class to allow each of your views to have its own default printer. If you
	instead want to have the same default printer for all views (that is, for your
	entire application and not just for each of your views), you can implement the
	following code in the appropriate places of your CWinApp-derived class.
	
	Sample Code for Visual C++ .NET:
	
	  // MyPrintView.h : Interface of the CMyPrintView class.
	  class CMyPrintView : public CView
	  {
	      ...
	  public:
	      afx_msg void OnFilePrintSetup();
	
	      // Generated message map functions.
	  protected:
	      DECLARE_MESSAGE_MAP()
	
	  protected:
	      BOOL GetPrinterDevice(LPTSTR pszPrinterName,
	                            HGLOBAL* phDevNames, HGLOBAL* phDevMode);
	      HANDLE CopyHandle(HANDLE h);
	      HANDLE m_hDevMode;
	      HANDLE m_hDevNames;
	  };
	
	  // MyPrintView.cpp : Implementation of the CMyPrintView class.
	  #include <winspool.h>
	  ...
	  BEGIN_MESSAGE_MAP(CMyPrintView, CView)
	      ...
	      ON_COMMAND(ID_FILE_PRINT_SETUP, OnFilePrintSetup)
	      ...
	  END_MESSAGE_MAP()
	
	  CMyPrintView::CMyPrintView()
	  {
	      // TODO: Add construction code here.
	      ...
	      m_hDevMode = m_hDevNames = NULL;
	  }
	
	  CMyPrintView::~CMyPrintView()
	  {
	      ...
	      if (m_hDevMode)  GlobalFree(m_hDevMode);
	      if (m_hDevNames) GlobalFree(m_hDevNames);
	  }
	
	  // returns a DEVMODE and DEVNAMES for the printer name specified
	  BOOL CMyPrintView::GetPrinterDevice(LPTSTR pszPrinterName, HGLOBAL* phDevNames, HGLOBAL* phDevMode)
	  {
	      ...
	      // please copy this from Q166129 - see link at bottom of article
	      // note: if you're specifying a remote printer, this function will
	      // only work on Windows NT
	  }
	
	  void CMyPrintView::OnInitialUpdate()
	  {
	      CView::OnInitialUpdate(); // Let MFC do its thing first...
	
	      // Try to use a specific printer.
	      // If printer is not available, use the default printer.
	
	      if (!GetPrinterDevice(_T("HP LaserJet III"), &m_hDevNames, &m_hDevMode)) // See KB article Q166129 
	      {
	          // Could not install our desired default printer.
	
	          // Instead, "clone" the currently defined default printer
	          // and make changes to it instead.
	          PRINTDLG pd;
	          // Retrieve MFC's default printer.
	          AfxGetApp()->GetPrinterDeviceDefaults(&pd);
	
	          // Make our own private copy of MFC's DEVMODE and DEVNAMES data.
	
	          // Note: we should NOT GlobalFree the handles returned
	          // to us in the PRINTDLG structure, because those are the
	          // actual handles that MFC uses!
	          m_hDevMode =  CopyHandle(pd.hDevMode);
	          m_hDevNames = CopyHandle(pd.hDevNames);
	      }
	
	      // Set our desired printer defaults.
	      LPDEVMODE lpDevMode = (LPDEVMODE) GlobalLock(m_hDevMode);
	
	      // For each option, only change it if the printer supports it.
	      if (lpDevMode->dmFields & DM_ORIENTATION)
	          lpDevMode->dmOrientation = DMORIENT_LANDSCAPE;
	
	      if (lpDevMode->dmFields & DM_DUPLEX)
	          lpDevMode->dmDuplex = DMDUP_HORIZONTAL;
	
	      if (lpDevMode->dmFields & DM_PAPERSIZE)
	          lpDevMode->dmPaperSize = DMPAPER_A4SMALL;
	
	      if (lpDevMode->dmFields & DM_YRESOLUTION)
	          // NOTE: must change BOTH dmYResolution AND dmPrintQuality.
	          lpDevMode->dmYResolution = lpDevMode->dmPrintQuality = 75;
	
	      GlobalUnlock(m_hDevMode);
	  }
	
	  void CMyPrintView::OnFilePrintSetup()
	  {
	      // Ask the user which printer they want to use.
	      CPrintDialog pd(
	          FALSE,
	          PD_ALLPAGES | PD_USEDEVMODECOPIES |
	          PD_NOPAGENUMS | PD_HIDEPRINTTOFILE | PD_NOSELECTION,
	          this);
	
	      // Make sure we don't accidentally create a device context
	      pd.m_pd.Flags &= ~PD_RETURNDC;   // Reset flag set by constructor.
	
	      // Force the CPrintDialog to use our device mode & name.
	      pd.m_pd.hDevMode  = CopyHandle(m_hDevMode);
	      pd.m_pd.hDevNames = CopyHandle(m_hDevNames);
	
	      // Display the dialog box and let the user make their selection.
	      if (pd.DoModal() == IDOK)
	      {
	          // The user clicked OK
	          // (and POSSIBLY changed printers).
	
	          // In any case, the CPrintDialog logic made a copy of the original
	          // DEVMODE/DEVNAMES that we passed it and applied the user's
	          // changes to that copy and discarded the original copy we passed
	          // it. (NOTE: If the user had clicked CANCEL instead, the original
	          // values we passed would have been returned unchanged).
	          GlobalFree(m_hDevMode);                      // Free old copies.
	          GlobalFree(m_hDevNames);                     // Free old copies.
	
	          m_hDevMode  = CopyHandle(pd.m_pd.hDevMode);  // Save new copies.
	          m_hDevNames = CopyHandle(pd.m_pd.hDevNames); // Save new copies.
	      }
	
	      // Regardless of whether the user clicked OK or CANCEL,
	      // we need to ALWAYS do a GlobalFree of CPrintDialog's
	      // m_pd.hDevMode and m_pd.hDevNames upon return from
	      // DoModal in order to prevent a resource leak.
	      GlobalFree(pd.m_pd.hDevMode);   // Because DoModal was called,
	      GlobalFree(pd.m_pd.hDevNames);  // we need to free these.
	  }
	
	  BOOL CMyPrintView::OnPreparePrinting(CPrintInfo* pInfo)
	  {
	      PRINTDLG pd;
	      // Save MFC's printer and install ours instead.
	      AfxGetApp()->GetPrinterDeviceDefaults(&pd);
	      AfxGetApp()->SelectPrinter(m_hDevNames,m_hDevMode,FALSE);
	
	      // Perform default MFC handling.
	      BOOL b = DoPreparePrinting(pInfo);
	
	      // Reinstall MFC's printer.
	      AfxGetApp()->SelectPrinter(pd.hDevNames,pd.hDevMode,FALSE);
	
	      return b;
	  }
	
	  HANDLE CMyPrintView::CopyHandle(HANDLE h)
	  {
	      // Return a handle to a copy of the data
	      // that the passed handle was for.
	      if (!h) return NULL;
	
	      BYTE*   lpCopy;
	      BYTE*   lp;
	      HANDLE   hCopy;
	      DWORD   dwLen = GlobalSize(h);
	      if (hCopy = GlobalAlloc(GHND, dwLen))
	      {
	          lpCopy = (BYTE*)GlobalLock(hCopy);
	          lp     = (BYTE*)GlobalLock(h);
	
	          CopyMemory(lpCopy,lp,dwLen);
	
	          GlobalUnlock(hCopy);
	          GlobalUnlock(h);
	      }
	
	      return hCopy;
	  } 
	
	Sample Code for Visual C++ 6.0
	------------------------------
	
	  // MyPrintView.h : Interface of the CMyPrintView class.
	  class CMyPrintView : public CView
	  {
	      ...
	      // Generated message map functions.
	  protected:
	      //{ {AFX_MSG(CMyPrintView)
	      ...
	      afx_msg void OnFilePrintSetup();
	      ...
	      //} }AFX_MSG
	      DECLARE_MESSAGE_MAP()
	
	      BOOL GetPrinterDevice(LPTSTR pszPrinterName,
	                            HGLOBAL* phDevNames, HGLOBAL* phDevMode);
	      HANDLE CMyPrintView::CopyHandle(HANDLE h);
	      HANDLE m_hDevMode;
	      HANDLE m_hDevNames;
	  };
	
	  // MyPrintView.cpp : Implementation of the CMyPrintView class.
	  #include <winspool.h>
	  ...
	  BEGIN_MESSAGE_MAP(CMyPrintView, CView)
	      ...
	      ON_COMMAND(ID_FILE_PRINT_SETUP, OnFilePrintSetup)
	      ...
	  END_MESSAGE_MAP()
	
	  CMyPrintView::CMyPrintView()
	  {
	      // TODO: Add construction code here.
	      ...
	      m_hDevMode = m_hDevNames = NULL;
	  }
	
	  CMyPrintView::~CMyPrintView()
	  {
	      ...
	      if (m_hDevMode)  GlobalFree(m_hDevMode);
	      if (m_hDevNames) GlobalFree(m_hDevNames);
	  }
	
	  // returns a DEVMODE and DEVNAMES for the printer name specified
	  BOOL CMyPrintView::GetPrinterDevice(LPTSTR pszPrinterName, HGLOBAL* phDevNames, HGLOBAL* phDevMode)
	  {
	      ...
	      // please copy this from Q166129 - see link at bottom of article
	      // note: if you're specifying a remote printer, this function will
	      // only work on Windows NT
	  }
	
	  void CMyPrintView::OnInitialUpdate()
	  {
	      CView::OnInitialUpdate(); // Let MFC do its thing first...
	
	      // Try to use a specific printer.
	      // If printer is not available, use the default printer.
	
	      if (!GetPrinterDevice(_T("HP LaserJet III"), &m_hDevNames, &m_hDevMode)) // See KB article Q166129 
	      {
	          // Could not install our desired default printer.
	
	          // Instead, "clone" the currently defined default printer
	          // and make changes to it instead.
	          PRINTDLG pd;
	          // Retrieve MFC's default printer.
	          AfxGetApp()->GetPrinterDeviceDefaults(&pd);
	
	          // Make our own private copy of MFC's DEVMODE and DEVNAMES data.
	
	          // Note: we should NOT GlobalFree the handles returned
	          // to us in the PRINTDLG structure, because those are the
	          // actual handles that MFC uses!
	          m_hDevMode =  CopyHandle(pd.hDevMode);
	          m_hDevNames = CopyHandle(pd.hDevNames);
	      }
	
	      // Set our desired printer defaults.
	      LPDEVMODE lpDevMode = (LPDEVMODE) GlobalLock(m_hDevMode);
	
	      // For each option, only change it if the printer supports it.
	      if (lpDevMode->dmFields & DM_ORIENTATION)
	          lpDevMode->dmOrientation = DMORIENT_LANDSCAPE;
	
	      if (lpDevMode->dmFields & DM_DUPLEX)
	          lpDevMode->dmDuplex = DMDUP_HORIZONTAL;
	
	      if (lpDevMode->dmFields & DM_PAPERSIZE)
	          lpDevMode->dmPaperSize = DMPAPER_A4SMALL;
	
	      if (lpDevMode->dmFields & DM_YRESOLUTION)
	          // NOTE: must change BOTH dmYResolution AND dmPrintQuality.
	          lpDevMode->dmYResolution = lpDevMode->dmPrintQuality = 75;
	
	      GlobalUnlock(m_hDevMode);
	  }
	
	  void CMyPrintView::OnFilePrintSetup()
	  {
	      // Ask the user which printer they want to use.
	      CPrintDialog pd(
	          FALSE,
	          PD_ALLPAGES | PD_USEDEVMODECOPIES |
	          PD_NOPAGENUMS | PD_HIDEPRINTTOFILE | PD_NOSELECTION,
	          this);
	
	      // Make sure we don't accidentally create a device context
	      pd.m_pd.Flags &= ~PD_RETURNDC;   // Reset flag set by constructor.
	
	      // Force the CPrintDialog to use our device mode & name.
	      pd.m_pd.hDevMode  = CopyHandle(m_hDevMode);
	      pd.m_pd.hDevNames = CopyHandle(m_hDevNames);
	
	      // Display the dialog box and let the user make their selection.
	      if (pd.DoModal() == IDOK)
	      {
	          // The user clicked OK
	          // (and POSSIBLY changed printers).
	
	          // In any case, the CPrintDialog logic made a copy of the original
	          // DEVMODE/DEVNAMES that we passed it and applied the user's
	          // changes to that copy and discarded the original copy we passed
	          // it. (NOTE: If the user had clicked CANCEL instead, the original
	          // values we passed would have been returned unchanged).
	          GlobalFree(m_hDevMode);                      // Free old copies.
	          GlobalFree(m_hDevNames);                     // Free old copies.
	
	          m_hDevMode  = CopyHandle(pd.m_pd.hDevMode);  // Save new copies.
	          m_hDevNames = CopyHandle(pd.m_pd.hDevNames); // Save new copies.
	      }
	
	      // Regardless of whether the user clicked OK or CANCEL,
	      // we need to ALWAYS do a GlobalFree of CPrintDialog's
	      // m_pd.hDevMode and m_pd.hDevNames upon return from
	      // DoModal in order to prevent a resource leak.
	      GlobalFree(pd.m_pd.hDevMode);   // Because DoModal was called,
	      GlobalFree(pd.m_pd.hDevNames);  // we need to free these.
	  }
	
	  BOOL CMyPrintView::OnPreparePrinting(CPrintInfo* pInfo)
	  {
	      PRINTDLG pd;
	      // Save MFC's printer and install ours instead.
	      AfxGetApp()->GetPrinterDeviceDefaults(&pd);
	      AfxGetApp()->SelectPrinter(m_hDevNames,m_hDevMode,FALSE);
	
	      // Perform default MFC handling.
	      BOOL b = DoPreparePrinting(pInfo);
	
	      // Reinstall MFC's printer.
	      AfxGetApp()->SelectPrinter(pd.hDevNames,pd.hDevMode,FALSE);
	
	      return b;
	  }
	
	  HANDLE CMyPrintView::CopyHandle(HANDLE h)
	  {
	      // Return a handle to a copy of the data
	      // that the passed handle was for.
	      if (!h) return NULL;
	
	      BYTE*   lpCopy;
	      BYTE*   lp;
	      HANDLE   hCopy;
	      DWORD   dwLen = GlobalSize(h);
	      if (hCopy = GlobalAlloc(GHND, dwLen))
	      {
	          lpCopy = (BYTE*)GlobalLock(hCopy);
	          lp     = (BYTE*)GlobalLock(h);
	
	          CopyMemory(lpCopy,lp,dwLen);
	
	          GlobalUnlock(hCopy);
	          GlobalUnlock(h);
	      }
	
	      return hCopy;
	  }
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q166129 HOWTO: Print Directly to a Non-Default Printer in MFC
	
	  Q147202 HOWTO: Add a Network Printer Connection
	
	  Q140560 HOWTO: Set the Default Printer Programmatically in Windows 95
	
	  Q167345 HOWTO: Modify Printer Settings with DocumentProperties()
	
	  Q126897 HOWTO: Change Default Printer Settings in an MFC Application
	
	  Q162609 HOWTO: Create a Printer Device Context (DC) in MFC
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Francis, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbGDI kbMFC kbPrinting kbVC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
