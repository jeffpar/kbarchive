---
layout: page
title: "Q132652: Pressing ESC Key May Cause Garbled Startup Screen"
permalink: /kb/132/Q132652/
---

## Q132652: Pressing ESC Key May Cause Garbled Startup Screen

{% raw %}

	Article: Q132652
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
	
	When you start Windows 95, the Startup screen (text mode) may be displayed
	incorrectly. If you press the ESC key to view the text-mode screen, the
	characters may seem garbled.
	
	CAUSE
	=====
	
	Some types of video adapters cannot properly handle the video mode switching
	that occurs when you press the ESC key.
	
	RESOLUTION
	==========
	
	To resolve this problem, add the following line to the [Options] section of the
	Msdos.sys file:
	
	  Logo=0
	
	This line prevents the Windows 95 logo from being displayed at startup, allowing
	the text-mode screen to be displayed correctly.
	
	MORE INFORMATION
	================
	
	The Msdos.sys file has its hidden and read-only attributes set. You must clear
	these attributes before you can edit the file.
	
	You may also need to use the "Logo=0" switch in the Msdos.sys file if a batch
	file that prevents starting protected mode is called from the Autoexec.bat file.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
