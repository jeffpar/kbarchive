---
layout: page
title: "Q83562: SMARTDrive Version 4.0 and Syquest Removable Drives"
permalink: /kb/083/Q83562/
---

## Q83562: SMARTDrive Version 4.0 and Syquest Removable Drives

{% raw %}

	Article: Q83562
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows operating system version 3.1, you may receive the
	following error message if you use SMARTDrive version 4.0 on a Syquest removable
	drive:
	
	  Illegal Disk Change
	
	MORE INFORMATION
	================
	
	As with previous version of SMARTDrive, version 4.0 is not compatible with
	Syquest removable storage devices. To disable caching for a specified drive, use
	it minus sign (-) switch. The following example enables caching for drives C and
	D but prevent caching of drive E:
	
	  SMARTDRV C D E-
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	For additional information, please contact Syquest technical support.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
