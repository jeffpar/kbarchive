---
layout: page
title: "Q153583: HOWTO: How to Change Case of a Control Name Within the Code Wind"
permalink: /kb/153/Q153583/
---

## Q153583: HOWTO: How to Change Case of a Control Name Within the Code Wind

{% raw %}

	Article: Q153583
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenv kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You might think that you could change the letter case of a control name by
	changing the value of the Name property of the control in the Property Browser.
	However, this does not work. This article shows you how to do it.
	
	MORE INFORMATION
	================
	
	By design, the letter case of a variable as designated when dimensioning it will
	be the letter case throughout the project. For example, type the following
	inside a code window:
	
	     Dim MyVariable as string
	     myvariable = "hello"     ' will be changed to MyVariable = "hello"
	
	To change the letter case of a variable, you must change its letter case within
	the dimension statement. Therefore, in the previous example, to change
	MyVariable to Myvariable, type the following:
	
	     Dim Myvariable as String
	
	You can use this fact to change the letter case of a control's name. Just
	dimension a variable of the desired name and case. After you press ENTER, the
	case will change throughout the code window. Then simply delete the unnecessary
	dimension statement.
	
	The following shows how to change the case of Command1 to command1 by a
	step-by-step example:
	
	Step-by-step example
	--------------------
	
	1. Start a new project in Visual Basic 4.0. Form1 will be added by default.
	
	2. Add a command button on Form1.
	
	3. Add the following line of code to the Form_Click Event:
	
	     Command1.Caption = "hello"
	
	4. Add the following line of code to the Form_Click event and press ENTER.
	
	     Dim command1 as string
	
	5. The case should now be as just entered, or:
	
	     command1.Caption = "hello"
	
	6. Delete the following line of code from the Form_Click event now that it is no
	  longer needed:
	
	     Dim command1 as string
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbenv kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
