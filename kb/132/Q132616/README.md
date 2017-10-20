---
layout: page
title: "Q132616: International Character Creates Invalid Server Folder Name"
permalink: /kb/132/Q132616/
---

## Q132616: International Character Creates Invalid Server Folder Name

{% raw %}

	Article: Q132616
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Netsetup.exe to create a server folder whose name contains international
	characters creates an incorrect filename.
	
	CAUSE
	=====
	
	Netsetup.exe incorrectly translates international characters entered in the
	Server Path dialog box. For example, attempting to create a server folder with
	the name "elan" (where the "e" has an acute accent mark) results in an unusable
	directory named "_lan."
	
	RESOLUTION
	==========
	
	Do not use international characters when you create server folders with
	Netsetup.exe. After you exit Netsetup.exe you can change the server folder name
	to include the characters you want.
	
	Additional query words: directory
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
