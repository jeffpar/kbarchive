---
layout: page
title: "Q120824: Word 2.x for Windows Doesn't Load Files from UNC Path w/Novell"
permalink: /kb/120/Q120824/
---

## Q120824: Word 2.x for Windows Doesn't Load Files from UNC Path w/Novell

{% raw %}

	Article: Q120824
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
	
	When you are running Microsoft Word 2.x for Windows, you cannot load files using
	a universal naming convention (UNC) path specification.
	
	CAUSE
	=====
	
	This problem occurs when you are using the Microsoft Client for NetWare Networks
	as one of the network clients in Windows 95. Word 2.x for Windows recognizes
	that NetWare is present and translates the UNC names to the Novell NetWare
	naming convention, which is incompatible with the Windows 95 method of network
	communications, the server message block (SMB) data structure.
	
	RESOLUTION
	==========
	
	To correct this problem, either update Word for Windows to version 6.0, or
	remove the Microsoft Client for NetWare Networks component.
	
	Additional query words: 3rdparty 6.00 6.00a 6.0a uninstall transforms changes
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
