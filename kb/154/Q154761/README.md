---
layout: page
title: "Q154761: DSMN How to Recover from a Loss of the Account Synchronization"
permalink: /kb/154/Q154761/
---

## Q154761: DSMN How to Recover from a Loss of the Account Synchronization

	Article: Q154761
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains instructions for recovering from the failure of the
	primary domain controller (PDC) and for recovering from a loss of the account
	synchronization database when no backup of the database exists.
	
	MORE INFORMATION
	================
	
	To recover from PDC server failure when there is a backup database:
	
	1. Promote a backup domain controller (BDC) in the domain to PDC.
	
	2. If you have not already done so, install Directory Service Manager for
	  NetWare (DSMN) on the newly-promoted server.
	
	3. Use the NET STOP MSSYNC command to stop the DSMN service on the new PDC.
	
	4. On the new PDC, create a backup subdirectory of the
	  %SystemRoot%\System32\Syncagnt directory.
	
	5. Copy the following files from an account synchronization backup location to
	  the backup directory:
	
	  Mssync.mdb
	  System.mdb
	  Jetn.log
	  *.pat
	
	6. Use the Control Panel Services tool to start the DSMN service.
	
	7. In Synchronization Manager, click Synchronize All Servers from the NetWare
	  Server menu.
	
	The synchronization may take a significant amount of time, depending on the
	number of NetWare servers being synchronized, and the number of accounts being
	propagated.
	
	To recover from loss of the account synchronization database with no backup
	Database, perform the following steps:
	
	If you do not have a backup copy of the account synchronization database, you
	must reconstruct your NetWare account information once you have a new PDC.
	
	1. On each NetWare server that was participating in the domain, use NetWare
	  administrative tools to delete the user account named WINNT_SYNC_AGENT.
	
	2. To return the NetWare server bindery to the state it was in before you added
	  the NetWare server to the domain, restore the bindery from a backup.
	
	3. For each NetWare server, use Synchronization Manager to again add the server
	  to the domain, specifying which accounts to propagate from the NetWare server
	  to the domain and which groups to propagate back from the domain to the
	  server. You will have to set a new password for each propagated user.
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
