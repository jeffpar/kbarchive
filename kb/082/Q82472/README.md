---
layout: page
title: "Q82472: dBASE IV Hangs on Exit with Novell and Windows"
permalink: /kb/082/Q82472/
---

## Q82472: dBASE IV Hangs on Exit with Novell and Windows

{% raw %}

	Article: Q82472
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Ashton Tate's dBASE IV application stops responding (hangs) if you exit the
	application from a virtual machine (VM) that is running on a Novell network.
	
	CAUSE
	=====
	
	This problem is caused by a Novell and dBASE IV conflict.
	
	WORKAROUND
	==========
	
	To successfully exit dBASE IV and return to Microsoft Windows, remove MS-DOS
	SHARE from the AUTOEXEC.BAT file.
	
	NOTE: If you remove SHARE, you cannot run software that requires it (such as
	Microsoft Word, Microsoft Excel, and other Microsoft Office products).
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 novell d base 4 four 3.11 netware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
