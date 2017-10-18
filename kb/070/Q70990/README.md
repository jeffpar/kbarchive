---
layout: page
title: "Q70990: WD97: Formula in Table Produces Error in Word"
permalink: kb/070/Q70990/
---

## Q70990: WD97: Formula in Table Produces Error in Word

	Article: Q70990
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97 kbtablekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the result of a formula is too long (wide) to fit within a table cell,
	Microsoft Word displays "Error!" in the table cell.
	
	Text that is typed within a cell will wrap when the end of the cell is reached.
	However, this is not true for the results of formulas that are entered into
	table cells.
	
	For example:
	
	{eq \F(10000,45345)}
	
	CAUSE
	=====
	
	The width of the table cell needs to be wide enough to accommodate the result of
	the entered formula.
	
	WORKAROUND
	==========
	
	If the width of the table cell is set to 0.5 inch, the sample formula in the
	"Symptoms" section of this article will result in an "Error!" message. If the
	width of the cell is increased, the following fraction will appear:
	
	  10000
	  -----
	  45345
	
	Additional query words: divisible squished wordwrap 97
	
	======================================================================
	Keywords          : kbdta winword word97 kbtable kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
