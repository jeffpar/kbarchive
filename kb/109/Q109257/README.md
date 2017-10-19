---
layout: page
title: "Q109257: CONN: Traffic Is Suspended During Address Import/Export"
permalink: /kb/109/Q109257/
---

## Q109257: CONN: Traffic Is Suspended During Address Import/Export

	Article: Q109257
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks
	temporarily suspends gateway message delivery while the Connection Name Utility
	(CNU) performs directory import or export tasks. Normal message delivery resumes
	after the CNU completes its directory exchange tasks.
	
	The CNU scans the Network Manager[ASCII 146]s mailbox for directory exchange
	messages and processes them. It does this upon initial startup of the CNU, and
	at the directory synchronization (Dir-Sync) T3 time defined in the CNU
	configuration screen.
	
	Large directory import or export requests may take the CNU several hours to
	process. These directory exchange tasks should be performed at off-peak hours to
	minimize the delayed delivery of gateway messages.
	
	Additional query words: 3.20 CNU DirSync DirSynch Directory Import Export
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
