---
layout: page
title: "Q185238: PRB: LostFocus of Textbox Control Has Different Behavior"
permalink: /kb/185/Q185238/
---

## Q185238: PRB: LostFocus of Textbox Control Has Different Behavior

	Article: Q185238
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic version 4.0, when a TextBox control has focus and a toolbar is
	clicked, the LostFocus event of the TextBox is executed. Visual Basic 5.0 and
	later does not behave the same way and the LostFocus event is not executed.
	
	RESOLUTION
	==========
	
	The toolbar is behaving similar to a menu, which is more appropriate.
	
	Do not use a toolbar, in Visual Basic version 5.0, if you want the LostFocus
	event of the TextBox control executed when the toolbar is clicked.
	
	Instead, have a CommandButton control on the form if executing LostFocus is
	important to the applications design.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project with 1 form. Add Microsoft Common Controls by
	  clicking Components on the Project menu.
	
	2. Place a toolbar on the form.
	
	3. Add a TextBox control to the form and place one button on the toolbar by
	  right-clicking the toolbar and clicking Properties.
	
	4. Place a MsgBox command in the textbox LostFocus event:
	
	        MsgBox "LostFocus Event of TextBox Control"
	
	5. While the textbox has focus, click the Toolbar control. Note that Visual
	  Basic version 4.0 displays the MsgBox, while Visual Basic version 5.0 does
	  not.
	
	Additional query words: text box tool bar kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	
