---
layout: page
title: "Q190223: PRB: StdFont Rescales When Shared with Printer Object"
permalink: /kb/190/Q190223/
---

## Q190223: PRB: StdFont Rescales When Shared with Printer Object

{% raw %}

	Article: Q190223
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
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a StdFont object and printing to a Form or PictureBox, the font appears to
	be the wrong size, but the Size property is correct.
	
	CAUSE
	=====
	
	The Form or PictureBox is sharing the StdFont object with the Printer object
	which silently changes the Scale of fonts for proper printing.
	
	RESOLUTION
	==========
	
	Do not share a StdFont object between the Printer object and any other object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When the Printer object gets a new font, it adjusts the scaling factor on the
	font for the current printer. So if another object is set to the same StdFont,
	this scaling adjustment will affect it as well. The scaling factor is not
	exposed to the user, so there is no way to determine that this has happened.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Paste the following code into the module of Form1:
	
	        Private Sub Form_Click()
	           Dim MyFont As New StdFont
	           Dim outstring As String
	
	           MyFont.Name = "Arial"
	           MyFont.Size = 12
	           MyFont.Bold = False
	           MyFont.Italic = False
	           Me.Cls
	
	           Set Me.Font = MyFont
	           outstring = Me.Font.Name & ", " & Me.Font.Size
	           Me.Print outstring    ' This prints in normal size
	           Set Printer.Font = MyFont
	
	           ' Since VB caches the font information, we need to refresh it
	           Me.Font.Italic = True ' Change Italic to True for demonstration
	
	           Me.Print outstring    ' prints out much larger than the first line
	       End Sub
	
	3. Run the project and click on the form. The following line appears twice on
	  the form:
	
	     Arial, 12
	
	  The first line is in a normal 12 point font, but the second line is obviously
	  much larger, even though it reports still being 12 point. This is because the
	  Printer object has changed the font's scaling.
	
	When the code executes "Set Me.Font = MyFont" it is not copying the font into the
	form's font property, instead it is setting the form's font to the actual
	instance of the font object. Both the Printer object and the form are
	referencing the same font object rather than having their own copies. So if one
	owner changes the object, it changes for both owners.
	
	Additional query words: kbDSupport kbDSD FontSize kbVBp kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
