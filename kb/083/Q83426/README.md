---
layout: page
title: "Q83426: Aldus PhotoStyler GP Faults in UNIDRV.DLL"
permalink: /kb/083/Q83426/
---

## Q83426: Aldus PhotoStyler GP Faults in UNIDRV.DLL

{% raw %}

	Article: Q83426
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to print from Aldus PhotoStyler in Microsoft Windows operating
	system version 3.1, a general protection (GP) fault occurs in UNIDRV.DLL.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in UNIDRV.DLL shipped with Windows
	version 3.1.
	
	The only way to accurately determine which version of UNIDRV.DLL is being used is
	to use MSD.EXE to examine the file version stamps. The original UNIDRV.DLL from
	the 3.1 box is version 3.10.0.103. Versions stamped 3.10.0.104 or later correct
	this problem. Both versions of UNIDRV.DLL display 3.1 in the drivers About
	dialog box.
	
	Additional query words: printer photo styler 3.10 UNIDRV.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
