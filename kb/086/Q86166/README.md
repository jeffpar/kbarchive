---
layout: page
title: "Q86166: Using SMARTDrive 4.0 with Peachtree Accounting Software"
permalink: /kb/086/Q86166/
---

## Q86166: Using SMARTDrive 4.0 with Peachtree Accounting Software

{% raw %}

	Article: Q86166
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Peachtree Software technical support has confirmed that the write cache function
	of SMARTDrive 4.0 (included with Windows 3.1) should be disabled when using
	Peachtree Accounting Software.
	
	SMARTDrive 4.0 installs write caching by default.
	
	MORE INFORMATION
	================
	
	Using SMARTDrive with the write cache turned on causes lost records, such as
	detail lines in an invoice.
	
	Write cache can be turned off by typing the following line at an MS-DOS command
	prompt or in the AUTOEXEC.BAT file (assuming your version of Windows is in the
	C:\WINDOWS directory)
	
	  c:\windows\smartdrv [drive]
	
	where [drive] (without a colon) is the letter of the drive that you no longer
	want to have SMARTDrive write cache. Read caching, however, will still be
	enabled.
	
	SMARTDRV.SYS from Windows 3.0 or MS-DOS 5.0 may be used because it has only read
	cache capabilities.
	
	For further information about Peachtree Accounting, contact Peachtree technical
	support.
	
	The Peachtree product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 Peach tree Smartdrive 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
