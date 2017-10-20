---
layout: page
title: "Q134847: Cannot Access MS Mail 3.2 from Delrina WinFax Pro 4.0"
permalink: /kb/134/Q134847/
---

## Q134847: Cannot Access MS Mail 3.2 from Delrina WinFax Pro 4.0

{% raw %}

	Article: Q134847
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
	
	When you log in to Microsoft Mail version 3.2, Delrina WinFax Pro may display
	the following error message:
	
	  Sign In Error: Incorrect Name/Password or not connected to Network
	
	Microsoft Mail works correctly, but no MAPI-aware program can access it.
	Reinstalling Microsoft Mail does not resolve the problem.
	
	CAUSE
	=====
	
	You have installed one or more Microsoft Exchange component. Doing so replaces
	the original Mapi.dll file with the Windows 95 version of the file. Reinstalling
	Microsoft Mail does not replace the Mapi.dll file because the Microsoft Mail
	version is an older version.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Use the Add/Remove Programs tool in Control Panel to remove all the installed
	  Microsoft Exchange components.
	
	2. Rename the Mapi.dll file to Mapi.old in the Windows\System folder.
	
	3. Reinstall Microsoft Mail.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
