---
layout: page
title: "Q135165: Network Tool Cannot Copy Files on RPL Computers"
permalink: /kb/135/Q135165/
---

## Q135165: Network Tool Cannot Copy Files on RPL Computers

{% raw %}

	Article: Q135165
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
	
	When you try to use the Network tool in Control Panel to add network components,
	you may receive an error message stating that files cannot be copied.
	
	CAUSE
	=====
	
	This problem can occur on Remote Program Loader (RPL) computers. The problem
	occurs because the Network tool tries to copy files to drive A, which usually
	does not exist on RPL computers once Windows 95 is running.
	
	RESOLUTION
	==========
	
	Click Skip when you receive the error message. The files are already located in
	the correct places for an RPL computer, and there is no need to copy them again.
	Clicking Skip should result in a correct configuration.
	
	Additional query words: diskless
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
