---
layout: page
title: "Q195617: WD97: How to Transpose Rows and Columns in Word Table"
permalink: /kb/195/Q195617/
---

## Q195617: WD97: How to Transpose Rows and Columns in Word Table

{% raw %}

	Article: Q195617
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Word does not have the ability to transpose cells in a table; that is, you
	cannot use Word to switch the orientation of columns to rows or vice versa. This
	article describes how to use Microsoft Excel to provide this functionality.
	
	MORE INFORMATION
	================
	
	To transpose the rows and columns of your table, do the following:
	
	1. Open your Word document, select the table, and then click Copy on the Edit
	  menu.
	
	2. Start Excel.
	
	3. In Excel, click Paste Special on the Edit menu, click Paste, select Text, and
	  then click OK.
	
	4. Select the cells that contain the data that you want to transpose.
	
	5. On the Edit menu, click Copy.
	
	6. Select the upper-left cell of the paste area. Choose a blank area of your
	  Excel worksheet.
	
	7. On the Edit menu, click Paste Special.
	
	8. Select the Transpose check box, and then click OK.
	
	  This action switches the orientation of data when you paste it. For example,
	  data from the top row of the copied area appears in the left column of the
	  paste area; data from the left column appears in the top row.
	
	  NOTE: If you get a Selection Not Valid error at this point, your paste area
	  contains data. Make sure you select a blank area on your worksheet.
	
	9. Select the cells with the transposed data, and click Copy on the Edit menu.
	
	10. Switch to Word, and place your insertion point where you want to paste the
	  table.
	
	11. Click Paste Special on the Edit menu, choose Paste, select Formatted Text
	  (RTF), and then click OK.
	
	Before you use the Transpose command, consider the following:
	
	- Word tables are limited to 63 columns in Word 97. If your original table has
	  more than 63 rows and you transpose the rows with the columns, you will get
	  the following error message when you paste the table in your Word document:
	
	  There is not enough memory to complete the operation.
	
	- If your original table contains tabs, Excel will convert each tab to a new
	  cell. Any text that follows the tab character will be moved to the next
	  adjacent cell. To avoid this problem, replace the tabs with another
	  character--such as the tilde (~)--that doesn't appear in your document. After
	  you transpose and paste the table back into your Word document, replace the
	  tilde character with a tab.
	
	- If your Word table contains carriage returns, Excel will strip the carriage
	  returns and run your text together with the preceding text. Use the method
	  described in item 2 to replace the paragraph marks.
	
	Additional query words: transpose transposing transposes rotates pivots moves columns rows position
	
	======================================================================
	Keywords          : kbdta winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
