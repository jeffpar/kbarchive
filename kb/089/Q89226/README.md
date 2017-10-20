---
layout: page
title: "Q89226: General Protection Fault with Winfax Pro 2.0"
permalink: /kb/089/Q89226/
---

## Q89226: General Protection Fault with Winfax Pro 2.0

{% raw %}

	Article: Q89226
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Delrina WinFax Pro 2.0 with Microsoft Windows version 3.1, a
	general protection (GP) fault occurs and your system stops responding (hangs).
	When you use WinFax Pro 2.0 with Windows 3.0, an unrecoverable application error
	(UAE) occurs.
	
	CAUSE
	=====
	
	According to Delrina Technical Support, if you are using EMM386.EXE, the default
	value for the amount of memory that is reserved for buffered direct memory
	access (DMA) may not be enough for your system.
	
	WORKAROUND
	==========
	
	Increase this value to 64 kilobytes using the following syntax:
	
	       DEVICE=C:\WINDOWS\EMM386.EXE D=64
	
	MORE INFORMATION
	================
	
	For more information, contact Delrina Technical Support.
	
	WinFax Pro 2.0 is manufactured by Delrina Technology, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: gpf Win fax 3.10 3.11 crash lockup lock up 3.00a 3.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
