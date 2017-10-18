---
layout: page
title: "Q76866: List Separator Under International Setting Not Updated"
permalink: kb/076/Q76866/
---

## Q76866: List Separator Under International Setting Not Updated

	Article: Q76866
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	When changing the "List Separator" setting under the International icon
	that is located in Control Panel of Microsoft Windows version 3.0, the
	changes are not written to the [intl] section of the WIN.INI file.
	
	To change the "List Separator" character (,) to another character, the
	[intl] section of the WIN.INI file must be manually updated. Use Notepad to
	edit the WIN.INI file. The change should made at the following line:
	
	  sList=
	
	If there is not an [intl] section in the WIN.INI file, follow these steps
	to create one:
	
	1. Open the Control Panel and double-click the International icon.
	
	2. Choose the OK button.
	
	Additional query words: 3.00 win30 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
