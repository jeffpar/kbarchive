---
layout: page
title: "Q141724: Context-Sensitive Help in a CDialog Object"
permalink: /kb/141/Q141724/
---

## Q141724: Context-Sensitive Help in a CDialog Object

	Article: Q141724
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1 4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbCSHelp kbDlg kbMFC KbUIDesign kbVC420 kbVC500 kbGrpDSMFCATL kb
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	-------------------------------------------------------------------------------
	
	This is the 32-bit version of this sample.
	
	SUMMARY
	=======
	
	The DLGHLP sample illustrates implementing context-sensitive help in a CDialog
	object.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dlghlp32.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Dlghlp32.exe was archived as a self-extracting file using the PKware file-
	compression utility. The archived file contains subdirectories, and therefore,
	the -d switch needs to be used when decompressing the file to disk.
	
	MORE INFORMATION
	================
	
	The DLGHLP32 sample implements context-sensitive help in a dialog box by
	overriding CWnd::OnHelpInfo and CWnd::OnContextMenu in the dialog class to
	handle the WM_HELP and WM_CONTEXTMENU messages. WM_HELP and WM_CONTEXTMENU are
	new Win32 messages that are received by the active window when Help is
	requested. DLGHLP32 uses the information provided to these handlers to call
	::WinHelp with the appropriate parameters.
	
	DLGHLP32 includes two dialog boxes, each with a number of controls in them. The
	user is able to set the focus to a particular control and, by pressing F1,
	right-clicking, or using the ? (question mark) icon to bring up help that is
	specific for that control. Several of the control IDs are used in both dialog
	boxes. For example, each dialog box contains a radio button with the ID of
	IDC_RADIO1. To allow a unique help context value to be generated for each
	control, the ID of each dialog box is used as a base and is added to the ID of
	the control.
	
	::WinHelp provides two new help commands for handling WM_HELP and WM_CONTEXTMENU.
	They are HELP_WM_HELP and HELP_CONTEXTMENU, respectively. In both cases, an
	array mapping control IDs to help contexts is passed in the dwData parameter.
	DLGHLP32 defines two of these arrays, one for each dialog box class. This
	facilitates generating unique help context for controls in both dialogs, even if
	the control IDs are the same.
	
	DLGHLP32 is based on an AppWizard-generated application. Files included with the
	sample which are directly related to implementing context- sensitive help in a
	dialog box are:
	
	- DLGBOX1.CPP: Implements context-sensitive help for Dialog Box 1 by overriding
	  CWnd::OnHelpInfo and CWnd::OnContextMenu.
	
	- DLGBOX2.CPP: Implements context-sensitive help for Dialog Box 2 by overriding
	  CWnd::OnHelpInfo and CWnd::OnContextMenu.
	
	- DLGRES.H: Defines the help context IDs based on the ID of the dialog box and
	  the specific control.
	
	- DLGCTRLS.HM: Help map file that defines the help context IDs for the dialog
	  box controls.
	
	Additional query words: DLGHLP context sensitive
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbCSHelp kbDlg kbMFC KbUIDesign kbVC420 kbVC500 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1 4.2,4.2b,5.0
	
	=============================================================================
	
