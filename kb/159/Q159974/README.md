---
layout: page
title: "Q159974: HOWTO: Evaluate Numeric Expressions Stored as a String"
permalink: /kb/159/Q159974/
---

## Q159974: HOWTO: Evaluate Numeric Expressions Stored as a String

{% raw %}

	Article: Q159974
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
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
	
	Given a string expression, the Val function returns the number contained in that
	string. However, if it encounters a character that is not a number or part of a
	number, it ignores the rest of the string. For example, Val("2") returns the
	number 2, but Val("2+2") also returns the number 2, and Val("(2+2)") returns the
	number 0.
	
	This article describes how to obtain the actual value of a numeric expression
	that is stored as a String by using the existing features in the Excel Object
	Model.
	
	MORE INFORMATION
	================
	
	In some instances, you might want to allow users to type in their own numeric
	expression in a TextBox and then evaluate it. In other cases, it might be
	necessary to read an ASCII file that contains a series of numeric expressions
	and then produce another ASCII file containing the results of those expressions.
	If this is the only purpose of your Visual Basic application, it is probably
	best, for speed and efficiency, to write a parser. However, for a simple and
	quick solution, you can use OLE Automation and the Excel Object Library to
	accomplish these tasks.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a TextBox and a CommandButton to Form1.
	
	3. Set the Text property of the TextBox to "".
	
	4. Set the Caption property of the CommandButton to "Evaluate."
	
	5. Add the following code to the Click event of the CommandButton:
	
	        Private Sub Command1_Click()
	            MsgBox MyVal(Text1.Text)
	        End Sub
	
	6. Add the following code to the General Declarations section of Form1:
	
	        Private Function MyVal(s As String) As Double
	        Dim xl As Object
	
	            Set xl = CreateObject("excel.application")
	            xl.Workbooks.Add
	
	            xl.ActiveCell.Formula = "=" & s
	            MyVal = xl.ActiveCell.Value
	
	            xl.ActiveWorkbook.Close savechanges:=False
	            xl.Quit
	            Set xl = Nothing
	
	        End Function
	
	7. Run the project by pressing the F5 key. Type a valid numeric expression in
	  the TextBox and click the CommandButton to evaluate the expression.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
