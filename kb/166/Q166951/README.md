---
layout: page
title: "Q166951: WD97: &quot;Merge Cells Before Split&quot; Option Causes Unexpected Result"
permalink: /kb/166/Q166951/
---

## Q166951: WD97: &quot;Merge Cells Before Split&quot; Option Causes Unexpected Result

{% raw %}

	Article: Q166951
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you split cells with the "Merge cells before split" setting turned on
	(default setting), Word merges any information within the selected cells into
	one cell, and that information is distributed equally within the split cells of
	only the first row you select.
	
	WORKAROUND
	==========
	
	To keep the information in the existing cells while splitting the cells, do the
	following:
	
	1. Select the cells to split.
	
	2. On the Table menu, click Split Cells.
	
	3. Clear the "Merge cells before split" check box.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	For example, if you have the following table in a document:
	
	  ------------------------------------------------------------
	  |                   |                   |                  |
	  | Item 1            | Item 2            | Item 3           |
	  |                   |                   |                  |
	  ------------------------------------------------------------
	  |                   |                   |                  |
	  | Item 4            | Item 5            | Item 6           |
	  |                   |                   |                  |
	  ------------------------------------------------------------
	  |                   |                   |                  |
	  | Item 7            | Item 8            | Item 9           |
	  |                   |                   |                  |
	  ------------------------------------------------------------
	
	and the "Merge cells before split" check box is clear, you get the following
	results when you select rows 1 and 2 and click Split cells on the Table menu:
	
	  ------------------------------------------------------------
	  |         |         |         |         |         |        |
	  | Item 1  |         | Item 2  |         | Item 3  |        |
	  |         |         |         |         |         |        |
	  ------------------------------------------------------------
	  |         |         |         |         |         |        |
	  | Item 4  |         | Item 5  |         | Item 6  |        |
	  |         |         |         |         |         |        |
	  ------------------------------------------------------------
	  |                   |                   |                  |
	  | Item 7            | Item 8            | Item 9           |
	  |                   |                   |                  |
	  ------------------------------------------------------------
	
	However, if the "Merge cells before split" check box selected, Items 1 through 6
	are first merged into 1 cell, and then they are split into cells, making them
	all appear in the first row, as in the following example:
	
	  ------------------------------------------------------------
	  |         |         |         |         |         |        |
	  | Item 1  | Item 2  | Item 3  | Item 4  | Item 5  | Item 6 |
	  |         |         |         |         |         |        |
	  ------------------------------------------------------------
	  |         |         |         |         |         |        |
	  |         |         |         |         |         |        |
	  |         |         |         |         |         |        |
	  ------------------------------------------------------------
	  |                   |                   |                  |
	  | Item 7            | Item 8            | Item 9           |
	  |                   |                   |                  |
	  ------------------------------------------------------------
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
