---
layout: page
title: "Q250914: BUG: Modify String During Concatenation Gives Unexpected Results"
permalink: kb/250/Q250914/
---

## Q250914: BUG: Modify String During Concatenation Gives Unexpected Results

	Article: Q250914
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbString kbVBp kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 22-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A line of code concatenates a string with an in-line call to a function that
	modifies the first string and returns another string, but the resulting
	concatenated string is not what was expected.
	
	RESOLUTION
	==========
	
	To work around this problem, define an intermediate string variable to hold the
	value that is returned from the function, and then use this string in the
	concatenation. For example:
	
	  s1 = "String1"
	  s2 = GetString2(s1)
	  sTmp = s1 & s2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If you modify a string in a function and that function is part of a string
	concatenation, Visual Basic reuses the buffer incorrectly. For example, you
	might have the following code, in which s1 gets modified in the function
	GetString2():
	
	      s1 = "String1"
	      sTmp = s1 & GetString2(s1)
	      MsgBox sTmp
	
	  Function GetString2(sStr As String) As String
	      sStr = "XYZ" ' This should also modify s1 in Command1_Click
	      GetString2 = "String2"
	  End Function
	
	You would expect that sTmp would contain "XYZString2". Instead, it contains
	"String2String2".
	
	The problem occurs when you run the program inside the Visual Basic Integrated
	Development Environment (IDE) and you compile the program in p-code and then run
	the standalone executable. This does not happen with an executable file compiled
	in native code.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton to Form1.
	
	3. Paste the following code into the code window of Form1.
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	      Dim s1 As String
	      Dim sTmp As String
	      s1 = "String1"
	      sTmp = s1 & GetString2(s1)
	      MsgBox sTmp
	  End Sub
	
	  Function GetString2(sStr As String) As String
	      sStr = "XYZ" ' This should also modify s1 in Command1_Click
	      GetString2 = "String2"
	  End Function
	
	4. Run the project and click on the button to see the concatenated string.
	
	Additional query words: ampersand
	
	======================================================================
	Keywords          : kbString kbVBp kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
