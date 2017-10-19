---
layout: page
title: "Q166129: HOWTO: Print Directly to a Non-Default Printer in MFC"
permalink: /kb/166/Q166129/
---

## Q166129: HOWTO: Print Directly to a Non-Default Printer in MFC

	Article: Q166129
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbDocView kbGDI kbMFC kbPrinting kbVC kbVC420 kbVC600 kbVS600 kbGrpDSMFCATL
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.2, 5.0, 6.0, used with:
	      - the operating system: Microsoft Windows NT 
	      - the operating system: Microsoft Windows 2000 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. Part or all of the information in this article applies to managed Visual C++ code and may be applied only by using the .NET Framework.
	
	SUMMARY
	=======
	
	In developing an MFC application, it is sometimes useful to programmatically
	print (without the print dialog) to a non-default printer such as a network
	printer or a secondary printer. To do this, the DEVMODE and DEVNAMES structures
	are needed. This article shows how one can set these data structures up using
	the GetPrinter() call and provides examples on how to use them.
	
	NOTE: Some code in this article does not apply to Windows 95 and Windows 98 since
	GetPrinter may not work for a network printer.
	
	MORE INFORMATION
	================
	
	During a normal print operation in an MFC application, the print dialog box is
	displayed which allows you to select the printer you want to print to. The
	default printer displayed in the print dialog box is the default printer
	specified in the operating system. MFC stores the default printer of the
	application in the CWinApp::m_hDevMode and CWinApp::m_hDevNames protected data
	members. Because MFC initializes these variables to NULL, the MFC print
	architecture defaults to the operating system's default printer the first time a
	print operation is performed. The operating system default printer's DEVMODE and
	DEVNAMES are then copied to the MFC application's m_hDevMode and m_hDevNames
	data members.
	
	Occasionally, there may be a situation where you need to print to a printer other
	than the default printer without having the user specify it through the print
	dialog box. The non-default printer can be a secondary printer or a network
	printer (assuming your operating system has the drivers already installed).
	
	Whether you need to use the non-default printer on a permanent basis or for only
	one print job, you need the DEVMODE and DEVNAMES structure to create the printer
	DC. The PRINTER_INFO_2 structure from GetPrinter() contains all the information
	needed to fill the DEVMODE and DEVNAMES structures.
	
	Creating a DEVMODE and DEVNAMES Structure
	-----------------------------------------
	
	The sample code below shows how to use GetPrinter() to create a DEVMODE and
	DEVNAMES structure based on a printer name. The code is a global function which
	returns the data structures through its parameters.
	
	  #include <winspool.h>
	
	  // returns a DEVMODE and DEVNAMES for the printer name specified
	  BOOL GetPrinterDevice(LPTSTR pszPrinterName, HGLOBAL* phDevNames, HGLOBAL* phDevMode)
	  {
	      // if NULL is passed, then assume we are setting app object's
	      // devmode and devnames
	      if (phDevMode == NULL || phDevNames == NULL)
	          return FALSE;
	
	      // Open printer
	      HANDLE hPrinter;
	      if (OpenPrinter(pszPrinterName, &hPrinter, NULL) == FALSE)
	          return FALSE;
	
	      // obtain PRINTER_INFO_2 structure and close printer
	      DWORD dwBytesReturned, dwBytesNeeded;
	      GetPrinter(hPrinter, 2, NULL, 0, &dwBytesNeeded);
	      PRINTER_INFO_2* p2 = (PRINTER_INFO_2*)GlobalAlloc(GPTR,
	          dwBytesNeeded);
	      if (GetPrinter(hPrinter, 2, (LPBYTE)p2, dwBytesNeeded,
	         &dwBytesReturned) == 0) {
	         GlobalFree(p2);
	         ClosePrinter(hPrinter);
	         return FALSE;
	      }
	      ClosePrinter(hPrinter);
	
	      // Allocate a global handle for DEVMODE
	      HGLOBAL  hDevMode = GlobalAlloc(GHND, sizeof(*p2->pDevMode) +
	         p2->pDevMode->dmDriverExtra);
	      ASSERT(hDevMode);
	      DEVMODE* pDevMode = (DEVMODE*)GlobalLock(hDevMode);
	      ASSERT(pDevMode);
	
	      // copy DEVMODE data from PRINTER_INFO_2::pDevMode
	      memcpy(pDevMode, p2->pDevMode, sizeof(*p2->pDevMode) +
	         p2->pDevMode->dmDriverExtra);
	      GlobalUnlock(hDevMode);
	
	      // Compute size of DEVNAMES structure from PRINTER_INFO_2's data
	      DWORD drvNameLen = lstrlen(p2->pDriverName)+1;  // driver name
	      DWORD ptrNameLen = lstrlen(p2->pPrinterName)+1; // printer name
	      DWORD porNameLen = lstrlen(p2->pPortName)+1;    // port name
	
	      // Allocate a global handle big enough to hold DEVNAMES.
	      HGLOBAL hDevNames = GlobalAlloc(GHND,
	          sizeof(DEVNAMES) +
	          (drvNameLen + ptrNameLen + porNameLen)*sizeof(TCHAR));
	      ASSERT(hDevNames);
	      DEVNAMES* pDevNames = (DEVNAMES*)GlobalLock(hDevNames);
	      ASSERT(pDevNames);
	
	      // Copy the DEVNAMES information from PRINTER_INFO_2
	      // tcOffset = TCHAR Offset into structure
	      int tcOffset = sizeof(DEVNAMES)/sizeof(TCHAR);
	      ASSERT(sizeof(DEVNAMES) == tcOffset*sizeof(TCHAR));
	
	      pDevNames->wDriverOffset = tcOffset;
	      memcpy((LPTSTR)pDevNames + tcOffset, p2->pDriverName,
	          drvNameLen*sizeof(TCHAR));
	      tcOffset += drvNameLen;
	
	      pDevNames->wDeviceOffset = tcOffset;
	      memcpy((LPTSTR)pDevNames + tcOffset, p2->pPrinterName,
	          ptrNameLen*sizeof(TCHAR));
	      tcOffset += ptrNameLen;
	
	      pDevNames->wOutputOffset = tcOffset;
	      memcpy((LPTSTR)pDevNames + tcOffset, p2->pPortName,
	          porNameLen*sizeof(TCHAR));
	      pDevNames->wDefault = 0;
	
	      GlobalUnlock(hDevNames);
	      GlobalFree(p2);   // free PRINTER_INFO_2
	
	      // set the new hDevMode and hDevNames
	      *phDevMode = hDevMode;
	      *phDevNames = hDevNames;
	      return TRUE;
	  }
	
	As a quick reference, following is the declaration of DEVNAMES with a short
	description of each field:
	
	  // commdlg.h
	  // the first three members are character offsets from the beginning of the // structure pointing to the specific string
	  typedef struct tagDEVNAMES {
	     WORD wDriverOffset;  // file name of driver (without extension)
	     WORD wDeviceOffset;  // device name
	     WORD wOutputOffset;  // device name of physical output medium
	     WORD wDefault;       // DN_DEFAULTPRN if default printer chosen
	  } DEVNAMES;
	
	Setting the Application's Default Printer
	-----------------------------------------
	
	To set the default printer of the application you need to set the m_hDevNames and
	m_hDevMode data members (which are protected) through a member function of the
	CWinApp derived object, GetPrinterDevice(). You can implement the function below
	and call it whenever you need to change the default printer.
	
	  void CMainFrame::OnActionSetnondefaultprinter() 
	  {
	      HGLOBAL hDevMode = NULL;
	      HGLOBAL hDevNames = NULL;
	      if (GetPrinterDevice(_T("\\\\RED-PRN-25\\PRIV0006"), &hDevNames, &hDevMode))
	          AfxGetApp()->SelectPrinter(hDevNames, hDevMode);
	      else
	          AfxMessageBox(_T("Failed to select custom printer"));
	  }
	
	Bypassing the Print Dialog when Using the Application's Default Printer
	-----------------------------------------------------------------------
	
	To bypass the print dialog, OnPreparePrinting needs to be overridden so that the
	m_bDirect flag can be set to TRUE. DoPreparePrinting is then called to set the
	values of pInfo->m_pPD->m_pd.hDevMode and
	pInfo->m_pPD->m_pd.hDevNames to the corresponding application object's
	data member and to create the printer DC.
	
	  BOOL CNonDefPrinterView::OnPreparePrinting(CPrintInfo* pInfo)
	  {
	      pInfo->m_bDirect = TRUE; // TRUE if bypassing Print Dialog
	      return DoPreparePrinting(pInfo);
	  }
	
	Bypassing the Print Dialog when Using a Non-Default Printer
	-----------------------------------------------------------
	
	To bypass the print dialog and use a non-default printer, you need to set the
	pInfo->m_pPD->m_pd data members yourself and create the printer DC.
	Following is the code that will accomplish this:
	
	  BOOL CNonDefPrinterView::OnPreparePrinting(CPrintInfo* pInfo)
	  {
	      // set to non-default printer without changing default app printer
	      HGLOBAL hDevMode;
	      HGLOBAL hDevNames;
	
	      if (!GetPrinterDevice(_T("\\\\RED-PRN-25\\PRIV0006"), &hDevNames, &hDevMode))
	          AfxMessageBox(_T("GetPrinterDevice called failed\n"));
	
	      pInfo->m_pPD->m_pd.hDevMode = hDevMode;
	      pInfo->m_pPD->m_pd.hDevNames = hDevNames;
	      pInfo->m_pPD->CreatePrinterDC();
	
	      return TRUE;
	  }
	
	This example is shown using the GetPrinterDevice function. See above for more
	detail.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q193103 HOWTO: Implement a View-Based Default Printer in Microsoft Foundation
	  Classes
	
	  Q147202 HOWTO: Add a Network Printer Connection
	
	  Q140560 HOWTO: Set the Default Printer Programmatically in Windows 95
	
	  Q167345 HOWTO: Modify Printer Settings with DocumentProperties()
	
	  Q126897 HOWTO: Change Default Printer Settings in an MFC Application
	
	  Q162609 HOWTO: Create a Printer Device Context (DC) in MFC
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Adam Kim, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbDocView kbGDI kbMFC kbPrinting kbVC kbVC420 kbVC600 kbVS600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
