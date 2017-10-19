---
layout: page
title: "Q250145: How To Stop SNA Server From Retrying BIND Attempts"
permalink: /kb/250/Q250145/
---

## Q250145: How To Stop SNA Server From Retrying BIND Attempts

	Article: Q250145
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, you may want to stop SNA Server from retrying BIND attempts when
	an APPC or CPI-C application is attempting to establish a conversation.
	
	One instance where it might be useful to stop the BIND retries is if APPC or
	CPI-C sessions are configured on the SNA Server to connect to a CICS region on
	the mainframe, and the CICS region is down. By default, the SNA Server tries to
	reestablish the sessions until the region is available. This behavior can cause
	unwanted network traffic and can cause the Event Log on the server to fill up
	with Event 18 messages reporting failed BIND attempts. NOTE: SNA Server 4.0 and
	later will not log multiple Event 18 messages for each failed BIND attempt on
	the same LU/LU/Mode triplet.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To stop continuous BIND retries, add the following registry entry to the SNA
	Server:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaServr\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  values:
	
	  Value Name: BINDRETRY
	  Data Type:  REG_DWORD
	  Value:      0
	
	4. Quit Registry Editor and restart the Snaservr service to activate the
	  changes.
	
	With this registry change SNA Server sends a BIND request when an APPC or CPIC
	application sends [MC]ALLOCATE or CMALLC, but it will not retry if the BIND
	attempt fails.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
