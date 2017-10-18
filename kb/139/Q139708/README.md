---
layout: page
title: "Q139708: Compression Agent Resets to 5 Percent Complete"
permalink: kb/139/Q139708/
---

## Q139708: Compression Agent Resets to 5 Percent Complete

	Article: Q139708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compression Agent may seem to randomly reset the percentage completed to 5
	percent when you are compressing a hard disk. When this occurs, you may receive
	the message "The drive's contents have changed: restarting..."
	
	CAUSE
	=====
	
	If a program or the operating system writes to the hard disk while Compression
	Agent is running, Compression Agent must scan the FAT again and walk the
	directory tree to make sure that the policy is current for every cluster on the
	disk. When this occurs, the percentage completed drops to 5 percent. It then
	climbs back up to 9 percent, and then jumps back to the point from which it
	dropped.
	
	RESOLUTION
	==========
	
	Quit all programs that can write to the hard disk. In some cases, Advanced Power
	Management features may cause this behavior to occur. Because Compression Agent
	continues retrying until it finishes, you may want to use System Agent to cause
	Compression Agent to continue retrying until a set time.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: sage cmpagent
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
