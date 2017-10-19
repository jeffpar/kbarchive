---
layout: page
title: "Q160650: Blue Screen When Closing Kernel Mode Handles from User Mode"
permalink: /kb/160/Q160650/
---

## Q160650: Blue Screen When Closing Kernel Mode Handles from User Mode

	Article: Q160650
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User mode programs that close a handle that was opened up by a kernel mode
	component may cause a blue screen error message.
	
	CAUSE
	=====
	
	In Windows NT 3.51, if this happened, the handle became invalid. In Windows NT
	4.0, if a kernel mode component closed an already closed handle, a blue screen
	error would occur. A user mode application has no way of knowing who closed the
	handle. A user mode application should never close a handle opened by that
	application in kernel mode.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
