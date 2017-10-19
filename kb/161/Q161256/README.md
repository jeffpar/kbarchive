---
layout: page
title: "Q161256: HOWTO: Customize Visual Basic Menus to Use Mnemonics"
permalink: /kb/161/Q161256/
---

## Q161256: HOWTO: Customize Visual Basic Menus to Use Mnemonics

	Article: Q161256
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic menus are organized to minimize the number of keystrokes it takes
	to get to the most frequently-used options. Still, some options require several
	extra keystrokes you may want to eliminate if you use the option regularly. This
	article describes how to customize the Visual Basic for Windows menu to create a
	new, top-level menu item with mnemonic key access.
	
	MORE INFORMATION
	================
	
	Some menu operations in Visual Basic for Windows require multiple keystrokes or
	mouse actions. The best example of this is the Bookmark option. To toggle a
	bookmark in a code window with the keyboard, the keystrokes are:
	
	  ALT+E+B+T
	
	To accomplish this behavior with the mouse, you must click three times and open
	two menus. There are no designated accelerator keys for these operations.
	
	This can be changed to a single mnemonic ALT+<KEY> with the customizable
	menus introduced in Visual Basic for Windows version 5.0.
	
	The following example assigns an ALT+B mnemonic to the menu option: Edit Bookmark
	Toggle.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Copy and paste the following code to the Form1 Code Window:
	
	        Private Sub Form_Load()
	          MsgBox "Toggle here"
	        End Sub
	
	3. Right-click the Menu Bar, and choose Customize from the menu. The customize
	  window appears.
	
	4. Select the Commands Tab.
	
	5. Choose the "Edit" category and drag the command picture for Toggle Bookmark
	  to your menu bar.
	
	  NOTE: Do not close the Customize Window at this point: leaving it open
	  determines what menu will be displayed for a right-click. If it is closed,
	  you get the standard menu.
	
	6. When you right-click the newly-dropped command picture, you will see a
	  special options menu that includes changing the mnemonic and displaying text.
	
	7. Change the Name property from "&Toggle Bookmark" to "Toggle
	  &Bookmark." This is to avoid conflict with the existing "&Tools"
	  menu. Alternatively, you could remove the "&" mnemonic from the Tools
	  menu to allow ALT+T to toggle bookmarks.
	
	8. Choose "Text Only (Always)" to display only text in the menu bar or choose
	  "Image and Text" to display both the command picture and the text. Note that
	  you must display the text for the mnemonic to be enabled.
	
	9. Close the customize window.
	
	10. Position the edit cursor (caret) in the Form1 code window on the line:
	
	        MsgBox "Toggle here"
	
	  Press ALT+B. The symbol indicating a bookmark should appear in the left
	  margin of the code window.
	
	REFERENCES
	==========
	
	Customize Command (Shortcut Menu), Customize Dialog Box
	
	(c) Microsoft Corporation 1996, All Rights Reserved. Contributions by Ted Keith,
	Microsoft Corporation
	
	
	Additional query words: kbNoKeyword
	
	======================================================================
	Keywords          : kbusage kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
