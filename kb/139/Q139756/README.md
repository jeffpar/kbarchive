---
layout: page
title: "Q139756: PRB: Cannot Reuse Deleted Primary Key Values in Visual FoxPro"
permalink: /kb/139/Q139756/
---

## Q139756: PRB: Cannot Reuse Deleted Primary Key Values in Visual FoxPro

{% raw %}

	Article: Q139756
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Appending, inserting, or editing a record in a table with a primary key may
	result in this error:
	
	  Uniqueness of index <index name> is violated.
	
	CAUSE
	=====
	
	This error occurs when a duplicate primary key value is entered, and it occurs
	even if the duplicate record is one that has been marked for deletion. This
	error occurs regardless of the setting of DELETED.
	
	RESOLUTION
	==========
	
	To be able to reuse keys that exist in deleted records, you must use a filtered
	index.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To create a filtered index so that you can reuse deleted keys, enter the
	following expression for the primary key Filter:
	
	     !DELETED()
	
	Now a deleted key can be reused in another record in the table. Although the
	setting of DELETED has no effect on the error, you may want to set DELETED ON,
	so that deleted records are not displayed.
	
	NOTE: If the !DELETED() filter is placed on a primary key, then Gendbc.prg is
	used to create a program to rebuild the .Dbc, the resulting primary key will not
	have the filter expression.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
