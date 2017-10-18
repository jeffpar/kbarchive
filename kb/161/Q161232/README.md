---
layout: page
title: "Q161232: HOWTO: Use Spaces in Enumerated Types"
permalink: kb/161/Q161232/
---

## Q161232: HOWTO: Use Spaces in Enumerated Types

	Article: Q161232
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Beginning with version 5.0, Visual Basic supports Enumerated Types. Enumerations
	provide a convenient way to work with sets of related constants and to associate
	constant values with identifiers. The identifier may be defined as either a
	normal identifier or a more "friendly" identifier that can contain spaces.
	
	NOTE: Other identifiers, such as variable names and procedure names, can not
	contain spaces.
	
	MORE INFORMATION
	================
	
	1. Start Microsoft Visual Basic version 5.0. Create a new Standard EXE. Form1 is
	  created by default.
	
	2. Add a CommandButton, Command1, to Form 1.
	
	3. Add the following code to Form1:
	
	        Enum Keys1
	            TabKey = 12
	            EnterKey = 13
	            SpaceBar = 32
	        End Enum
	
	        Enum Keys2
	            [Tab Key] = 12
	            [Enter Key] = 13
	            [Space Bar] = 32
	        End Enum
	
	        Private Sub Command1_Click()
	            Dim i As Long
	            i = Keys1.EnterKey
	            MsgBox i
	            i = Keys2.[Space Bar]
	            MsgBox i
	        End Sub
	
	4. Run the project. Note that the brackets are required or an error will occur.
	  Though the brackets will not be displayed when Visual Basic displays a drop
	  list of the members of the enumeration. Such as, when you type a period after
	  "Keys2", Visual Basic displays a drop list showing the members of the Keys2
	  enumeration without the brackets:
	
	  Enter Key
	  Space Bar
	  Tab Key
	
	  When you select one of the members, Visual Basic fills in the brackets for
	  you.
	
	  This code will generate a Compile Error on the second "Test2" line. This is
	  due to the compiler expecting an end-of-statement after the word "Space."
	
	REFERENCES
	==========
	
	Microsoft Visual Basic 5.0 Books Online
	"Using Enumerations to Work with Sets of Constants"
	
	Microsoft Visual Basic Online Help
	"Enum Statement"
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbCompiler kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
