---
layout: page
title: "Q192194: Nothing Happens When You Open Display Properties"
permalink: /kb/192/Q192194/
---

## Q192194: Nothing Happens When You Open Display Properties

	Article: Q192194
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbui win95
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click the desktop and then click Properties, or double-click
	Display in Control Panel, nothing may happen.
	
	CAUSE
	=====
	
	This behavior can occur if the Deskcp16.dll or Desk.cpl file is missing,
	damaged, or is the wrong version.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Deskcp16.dll or Desk.cpl file
	from your original Windows 95 disks or CD-ROM to the Windows\System folder.
	
	For information about how to extract original compressed Windows files, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	NOTE: For Win98, extract Deskw95.cpl and rename to Desk.cpl.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
