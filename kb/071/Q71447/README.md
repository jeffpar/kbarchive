---
layout: page
title: "Q71447: Swapfile Err Msg: Incompatible Driver in CONFIG.SYS"
permalink: /kb/071/Q71447/
---

## Q71447: Swapfile Err Msg: Incompatible Driver in CONFIG.SYS

{% raw %}

	Article: Q71447
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you boot without a CONFIG.SYS file in the root directory of drive C, and
	run the Windows SWAPFILE.EXE utility to create a permanent swapfile, the
	following error message is displayed:
	
	  Your CONFIG.SYS file contains a device driver that is incompatible with
	  Swapfile.
	
	NOTE: This problem does not occur in later versions of Microsoft Windows.
	
	RESOLUTION
	==========
	
	Create a CONFIG.SYS file with Files=30 and Buffers=30 in the root directory of
	drive C. Rebooting the system is not necessary.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
