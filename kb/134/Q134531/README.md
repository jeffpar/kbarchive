---
layout: page
title: "Q134531: Cannot Create Startup Disk During Setup w/Promise Controller"
permalink: /kb/134/Q134531/
---

## Q134531: Cannot Create Startup Disk During Setup w/Promise Controller

	Article: Q134531
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
	
	When you are creating a Startup Disk during Windows 95 Setup, you may receive
	the following error message:
	
	  Disk Initialization Error
	  Could not properly initialize the floppy disk that you inserted.
	  Error: Disk sector was not found.
	  Click OK to continue.
	
	CAUSE
	=====
	
	This problem can occur if the floppy disk drive in your computer is connected to
	a Promise IDE controller. The hardware detection portion of Setup does not
	properly recognize floppy disk drives on a Promise IDE controller.
	
	RESOLUTION
	==========
	
	Do not create a Startup Disk during Setup. Instead, create a Startup Disk after
	Setup is finished by following these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Add/Remove Programs icon.
	
	3. Click the Startup Disk tab.
	
	4. Click the Create Disk button.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
