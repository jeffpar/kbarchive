---
layout: page
title: "Q198195: WD97: Linked Excel Object Shows Empty Cells"
permalink: /kb/198/Q198195/
---

## Q198195: WD97: Linked Excel Object Shows Empty Cells

{% raw %}

	Article: Q198195
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a link to a Microsoft Excel object while the Excel worksheet is
	open, the object resembles a table with columns and rows. It may include columns
	and rows that do not contain data. When you create a link to the same Excel
	object while the Excel worksheet is closed, the object includes only the cells
	that contain data. There are no extra empty columns or rows. This problem occurs
	when you create the link via the Create From File tab. (To locate this tab,
	click Object on the Insert menu.)
	
	For example, if cells A1 to B2 in the Excel worksheet contain data, and you
	create a link to this file while the worksheet is closed, the result looks like
	this:
	
	  --------------
	 |  123  |  456 |
	 |  123  |  456 |
	  --------------
	
	If you create a link to the same worksheet while the Excel worksheet is open, the
	object looks like this:
	
	  --------------------------------------------
	 |  123  |  456 |     |     |     |     |     |
	  --------------------------------------------
	 |  123  |  456 |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	 |       |      |     |     |     |     |     |
	  --------------------------------------------
	
	The object may also take on different characteristics, regardless of whether
	Float Over Text is selected.
	
	WORKAROUND
	==========
	
	To work around this problem and insert only the cells that contain data, close
	the Excel worksheet before you create the link to the file. To ensure that all
	objects have the same characteristics, choose one method to insert the objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
