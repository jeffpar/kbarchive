---
layout: page
title: "Q131214: Windows 95 Hangs at Boot with 386Max and More Than 16 MB RAM"
permalink: /kb/131/Q131214/
---

## Q131214: Windows 95 Hangs at Boot with 386Max and More Than 16 MB RAM

{% raw %}

	Article: Q131214
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
	
	Windows 95 may stop responding (hang) when you start it on a computer with more
	than 16 megabytes (MB) of memory.
	
	CAUSE
	=====
	
	This problem can occur if 386Max, a memory manager published by Qualitas, Inc.,
	is installed on the computer. The way this memory manager handles more than 16
	MB of memory is incompatible with Windows 95.
	
	RESOLUTION
	==========
	
	To work around this problem, remove 386Max and use the Microsoft XMS memory
	manager (HIMEM.SYS) instead. To do so, use any text editor to edit the
	CONFIG.SYS file. Remove or remark out any reference to 386MAX and then add the
	following line as the first line in the file:
	
	  device=c:\windows\himem.sys
	
	Save and then close the CONFIG.SYS file, and then restart your computer.
	
	For additional information about removing 386Max, please refer to that program's
	documentation or manufacturer.
	
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
