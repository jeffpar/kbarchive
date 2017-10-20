---
layout: page
title: "Q98468: OS/2 2.0 Doesn't Recognize DoubleSpace Volumes"
permalink: /kb/098/Q98468/
---

## Q98468: OS/2 2.0 Doesn't Recognize DoubleSpace Volumes

{% raw %}

	Article: Q98468
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running MS-DOS 6.0 or 6.2 in a dual-boot configuration with IBM OS/2
	operating system version 2.0, you cannot access any DoubleSpace volumes that are
	created while running MS-DOS. Also, if the boot drive is compressed, the OS/2
	dual-boot feature does not work. Instead, you may receive the following error
	message:
	
	  SYS0019: The drive is currently write-protected.
	
	CAUSE
	=====
	
	OS/2 version 2.0 is unaware of the DoubleSpace system files and does not load
	them during the OS/2 boot sequence. As a result, any data or program files that
	are located in the DoubleSpace volume are not accessible to the OS/2 operating
	system.
	
	IBM OS/2 version 2.0 is manufactured by a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.00 doublespace dualboot dual boot dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
