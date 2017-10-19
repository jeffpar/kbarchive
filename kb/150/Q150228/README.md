---
layout: page
title: "Q150228: BUG: BackColor Property of OCX Control Saved in Decimal"
permalink: /kb/150/Q150228/
---

## Q150228: BUG: BackColor Property of OCX Control Saved in Decimal

	Article: Q150228
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The BackColor property of OCX controls is saved in Decimal format inside Form
	files. This is contrary to the format stored for Forms, which saves its
	BackColor property in a Hexadecimal format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	There is no workaround to prevent Visual Basic from saving the BackColor
	properties of OCX controls in a Decimal format. However, any program that parses
	the text Form files detects whether the number is in a Hexadecimal format since
	Hexadecimal numbers are preceded by an ampersand (&) character.
	
	MORE INFORMATION
	================
	
	Although the BackColor property of OCX controls is saved in a Decimal format, it
	is displayed as Hexadecimal.
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Change the BackColor property of Form1 to any color other than the default
	  gray.
	
	3. Place a Sheridan Panel control on Form1. Change its BackColor property to the
	  same color you chose for Form1.
	
	4. From the File menu, select Save File As to save the Form.
	
	5. Open the form file in Notepad or another text editor. Note that the BackColor
	  property of the Form is saved in Hexadecimal format and the BackColor
	  property of the control is saved in a Decimal format.
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport KBIDE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
