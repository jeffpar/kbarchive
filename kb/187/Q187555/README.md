---
layout: page
title: "Q187555: WINS Incorrect Version ID Assigned During Scavenging"
permalink: kb/187/Q187555/
---

## Q187555: WINS Incorrect Version ID Assigned During Scavenging

	Article: Q187555
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When scavenging or running a consistency check against WINS replication
	partners, a WINS server may assign local version IDs to records of the
	replicated database.
	
	This may result in one of the following scenarios if you have the UseRplPnrs
	registry key enabled:
	
	- If there is a PUSH/PULL relationship between the WINS servers, the version ID
	  of the server that is scavenging or consistency checking will be pulled to
	  the replication partner and will cause an unnecessary version jump in the
	  replicated database where the scavenge or consistency check is performed.
	
	- If there is a PUSH relationship between the WINS servers and the version ID
	  of the server that is doing the scavenge or consistency check is higher than
	  the PUSH partner, replication will stop until the version ID of the partner
	  catches up to that of the replication partner. In the cases where the version
	  ID of the partner is extremely high, the partner will never catch up or it
	  would take years to catch up. To work around this problem you will have to do
	  a "delete owner" on the replicated database to reset the version ID and then
	  re-enable replication.
	
	  NOTE:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	  \Services\Wins\Parameters
	
	  UseRplPnrs - REG_DWORD
	  Range: 0 or 1 (nonzero)
	  Default: 0
	  Description: Determines which pull partners WINS uses when performing
	  consistency checks. If the value of this entry is set to 0, WINS contacts the
	  owner WINS server. If it is set to a nonzero value, WINS randomly picks a
	  WINS from its list of pull partners unless the owner WINS server also happens
	  to be a pull partner. In that case, the owner WINS is contacted.
	
	If you DO NOT have the UseRplPnrs registry key, the symptoms will be the same,
	but the WINS server running the consistency check will contact the owner of the
	replicated database directly instead of the replication partner.
	
	CAUSE
	=====
	
	During a scavenge or consistency check, there is a problem where a replica
	record was flagged indicating that the WINS server should update a record. This
	results in a version ID increase. Record ownership is not verified and the
	version ID is incorrectly assigned.
	
	Additionally, as a result of the check done on the records, another problem is
	addressed with group names that are in the released or tombstone state. There is
	a problem where group names in the released or tombstone state can cause
	symptoms similar to the symptoms stated above after a scavenge or consistency
	check was run against the WINS database.
	
	RESOLUTION
	==========
	
	There is now a check in place to ensure that only owned records are
	manipulated.
	
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
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
