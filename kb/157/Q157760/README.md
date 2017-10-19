---
layout: page
title: "Q157760: PRB: Grid Column Widths Change at Run Time"
permalink: /kb/157/Q157760/
---

## Q157760: PRB: Grid Column Widths Change at Run Time

	Article: Q157760
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Grid column widths change when a form is run under the following conditions:
	
	- A Grid class is built where fontname and fontsize have been specified.
	
	- A PageFrame class is built that contains the Grid class.
	
	- The Grid fontsize and fontname are changed when the PageFrame class is placed
	  on a form.
	
	WORKAROUND
	==========
	
	Do not specify a fontname or fontsize in the original Grid class.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a two-column grid and set the fontname to MS San Serif.
	
	2. Set the fontsize to 9.
	
	3. Save the grid as a class called Fontgrid in a library called Myvcx.
	
	4. Click the View Classes button on the toolbar and add Myvcx library.
	
	5. Create a PageFrame and add the Fontgrid on page1. Save it as a class called
	  Pagegrid in library Myvcx.
	
	6. Create a form and add the customer table to the DataEnvironment.
	
	7. Click the View Classes button on the toolbar and add Myvcx library.
	
	8. Add the Pagegrid to the form.
	
	9. Set the column count to 2, and set the ControlSource for column1 to cust_id
	  and the ControlSource for column2 to country.
	
	10. Change the fontname for the grid to Courier New and the fontsize to 10.
	
	11. Adjust the column width of cust_id so that it is larger than it needs to be
	  to accommodate cust_id.
	
	12. Run the form.
	
	The column width for cust_id changes. It adjusts the column to the actual field
	width.
	
	Additional query words: kbdsd VFOXWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
