---
layout: page
title: "Q185400: WD97: How to Set Up a Table as a Spreadsheet in Word"
permalink: /kb/185/Q185400/
---

## Q185400: WD97: How to Set Up a Table as a Spreadsheet in Word

{% raw %}

	Article: Q185400
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbfield word97 kbtable
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to create simple spreadsheets in Microsoft Word,
	using tables and the Formula (=) field. In these spreadsheets, you can add,
	subtract, multiply, and divide values entered in cells.
	
	MORE INFORMATION
	================
	
	Referencing Cells
	-----------------
	
	Individual cells are referenced by column letter and row number in the form of
	"A1" where A represents the column and 1 represents the row. For example, A2
	refers to the cell located in the first column second row. To select a row only,
	the syntax would be "2:2," and to select a column the syntax would be "A:A."
	
	NOTE: All of the examples in this article refer to the following table and can be
	placed in any blank cell in the table:
	
	  Row        Column
	  ---       ---------
	            A   B   C
	          -------------
	   1      | 2 | 5 | 4 |
	          -------------
	   2      | 7 | 3 | 6 |
	          -------------
	   3      | 8 | 1 | 0 |
	          -------------
	   4      |   |   |   |
	          -------------
	
	When you use this example, you can enter the sum of column A into the blank cell
	A4 by following these steps:
	
	1. Place the insertion point into the blank cell A4.
	
	2. On the Table menu, click Formula.
	
	3. Under Formula, an automated formula (=SUM(ABOVE)) is shown. You can delete
	  that entry and enter any type of formula as shown in the next section of this
	  article.
	
	4. You can either leave the Number Format box blank or select an item on the
	  list.
	
	5. Click OK.
	
	Operations You Can Use to Manipulate Values in Cells
	----------------------------------------------------
	
	Addition:
	
	                              Use a formula      Result from
	  To do this                  similar to this    the sample
	  ------------------------------------------------------------
	  Add a number to a cell      =(A1) + 3          5
	
	  Add two adjacent cells      =SUM(A1:A2)        9
	                              -or-
	                              =(A1+A2)
	
	  Add two non-adjacent cells  =(A1+A3)           10
	
	  Add a range of cells        =SUM(B:B)          9
	
	                              -or-
	                              =SUM(B1:B3)
	
	Subtraction:
	
	                                Use a formula      Result from
	  To do this                    similar to this    the sample
	  ------------------------------------------------------------
	  Subtract a number from a cell =(A1)- 3           1
	
	  Subtract two cells            =(A3-B2)           5
	
	Multiplication:
	
	                                   Use a formula      Result from
	  To do this                       similar to this    the sample
	  ---------------------------------------------------------------
	  Multiply a number by a cell      =(A1)* 3           6
	
	  Multiply two adjacent cells      =PRODUCT(A1:A2)    14
	
	  Multiply two non-adjacent cells  =PRODUCT(A1,A3)    16
	
	  Multiply a range of cells        =PRODUCT(B:B)      15
	                                   -or-
	                                   =PRODUCT(B1:B2)
	
	Division:
	
	                                  Use a formula    Result from
	  To do this                      similar to this  the sample
	  ------------------------------------------------------------
	  Divide a number by a cell       =(A1)/3         .67
	
	  Divide two cells                =C2/A1           3
	
	Referring to Cells
	------------------
	
	Syntax:
	
	Unlike earlier versions of Word, individual cell references do not need to be
	enclosed in brackets and parentheses. However, cell ranges, which are separated
	with a colon such as (A1:A6), must be enclosed in parentheses.
	
	Referencing Cell Ranges:
	
	If the cells are in a contiguous block (they cover a rectangular area), you can
	shorten the reference to them. For instance, the eight-cell area from A1 to D2
	can be referenced as A1:D2.
	
	Referencing Nonadjacent Cells:
	
	When you add or multiply nonadjacent cells, you can refer to each cell
	individually, or you can separate the references themselves with commas.
	
	NOTE: You can use commas only with the Sum and Product functions.
	
	For example, these formulas are equivalent:
	
	  Sum Example
	  -----------
	     {=SUM(A1) + SUM(C2) + SUM(B2)}
	     {=SUM(A1,C2,B2)}
	
	  Product Example
	  ---------------
	     {=PRODUCT(A1) + PRODUCT(C2) + PRODUCT(B2)}
	     {=PRODUCT(A1,C2,B2)}
	
	When you subtract or divide nonadjacent cells, you must refer to each cell
	separately (that is, you cannot use commas), as in the following examples:
	
	     {=SUM(A1) - SUM(C2) - SUM(B3)}
	     {=SUM(A1) / SUM(C2) / SUM(B3)}
	
	Relative Rererences
	-------------------
	
	Relative references are useful when you want a generic formula that doesn't refer
	to specific cells. You can add and delete rows and maintain a correct result.
	Relative references are also useful when you don't want to retype a formula. For
	instance, if you want each cell in the fifth column to contain the sum of the
	numbers of the first four columns in the same row, you can use a relative
	reference. In this example, the field would resemble the following:
	
	  {=SUM(LEFT)}
	
	You can also combine relative references with absolute references (references to
	a specific cell).
	
	Bookmark References
	-------------------
	
	You can apply a bookmark to the contents of any cell or field and use that
	bookmark in a calculation. This can often simplify the construction of other
	fields and can save typing.
	
	For example, if you apply a bookmark called "Quantity_Sold" to the contents of
	cell A3, you can refer to it in another cell.
	
	  {=Quantity_Sold*.10}
	  {=Quantity_Sold*SUM(B2)}
	  {=Quantity_Sold*Commission}
	
	References to Avoid:
	
	If you refer to an entire row or column and place the field within that range,
	Word includes the field result in the calculation. Each time you update the
	calculation, it will include itself in the result. This produces a different
	result (even if none of the other numbers in the row or column have changed) and
	yields unreliable results.
	
	  Examples of the Type of Field to Avoid
	  --------------------------------------
	  {=SUM(C:C)} adds the entire column, including the result. Each time
	  you update this field, the result is the sum of the column plus the
	  field's previous total. To prevent this behavior, use an absolute
	  reference instead, and place the field in another column.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q185404 WD97: Incorrect Value/Table Cell Inserted Referencing Bookmark
	
	  Q185402 WD97: Calculation in Form Field Shows Wrong Result
	
	  Q185398 WD97: How to Modify a Calculation Field to Appear Blank
	
	Additional query words: display worksheet workbook simulate excel
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
