---
layout: page
title: "Q159549: WD97: Different-Width Cells Appear as Equal Width in Browser"
permalink: /kb/159/Q159549/
---

## Q159549: WD97: Different-Width Cells Appear as Equal Width in Browser

{% raw %}

	Article: Q159549
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A table with unequal-size cells is displayed incorrectly in your Web browser.
	
	WORKAROUND
	==========
	
	To work around this problem, create a table in which the first row contains the
	maximum number of columns in the table. Starting with the second row of the
	table, merge the cells to create the unequal-size cells. In the HTML source,
	hide the first row by removing the &nbsp; codes from the cells in the first
	row.
	
	NOTE: The &nbsp; code inserts a nonbreaking space in the table cell, which
	causes empty cells to be displayed in your Web browser.
	
	If you use Word to modify the HTML document, Word adds the &nbsp; codes to
	your document. In this case, you need to re-edit the HTML source and remove the
	&nbsp; codes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	
	Additional query words: 8.0 word8 word97 html incorrect uneven wrong
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
