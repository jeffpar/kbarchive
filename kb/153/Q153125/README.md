---
layout: page
title: "Q153125: BUG: Printer Object Font Information is Lost After Printing"
permalink: kb/153/Q153125/
---

## Q153125: BUG: Printer Object Font Information is Lost After Printing

	Article: Q153125
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The printer object loses all of its font information, including font size,
	boldness, underlining, etc., after an initial call to Printer.Print has been
	made.
	
	CAUSE
	=====
	
	This problem occurs because of the way the Windows 95, Windows 98, Windows Me,
	Windows NT, and Windows 2000 printer drivers work. They require applications to
	re-send printer settings for each page. Visual Basic 4.0 does not automatically
	do this.
	
	This behavior is described in the article mentioned in the REFERENCES section
	below.
	
	RESOLUTION
	==========
	
	To work around this problem, add the following statements to the beginning of
	the Command1_Click procedure, as shown in the following example:
	
	     Sub Command1_click()
	       Dim PrinterFont As String   '*
	       Printer.Print ""            '* Initialize printer object's device
	                                   '* context
	       PrinterFont = Printer.Font  '* Retrieve current font name
	       Printer.Font = ""           '* Clear current font details
	       Printer.Font = PrinterFont  '* Reset font information
	       Printer.fontsize = 36
	       Printer.fontbold = true
	       Printer.fontitalic = true
	       Printer.fontunderline = true
	       Printer.print "This is a test"
	       Printer.enddoc
	     End Sub
	
	Each time the CommandButton is pressed, the output should print correctly.
	
	Starting a new page will also reset the Printer's font information to its
	defaults, so you will need to reset the printer after each NewPage method. Page
	level Information, such as orientation, will not need to be reset.
	
	    ' If you have additional pages, use this syntax:
	    Printer.NewPage
	    Printer.Print ""     '* Reinitialize printer object's device
	    Printer.Font = ""    '* Clear current font details
	    Printer.Font = PrinterFont '* Reset font information
	    Printer.FontSize = 36
	    Printer.CurrentY = 0    '* Reset to the top of the new page
	    Printer.Print "This is page two"
	    Printer.EndDoc
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic with a New Project.
	
	2. Add a CommandButton to the form.
	
	3. Add the following code to the Click event of the CommandButton:
	
	        Sub Command1_click()
	           Printer.Fontsize = 36
	           Printer.Fontbold = true
	           Printer.Fontitalic = true
	           Printer.Fontunderline = true
	           Printer.Print "This is a test"
	           Printer.Enddoc
	        End Sub
	
	4. Run this program and press the CommandButton. The output should have printed
	  correctly.
	
	5. Press the CommandButton again. This time the output will have lost all of its
	  font attributes.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q125696 : StartPage/EndPage Resets Printer DC Attributes in Windows95
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
