---
layout: page
title: "Q180639: WD97: &quot;Keep Lines Together&quot; Has No Effect in Tables"
permalink: /kb/180/Q180639/
---

## Q180639: WD97: &quot;Keep Lines Together&quot; Has No Effect in Tables

{% raw %}

	Article: Q180639
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Keep Lines Together paragraph formatting does not work for paragraphs within a
	table if "Allow Row to Break Across Pages" is also selected.
	
	NOTE: To locate the "Allow Row to Break Across Pages" option, choose Cell Height
	And Width from the Table menu.
	
	WORKAROUND
	----------
	
	To work around this problem, remove the "Allow row to break across pages" option
	for either the specific table row or the entire table. To do this, follow these
	steps:
	
	1. With the insertion point inside the table, click Select Table on the Table
	  menu.
	
	2. On the Table menu, click Cell Height And Width, and click the Row tab.
	
	3. Click to clear the "Allow row to break across pages" check box.
	
	For more information about changing how a table breaks across pages, click the
	Office Assistant, type "break table row," click Search, and then click to view
	"Prevent a table row from breaking across pages."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The Keep Lines Together formatting prevents a page break from occurring within a
	paragraph. In effect, if all of the lines of a single paragraph will not fit on
	a page, then all of the lines of that paragraph are moved to the next page of
	your document. However, this functionality is ignored in a table when the "Allow
	row to break across pages" option is selected.
	
	For more information about how to apply Keep Lines Together formatting, click the
	Office Assistant, type Keep Lines Together, click Search, and then click to view
	Keep Lines Together.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
