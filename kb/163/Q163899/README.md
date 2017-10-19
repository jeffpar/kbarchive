---
layout: page
title: "Q163899: Client/Server Applications May Fail Using Windows NT3.51 SP5"
permalink: /kb/163/Q163899/
---

## Q163899: Client/Server Applications May Fail Using Windows NT3.51 SP5

	Article: Q163899
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP5, 4.0 
	- Microsoft Windows NT Server version 3.51 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications may fail with "network error" or "disk full error" when running on
	a Windows NT 3.51 Service Pack 5 computer. In particular, the problem occurs
	when running Microsoft Mail with numerous Mail Transfer Agents (MTAs) on a
	single computer connecting multiple times to a Master MTA Server. The session
	log for Microsoft Mail will indicate "disk full error" had occurred.
	
	
	CAUSE
	=====
	
	When a computer running Windows NT 3.51 Service Pack 5 system is connected to
	the same resource on a remote server with two or more drive letters,
	disconnecting one of the drive letters may disrupt activity on the other drive
	connection.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use the Rdr.sys file from Windows NT 3.51 Service Pack
	4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 5. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt msmail ms sp sp5 sp4
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5,4.0
	Issue type        : kbbug
	
	=============================================================================
	
