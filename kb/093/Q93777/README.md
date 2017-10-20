---
layout: page
title: "Q93777: Corrupt Swap File Warning After Removing Compressed Drive"
permalink: /kb/093/Q93777/
---

## Q93777: Corrupt Swap File Warning After Removing Compressed Drive

{% raw %}

	Article: Q93777
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a corrupt swap file warning message from Windows after you remove a
	compressed drive.
	
	CAUSE
	=====
	
	Because you remove a compressed drive manually, DoubleSpace cannot update
	permanent or temporary swap file settings in SYSTEM.INI or SPART.PAR. Drive
	letters change resulting in the corrupt swap file warning because Windows cannot
	find the swap file.
	
	RESOLUTION
	==========
	
	To restore your swap file settings, run the 386 Enhanced icon from Control
	Panel.
	
	Additional query words: 6.00 3.00 3.00a 3.10 double space err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
