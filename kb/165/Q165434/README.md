---
layout: page
title: "Q165434: BUG: Undo Database Deletion Causes Data View to Lose Database"
permalink: /kb/165/Q165434/
---

## Q165434: BUG: Undo Database Deletion Causes Data View to Lose Database

{% raw %}

	Article: Q165434
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the FileView pane to delete a database connection and then undo the
	deletion (by pressing CTRL+Z or the Edit/Undo menu option), the database appears
	in the File View but it disappears from the Data View pane.
	
	RESOLUTION
	==========
	
	Switch back to the FileView and double-click the database; it refreshes the Data
	View and shows the database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbVC500bug kbVC600bug
	
	======================================================================
	Keywords          : kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
