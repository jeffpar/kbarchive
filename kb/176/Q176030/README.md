---
layout: page
title: "Q176030: Reducing RIP Requests with NWLINK"
permalink: /kb/176/Q176030/
---

## Q176030: Reducing RIP Requests with NWLINK

	Article: Q176030
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	By default, Windows NT will verify network addresses for existing connections
	over IPX by sending out a routing information protocol (RIP) request for the
	remote network number every five minutes. While this design is similar to the
	behavior of past versions of Novell client software, these RIP requests are not
	necessary for proper operations of the Workstation service, Client Services for
	NetWare or Gateway Services for NetWare.
	
	In most cases, the percentage of network bandwidth consumed by these RIP requests
	is almost negligible. However, some network administrators may prefer to remove
	any unnecessary network traffic from their network. These RIP requests can be
	reduced by setting the values for RipUsageTime and RipAgeTime to their maximum
	value of 65535 in the Windows NT registry.
	
	Windows NT stores the IPX network number to media access control address mappings
	in a RIP cache. The RipUsageTime entry informs IPX how many minutes to wait
	before an entry in the RIP cache will be deleted from the cache. The RipAgeTime
	entry informs IPX how long to wait before requesting a RIP update for an entry.
	
	If the connection between Windows NT and a computer on a remote IPX network
	cannot be established when using a cached address, Windows NT will request a RIP
	update for the remote IPX network number before failing the connection request.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To set the values for RipUsageTime and RipAgeTime to their maximum values,
	perform the following steps:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\NWLinkIPX\Parameters
	
	3. Modify the value for RipUsageTime, setting it to decimal 65535.
	
	4. Create the following DWORD Value, or modify the value as noted below if it
	  already exists:
	
	  Value Name: RipAgeTime
	  Data Type:  REG_DWORD
	  Decimal:    65535
	
	5. Close Registry Editor and restart.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
