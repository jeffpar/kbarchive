---
layout: page
title: "Q144766: WD97: Table Not Aligned in Text Column"
permalink: /kb/144/Q144766/
---

## Q144766: WD97: Table Not Aligned in Text Column

{% raw %}

	Article: Q144766
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you center or right align a table, it is not aligned correctly.
	
	CAUSE
	=====
	
	The table is inserted into a text column that is unequal in width to the
	leftmost (first) column. The width of the first column is used for aligning any
	object in any other column; therefore, attempting to align a table in a column
	other than the first produces incorrect results.
	
	WORKAROUND
	==========
	
	There is no precise way to center or right align a table in an unequal column
	width. You can indent the table from the left to produce the effect of centering
	or right aligning. To do this, follow these steps:
	
	1. Place the insertion point in the table.
	
	2. On the Table menu, click Cell Height and Width, and click the Row tab.
	
	3. In the Indent from left input box, enter a value.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Word aligns the table based on the width of the leftmost (first) column. If the
	leftmost column is wider than the second column, the table may be shifted off
	the page.
	
	Additional query words: moved alignment skewed tabular column uneven truncate left negative indent cut off
	
	======================================================================
	Keywords          : kbdta word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
