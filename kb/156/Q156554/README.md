---
layout: page
title: "Q156554: &quot;Non-System Disk Error&quot; with LBA Hard Disk Controller"
permalink: /kb/156/Q156554/
---

## Q156554: &quot;Non-System Disk Error&quot; with LBA Hard Disk Controller

{% raw %}

	Article: Q156554
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are starting Windows 95, you may receive the following error message:
	
	  Non-System disk error.
	
	CAUSE
	=====
	
	This error message can occur if you are using an LBA (logical block addressing)
	BIOS-only controller with an older hard disk for the boot drive, causing
	incorrect drive parameter translations in hard disks that are not LBA
	addressable.
	
	RESOLUTION
	==========
	
	Use the newer LBA drive as the boot drive instead of the older drive.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
