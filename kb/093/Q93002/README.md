---
layout: page
title: "Q93002: No 32-Bit Disk Access with Mylex DCE376 SCSI Adapter"
permalink: /kb/093/Q93002/
---

## Q93002: No 32-Bit Disk Access with Mylex DCE376 SCSI Adapter

{% raw %}

	Article: Q93002
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your system has a Mylex DCE376 SCSI host adapter, Microsoft Windows 3.1 may
	display the following error message when it attempts to enable 32-bit disk
	access during startup:
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) validation failed at phase
	  06, 01.
	
	CAUSE
	=====
	
	The Mylex DCE376 SCSI host adapter is not compatible with the Western Digital
	(WD) 1003 specification. Mylex technical support has confirmed its adapter is
	not WD 1003 compatible.
	
	RESOLUTION
	==========
	
	Mylex provides a device driver, DCE376DR.EXE, that enables 32-bit disk access.
	
	MORE INFORMATION
	================
	
	For more information, contact Mylex technical support.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 card milex
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
