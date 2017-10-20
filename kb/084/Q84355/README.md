---
layout: page
title: "Q84355: PC Paintbrush 4 Plus Err Msg: Can't Init Virtual Memory"
permalink: /kb/084/Q84355/
---

## Q84355: PC Paintbrush 4 Plus Err Msg: Can't Init Virtual Memory

{% raw %}

	Article: Q84355
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Z-Soft's PC Paintbrush 4 Plus from Microsoft Windows operating
	system version 3.0 or 3.1, the following error message may occur:
	
	  Can't Init Virtual Memory
	
	After this message is displayed, Windows returns to the MS-DOS command prompt.
	
	CAUSE
	=====
	
	This error is caused by an invalid SET TEMP statement in the AUTOEXEC.BAT file.
	
	RESOLUTION
	==========
	
	To correct this problem, create a C:\WINDOWS\TEMP directory.
	
	MORE INFORMATION
	================
	
	PC Paintbrush 4 Plus is an MS-DOS-based application manufactured by Z-Soft
	Corporation.
	
	When you install Windows, the following statement may be added to the
	AUTOEXEC.BAT file:
	
	  SET TEMP=C:\WINDOWS\TEMP
	
	If a C:\WINDOWS\TEMP directory does not exist, PC Paintbrush 4 Plus will display
	the
	
	  Can't Init Virtual Memory
	
	error message.
	
	For more information on PC Paintbrush 4 Plus, contact Z-Soft Corporation
	technical support.
	
	The PC Paintbrush 4 Plus product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.11 PC Paintbrush Zsoft Virtual Memory + Z soft paint brush PCpaint 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
