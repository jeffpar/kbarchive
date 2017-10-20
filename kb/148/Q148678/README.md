---
layout: page
title: "Q148678: How To Synchronize A NetWare Server Using DSMN"
permalink: /kb/148/Q148678/
---

## Q148678: How To Synchronize A NetWare Server Using DSMN

{% raw %}

	Article: Q148678
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You use Synchronization Manager to add and manage NetWare servers in the Windows
	NT domain. It is also used to manage other aspects of Directory Service Manager
	for NetWare (DSMN). This article explains how to properly synchronize NetWare
	servers in the domain.
	
	MORE INFORMATION
	================
	
	The NetWare Server column in Synchronization Manager lists the names of the
	NetWare servers that have been added to the domain for management. The
	Description column lists the version and type of each server. Next to the server
	name is the current synchronization status. A light blue check mark indicates
	that the server is currently synchronized with the domain. A red "X" mark
	indicates that the server is not synchronized.
	
	When you attempt to synchronize the NetWare server with the domain by selecting
	the following from the NetWare server menu, the status still displays an "X"
	mark next to the server:
	
	- Synchronize selected Server
	
	- Fully Synchronize selected server
	
	- Synchronize all servers
	
	- Fully synchronize all servers
	
	To properly synchronize a NetWare server with the domain, do the following:
	
	1. In Control Panel Services, select the DSMN service and click Stop. You can
	  also stop the DSMN service by typing the following at the MS-DOS Command
	  Prompt:
	
	  "net stop MSSYNC" (without the quotation marks)
	
	2. Copy the following files from an account synchronization backup to the
	  %SystemRoot%\SYSTEM32\SYNCAGNT directory:
	
	  MSSYNC.MDB
	  SYSTEM.MDB
	  JET*.LOG
	  *.PAT
	
	3. In Control Panel Services, select the DSMN service and click Start. Close
	  Control Panel Services.
	
	4. In Synchronization Manager, select "Synchronize all servers" from the NetWare
	  server menu. This may take a significant amount of time, depending on the
	  number of NetWare servers to be synchronized and the number of the accounts
	  to be propagated.
	
	If you do not have a backup copy of the account synchronization database, you
	must re-construct your NetWare account information. If you do not have a backup
	copy of the account synchronization database, do the following:
	
	1. Delete the WINNT_SYNC_AGENT user account from each NetWare server that
	  participates in the domain using the NetWare Administrative tools.
	
	2. Restore the bindery from a backup (if you want the NetWare server bindery to
	  return to its previous state before synchronization).
	
	3. Use Synchronization Manager to add the NetWare server back to the domain. Set
	  a new password for each propagated user.
	
	Additional query words: prodnt gsnw Novell
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
