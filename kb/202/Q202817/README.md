---
layout: page
title: "Q202817: BUG: ErrMsg: Not All of the Windows in the Workspace Opened"
permalink: /kb/202/Q202817/
---

## Q202817: BUG: ErrMsg: Not All of the Windows in the Workspace Opened

	Article: Q202817
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbide kbVC600 kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening a workspace, you receive the following message:
	
	  Not all of the windows in the workspace could be opened.
	
	CAUSE
	=====
	
	The reason this error occurs is because WizardBar is active or has been active
	during the current invocation of Visual C++ 6.0.
	
	RESOLUTION
	==========
	
	If the WizardBar is not needed by the user, close the WizardBar and then restart
	Visual C++ 6.0. If, however, you'd like to access the WizardBar functionality,
	close all windows before closing the affected workspaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Ensure that the WizardBar is active by selecting Customize from the Tools
	  menu and then selecting the ToolBars tab. In the Toolbars list box, make sure
	  that the WizardBar item is checked. Dismiss the Customize dialog box by
	  clicking OK.
	
	2. From the File menu, select New. Select the Workspaces tab and the Blank
	  Workspace list item. Specify a workspace name and location. Click OK on the
	  New dialog box.
	
	3. From the File menu, select New. Select the Projects tab and the MFC AppWizard
	  (exe) list item. Specify a project name and select the Add to current
	  workspace button.
	
	  NOTE: The default storage location for the project being created is a
	  subdirectory of the directory containing the workspace file. Do not change
	  this.
	
	  Click OK on the New dialog box, click Finish on the MFC AppWizard - Step 1
	  dialog box, then click OK to dismiss the New Project Information dialog box.
	
	4. Open one or more source files from the newly created project.
	
	5. Close and reopen the workspace.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC600 kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
