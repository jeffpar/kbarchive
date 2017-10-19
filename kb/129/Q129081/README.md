---
layout: page
title: "Q129081: Setup Does Not Prompt to Create Emergency Startup Disk"
permalink: /kb/129/Q129081/
---

## Q129081: Setup Does Not Prompt to Create Emergency Startup Disk

	Article: Q129081
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
	
	When you are running Setup, you may not be prompted to create an Emergency
	Startup Disk.
	
	CAUSE
	=====
	
	There is a mounted DriveSpace (or DoubleSpace) compressed floppy disk in drive A
	and Setup incorrectly identified drive A as a local fixed disk.
	
	
	WORKAROUND
	==========
	
	Use either of the following methods to work around this problem:
	
	- Remove the compressed floppy disk from drive A before starting Windows 95
	  Setup.
	
	- Create the Emergency Startup Disk after Setup is finished. To do so, follow
	  these steps:
	
	  1. Click the Start button, point to Settings, then click Control Panel.
	
	  2. Double-click the Add/Remove Software icon.
	
	  3. Click the Startup Disk tab.
	
	  4. Click the Create Disk button.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
