---
layout: page
title: "Q168744: FIX: Printer May Lose Font Attributes"
permalink: /kb/168/Q168744/
---

## Q168744: FIX: Printer May Lose Font Attributes

	Article: Q168744
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printed documents have the wrong font or font size.
	
	CAUSE
	=====
	
	The exact cause of this problem is not known. The symptoms indicate that the
	Printer object loses font attribute information, such as font name or size.
	
	RESOLUTION
	==========
	
	Several methods have alleviated the problem during testing. To work around the
	problem, try one or more of the following:
	
	- Do not use the line:
	
	  Printer.Font = ""
	
	This normally clears font details.  - Instead of using:
	
	  Printer.font = <font name>
	
	Use:
	
	  Dim F as New StdFont
	  F.Name = <font name>
	  F.Size = <size>
	  Set Printer.Font = F
	
	  For additional information, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q194323 PRB: Setting Printer.Font.Size with StdFont Gives Wrong Values
	
	- Alternatively, you can use:
	
	  Dim x As Single
	  x = Printer.CurrentX
	  Printer.Print " ";  'initialize the printer object
	  Printer.CurrentX = x
	  Printer.FontName = "Arial"
	  Printer.FontSize = 10
	
	- If the problem occurs when using the NewPage method, re-specify the font
	  information at the beginning of each page as in the following example:
	
	  Printer.Print ""  'Reset printer
	  Printer.Font = ""
	  Printer.FontName = "Arial"
	  Printer.FontSize = 10
	
	  Printer.Print "This is a test using " & Printer.Font
	  Printer.NewPage
	  Printer.FontName = "Arial"
	  Printer.Print "this is page two"
	  Printer.EndDoc
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q194295 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Microsoft has received reports that documents print with a generic font, such as
	Courier, instead of desired fonts.
	
	This problem has been reported under the following circumstances, but has not
	been consistently reproduced:
	
	- Use of NewPage method.
	
	- Use of Printer.Font = ""<A0><A0> 'used to reset font details.
	
	- Changes via code to page orientation or paper size.
	
	
	REFERENCES
	==========
	
	Microsoft Visual Basic online Help and online Books.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
