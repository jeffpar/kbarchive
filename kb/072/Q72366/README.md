---
layout: page
title: "Q72366: Disabling Quattro Pro's Disk Cache"
permalink: /kb/072/Q72366/
---

## Q72366: Disabling Quattro Pro's Disk Cache

{% raw %}

	Article: Q72366
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
	
	Quattro Pro creates its own disk cache with up to 512K of extended memory if you
	include /x on the command line when you start the program. For example:
	
	     C:\Quattro\q.exe /x
	
	If SMARTDrive is installed and the Quattro Pro disk cache is active, Quattro Pro
	runs much more slowly. If this is the case, do not include /x on the command
	line or in the PIF settings Optional Parameters field.
	
	MORE INFORMATION
	================
	
	According to Borland, this information applies to all versions of Quattro Pro
	(version 1.0 through 3.0).
	
	The product included here, Borland Quattro Pro, is manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3rdparty WIN30 3.00 3.00a 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
