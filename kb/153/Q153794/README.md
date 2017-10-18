---
layout: page
title: "Q153794: FIX: Error #36 in dofoxdoc(0) While Running Documenting Wizard"
permalink: kb/153/Q153794/
---

## Q153794: FIX: Error #36 in dofoxdoc(0) While Running Documenting Wizard

	Article: Q153794
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Documenting Wizard on a project containing a form, the
	following error occurs:
	
	  "Error #36 in dofoxdoc(0): command contains unrecognized phrase/keyword"
	
	CAUSE
	=====
	
	The directory containing the project has a space in its name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in FoxPro for Windows
	3.0b. See the References section of this article for more information.
	
	MORE INFORMATION
	================
	
	The Documenting Wizard is used to create a detailed report about a project,
	form, report, etc. In this situation, the Documenting Wizard does not know how
	to react to a folder name that has a space in it. This is only a problem on
	Windows 95 because Windows 3.1 does not allow spaces in a directory name.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a folder called My Folder. Note the space between "My" and "Folder".
	
	2. Create a project called MyProj and place it in the "My Folder" folder.
	
	3. Create a form in the project and place it in the "My Folder" folder.
	
	4. From the Tools menu, select Wizards, and choose Documenting Wizard.
	
	5. In Step 1, choose MyProj from the "My Folder" folder as the source file.
	
	6. Click the Finish button, and keep the "Place Files in a single directory"
	  button checked.
	
	7. Click the Finish button again, and choose any directory to place the
	  Documenting Wizard files in.
	
	8. Note that the error occurs and does not create the documenting files.
	
	REFERENCES
	==========
	
	There are updated Wizards for FoxPro version 3.00 that correct this problem. For
	information explaining how to obtain these Wizards from the Microsoft Software
	Library, please see the following article in the Microsoft Knowledge Base:
	
	  Q136846 PATCH: Vfp30wiz.exe Updated VFP 3.0 for Windows Wizards
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
