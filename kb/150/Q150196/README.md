---
layout: page
title: "Q150196: BUG: AutoSize Feature of Sheridan Command Button Does Not Work"
permalink: /kb/150/Q150196/
---

## Q150196: BUG: AutoSize Feature of Sheridan Command Button Does Not Work

{% raw %}

	Article: Q150196
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
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
	
	If the AutoSize property of the Sheridan Command button is set to 1-Adjust
	Picture Size to Button and a Picture is loaded into the button, the size of the
	button is not adjusted.
	
	RESOLUTION
	==========
	
	Load the picture into an invisible Picture control that has its AutoSize feature
	switched on, and then explicitly set the width and height of the Sheridan
	Command button to the height and width of the Picture box.
	
	The following code sets the size of the Sheridan button to the size of a bitmap:
	
	     Picture1.AutoSize = True
	
	     Picture1.Picture = LoadPicture("c:\windows\256color.bmp")
	
	     SSCommand1.Height = Picture1.Height
	
	     SSCommand1.Width = Picture1.Width
	
	     SSCommand1.Picture = Picture1.Picture
	
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
	
	2. Select "Sheridan 3D Controls" from the Components window.
	
	3. Place a Sheridan Command button (SSCommand)onto Form1. Adjust the AutoSize
	  property to 1-Adjust Picture Size to Button.
	
	4. Load any bitmap into the Picture property for the button and notice that the
	  button does not change its size.
	
	To fix the problem above, place a Picture box on Form1 and set its Visible
	property to false. In the Load event for Form1, place the code given in the
	workaround. Once the dimensions of the button are known, you can set them
	permanently in the Design time properties of the button, if desired.
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
