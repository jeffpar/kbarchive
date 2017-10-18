---
layout: page
title: "Q143063: How to Remove White Lines in Mailing Labels and Reports"
permalink: kb/143/Q143063/
---

## Q143063: How to Remove White Lines in Mailing Labels and Reports

	Article: Q143063
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When doing mailing labels, companies often have multiple address lines for
	company Name, P.O. Box, Address1, Address2, City, State, and Zip. At times some
	of these lines may be blank if a customer does not have a P.O. Box or has only
	one address line. The steps in this article demonstrate how to remove blank
	lines (white space) from the report or mailing label without using the float
	option. The float option on an Invoice report causes the header section to
	shrink and grow with the number of lines being printed.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a table called Mylabel.dbf that contains five fields representing
	  address lines called line1, line2, line3, line4, and line5.
	
	2. Create a label called Mylabel.lbx by using the Label Wizard.
	
	3. In the area of the report where the label would normally be, delete all the
	  label text boxes. Then add one text box called Text1, and make it five lines
	  high.
	
	4. In the expression of the text box, enter:
	
	     line1; line2; line3; line4; line5
	
	5. Choose Print When, and select Remove Line If Blank. This will arrange the
	  lines properly and remove any blank lines from the individual address lines.
	
	6. Save the label as Mylabel.lbx.
	
	7. Add six records to the table Mylabel.dbf leaving none, one, or two lines
	  blank in each record. Do not leave line1 blank.
	
	8. Preview the Label. It should produce a report without any blank lines in the
	  address and the height of the header section should stay the same.
	
	Additional query words: VFoxWin blank line
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
