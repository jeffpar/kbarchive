---
layout: page
title: "Q103414: Windows Err Msg: Error: W311US - Setup Failed!"
permalink: /kb/103/Q103414/
---

## Q103414: Windows Err Msg: Error: W311US - Setup Failed!

{% raw %}

	Article: Q103414
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
	
	You may receive the following error message when you run Setup from Data
	Expert's original equipment manufacturer (OEM) version of Microsoft Windows
	3.1:
	
	  Error: W311US
	  System failed!
	
	CAUSE
	=====
	
	As an OEM, Data Expert has exercised its right to change the method in which the
	Microsoft Windows setup program functions. Data Expert has changed the
	functionality of the setup program so that its OEM version of Windows looks
	specifically for the specific Data Expert computer BIOS signature. If its BIOS
	is not found, Data Expert Windows refuses to install.
	
	NOTE: If you run Setup from Data Expert Windows Setup Disk 1 on a system that
	uses a Data Expert motherboard, you should not receive the error mentioned
	above.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
