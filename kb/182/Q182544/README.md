---
layout: page
title: "Q182544: Memory Leaks, Database Corruption, Event Logging"
permalink: kb/182/Q182544/
---

## Q182544: Memory Leaks, Database Corruption, Event Logging

	Article: Q182544
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article describes six issues related to the Host Security Integration
	feature included of SNA Server.
	
	
	Issue 1
	-------
	
	The following services use an excessive amount of non-paged pool memory:
	
	- Host Account Cache service (Snaudb.exe)
	
	- SNA Host Account Synchronization service (Hostproc.exe)
	
	- SNA WinNT Account Synchronization service (Snapmp.exe)
	
	
	Issue 2
	-------
	
	The SNA WinNT Account Synchronization service generates two access violations for
	each password change request that it processes. The exception handler catches
	and ignores each of these access violations. There are no noticeable signs that
	these access violations occur and they do not result in any problems with the
	password change request. The access violations are only noticeable when you use
	a debugger to step through the application code.
	
	
	Issue 3
	-------
	
	The SNA WinNT Account Synchronization service leaks one handle and approximately
	12 KB of memory each time a user account is added to the host account database
	with the SNACFG command-line configuration utility.
	
	
	Issue 4
	-------
	
	Event ID 3000 is incorrectly logged in the Windows NT Application Event Log by
	the AS/400 security provider when you are using the SNA Server Host Security
	features for AS/400 connections. Event 3000 should indicate the AS/400 security
	provider DLL (sec400.dll) has been loaded.
	
	The following is an example of the incorrect event that is logged:
	
	  Event ID: 3000
	  Source: AS400 MDSI
	  Description: Has been loaded by:
	
	
	Issue 5
	-------
	
	The Host Account Database service may corrupt its account database when an
	existing user record is modified or deleted and the user's host account name
	hash is not unique (that is, there is another user whose host account name hash
	has the same value). The database can also get corrupted when a new user is
	added to the database using a dummy host account and then modified with the
	correct host account info.
	
	This problem can manifest itself in a number of ways. The following are some of
	the symptoms that can occur if the database becomes corrupted:
	
	- Host Account Database service hangs or it stops responding to RPC requests.
	
	- Single Signon requests fail randomly.
	
	- SNACFG Host Security operations fail randomly.
	
	- The Host Account Database service logs Events 1283 through 1305 in the
	  Application Event Log when the database is corrupt. The exact event number
	  depends on how the database is corrupted.
	
	
	Issue 6
	-------
	
	Single Sign-on does not work if the Host Account Cache service is not running
	when the SNA Server service starts. If the SNA Server service cannot contact the
	host security database when it is started, all single sign-on requests will hang
	and no errors will be reported to the application. The only recovery is to
	restart the SNA Server service. Starting the Host Account Cache service after
	the SNA Server service is started will not correct the problem.
	
	
	Issue 7
	-------
	
	The Host Account Cache service (snaudb.exe) may enter a loop that causes it to
	utilize all available CPU cycles and memory on the computer it is running on.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and
	4.0.
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
