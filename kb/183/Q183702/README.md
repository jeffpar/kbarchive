---
layout: page
title: "Q183702: WD97: DocErr: &quot;Field Codes: =(Formula) Field&quot; Help Topic Wrong"
permalink: /kb/183/Q183702/
---

## Q183702: WD97: DocErr: &quot;Field Codes: =(Formula) Field&quot; Help Topic Wrong

{% raw %}

	Article: Q183702
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word 97 Help, the following example in the "Field Codes: =
	(Formula) field" help topic is incorrect.
	
	  Field                Result
	  -----------------------------------------------------------------
	
	  { =(Table3 C3) }     The contents of the cell in the third column
	                       of the third row of the table marked by the
	                       bookmark "Table3."
	
	The correct formula should be as follows:
	
	  { =SUM(Table3 C3) }
	
	NOTE: The formula must contain a function. For example, SUM, PRODUCT, and Average
	are functions.
	
	For more information about "Field codes: =(Formula) field", click Contents And
	Index on the Help menu, click the Index tab in Microsoft Word Help, type the
	following text
	
	  fields, field
	
	and then double-click the selected text to go to the "Field codes: = (Formula)
	field" topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	MORE INFORMATION
	================
	
	When you need to reference or calculate table cells in your document outside of
	the table, you can use the Formula field. The following are examples how to use
	the Formula field correctly.
	
	To set up a sample table, follow these steps:
	
	1. On the Table menu, click Insert Table.
	
	2. In the Insert Table dialog box, set the Number of Columns to 3 and the Number
	  of Rows to 5 and then click OK.
	
	3. In cell B5, type the number 8 and in cell C5, type the number 10.
	
	  For example, our sample table looks like the following:
	
	     Row      COLUMN
	     ---    -----------
	
	            A    B    C
	
	          +----+----+----+
	      1   |    |    |    |
	          +----+----+----+
	      2   |    |    |    |
	          +----+----+----+
	      3   |    |    |    |
	          +----+----+----+
	      4   |    |    |    |
	          +----+----+----+
	      5   |    |  8 | 10 |
	          +----+----+----+
	
	4. Set a bookmark on the sample table. To do this,
	
	  a. Place the insertion point somewhere in the table. For example, move the
	     insertion point into cell A1 of the table.
	
	  b. On the Table menu, click Select Table.
	
	  c. On the Insert Menu, click Bookmark.
	
	  d. In the Bookmark name box, type a name for the table, and then click Add.
	
	     NOTE: In our example, Table1 is used as the bookmark name for the sample
	     table.
	
	Example 1: To Reference a Cell Outside the Table
	------------------------------------------------
	
	To reference a table cell outside of the table in your document, use the
	following steps:
	
	1. Move the insertion point in your document outside of the table.
	
	2. Press CTRL+F9 to enter type the field code braces ({}).
	
	3. Inside the field code braces, type the following Formula field:
	
	  { =SUM(Table1 B5) }
	
	4. With the insertion point inside the field code braces, press F9 to update the
	  field.
	
	5. Press ALT+F9 to turn the field codes off. The result of the Formula field
	  should show.
	
	Example 2: To Add Two Cells Outside of the Table
	------------------------------------------------
	
	To add two cells from the same table, such as in our example, cell B5 and C5, use
	the following steps:
	
	1. Move the insertion point in your document outside of the table.
	
	2. Press CTRL+F9 to type the field code braces ({}).
	
	3. Inside the field code braces, type the following Formula field:
	
	  { =SUM(Table1 B5)+ SUM(Table1 C5) }
	
	4. With the insertion point inside the field code braces, press F9 to update the
	  field.
	
	5. Press ALT+F9 to turn the field codes off. The result of the Formula field
	  should appear.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185684 WD97: Wrong Calculation Result with Bookmarks in Table
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
