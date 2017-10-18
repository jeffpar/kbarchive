---
layout: page
title: "Q126897: HOWTO: How to Change Default Printer Settings in an MFC Applicat"
permalink: kb/126/Q126897/
---

## Q126897: HOWTO: How to Change Default Printer Settings in an MFC Applicat

	Article: Q126897
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1
	Operating System(s): 
	Keyword(s): kbcode kbprint kbMFC kbPrinting kbVC150 kbVC151 kbVC152 kbVC200 kbVC210
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change the default printer settings in an MFC application, you must retrieve
	the system default settings in a CWinApp derived object and modify those
	defaults before a print job is invoked.
	
	MORE INFORMATION
	================
	
	Default printer driver settings in an MFC application are maintained in the
	CWinApp object. These settings take the form of the following two protected
	member variables:
	
	- m_hDevMode, which is a handle to a global memory object that contains a
	  DEVMODE structure.
	
	- m_hDevNames, which is a handle to a global memory object that contains a
	  DEVNAMES structure.
	
	These variables are initialized to NULL by MFC when the application starts. The
	first time a print operation is invoked, the global default printer settings are
	retrieved in these variables. All subsequent print operations in the application
	will take their printer settings from these variables.
	
	To set an application's default printer settings to something different from the
	system defaults, the application must retrieve the system defaults before a
	print operation and modify the values in the appropriate member variable in the
	CWinApp derived object. To retrieve the system defaults, you can use the
	CWinApp::GetPrinterDeviceDefaults() function.
	
	Sample Code
	-----------
	
	For example, if you want to set the orientation in your application to landscape
	mode, you could use a function similar to the following where CMyWinApp is a
	class derived from the CWinApp class:
	
	  void CMyWinApp::SetLandscape()
	      {
	      // Get default printer settings.
	      PRINTDLG   pd;
	
	      pd.lStructSize = (DWORD) sizeof(PRINTDLG);
	      if (GetPrinterDeviceDefaults(&pd))
	          {
	          // Lock memory handle.
	          DEVMODE FAR* pDevMode =
	              (DEVMODE FAR*)::GlobalLock(m_hDevMode);
	          LPDEVNAMES lpDevNames;
	          LPTSTR lpszDriverName, lpszDeviceName, lpszPortName;
	          HANDLE hPrinter;
	
	          if (pDevMode)
	              {
	              // Change printer settings in here.
	              pDevMode->dmOrientation = DMORIENT_LANDSCAPE;
	             // Unlock memory handle.
	         lpDevNames = (LPDEVNAMES)GlobalLock(pd.hDevNames);
	         lpszDriverName = (LPTSTR )lpDevNames + lpDevNames->wDriverOffset;
	         lpszDeviceName = (LPTSTR )lpDevNames + lpDevNames->wDeviceOffset;
	         lpszPortName   = (LPTSTR )lpDevNames + lpDevNames->wOutputOffset;
	
	         ::OpenPrinter(lpszDeviceName, &hPrinter, NULL);
	         ::DocumentProperties(NULL,hPrinter,lpszDeviceName,pDevMode,
	                             pDevMode, DM_IN_BUFFER|DM_OUT_BUFFER);
	
	         // Sync the pDevMode.
	         // See SDK help for DocumentProperties for more info.
	         ::ClosePrinter(hPrinter);
	         ::GlobalUnlock(m_hDevNames);
	         ::GlobalUnlock(m_hDevMode);
	         }
	      }
	  }
	
	If you want landscape to be the default orientation for the application, you
	would call this function before any print job was invoked. A good place to do
	this would be in your CWinApp derived class's InitInstance() function.
	
	Additional query words: kbinf 1.52 2.00 2.10 2.52 3.00 3.10 printing
	
	======================================================================
	Keywords          : kbcode kbprint kbMFC kbPrinting kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1
	Issue type        : kbhowto
	
	=============================================================================
	
