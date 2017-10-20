---
layout: page
title: "Q158334: Cannot Install PowerDesk in Windows NT 4.0"
permalink: /kb/158/Q158334/
---

## Q158334: Cannot Install PowerDesk in Windows NT 4.0

{% raw %}

	Article: Q158334
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty appscomp kbAppCompatibility
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot install any eariler version of PowerDesk 2.02/2.04 in Windows NT 4.0.
	When you try to do so, an error message appears, but may vanish before you can
	read it.
	
	CAUSE
	=====
	
	PowerDesk requires the Microsoft Windows 95 Kernel32.dll file. This file is not
	included with Windows NT.
	
	RESOLUTION
	==========
	
	Microhelp does not support PowerDesk in Windows NT Workstation or Windows NT
	Server. The PowerDesk ExplorerPlus tool may run, but some folder and drive names
	are garbled and some functions do not work as expected. Do not use PowerDesk
	with Windows NT.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty appscomp kbAppCompatibility 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
