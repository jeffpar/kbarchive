---
layout: page
title: "Q130116: Event Log Write Problem Causes SERVICES.EXE Failure"
permalink: /kb/130/Q130116/
---

## Q130116: Event Log Write Problem Causes SERVICES.EXE Failure

	Article: Q130116
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT server SERVICES.EXE may cause an access violation during an event log
	update. An "RPC Server is too busy..." message may appear, indicating that
	SERVICES.EXE failed. A Dr. Watson log may be written to the %SYSTEMROOT%
	directory. Sessions provided by the server through NET USE may remain active.
	You may also be able to establish new sessions.
	
	The following messages may be returned to client requests using RPC services:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	
	CAUSE
	=====
	
	The last read position, an offset relative from the start of the log, is stored
	in the event log handle. If the offset is abnormally large, the next read
	attempt may read beyond the end of log.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	After you install the fix mentioned below, the event log will return an error in
	this case, instead of generating a fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.5. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt drwtsn32.log system security application
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
