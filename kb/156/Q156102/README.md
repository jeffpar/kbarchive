---
layout: page
title: "Q156102: How To Set the Cross-Tab Wizard 3 Field Variables Requirement"
permalink: /kb/156/Q156102/
---

## Q156102: How To Set the Cross-Tab Wizard 3 Field Variables Requirement

	Article: Q156102
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Cross-Tab Wizard, which is invoked from the first dialog box of the Query
	Wizard, is a class provided by Visual FoxPro. It guides you through building a
	query and displaying the results of that query in spreadsheet format. The class
	requires that you specify fields from a table as the elements of the resulting
	spreadsheet. The Cross-Tab Wizard requires field designations for "row,"
	"column," and "data."
	
	MORE INFORMATION
	================
	
	The requirement for the three field designations comes before the dialog box
	that permits specifying counts, sums, averages, minimums, or maximums. Before
	you can select any of these arithmetic functions, you must complete the sources
	for the "row," "column," and "data" designations. If the result set shows only
	one or two fields plus the results of an arithmetic function, the three-field
	designation requirement appears to be an inflexible characteristic of the
	Cross-Tab Wizard class.
	
	Visual FoxPro 5.0 for Windows lets you use one value as both the "data" field and
	either the "row" or the "column" designations.
	
	Completing the construction of the query using the Cross-Tab Wizard, then
	modifying the resulting query in the Query Designer may satisfy the Wizard while
	still giving you a useful display in spreadsheet format. The last dialog page of
	the Cross-Tab Wizard provides this step as one of the final choices.
	
	An alternative, which is not supported by Microsoft Technical Support, is to
	subclass the Cross-Tab Wizard file, Vfpxtab.vcx, so that the derived class
	provides the necessary three values when only one value and an arithmetic
	function's result are required for the spreadsheet.
	
	The following example describes a way to count the number of orders that exceed a
	certain value and have been booked at a discount. The desired result is a simple
	count by discount level:
	
	1. In Visual FoxPro for Windows, click New on the File menu, then select Query
	  and click the Wizard button.
	
	2. Select the Cross-Tab Wizard from the three options, and click OK.
	
	3. Browse for the table Samples\Data\Orders.dbf.
	
	4. Choose the fields Orders_net and Orders_dsc (discount), then click Next.
	
	5. Drag the Orders_dsc field to the Row text box. Drag the Orders_net field to
	  the Column text box. Drag the Orders_net field to the Data edit box. Click
	  Next.
	
	6. In the third step there are two columns of option buttons. The left column is
	  for Summary. Click the Count option. The right column is for Subtotals. Click
	  "Number of cells containing data." Click Next.
	
	7. In the last dialog box, click "Save cross-tab query and modify in Query
	  Designer." Clear the "Display null values" check box. Click Finish, and give
	  the query a name. ("Orders.qpr" is the default.)
	
	8. The Cross-Tab Wizard closes, and the Query Designer appears. In the lower
	  half of the Query Designer, click the Filter tab.
	
	9. In the Field drop-down list, click Orders.order_net. In the Criteria box,
	  click ">" (right angle bracket), and in the Example box, type "3000"
	  (without the quotation marks). Once you have entered this selection criteria,
	  run the query.
	
	The result set is displayed with one row spread across multiple columns-- one
	cell for each order (since each order is for a unique value in the example
	table). The last column shows the intended result: the count of orders booked at
	a discount.
	
	Additional query words: kbdsd VFoxWin xtab worksheet
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
