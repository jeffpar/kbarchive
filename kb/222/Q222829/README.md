---
layout: page
title: "Q222829: HOWTO: Use Accelerator Keys Within a Modal Dialog Box"
permalink: kb/222/Q222829/
---

## Q222829: HOWTO: Use Accelerator Keys Within a Modal Dialog Box

	Article: Q222829
	Product(s): Microsoft C Compiler
	Version(s): 4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbKeyAccel kbMFC KbUIDesign kbVC410 kbVC420 kbVC500 kbVC600 kbVS600 kbGrpDSMFCATL kbAcc
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Accelerator keys are a common User Interface feature of Windows applications;
	therefore, why limit them to just the application? This article shows how to add
	accelerator key functionality to any modal dialog box.
	
	MORE INFORMATION
	================
	
	Keyboard accelerators are processed by calling the TranslateAccelerator()
	function in the application's main message loop. However, for a modal dialog
	box, the dialog box manager message loop (built into Windows) is used to
	translate and dispatch messages. Of course, because this message loop is not
	designed to process accelerators, it does not call the TranslateAccelerator()
	function.
	
	To process accelerator keys in a modal dialog box, you must override the dialog
	box's PreTranslateMessage() function and try to process the message as an
	accelerator by calling ::TranslateAccelerator(). If this method fails, then
	processing continues by calling the base class PreTranslateMessage().
	
	For the purposes of this article, we add accelerator key functionality to the
	AboutBox dialog box of an MFC MDI application:
	
	1. Create a new MFC MDI application named Test.
	
	2. Add a button, with resource ID "IDC_BUTTON1", to the AboutBox dialog box
	  resource.
	
	3. Double-click the button to add a handler for this button and insert the
	  following code as an indicator that the accelerator key works:
	
	  AfxMessageBox("Hello");
	
	4. Insert a new Accelerator Table to the Resource.
	
	5. Add an Accelerator key to the table by associating the F5 key to the resource
	  ID "IDC_BUTTON1".
	
	6. Add the member variable, m_hAccelTable, to the class CAboutBox:
	
	  HACCEL  m_hAccelTable;
	
	7. Initialize m_hAccelTable in CAboutBox::CAboutBox:
	
	  m_hAccelTable = LoadAccelerators(AfxGetInstanceHandle(), MAKEINTRESOURCE(IDR_ACCELERATOR1));
	
	8. Use the Code Wizard (the Class Wizard in Visual C++ 6.0 and earlier) to add
	  an override of the PreTranslateMessage for the CAboutDlg.
	
	9. In the CAboutBox::PreTranslateMessage() method, add the following lines of
	  code:
	
	  BOOL CAboutDlg::PreTranslateMessage(MSG* pMsg) {
	     if (m_hAccelTable) {
	        if (::TranslateAccelerator(m_hWnd, m_hAccelTable, pMsg)) {
	           return(TRUE);
	        }
	     }
	     return CDialog::PreTranslateMessage(pMsg);
	  }
	
	10. Compile and run CTestApp.
	
	RESULTS: Accelerator key F5 now triggers the button1 handler when the CAboutBox
	is active.
	
	REFERENCES
	==========
	
	For additional information about accelerator key processing within modal dialog
	boxes, please see the following article in the Microsoft Knowledge Base:
	
	  Q100770 INFO: Using Accelerator Keys with Modal Dialog Box Main Window
	
	Additional query words: accelerator modal dialog
	
	======================================================================
	Keywords          : kbKeyAccel kbMFC KbUIDesign kbVC410 kbVC420 kbVC500 kbVC600 kbVS600 kbGrpDSMFCATL kbAcceleratorKey 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
