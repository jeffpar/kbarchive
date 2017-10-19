---
layout: page
title: "Q187924: PRB: Unable To Build Internet Download Distribution Set"
permalink: /kb/187/Q187924/
---

## Q187924: PRB: Unable To Build Internet Download Distribution Set

	Article: Q187924
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to build an Internet Download Distribution set with the
	Application Setup Wizard for a project saved to a network drive, the following
	error message is received:
	
	  The information found in the file <filename> does not match that found
	  in the registry. Make sure your project was compiled on this machine.
	
	CAUSE
	=====
	
	The Visual Basic project was saved to a network drive using a Universal Naming
	Convention (UNC) path such as "\\Machine1\VBProject" rather than to a mapped
	network drive.
	
	RESOLUTION
	==========
	
	Map to the desired network drive, save and recompile the project. Do not use a
	UNC path to save an internet application project.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX EXE Document project with Visual Basic.
	
	2. Compile and save the project to a shared folder on another machine using a
	  UNC path, such as "\\Machine1\VBProject."
	
	3. Using Windows Explorer or My Computer, map to the network drive used in step
	  2. This step is necessary because the Application Setup Wizard does not work
	  with UNC path names. Attempting to locate the project created in step 1 using
	  a UNC path will generate an error in the Wizard.
	
	4. Start the Application Setup Wizard.
	
	5. Locate the test project created in step 1 on the mapped network drive.
	
	6. Select "Internet Component Download," and then choose Next.
	
	7. Proceed through the remaining Setup Wizard steps as desired. When you select
	  Finish, the Application Setup Wizard will attempt to compress the listed
	  files and the above error message will be displayed.
	
	Additional query words: kbDSupport kbdss kbVBp500 kbVBp kbAppSetUp kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
