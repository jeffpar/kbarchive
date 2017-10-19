---
layout: page
title: "Q152610: Compression Agent Restarts Continuously on PCMCIA Drives"
permalink: /kb/152/Q152610/
---

## Q152610: Compression Agent Restarts Continuously on PCMCIA Drives

	Article: Q152610
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Compression Agent with a removable PCMCIA hard disk, Compression
	Agent may restart continuously at 10 percent finished.
	
	CAUSE
	=====
	
	This behavior can occur if the drive is marked as removable in Device Manager.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. Click the Device Manager tab, and then double-click Disk Drives.
	
	3. Double-click the appropriate drive to display its properties.
	
	4. Click the Settings tab, and then click the Removable check box to clear it.
	
	5. Click OK, and then click OK.
	
	6. When you are prompted to restart your computer, do so.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem is specific to PCMCIA drives and does not affect other removable
	drives such as floppy disk drives.
	
	Additional query words: osr2
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbOPKSearch kbWin95 kbPlus95
	Version           : 95
	
	=============================================================================
	
