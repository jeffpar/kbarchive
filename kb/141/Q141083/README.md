---
layout: page
title: "Q141083: PRB: No Error Message When Creating a Cyclic Relation"
permalink: /kb/141/Q141083/
---

## Q141083: PRB: No Error Message When Creating a Cyclic Relation

{% raw %}

	Article: Q141083
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Database Container (DBC), a table can be related to itself to create a
	cyclic relationship. No error message is displayed when the relation is drawn
	between two tags of the same table. On the other hand, the SET RELATION command
	returns an error message when a cyclic temporal relation is created.
	
	CAUSE
	=====
	
	The cyclic relation is not a correct "SET RELATION" relation, but is used in
	permanent relations for referential integrity purposes.
	
	Relational theory allows a table to be related to itself. For example, in an
	employee table, a whole division needs to be deleted. If the table is related to
	itself, you can use a cascade rule when deleting the whole division by deleting
	the division head.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a .dbc file with a table that has two tags of the same type.
	
	2. Type "MODIFY DATABASE" (without the quotation marks) in the Command window.
	
	3. Click one of the index tags, and drag the tag to the second index tag in the
	  same table. A cyclic relation is created.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
