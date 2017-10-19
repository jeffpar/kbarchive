---
layout: page
title: "Q192797: Computer Stops Responding When Smart Card Is Ejected"
permalink: /kb/192/Q192797/
---

## Q192797: Computer Stops Responding When Smart Card Is Ejected

	Article: Q192797
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv osr2 win95kbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer contains a Small Computer Systems Interface (SCSI) device (such
	as a hard disk or CD-ROM) and a PC Card (PCMCIA) Smart Card reader, your
	computer may intermittently stop responding (hang) if you remove a Smart Card
	from the PC Card Smart Card reader.
	
	CAUSE
	=====
	
	This problem can occur if the Diskvsd.vxd virtual device driver unloads disk
	devices incorrectly when another device removal is detected.
	
	
	RESOLUTION
	==========
	
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and
	Microsoft Windows 95 OEM Service Release 2, 2.1, and 2.5.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words: freeze freezes lock locks up hangs
	
	======================================================================
	Keywords          : kbenv osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
