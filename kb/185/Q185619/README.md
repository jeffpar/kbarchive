---
layout: page
title: "Q185619: Windows 95 Accesses the Floppy Disk Drive at Startup"
permalink: kb/185/Q185619/
---

## Q185619: Windows 95 Accesses the Floppy Disk Drive at Startup

	Article: Q185619
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbusage win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 normally or in Safe mode, the floppy disk drive may be
	accessed.
	
	CAUSE
	=====
	
	This behavior can occur when a file type has an action associated with it that
	refers to the floppy disk drive.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Double-click My Computer, and then click Options on the View menu.
	
	2. Click the File Types tab.
	
	3. In the Registered File Types box, click each file type until the floppy disk
	  drive is accessed.
	
	4. Click Edit.
	
	5. In the Actions box, click an action, and then click Edit.
	
	6. In the Application Used To Perform Action box, change the path to a program
	  located on the hard disk drive, instead of a program located on the floppy
	  disk drive, and then click OK.
	
	7. Repeat steps 5-6 for each action that refers to a program located on the
	  floppy disk drive.
	
	8. Click Close, and then click Close again.
	
	Additional query words: desktop polling access polls
	
	
	======================================================================
	Keywords          : kbusage win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
