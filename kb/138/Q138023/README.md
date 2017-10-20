---
layout: page
title: "Q138023: Windows 3.x Control Panel Icons Appear in Windows 95"
permalink: /kb/138/Q138023/
---

## Q138023: Windows 3.x Control Panel Icons Appear in Windows 95

{% raw %}

	Article: Q138023
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
	
	When you open Control Panel in Windows 95, you may see some of the Control Panel
	icons from Windows 3.x.
	
	CAUSE
	=====
	
	This behavior occurs if the Main.cpl file from Windows 3.x is present in the
	Windows\System folder.
	
	RESOLUTION
	==========
	
	Move, delete, or rename the Main.cpl file in the Windows\System folder. After
	you do so, extract a new copy of the Main.cpl file from your original Windows 95
	disks or CD-ROM.
	
	For information about using the Extract tool, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	The Windows 95 Main.cpl file can be overwritten by a 16-bit Windows-based
	program, or by restoring an old backup that includes Windows 3.x files.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
