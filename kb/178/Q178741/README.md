---
layout: page
title: "Q178741: Event Log Opening Problem Causes Services.exe Failure"
permalink: /kb/178/Q178741/
---

## Q178741: Event Log Opening Problem Causes Services.exe Failure

	Article: Q178741
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP5, 4.0 
	- Microsoft Windows NT Server versions 3.51 SP5, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT server Services.exe may cause an access violation during an event log
	update. An "RPC Server is too busy..." message may appear, indicating that
	Services.exe failed. A Dr. Watson log may be written to the %SystemRoot%
	directory. Sessions provided by the server through NET USE may remain active.
	You may also be able to establish new sessions.
	
	The following messages may be returned to client requests using RPC services:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	
	CAUSE
	=====
	
	The pointer to the next event is miscalculated or the beginning of the log is
	corrupt and causing Services.exe to have an access violation. After Services.exe
	exits, other service wait indefinitely.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: drwtsn32.log system security application
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
