---
layout: page
title: "Q148891: PRB: Printer Setup Not Remembered When Using Visual C++ 4.x App"
permalink: /kb/148/Q148891/
---

## Q148891: PRB: Printer Setup Not Remembered When Using Visual C++ 4.x App

{% raw %}

	Article: Q148891
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kbprint kbMFC kbPrinting kbVC400 kbVC500 kbVC600 kbOSWinNT400sp4fix kbGrpDSMFCATL
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As you run an MFC application that was created with Visual C++ 4.0 and greater
	on Windows NT 3.51, the printer setup is not remembered. This behavior occurs
	only with Windows NT 3.51, not with Windows 95.
	
	CAUSE
	=====
	
	When an application displays the Print dialog box, displays the Print Setup
	dialog box, or goes into Print Preview, MFC calls the function
	CWinApp::UpdatePrinterSelection(). MFC checks for the following conditions if
	the default printer is being used:
	
	- Default printer no longer has a printer.
	
	- Default printer has changed.
	
	- Default printer has not changed.
	
	Depending on the results of these tests, MFC sets up the Device Names and the
	Device Mode variables in the PRINTDLG structure (m_pd) of the CPrintDialog
	object.
	
	In evaulating whether the default printer has changed, MFC checks to see if the
	Driver Name, Device Name, and Port Name has changed by comparing these
	parameters against the defaults obtained from using PD_RETURNDEFAULT. In Windows
	NT 3.51, ::PrintDlg() is not obtaining the same Port Name when using
	PD_RETURNDEFAULT as it does when it obtains the Port Name from displaying the
	print dialog. Therefore, the overall "IF" check succeeds making MFC think that
	the default printer has changed. This forces the Print dialog box to repopulate
	itself with the original default values.
	
	This was not a problem in earlier 32-bit versions of MFC because there the port
	name was not checked.
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a bug in Windows NT version 3.51. This problem
	has been corrected in Windows NT Service Pack 4. For information on how to
	obtain it, please see the following article in the Microsoft Knowledge Base:
	
	  Q128465 How To Obtain Windows NT Version 3.51 U.S. Service Pack
	
	There is no programmatic workaround in MFC. The user should select the printer
	properties button from the print dialog in order to set the paper orientation or
	any other settings.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	To recreate this problem, create an AppWizard-generated application, run it, and
	choose Print Setup from the File menu. Change the page orientation to landscape,
	and click OK. Bring up the Print Setup dialog box again, and notice that the
	orientation has been set back to portrait.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbenv kbprint kbMFC kbPrinting kbVC400 kbVC500 kbVC600 kbOSWinNT400sp4fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
