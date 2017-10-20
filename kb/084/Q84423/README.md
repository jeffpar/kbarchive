---
layout: page
title: "Q84423: Windows 3.1 EMM386.EXE and Lotus 1-2-3 Version 3.1"
permalink: /kb/084/Q84423/
---

## Q84423: Windows 3.1 EMM386.EXE and Lotus 1-2-3 Version 3.1

{% raw %}

	Article: Q84423
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Microsoft Windows operating system version 3.1's EMM386.EXE version 4.44 file
	is loaded in CONFIG.SYS with the NOEMS option, then the following error message
	is displayed when Lotus 1-2-3 version 3.1 is started:
	
	  DOS/16 M error: [17]
	  System software does not follow VCPI or DPMI specification.
	
	WORKAROUND
	==========
	
	To work around this problem
	
	1. Edit CONFIG.SYS with a standard ASCII text editor.
	
	2. Change the line Device=EMM386.EXE NOEMS to:
	
	  Device=EMM386.EXE RAM
	
	3. Save the file and Restart your system.
	
	The Lotus 1-2-3 product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 123 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
