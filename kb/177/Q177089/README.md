---
layout: page
title: "Q177089: BUG: Startup Position Changes in SDI if Form Has a Menu"
permalink: kb/177/Q177089/
---

## Q177089: BUG: Startup Position Changes in SDI if Form Has a Menu

	Article: Q177089
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Visual Basic 5.0 in SDI Development Environment mode and have
	a form with a menu, the form's StartupPosition will be changed to "0- Manual"
	when the form is run. This problem occurs only if the form has a menu.
	
	CAUSE
	=====
	
	Menus are added to the form at run-time, which causes a form resize event to
	occur. The resize event erroneously causes the StartupPosition to change.
	
	RESOLUTION
	==========
	
	The only resolution available at this time is to not run Visual Basic in SDI
	mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Click Options on the Tools menu and check "SDI Development Environment" on
	  the Advanced tab.
	
	2. Restart Visual Basic and create a Standard EXE project. Form1 is created by
	  default.
	
	3. Set the StartupPosition property of Form1 to 2-Center Screen.
	
	4. Press F5 to run the project.
	
	5. End the project, and note that the StartupPosition property of the form is
	  still set to 2-Center Screen.
	
	6. Use the menu editor to add a menu to the form.
	
	7. Note that the StartupPosition property changes to 0-Manual.
	
	8. Change the StartupPosition property to 2-Center Screen.
	
	9. Run the project, then end the project.
	
	10. Note that the StartupPosition again changes to 0-Manual.
	
	11. If desired, remove the menu and repeat steps 8-10. Note that this problem
	  with the StartupPosition property changing does not occur on a menu-less
	  form.
	
	Additional query words: kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbIDE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
