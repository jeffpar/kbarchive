---
layout: page
title: "Q244261: PRB:Printer.Print May Use Different Fonts on Different Computers"
permalink: kb/244/Q244261/
---

## Q244261: PRB:Printer.Print May Use Different Fonts on Different Computers

	Article: Q244261
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbFont kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Printer.Print without first setting Printer.FontName and Printer.FontSize
	may produce a printout in a different font when the same application is used on
	different computers or with different printers.
	
	CAUSE
	=====
	
	If you use Printer.Print without first setting Printer.FontName and
	Printer.FontSize, the operating system selects a font for you based on numerous
	parameters, including which fonts are installed and the characteristics of the
	output device.
	
	RESOLUTION
	==========
	
	Explicitly set Printer.FontName and Printer.FontSize before printing.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you select an unavailable font, the operating system uses font substitution
	to select a font for you. To avoid this, check the Printer.Fonts property, which
	returns an array of all fonts that are supported for the current printer. See
	online Help for details.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q194323 PRB: Setting Printer.Font.Size with StdFont Gives Wrong Values
	
	  Q168744 FIX: Printer May Lose Font Attributes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbFont kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
