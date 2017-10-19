---
layout: page
title: "Q138163: PRB: Left Justify Puts a Space in Format Clause"
permalink: /kb/138/Q138163/
---

## Q138163: PRB: Left Justify Puts a Space in Format Clause

	Article: Q138163
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a numeric report expression is reopened after the Left Justify check box and
	any other check box in the Format dialog are selected, a space is inserted
	between the two format characters. The printed results of the expression in the
	Report Designer will then be the format character and not the contents of the
	field to be printed.
	
	WORKAROUND
	==========
	
	If the Left Justify clause is used, the space will have to be deleted manually
	each time the report expression is reopened.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Selecting the Left Justify check box in the Format dialog box of a numeric
	report expression allows the expression contents to print aligned to the left.
	(Make sure you use 9 or # format characters to suppress leading spaces.) If
	another check box in the Format box is selected along with the Left Justify box,
	the format clause is properly entered. However, when the report expression is
	reopened, a blank space is placed between the Left Justify "B" format character
	and the other format character. This results in the printing of the format
	character instead of numeric value of the field.
	
	Right-aligned character expressions may exhibit similar behavior. For more
	information about this, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q134308 Upper Format Truncates Right/Center Alligned Report Field
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a table that contains a numeric field, and create a report containing
	  the numeric field.
	
	2. Double-click the numeric field, and then click the button next to Format box.
	
	3. Select the Left Justify check box and any one of the other check boxes.
	
	4. Close the Format box, and preview the report. Note that the preview of the
	  numeric field is correct.
	
	5. Close the preview, and double-click the numeric expression in the Report
	  Designer. Note that there is now a space between the B format character and
	  the additional format character. Close the Report Expression dialog box, and
	  preview the report. You will see the format character instead of the numeric
	  field contents.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
