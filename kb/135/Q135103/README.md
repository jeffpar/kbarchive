---
layout: page
title: "Q135103: Description of &quot;&#42;DisplayFallback=&quot; Entry in System.ini File"
permalink: /kb/135/Q135103/
---

## Q135103: Description of &quot;&#42;DisplayFallback=&quot; Entry in System.ini File

	Article: Q135103
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 Setup adds the following line to the [boot] section of the System.ini
	file:
	
	  *DisplayFallback=0
	
	This line allows Windows 95 to use the standard VGA driver if the preferred video
	driver fails to load during the setup process.
	
	MORE INFORMATION
	================
	
	User.exe adds this line to the System.ini file just before loading a display
	driver. If the specified driver fails to load, the value of the line is changed
	to 1, the computer is restarted, and the standard VGA driver is loaded.
	
	Note that the DisplayFallback feature does not work properly with video drivers
	written for earlier versions of Windows.
	
	Additional query words: safe mode
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
