---
layout: page
title: "Q209010: BUG: IDE: File/Make Retains Last VBCE Project Name"
permalink: /kb/209/Q209010/
---

## Q209010: BUG: IDE: File/Make Retains Last VBCE Project Name

	Article: Q209010
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating a new Windows CE HPC or Windows CE HPC Pro project in Visual
	Basic 6.0, the project name as reflected in the Make selection of the File menu
	will persist.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE HPC or Windows CE HPC Pro project in Visual Basic
	  6.0.
	
	2. In the Project Properties dialog box, change the project name to
	  "TestProject" and click OK.
	
	3. Click the File menu and note that the "Make TestProject..." menu item is
	  available.
	
	4. Exit Visual Basic and do not save the changes to the project.
	
	5. Launch Visual Basic and open a new Standard EXE.
	
	6. Click the File menu.
	
	Note that the "Make TestProject..." menu item appears.
	
	Additional query words: vbce vbce6 wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
