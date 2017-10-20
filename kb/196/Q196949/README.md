---
layout: page
title: "Q196949: WD97: No Table Headings Following Next Page Section Break"
permalink: /kb/196/Q196949/
---

## Q196949: WD97: No Table Headings Following Next Page Section Break

{% raw %}

	Article: Q196949
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
	
	Microsoft Word does not repeat a table heading after a manual page break or any
	type of section break.
	
	CAUSE
	=====
	
	This functionality is by design of Microsoft Word. When you insert a "hard" page
	break or any kind of section break within a table, Word splits that table into
	two individual tables. In order for Headings in a table to work, the table must
	be one continuous table.
	
	
	MORE INFORMATION
	================
	
	Word automatically repeats table headings only for tables that are split by
	"soft" page breaks.
	
	To set Headings within a table, follow these steps:
	
	1. Click in the first row of the table or select the rows that you want to see
	  on the top of the table on all pages.
	
	  NOTE: The first row of the table must be in the selection.
	
	2. On the Table menu, click Headings. A check mark appears beside Headings when
	  your insertion point is in the row(s) designated as Headings.
	
	Additional query words: docerr documentation error
	
	======================================================================
	Keywords          : kbdta word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
