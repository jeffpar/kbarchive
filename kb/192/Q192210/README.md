---
layout: page
title: "Q192210: DOC: TabStrip Separators Do Not Work with tabButtons Style"
permalink: kb/192/Q192210/
---

## Q192210: DOC: TabStrip Separators Do Not Work with tabButtons Style

	Article: Q192210
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
	
	SUMMARY
	=======
	
	The Help file for the Separators property of the TabStrip control states that if
	the property is set to True, then separators will be drawn between buttons.
	Specifically, that they will be drawn on the TabStrip with the tabButton style
	or the tabFlatButton style. This is a documentation error. The Separators should
	only show with the Style property set to tabFlatButton.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Select Components from the Projects menu, and check "Microsoft Windows Common
	  Controls 6.0."
	
	3. Add a TabStrip control (TabStrip1) to Form1.
	
	4. Right-click on TabStrip1, and select Properties from the pop-up menu.
	
	5. Add two additional tabs to TabStrip1, bringing the total to 3 tabs. Close the
	  custom properties dialog box.
	
	6. In the property browser, change the Style property to tabButtons (1) and the
	  Separators property to True.
	
	7. Run the Project. Note that there are no visible separators between the
	  buttons. This is by design. The separators should only be visible for the
	  tabFlatButtons style.
	
	8. In order to see the separators, return to design mode and change the Style
	  property to tabFlatButtons.
	
	9. Run the Project again. Note there are now separators between the buttons.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600 kbdocfix
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	
	=============================================================================
	
