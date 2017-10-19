---
layout: page
title: "Q103362: Publisher 2.0 May Cause an Exception in the Win16 Subsystem"
permalink: /kb/103/Q103362/
---

## Q103362: Publisher 2.0 May Cause an Exception in the Win16 Subsystem

	Article: Q103362
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running Microsoft Publisher version 2.0 in Windows NT, if you
	choose Network from either the Print, Setup or Print Setup options on the File
	menu, you may receive the following error message:
	
	  MSPUB caused an exception in the Win16 Subsystem
	
	Click on CLOSE to terminate the application
	Click on CANCEL to debug the application
	Click on IGNORE to continue, you should save your work in a new file
	
	If you choose Close, Publisher quits. If you choose Cancel or Ignore, you will
	receive the following error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  NTVDM.exe
	  Exception: access violation (memaddress), Address memaddress
	
	RESOLUTION
	==========
	
	To work around this problem, connect to a network printer using Print Manager
	before opening Publisher.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
