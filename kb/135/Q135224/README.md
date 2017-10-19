---
layout: page
title: "Q135224: Error Message: Rundll32.exe Has Performed an Illegal Operation"
permalink: /kb/135/Q135224/
---

## Q135224: Error Message: Rundll32.exe Has Performed an Illegal Operation

	Article: Q135224
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
	
	When you try to remove a modem using the Modems tool in Control Panel while
	Device Manager is open, you may receive the following error message:
	
	  Rundll32.exe has performed an illegal operation.
	
	CAUSE
	=====
	
	The error message occurs because Windows 95 detects that the system
	configuration has changed and sends a message to the Modems tool to update its
	list of modems at the same time that the information for that modem is being
	removed from memory.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Close the Modems tool and use Device Manager to remove the modem.
	
	- Close Device Manager before you remove the modem in the Modems tool.
	
	Additional query words: msnetwork
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
