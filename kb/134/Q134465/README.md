---
layout: page
title: "Q134465: PRB: &quot;File Access Denied&quot; Using Grid or AutoFormat Builders"
permalink: kb/134/Q134465/
---

## Q134465: PRB: &quot;File Access Denied&quot; Using Grid or AutoFormat Builders

	Article: Q134465
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following two symptoms occurs:
	
	- Selecting the Style tab in the Grid Builder results in this error:
	
	  Error #1705 in Getstyles (0): File access is denied.
	
	  -or-
	
	- Calling the AutoFormat Builder results in this error:
	
	  Error #1705 in Load (0): File access is denied.
	
	  This error is followed by this information:
	
	  'WBASTYLES' is not an array.
	  Program: wbcall
	  Line: (0) wboName = CREATEOBJ(THIS.wbcName, &cParmstring)
	  <Abort> <Retry> <Ignore>
	
	CAUSE
	=====
	
	The Wizards directory is Read-only. This may occur on an Administrative
	Installation when users are running Visual FoxPro from the Network and are
	calling the Builders, but they do not have Write or Create access to the
	directories.
	
	WORKAROUND
	==========
	
	The network administrator, or a user with Write and Create rights for the Visual
	FoxPro directories, should log on, start Visual FoxPro, and call the Grid and
	AutoFormat builders to create the tables that needed for these Builders. The
	tables need only be created once.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Style tab of the Grid Builder attempts to create the following files in the
	Visual FoxPro Wizards directory:
	
	     GRIDSTYL.DBF
	     GRIDSTYL.FPT
	
	The AutoFormat Builder attempts to create the following files in the Visual
	FoxPro Wizards directory:
	
	     CTRLSTYL.DBF
	     CTRLSTYL.FPT
	
	Steps to Reproduce Behavior
	---------------------------
	
	Grid Builder Error:
	
	1. Install Visual FoxPro into a directory on a network drive. (For the purposes
	  of this test, an administrative installation is not required.) Give users
	  Read-Only rights to this directory.
	
	2. From a workstation, connect to the above directory, and start Visual FoxPro.
	
	3. On the File menu, click New and then Form.
	
	4. With the new form visible, select the Grid tool on the Form Controls Toolbar,
	  and place the grid on the form.
	
	5. While the grid is still selected, select the Builder button on the Properties
	  window.
	
	6. When the Grid Builder comes up, select the Style tab. Note that the described
	  error occurs.
	
	AutoFormat Builder Error:
	
	1. Install Visual FoxPro into a directory on a network drive. (For the purposes
	  of this test, an administrative installation is not required.) Give users
	  Read-Only rights to this directory.
	
	2. From a workstation, connect to the above directory, and start Visual FoxPro.
	
	3. Using a form that has at least one object on it, select the AutoFormat button
	  on the Form Designer toolbar. Note that the described error occurs.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
