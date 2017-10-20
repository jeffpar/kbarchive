---
layout: page
title: "Q217012: HOWTO: Format Strings to Right-Justify When Printing"
permalink: /kb/217/Q217012/
---

## Q217012: HOWTO: Format Strings to Right-Justify When Printing

{% raw %}

	Article: Q217012
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbString kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several different ways to right-justify strings using the Format
	function:
	
	- Use the @ character.
	
	- Use the RSet function.
	
	- Use workarounds with the Format$ function.
	
	MORE INFORMATION
	================
	
	Using the @ character::
	
	NOTE: This technique is only effective with monospace fonts, such as Courier
	New.
	
	1. Format the number into a string with numeric conversion characters, for
	  example, $##0.00.
	
	2. Format the resulting string with a format string consisting of a number of @
	  characters equal in length to the desired format, for example, @@@@@@@.
	
	The following code sample formats several numbers using seven @ characters and a
	seven character format, $##0.00.
	
	     Print "|" & Format$(Format$(1.5, "$##0.00"), "@@@@@@@") & "|"
	     Print "|" & Format$(Format$(12.5, "$##0.00"), "@@@@@@@") & "|"
	     Print "|" & Format$(Format$(123.5, "$##0.00"), "@@@@@@@") & "|"
	
	The output is;
	
	|  $1.50|
	| $12.50|
	|$123.50|
	
	Using the RSet function::
	
	When used in conjunction with RSet, the format function works on fixed length
	strings. The following code sample illustrates the use of RSet:
	
	     x = (Format$(123.5, "$##0.00"))
	     Print "x" & x & "x"
	     RSet x = (Format$(1.5, "$##0.00"))
	     Print "x" & x & "x"
	
	The output is:
	
	x$123.50x 
	x  $1.50x
	
	Workarounds using the Format$ function::
	
	NOTE: These techniques are only effective with monospace fonts, such as Courier
	New.
	
	The Format$ function does not right-justify strings when used with the # symbol.
	The first code sample uses the Len function to determine how many spaces need to
	be added to the left of the string representing the number, in order to right
	justify the string:
	
	     required = 8 ' longest number expected
	     a = 1.23
	     b = 44.56
	     num1$ = Format$(a, "#0.00") ' this converts the number to a string
	     num2$ = Format$(b, "#0.00") ' with 2 decimal places and a leading zero
	     'Debug.Print num2$
	     If (required - Len(num1$)) > 0 Then
	     num1$ = Space$(required - Len(num1$)) + num1$
	     End If
	     
	     If (required - Len(num2$)) > 0 Then
	     num2$ = Space$(required - Len(num2$)) + num2$
	     End If
	  ' test output
	     Print num1$
	     Print num2$
	
	The output is:
	
	  1.23
	 44.56
	
	The second Format$ sample is reprinted with the permission of its author, Karl
	Peterson. His LPad function uses the Right$ function:
	
	  Private Function LPad(ValIn As Variant, nDec As Integer, _
	                        WidthOut As Integer) As String
	  '
	  ' Formatting function left pads with spaces, using specified
	  ' number of decimal digits.
	  '
	     If IsNumeric(ValIn) Then
	        If nDec > 0 Then
	           LPad = Right$(Space$(WidthOut) & _
	                  Format$(ValIn, "0." & String$(nDec, "0")), _
	                  WidthOut)
	        Else
	           LPad = Right$(Space$(WidthOut) & Format$(ValIn, "0"), WidthOut)
	        End If
	     Else
	        LPad = Right$(Space$(WidthOut) & ValIn, WidthOut)
	     End If
	  End Function
	
	Step by Step Sample:
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add four CommandButton controls to Form1. Position them to the far right of
	  the form window.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Me.Print "|" & Format$(Format$(1.5, "$##0.00"), "@@@@@@@") & "|"
	     Me.Print "|" & Format$(Format$(12.5, "$##0.00"), "@@@@@@@") & "|"
	     Me.Print "|" & Format$(Format$(123.5, "$##0.00"), "@@@@@@@") & "|"
	  End Sub
	
	  Private Sub Command2_Click()
	     Dim x As String
	     x = (Format$(123.5, "$##0.00"))
	     Me.Print "x" & x & "x"
	     RSet x = (Format$(1.5, "$##0.00"))
	     Me.Print "x" & x & "x"
	  End Sub
	
	  Private Sub Command3_Click()
	     Dim required As Integer
	     Dim a As Single
	     Dim b As Single
	     Dim num1$, num2$
	
	     required = 8 ' longest number expected
	     a = 1.23
	     b = 44.56
	     num1$ = Format$(a, "#0.00") ' this converts the number to a string
	     num2$ = Format$(b, "#0.00") ' with two decimal places and a leading zero
	     'Debug.Print num2$
	     If (required - Len(num1$)) > 0 Then
	        num1$ = Space$(required - Len(num1$)) & num1$
	     End If
	     
	     If (required - Len(num2$)) > 0 Then
	        num2$ = Space$(required - Len(num2$)) & num2$
	     End If
	  ' test output
	     Me.Print num1$
	     Me.Print num2$
	  End Sub
	
	  Private Sub Command4_Click()
	     Dim xstring As String
	     xstring = LPad(2.3, 2, 7)
	     Me.Print "K" & xstring & "K"
	  End Sub
	
	  Private Sub Form_Load()
	     Command1.Caption = "@"
	     Command1.Font.Size = 18
	     Command2.Caption = "Rset"
	     Command3.Caption = "Format$"
	     Command4.Caption = "VBPJ"
	     Me.Font.Name = "Courier New"
	  End Sub
	
	  Private Function LPad(ValIn As Variant, nDec As Integer, _
	                        WidthOut As Integer) As String
	  '
	  ' Formatting function left pads with spaces, using specified
	  ' number of decimal digits.
	  '
	     If IsNumeric(ValIn) Then
	        If nDec > 0 Then
	           LPad = Right$(Space$(WidthOut) & _
	                  Format$(ValIn, "0." & String$(nDec, "0")), _
	                  WidthOut)
	        Else
	           LPad = Right$(Space$(WidthOut) & Format$(ValIn, "0"), WidthOut)
	        End If
	     Else
	        LPad = Right$(Space$(WidthOut) & ValIn, WidthOut)
	     End If
	  End Function
	
	4. Run the program, click the command buttons, and observe the results.
	
	REFERENCES
	==========
	
	  Q95945 How to Right Justify Numbers Using Format$
	
	  Q79094 PRB: Format$ Using # for Digit Affects Right Alignment
	
	Additional query words: right-justify align alignment column
	
	======================================================================
	Keywords          : kbString kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
