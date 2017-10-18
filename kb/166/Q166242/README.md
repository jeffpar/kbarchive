---
layout: page
title: "Q166242: PRB: Statusbar Pane Text Disappears When MDI Child Window Open"
permalink: kb/166/Q166242/
---

## Q166242: PRB: Statusbar Pane Text Disappears When MDI Child Window Open

	Article: Q166242
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbStatBar KbUIDesign kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The text in a statusbar pane of a MDI application may disappear when a
	CMDIChildWnd window is open. This occurs if the Pane ID is 59142 (0xE706) and
	the Update UI handler is in the CMainFrame.
	
	CAUSE
	=====
	
	The ID 59142 is used internally in MFC as the ID for ID_INDICATOR_KANA.
	CFrameWnd has a default Update UI handler for this ID, and can replace user-
	defined behavior by intercepting UPDATE_COMMAND_UI messages before they are
	routed to the user-defined Update UI handler.
	
	The following conditions are required to exhibit this problem:
	
	1. A new pane with an ID of 59142 is added to the status bar.
	
	2. The Update UI handler of the pane is only in the CMainFrame Class.
	
	The framework searches the command route for Update UI handlers for the status
	bar panes. When a CMDIChildWnd derived class is open, the framework finds the
	update UI handler in this object before it gets to the CMainFrame class. The
	framework uses this handler to update the pane. Since the KANA lock key is
	unlocked on non-Japanese systems the pane is disabled and it is blank.
	
	When no CMDIChildWnd windows are open the pane is updated according to the Update
	UI handler in the CMainFrame class. The framework will not find the standard
	handler in the CFrameWnd class since it searches the derived class message maps
	before the base class message maps.
	
	RESOLUTION
	==========
	
	The problem can be overcome by changing the ID of the pane, or by deriving a
	class from CMDIChildWnd and putting a custom Update UI handler for the pane
	there.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	ID_INDICATOR_KANA is used to display the state of the KANA lock key (present on
	Japanese systems). The handler checks for the key and enables/ disables the pane
	depending on the state of the key. On non-Japanese versions this key is always
	unlocked.
	
	Additional query words: 3.0 3.1 3.2 CStatusBar
	
	======================================================================
	Keywords          : kbMFC kbStatBar KbUIDesign kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
