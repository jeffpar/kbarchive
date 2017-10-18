---
layout: page
title: "Q266289: HOWTO:Use Split Function to Put Delimited String into String Arr"
permalink: kb/266/Q266289/
---

## Q266289: HOWTO:Use Split Function to Put Delimited String into String Arr

	Article: Q266289
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbString kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to use the Split function to separate a delimited
	string into a string array. Although the Microsoft Visual Basic product
	documentation describes how to use the Split function, the product documentation
	does not contain an example that uses the Split function.
	
	MORE INFORMATION
	================
	
	The Split Function returns a one-dimensional array, which contains a specified
	number of substrings. You can use this function to put a string separated by a
	character delimiters into a string array to get the value of each substring.
	
	Use the following steps to create the sample project:
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Add the following code to the code window of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Dim strTest As String
	     Dim strArray() As String
	     Dim intCount As Integer
	     
	     strTest = "Fred & Wilma & Barney & Betty"
	     strArray = Split(strTest, "&")
	     
	     For intCount = LBound(strArray) To UBound(strArray)
	        Debug.Print Trim(strArray(intCount))
	     Next
	  End Sub
	
	4. From the View menu, click Immediate Window.
	
	5. On the Run menu, click Start or press the F5 key to start the program.
	
	6. Click the Command1 command button.
	
	RESULTS: Each name in the strTest variable appears on an individual line.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbString kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
