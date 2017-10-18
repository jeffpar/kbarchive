---
layout: page
title: "Q298825: PRB: Run-time Error '6' When You Use the TextWidth Method"
permalink: kb/298/Q298825/
---

## Q298825: PRB: Run-time Error '6' When You Use the TextWidth Method

	Article: Q298825
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbFont kbPrinting kbString kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSuppor
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the TextWidth method on very large Strings, either a maximum value
	is returned, or the following error message is generated:
	
	  Run-time error '6':
	
	  Overflow
	
	To determine which behavior is seen and at what String length it occurs, change
	the FontSize, FontName, or ScaleMode property.
	
	RESOLUTION
	==========
	
	To work around this problem, write a routine to recursively call TextWidth on
	smaller portions of the large String and return the sum. For example, you can
	call the following function instead of using TextWidth directly:
	
	  Function fTextWidth(sInString As String) As Long
	      If Len(sInString) > 500 Then
	          fTextWidth = Printer.TextWidth(Left(sInString, 500)) + _
	                       fTextWidth(Right(sInString, Len(sInString) - 500))
	      Else
	          fTextWidth = fTextWidth + Printer.TextWidth(sInString)
	      End If 
	  End Function
	
	If you are not using TextWidth with the Printer object, substitute the correct
	object for Printer. This function handles large or small Strings without
	problems.
	
	MORE INFORMATION
	================
	
	You can use the GetTextExtentPoint32 function to retrieve the text height and
	width, but this is also limited under Microsoft Windows 95 and Microsoft Windows
	98. The function that is provided in the "Resolution" section should always
	work.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Click()
	   Dim TWidth As Long, THeight As Long
	   Dim Msg As String
	
	    Me.FontName = "MS Sans Serif"   ' Default
	    Me.FontSize = 8.25              ' Default
	    Debug.Print Me.FontName, Me.FontSize
	    Msg = String(4682, "A")   ' 4681 works
	
	    THeight = TextHeight(Msg)
	    TWidth = TextWidth(Msg)   ' May cause Overflow error.
	    Debug.Print "TextHeight = "; THeight, "TextWidth = "; TWidth
	  End Sub
	
	3. If the Immediate window is not open, press the CTRL+G key combination to open
	  it.
	
	4. Run the project, and click on the form. Notice that run-time error 6 occurs.
	
	5. Stop the project, change the number of characters in the String function from
	  "4682" (without the quotation marks) to "4681" (without the quotation marks),
	  and repeat the test. The call succeeds and the following information appears
	  in the Immediate window:
	
	  
	
	  MS Sans Serif  8.25 
	  TextHeight =  195           TextWidth =  491505
	
	For some fonts and sizes on Windows 95, Windows 98, and Microsoft Windows
	Millennium Edition (Me), TextWidth appears to return a maximum value without
	raising an error. For other fonts and sizes, the "Overflow" error is raised.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbFont kbPrinting kbString kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
