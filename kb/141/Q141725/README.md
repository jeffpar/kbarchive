---
layout: page
title: "Q141725: INFO: Stopping MFC/MDI from Creating New MDI Child Window On Sta"
permalink: /kb/141/Q141725/
---

## Q141725: INFO: Stopping MFC/MDI from Creating New MDI Child Window On Sta

	Article: Q141725
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbMDI kbMFC KbUIDesign kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By design, an AppWizard-generated MDI application will display a new MDI child
	window on startup. To turn off this feature, an application needs to use
	CCommandLineInfo::FileNothing as the shell command when calling the
	ProcessShellCommand() function.
	
	MORE INFORMATION
	================
	
	The enum value CCommandLineInfo::FileNothing is missing from the online
	documentation of CCommandLineInfo::m_nShellCommand. However, its definition can
	be found in the header file \Msdev\Mfc\Include\Afxwin.h.
	
	The ProcessShellCommand() function is called by InitInstance() of any
	CWinApp-derived class, so you can use the following sample code to disable the
	creation of a new MDI child window at startup:
	
	Sample Code
	-----------
	
	  BOOL CMyWinApp::InitInstance()
	      {
	      ...
	
	      // Parse command line for standard shell commands, DDE, file open
	      CCommandLineInfo cmdInfo;
	      ParseCommandLine(cmdInfo);
	
	      // Don't display a new MDI child window during startup
	      if (cmdInfo.m_nShellCommand == CCommandLineInfo::FileNew)
	        cmdInfo.m_nShellCommand = CCommandLineInfo::FileNothing;
	
	      // Dispatch commands specified on the command line
	      if (!ProcessShellCommand(cmdInfo))
	          return FALSE;
	
	      ...
	      }
	
	Additional query words: kbinf 4.00
	
	======================================================================
	Keywords          : kbcode kbDocView kbMDI kbMFC KbUIDesign kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
