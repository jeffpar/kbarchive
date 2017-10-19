---
layout: page
title: "Q153669: DOC: Documented Properties Do Not Exist on DBGrid"
permalink: /kb/153/Q153669/
---

## Q153669: DOC: Documented Properties Do Not Exist on DBGrid

	Article: Q153669
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 608 of the Visual Basic 4.x Programmers Guide in the Formatting section
	indicates that:
	
	  "Each column of the DBGrid control has its own font, border, word-wrap,
	  color, and other attributes that can be set without regard to other columns."
	
	This is an error in the documentation.
	
	MORE INFORMATION
	================
	
	None of the explicitly mentioned properties can be set on a per-column basis.
	The only properties of the DBGrid that can be set on a per-column basis can be
	determined as follows:
	
	1. Right-click the DBGrid.
	
	2. Select Properties.
	
	3. On the property sheet, select Columns.
	
	REFERENCES
	==========
	
	Visual Basic 4.0 Programmers Guide, page 608
	
	Visual Basic Programmer's guide, Chapter 14, page 693.
	
	Also, if you select a dbgrid on a form and hit the F1 key, you get a Help file
	that contains the erratum.
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : 4.0 5.0
	
	=============================================================================
	
