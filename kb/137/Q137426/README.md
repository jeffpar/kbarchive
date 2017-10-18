---
layout: page
title: "Q137426: Program Manager Disappears After Log On, Log Off or Shutdown"
permalink: kb/137/Q137426/
---

## Q137426: Program Manager Disappears After Log On, Log Off or Shutdown

	Article: Q137426
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One or both symptoms may occur in Windows NT 3.51:
	
	- When you log on, log off, or shut down Windows NT, Program Manager does not
	  appear, or disappears. When you press CTRL+ALT+DEL, the Windows NT Security
	  dialog box does not appear. Network connections to the Windows NT computer
	  can still be made.
	
	- Program Manager disappears and is not in the task list. Programs already
	  started are functional and network connections to the Windows NT computer can
	  be made.
	
	
	CAUSE
	=====
	
	This problem occurs when the following events occur:
	
	  - Process A creates cursor
	  - Process B references cursor
	  - Process A exits
	
	The cursor still points to the freed pointer of process A. If the freed pointer
	is uncommitted, any call to FindExistingCursorIcon results in memory access
	violation and the calling process is halted.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
