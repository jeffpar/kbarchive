---
layout: page
title: "Q70767: Zeos Machines Hang on Windows 3.0 Disk 2"
permalink: /kb/070/Q70767/
---

## Q70767: Zeos Machines Hang on Windows 3.0 Disk 2

{% raw %}

	Article: Q70767
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Zeos technical support, when you install Microsoft Windows 3.0 on
	most Zeos machines, you must configure the mouse for COM1 or Microsoft Windows
	Setup will hang when reading Windows Disk 2.
	
	WORKAROUND
	==========
	
	During Windows Setup, install for "No Mouse or other pointing device" and change
	it later, or install the mouse on COM1 before installing Windows 3.0.
	
	MORE INFORMATION
	================
	
	Also according to Zeos technical support, most Zeos machines have the ability to
	enable shadow RAM, but they are normally shipped with shadow RAM disabled. To
	determine the status of shadow RAM, run the CMOS Setup Utility by pressing
	CTRL+ALT+ESC immediately after bootup. The shadow RAM status will either be on
	the first screen (if it's AMI or Phoenix BIOS) or second screen (if it's Award
	BIOS [only on some newer SX models]).
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 3.00 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
