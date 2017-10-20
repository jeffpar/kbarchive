---
layout: page
title: "Q135202: Backup Cannot Access Tape Drive in Safe Mode"
permalink: /kb/135/Q135202/
---

## Q135202: Backup Cannot Access Tape Drive in Safe Mode

{% raw %}

	Article: Q135202
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start Windows 95 in Safe mode and then start Backup, your computer may
	stop responding (hang).
	
	CAUSE
	=====
	
	The protected-mode driver used by Backup to access the floppy disk drive
	controller cannot be loaded in Safe mode.
	
	MORE INFORMATION
	================
	
	Backup does not function in Safe mode if the protected-mode driver is required
	to access the tape drive.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
