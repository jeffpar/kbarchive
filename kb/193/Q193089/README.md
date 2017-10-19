---
layout: page
title: "Q193089: PRB: Unexpected Error Occurs in Code Generator or Linker"
permalink: /kb/193/Q193089/
---

## Q193089: PRB: Unexpected Error Occurs in Code Generator or Linker

	Article: Q193089
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling an upgraded Visual Basic 5.0 project in Visual Basic 6.0, you may
	received the following error message:
	
	  "Unexpected Error Occurred in Code Generator or Linker."
	
	CAUSE
	=====
	
	This is caused by the existence of a project.pdb (symbol) file in the directory
	into which you are compiling the project.
	
	RESOLUTION
	==========
	
	There are two possible resolutions to this issue:
	
	- Delete the existing .pdb file.
	
	  -or-
	
	- Compile the project (exe or dll) into a different directory.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create and compile a Visual Basic 5.0 project:
	
	1. Create a Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. Select Project Properties from the Project menu.
	
	3. Select the Compile tab.
	
	4. Select Compile to Native Code and check Create Symbolic Debug Info.
	
	5. Save and compile the project.
	
	Upgrade and compile in Visual Basic 6.0:
	
	1. Open the Visual Basic 5.0 project with Visual Basic 6.0.
	
	2. Compile the project and note that you receive the following error message:
	
	  Unexpected Error Occurred in Code Generator or Linker.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbCompiler kbVBp500
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
