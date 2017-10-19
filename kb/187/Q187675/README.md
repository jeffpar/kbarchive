---
layout: page
title: "Q187675: HOWTO: Copy a String to a Byte Array Without Unicode Conversion"
permalink: /kb/187/Q187675/
---

## Q187675: HOWTO: Copy a String to a Byte Array Without Unicode Conversion

	Article: Q187675
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
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to copy a string to a byte array without using a
	Unicode conversion. This technique is useful if you need to pass a string to a
	function that requires Unicode. The article includes instructions to create a
	sample project that demonstrates this information.
	
	MORE INFORMATION
	================
	
	This article assumes that you know the difference between ANSI and Unicode
	strings. Although Visual Basic internally converts strings to Unicode for
	processing, strings are passed to functions as ANSI. Some functions, such as
	NetUserGetInfo, only accept Unicode strings. If you pass a string from Visual
	Basic to a function that only accepts Unicode strings, the function will return
	incomprehensible data. To pass a string to a function that only accepts Unicode
	strings, you need to convert the string into a byte array.
	
	To convert a string to a byte array, create a dynamic byte array. Set your string
	variable equal to the byte array. When you loop through the individual elements
	of the byte array, you will get the Unicode character code for that character
	
	In the case of the English character set, the low-order byte value is the same as
	the ANSI character code for that character while the high-order byte is a zero.
	
	The next section shows how to create a sample project that demonstrates
	converting a string in Visual Basic to a byte array.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Click()
	           Dim strTest As String
	           Dim bytArray() As Byte
	           Dim intcount As Integer
	
	           strTest = "This is my test string."
	           bytArray = strTest
	
	           For intcount = 0 To UBound(bytArray)
	              Debug.Print bytArray(intcount); "= " & Chr(bytArray(intcount))
	           Next
	        End Sub
	
	3. On the Run menu, click Start or press the F5 key to start the program. Click
	  on the form and see the results in debug window. Because the string variable
	  contains only English characters, each element contains either a Unicode
	  character code corresponding to a English character or a zero.
	
	  To then pass the byte array as a Unicode string argument to an API function,
	  pass the first element of the byte array. By default, the first element is 0
	  unless either the first element is clearly different in the array declaration
	  or Option Base 1 is specified in your module. For an example of passing a
	  byte array to the NetUserGetInfo function, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q151774 : HOWTO: Call NetUserGetInfo API from Visual Basic
	
	REFERENCES
	==========
	
	For more information about ANSI and Unicode, see Chapter 16 "International
	Issues" in Part 2 of the Visual Basic Programmer's Guide.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
