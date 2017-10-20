---
layout: page
title: "Q132823: Borland C++ Version 4.5 Hangs During Installation"
permalink: /kb/132/Q132823/
---

## Q132823: Borland C++ Version 4.5 Hangs During Installation

{% raw %}

	Article: Q132823
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
	
	During the installation of Borland C++ version 4.5, the Install program stops
	responding (hangs) when you choose to read the Readme file.
	
	CAUSE
	=====
	
	Borland C++ is waiting for the 16-bit program called Notepad to close, but in
	both Windows 95 and Windows NT, Notepad.exe is a 32-bit program. This causes the
	Install program to hang.
	
	RESOLUTION
	==========
	
	Do not open the Readme file.
	
	-or-
	
	Request an updated version of the Readme file from Borland International, Inc.
	
	MORE INFORMATION
	================
	
	Borland C++ is manufactured by Borland International, Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
