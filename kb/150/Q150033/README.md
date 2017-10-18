---
layout: page
title: "Q150033: BUG: Clicking Menu Does Not Go Straight to the Click Event"
permalink: kb/150/Q150033/
---

## Q150033: BUG: Clicking Menu Does Not Go Straight to the Click Event

	Article: Q150033
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click on a menu item in Design mode, the Click event for that menu item
	should always appear in the code window. However, this behavior does not occur
	when you access the Property window before clicking a menu item and the
	WindowList check box has been clicked for that menu item. The code window
	appears, but it is set for the General Declarations section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of this article. We are researching this issue and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. From the Microsoft Visual Basic menu, select Tools, and then select Menu
	  Editor. For the Caption, type "a." For the Name, type "Mnua." Select the
	  WindowList check box, and click OK.
	
	3. Press the F4 key to bring up the Properties window. From the Properties
	  window, select Mnua. Change the Caption property to "b."
	
	4. Click on menu b on the form.
	
	The General Declarations section in the code window displays.
	
	Additional query words: kbvbp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbIDE kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
