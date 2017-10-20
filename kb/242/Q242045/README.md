---
layout: page
title: "Q242045: HOWTO: Control Line Spacing when Printing from Visual Basic"
permalink: /kb/242/Q242045/
---

## Q242045: HOWTO: Control Line Spacing when Printing from Visual Basic

{% raw %}

	Article: Q242045
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Printer object has no setting specifically for line spacing, but you can
	control the line spacing with the CurrentY property of the Printer object.
	
	MORE INFORMATION
	================
	
	The print position on a page is determined by two properties of the Printer
	object, CurrentX and CurrentY, which control the X and Y coordinates
	respectively. Each time you call Printer.Print, the CurrentY position is
	incremented to advance to the next line. The amount of the increment is
	determined by the font and printer driver. So, to override the default line
	spacing you need to manipulate Printer.CurrentY directly.
	
	By default, this property uses twips and there are 1440 twips per logical inch.
	So for six lines per inch, you need each line to take 240 twips, and for eight
	lines per inch, you need 180 twips. You can set Printer.ScaleMode to use a
	different predefined scale or set the ScaleHeight and ScaleWidth properties to
	create a custom scale. It might also be useful to employ the TextHeight property
	to determine the minimum height for your text, and TextWidth to determine the
	width of your string. Please check Online Help and see the REFERENCES section
	below for more information on using these properties.
	
	The code below demonstrates the effect of changing the CurrentY property between
	lines. Note that you can cause lines to overlap without generating an error.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add the following code to the code window of Form1:
	
	     Option Explicit
	
	     Private Sub Form_Click()
	     Dim Lines As Integer, Y As Long, OutStr As String
	
	     With Printer
	        .Print "Font is " & .Font.Name & " " & .Font.Size & " pt"
	     
	        .CurrentY = .CurrentY + 500   ' Skip some space
	        .Print "First, print normally ..."
	        .Print "Line 1 " & ".CurrentY = " & .CurrentY
	        .Print "Line 2 " & ".CurrentY = " & .CurrentY
	        .Print "Line 3 " & ".CurrentY = " & .CurrentY
	     
	        .CurrentY = .CurrentY + 500   ' Skip some space
	        .Print "Now shorten the lines for less line spacing ..."
	        .Print "Line 1 " & ".CurrentY = " & .CurrentY
	        .CurrentY = .CurrentY - 50
	        .Print "Line 2 " & ".CurrentY = " & .CurrentY
	        .CurrentY = .CurrentY - 50
	        .Print "Line 3 " & ".CurrentY = " & .CurrentY
	     
	        .CurrentY = .CurrentY + 500   ' Skip some space
	        .Print "Now increase line spacing ..."
	        .CurrentY = .CurrentY + 50
	        .Print "Line 1 " & ".CurrentY = " & .CurrentY
	        .CurrentY = .CurrentY + 50
	        .Print "Line 2 " & ".CurrentY = " & .CurrentY
	        .CurrentY = .CurrentY + 50
	        .Print "Line 3 " & ".CurrentY = " & .CurrentY
	     
	        .CurrentY = .CurrentY + 500   ' Skip some space
	        .Print "Now specify 6 lines per inch ..."
	        ' Start at an even position to better see increments.
	        .CurrentY = .CurrentY + (1000 - .CurrentY Mod 1000)
	        For Lines = 1 To 6   ' These 6 lines take 1 inch on the page.
	           Y = .CurrentY   ' Remember current Y position.
	           .Print "Line " & Lines & ":  " & "6 Lines per inch - " & _
	              ".CurrentY = " & .CurrentY
	           ' Increment the Y position by 1/6th of an inch (240 twips).
	           .CurrentY = Y + 240   ' Reset to previous position + 240.
	        Next Lines
	        .EndDoc   ' End the print job.
	     End With
	     End Sub
	
	     Private Sub Form_Load()
	     ' Select a standard Font and size (Optional)
	     Printer.Font.Name = "Arial"
	     Printer.Font.Size = 8
	     End Sub
	
	3. Run the project and click on the form. The resulting printed page
	  demonstrates different line spacings.
	
	REFERENCES
	==========
	
	For additional information about manipulating print positions on a page, please
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q193943 HOWTO: Use GetDeviceCaps to Determine Margins on a Page
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
