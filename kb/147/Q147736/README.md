---
layout: page
title: "Q147736: BUG: Dialog Previewer May Incorrectly Draw Caption on Dialogs"
permalink: /kb/147/Q147736/
---

## Q147736: BUG: Dialog Previewer May Incorrectly Draw Caption on Dialogs

	Article: Q147736
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbide _IK920 kbVC kbVC400bug kbVC410bug kbVC420bug kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Learning Edition, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The preview window in the Dialog Properties dialog box incorrectly displays a
	caption on dialogs that do not set the WS_CAPTION and WS_SYSMENU styles. This
	occurs only when the dialog also has a border style of THIN.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a dialog resource with Developer Studio.
	
	2. Double-click the dialog resource, and remove the Titlebar and System Menu
	  settings from the Styles tab in the Dialog Properties dialog.
	
	3. Under the Styles tab, change the Border to Thin.
	
	4. Switch the Workspace window to the ResourceView pane.
	
	5. Right-click the dialog's id, listed in the ResourceView.
	
	6. Choose Properties from the Context menu. Note that the dialog displayed in
	  the preview window of the Properties dialog, is drawn with a caption.
	
	NOTE: When the dialog is invoked in the test mode (CTRL+T), the dialog is
	correctly displayed without a caption.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide _IK920 kbVC kbVC400bug kbVC410bug kbVC420bug kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:
	
	=============================================================================
	
