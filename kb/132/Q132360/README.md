---
layout: page
title: "Q132360: Error Message Setting Up Program Items: Invalid Path"
permalink: /kb/132/Q132360/
---

## Q132360: Error Message Setting Up Program Items: Invalid Path

{% raw %}

	Article: Q132360
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5,3.51 
	- Microsoft Windows NT Workstation version 3.5,3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	When you set up a program item in Windows NT, and uses a directory name
	that contains a space in either the Command Line or Working Directory
	text boxes, the following error appears:
	
	  The path <drive letter>:\<xxx> is invalid.
	
	where <drive letter> is the root drive letter and <xxx> represents the
	portion of the directory name that precedes the space.
	
	Directory names that include a space must be enclosed with quotation marks
	when used in the Command Line and Working Directory text boxes. If you
	choose the Browse button and select the directory from the Browse dialog
	box, the quotation marks are added automatically.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
