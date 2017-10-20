---
layout: page
title: "Q98198: INFO: CDialogBar Button Enabled When Command Handler Present"
permalink: /kb/098/Q98198/
---

## Q98198: INFO: CDialogBar Button Enabled When Command Handler Present

{% raw %}

	Article: Q98198
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDlg kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture kbMFCCtrlBar
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	A button in a CDialogBar object is disabled automatically if the command
	routing does not contain a command handler function for the button.
	
	To enable a button in a CDialogBar object, the command routing must include
	a command handler for the button. A button command handler can be an
	ON_BN_CLICKED(), ON_COMMAND(), or ON_COMMAND_UI() message handler and it
	must appear in the message map of an object in the command routing. If the
	parent of the CDialogBar object is a CFrameWnd object, then the command is
	handled by the active child window or view, by the document attached to the
	view, by the frame window, and by the application (CWinApp object).
	
	NOTE: Because the CDialogBar object is not included in the routing
	scheme, the ON_BN_CLICKED() or ON_COMMAND() handler must be placed in one
	of the objects mentioned above that is in the routing scheme and not in the
	CDialogBar class.
	
	For more information on command routing, see the "Command Routing" section
	in Chapter 3 of the "Class Library Reference" manual. In Visual C++ 32-bit
	Edition, version 4.0, see both the "Command Routing" topic of the
	"Programming with MFC: Overview" in the Books Online and the MFC Technical
	Note 31, Control Bars.
	
	SUMMARY
	=======
	
	
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00 enabling disabling kbinf
	
	======================================================================
	Keywords          : kbDlg kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
