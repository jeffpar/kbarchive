---
layout: page
title: "Q150223: BUG: Help Button on Toolbar Customize Dialog Box Does Nothing"
permalink: kb/150/Q150223/
---

## Q150223: BUG: Help Button on Toolbar Customize Dialog Box Does Nothing

	Article: Q150223
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Customize dialog box of the Toolbar contains a Help button, but there is no
	way to invoke Help from this button. This behavior occurs because there is no
	HelpContextID property for the Toolbar to access the Help topic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Toolbar control on Form1. Change the BorderStyle to:
	
	  1 - Fixed Single.
	
	3. Run the project by pressing the F5 key. Double-click inside the Toolbar and
	  notice that the Customize Toolbar dialog box appears. Press the Help button
	  inside this dialog box and note that nothing happens.
	
	Additional query words: kbVBp400BUG kbVBp500BUG kbVBp600BUG kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
