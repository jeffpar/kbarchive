---
layout: page
title: "Q168913: WD97: Cannot Insert a Caption Inside a Table Cell"
permalink: /kb/168/Q168913/
---

## Q168913: WD97: Cannot Insert a Caption Inside a Table Cell

{% raw %}

	Article: Q168913
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbfield word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to insert a caption inside a table cell, the table is selected and
	the caption is inserted either above or below the table.
	
	CAUSE
	=====
	
	Microsoft Word assumes that you want to include a caption for the table when any
	of the following conditions are true:
	
	- The insertion point is inside a table cell.
	
	  -or-
	
	- The table cell is selected.
	
	  -or-
	
	- The table is partially or entirely selected.
	
	This functionality is different from earlier versions of Microsoft Word.
	
	WORKAROUND
	==========
	
	To insert a caption inside a table cell:
	
	1. Within the table cell, select only the text or object you want to create a
	  caption for.
	
	  NOTE: Make sure you do not select the table cell.
	
	2. On the Insert menu, click Caption.
	
	3. In the Caption dialog box, type the necessary information, and then click OK.
	
	MORE INFORMATION
	================
	
	For more information about using Captions, click the Office Assistant, type "How
	do I insert a caption?" (without the quotation marks), click Search, and then
	click to view "Add captions to tables, figures, equations, or other items."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbusage kbfield word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
