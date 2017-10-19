---
layout: page
title: "Q180456: PRB: Passing Variant Array to WriteFields Method Generates Error"
permalink: /kb/180/Q180456/
---

## Q180456: PRB: Passing Variant Array to WriteFields Method Generates Error

	Article: Q180456
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Variant array is passed as a parameter, one of the following errors might
	occur:
	
	  Subscript out of range.
	
	RESOLUTION
	==========
	
	To work around this behavior, pass arrays without parenthesis, as follows:
	
	  File1.WriteFields sData
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in eMbedded Visual Basic or Visual Basic 6.0.
	  Form1 is created by default.
	
	2. From the Project menu, click Components, select "Microsoft CE File System
	  Control", and click OK.
	
	3. Add a File control and a Command Button to Form1.
	
	4. Paste the following code in to Form1:
	
	        Dim sData()
	        Dim iLoop
	
	        Private Sub Command1_Click()
	           On Error Resume Next
	           'Build Array
	           ReDim sData(3)
	           For iLoop = 0 To 3
	               sData(iLoop) = "Some Text" & iLoop
	           Next
	           File1.Open "\test.txt", 2
	           File1.WriteFields sData()   'This line generates an error.
	           MsgBox Err.Number & " " & Err.Description
	           File1.Close
	       End Sub
	
	5. Press F5 to run the project and note that a message box appears indicating
	  that error 9 "subscript out of range" occurred.
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
