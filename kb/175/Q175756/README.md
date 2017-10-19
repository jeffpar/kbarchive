---
layout: page
title: "Q175756: PRB: Setup Wizard Displays Message Box with '118' and OK Button"
permalink: /kb/175/Q175756/
---

## Q175756: PRB: Setup Wizard Displays Message Box with '118' and OK Button

	Article: Q175756
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup Wizard displays a message box with '118' and an OK button.
	
	CAUSE
	=====
	
	The Environment User Variable TMP under Windows NT4.0 does not point to a valid
	directory (usually the Temp directory).
	
	RESOLUTION
	==========
	
	Create a valid (Temp) directory for the TMP Environment User Variable. From
	Control Panel, double-click on the System icon. Click on the Environment tab.
	Under "User Variables for [UserName]," change the value of TMP to an existing
	directory name.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. From Control Panel, double-click on the System icon.
	
	2. Click on the Environment tab.
	
	3. Under "User Variables for [UserName]," change the value of TMP to a
	  non-existing directory name, or delete or rename the existing directory.
	
	4. Start Visual Basic with a Standard EXE project (or any other project).
	
	5. Compile the project. (You don't have to add any code.)
	
	6. Run Application Setup Wizard with the project. You will get several message
	  boxes, each with '118' and an OK button.
	
	To correct this behavior, assign the TMP variable a valid directory.
	
	REFERENCES
	==========
	
	For more information on the cause of this error message, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q175755 PRB: Run-time Error '3043' When Using Books Online or DAO
	
	Additional query words: DAO, Books Online, Error 118, Setup Wizard
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
