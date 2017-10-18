---
layout: page
title: "Q198609: FIX: Write Statement Prints Double-Quote(&quot;)"
permalink: kb/198/Q198609/
---

## Q198609: FIX: Write Statement Prints Double-Quote(&quot;)

	Article: Q198609
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbFileIO kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Write statement prints out a double-quote within a string field where this
	should not be allowed.
	
	CAUSE
	=====
	
	The Write statement is intended to work with the Input statement. A string field
	is started and terminated with double quotes, thus placing a double quote within
	the field indicates the end of the field.
	
	RESOLUTION
	==========
	
	If you need to print out a nested double quote, you need to use the Print
	statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project. Form1 is created by default.
	
	2. Insert the following code into the Form's code window.
	
	        Private Sub Form_Load()
	           Open "test.txt" For Output As #1
	           Write #1, "Bob " & Chr(34) & "The Man" & Chr(34) & " Bulldog"
	           Close #1
	        End Sub
	
	3. Run the project, then open the file, Test.txt, in Notepad. It contains the
	  following:
	
	  "Bob "The Man" Bulldog"
	
	If you try the preceding code sample in Visual Basic 5.0 or later, it results in
	the following:
	
	  "Bob ""The Man"" Bulldog"
	
	To achieve the results of Visual Basic 4.0 in Visual Basic 5.0 or later, use the
	following:
	
	     Print #1, "Bob " & Chr(34) & "The Man" & Chr(34) & " Bulldog"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFileIO kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
