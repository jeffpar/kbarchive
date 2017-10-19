---
layout: page
title: "Q146905: Remote Pipe DosWaitNmPipe to OS/2 Subsystem Gives Error 123"
permalink: /kb/146/Q146905/
---

## Q146905: Remote Pipe DosWaitNmPipe to OS/2 Subsystem Gives Error 123

	Article: Q146905
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to open a remote pipe from an OS/2 version 1.x application
	running under the Windows NT OS/2 Subsystem, the ERROR_INVALID_NAME is
	returned.
	
	
	WORKAROUND
	==========
	
	Recompile the application and use the DosOpen API to probe a remote pipe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt OS2
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51
	
	=============================================================================
	
