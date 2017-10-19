---
layout: page
title: "Q162609: HOWTO: Create a Printer Device Context (DC) in MFC"
permalink: /kb/162/Q162609/
---

## Q162609: HOWTO: Create a Printer Device Context (DC) in MFC

	Article: Q162609
	Product(s): Microsoft C Compiler
	Version(s): 1.52,2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbprint kbMFC kbPrinting kbVC kbVC200 kbVC400 kbVC420 kbGrpDSMFCATL
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a printer device context (DC) in Windows SDK programming, an
	application must retrieve ::CreateDC()'s parameters (such as driver name, device
	name and output port) from either a Win.ini file (16-bit) or a Windows registry
	(32-bit). In Microsoft Foundation Classes, this can be done via a call to
	functions CWinApp::GetPrinterDeviceDefaults() and
	CPrintDialog::CreatePrinterDC().
	
	This article shows you a way to create a printer device context using the default
	selected printer without displaying the Print dialog box. To create a printer
	device context for a non-default printer, please refer to Chapter 15 of
	"Programming Windows 3.1" by Charles Petzold.
	
	MORE INFORMATION
	================
	
	The CWinApp::GetPrinterDeviceDefaults() expects a PRINTDLG structure to be
	passed in such a way that the data retrieved can be stored in the DEVMODE and
	DEVNAMES handles of the structure. Those data are then used to create a printer
	DC in the CPrintDialog::CreatePrinterDC() function.
	
	Since CreatePrinterDC() and m_pd (a PRITNDLG variable) are member function and
	member variable of the CPrintDialog class, a CPrintDialog variable is defined
	and used in the following sample code.
	
	Sample Code
	-----------
	
	  // Instantiate a CPrintDialog object.
	  CPrintDialog dlg(FALSE);
	
	  // Retrieve the current printer defaults from the Windows .ini file
	  // as necessary, or uses the last printer configuration set by the
	  // user in Print Setup.
	  CWinApp* app = AfxGetApp();
	  if (!app->GetPrinterDeviceDefaults(&dlg.m_pd))
	      {
	      // Fails to create a printer device context for printing because
	      // no printer is being installed. Bring up dialog box to alert the
	      // users that they need to install a printer.  This step is optional.
	      if (app->DoPrintDialog(&dlg) != IDOK)
	         return ;
	      }
	
	  // Creates a printer DC from the DEVMODE and DEVNAMES structures.
	  if (dlg.CreatePrinterDC() == NULL)
	      return ;
	
	  // A printer device context (DC) has been created.
	  // Attach it to a CDC object. The DC is deleted when the CDC
	  // object goes out of scope.
	  CDC PrintDC;
	  PrintDC.Attach(dlg.m_pd.hDC);
	
	  // ADD YOUR CODE HERE.
	
	REFERENCES
	==========
	
	"Programming Windows 3.1," Charles Petzold, Chapter 15, Microsoft Press, 1992
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10 4.20 1.50 1.51 1.00 2.50 2.51 2.52 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbcode kbprint kbMFC kbPrinting kbVC kbVC200 kbVC400 kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.52,2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	
