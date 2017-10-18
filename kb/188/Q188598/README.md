---
layout: page
title: "Q188598: Renewing Wins Client Registrations with NBTSTAT -RR"
permalink: kb/188/Q188598/
---

## Q188598: Renewing Wins Client Registrations with NBTSTAT -RR

	Article: Q188598
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes necessary that clients or servers on your network need to
	reregister their NetBIOS names with a Windows Internet Name Service (WINS)
	server. Previously, this required restarting the client so that all names
	associated with that client would be released and reregistered during the
	startup process.
	
	In Service Pack 4 for Windows NT, a new feature has been added to the Windows NT
	version of the utility Nbtstat.exe. The -RR parameter will allow Windows NT
	clients to release their NetBIOS names and reregister them with their WINS
	server.
	
	MORE INFORMATION
	================
	
	Below are some situations where reregistering a WINS client's names would be
	necessary:
	
	- The registration has been lost or deleted in WINS and needs to be refreshed
	  by the client. Nbtstat.exe -RR will send a release and renewal of all NetBIOS
	  services associated with the WINS client, creating a new record.
	
	- The registration exists in some WINS servers but not in others. A
	  reregistration is useful here to increment the WINS version Ids, which will
	  help in causing a WINS server replication to occur.
	
	A Microsoft WINS server record includes a WINS client's NetBIOS names, its IP
	addresses, and a value called a version ID. WINS servers use a client record's
	version ID to keep track of records that need to be replicated to other server.
	This allows new WINS records to be replicated without sending the entire
	database from one server to another. This version ID is incremented when new
	records are added, but not when they are renewed. By quickly releasing and
	renewing the record, an existing records version ID will be incremented.
	
	When you run Nbtstat.exe -RR, a timer is invoked so the command cannot be
	repeated for 2 minutes. This is to prevent a WINS server becoming saturated by
	client renewals if this process is repeatedly invoked on a server.
	
	NOTE: The -RR is case sensitive.
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
