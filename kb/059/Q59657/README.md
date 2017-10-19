---
layout: page
title: "Q59657: System Unstable After Print to FILE: Fails"
permalink: /kb/059/Q59657/
---

## Q59657: System Unstable After Print to FILE: Fails

	Article: Q59657
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to print to the FILE port from Microsoft Windows 3.0, and you
	don't have enough disk space free, you receive an error and printing is
	terminated. In real mode, the error message is
	
	  Cannot print
	
	while in standard or enhanced modes, it is
	
	  Insufficient Disk Space
	
	After receiving the error, you may find that the System Resources percentage has
	reduced 20-60 percent.
	
	WORKAROUND
	==========
	
	Microsoft recommends that you quit and restart Windows to regain the System
	Resources. The workaround is to assure that you have sufficient free disk space
	before attempting to print to the FILE port.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0. We are researching
	this problem and will post new information here as it becomes available.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
