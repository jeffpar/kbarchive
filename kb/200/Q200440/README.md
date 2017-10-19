---
layout: page
title: "Q200440: PRB: MFC SAVER Sample Does Not Run Correctly"
permalink: /kb/200/Q200440/
---

## Q200440: PRB: MFC SAVER Sample Does Not Run Correctly

	Article: Q200440
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbScreenSaver kbVC500 kbVC600 kbOSWin98 kbSamplePro kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the MFC SAVER sample in Control Panel, it does not run
	correctly. When you click Settings for the screen saver, nothing happens.
	
	CAUSE
	=====
	
	The problem is caused by a coding error in the MFC sample. The MatchOption()
	function performs a string comparison instead of a character comparison.
	
	RESOLUTION
	==========
	
	To resolve this problem so you can configure the screen saver in the Control
	Panel, change the existing MatchOption() and InitInstance() functions as
	follows:
	
	  BOOL MatchOption(LPTSTR lpsz, TCHAR ch)
	  {
	      if (lpsz[0] == '-' || lpsz[0] == '/')
	          lpsz++;
	
	      if (lpsz[0] == ch)
	          return TRUE;
	
	      return FALSE;
	  }
	
	  ///////////////////////////////////////////////////////////////////////////// 
	  // CSaverApp initialization.
	  BOOL CSaverApp::InitInstance()
	  {
	      // Standard initialization.
	      // If you are not using these features and want to reduce the size
	      // of your final executable, you should remove from the following
	      // the specific initialization routines you do not need.
	
	      Enable3dControls();
	      SetRegistryKey(_T("MFC Screen Savers Inc."));
	
	      if (__argc == 1 || MatchOption(__argv[1], _T('c')))
	          DoConfig();
	
	      else if (MatchOption(__argv[1], _T('p')))
	      {
	          CWnd* pParent = CWnd::FromHandle((HWND)atol(__argv[2]));
	          ASSERT(pParent != NULL);
	          CDrawWnd* pWnd = new CDrawWnd();
	          CRect rect;
	          pParent->GetClientRect(&rect);
	          pWnd->Create(NULL, WS_VISIBLE|WS_CHILD, rect, pParent, NULL);
	          m_pMainWnd = pWnd;
	          return TRUE;
	      }
	      else if (MatchOption(__argv[1], _T('s')))
	      {
	          CSaverWnd* pWnd = new CSaverWnd;
	          pWnd->Create();
	          m_pMainWnd = pWnd;
	          return TRUE;
	      }
	
	      return FALSE;
	  }
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  BOOL MatchOption(LPTSTR lpsz, LPTSTR lpszOption)
	  {
	      if (lpsz[0] == '-' || lpsz[0] == '/')
	          lpsz++;
	
	      if (lstrcmpi(lpsz, lpszOption) == 0) // 
	          return TRUE;
	
	      return FALSE;
	  }
	
	  ///////////////////////////////////////////////////////////////////////////// 
	  // CSaverApp initialization.
	  BOOL CSaverApp::InitInstance()
	  {
	    // Standard initialization.
	    // If you are not using these features and you want to reduce the size
	    // of your final executable, you should remove from the following
	    // the specific initialization routines you do not need.
	      Enable3dControls();
	      SetRegistryKey(_T("MFC Screen Savers Inc."));
	
	      if (__argc == 1 || MatchOption(__argv[1], _T("c")))
	          DoConfig();
	
	      else if (MatchOption(__argv[1], _T("p")))
	      {
	          CWnd* pParent = CWnd::FromHandle((HWND)atol(__argv[2]));
	          ASSERT(pParent != NULL);
	          CDrawWnd* pWnd = new CDrawWnd();
	          CRect rect;
	          pParent->GetClientRect(&rect);
	          pWnd->Create(NULL, WS_VISIBLE|WS_CHILD, rect, pParent, NULL);
	          m_pMainWnd = pWnd;
	          return TRUE;
	      }
	      else if (MatchOption(__argv[1], _T("s")))
	      {
	          CSaverWnd* pWnd = new CSaverWnd;
	          pWnd->Create();
	          m_pMainWnd = pWnd;
	          return TRUE;
	      }
	
	      return FALSE;
	  }
	
	REFERENCES
	==========
	
	Visual C++ Help for SAVER sample
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Nathan
	Manis, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbScreenSaver kbVC500 kbVC600 kbOSWin98 kbSamplePro kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
