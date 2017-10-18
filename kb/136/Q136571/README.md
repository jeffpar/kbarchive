---
layout: page
title: "Q136571: How WINS Resolves Name Conflicts During Replication"
permalink: kb/136/Q136571/
---

## Q136571: How WINS Resolves Name Conflicts During Replication

	Article: Q136571
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	How a Windows Internet Name Service (WINS) server entry responds when a conflict
	occurs varies depending on three different instances:
	
	- State of the entries
	
	- Ownership of the entries
	
	- Addresses of the entries
	
	MORE INFORMATION
	================
	
	Conflict Between 2 Replicas
	---------------------------
	
	- If Replica1 and Replica2 are Tombstoned (indicated by a cross in the status
	  field), Replica1 is replaced.
	
	- If Replica1 is Tombstoned and Replica2 is active, Replica1 is replaced.
	
	- If Replica1 is Active and Replica2 is Tombstoned, Replica1 will be kept if:
	
	   - Replica1 and Replica2 come from different WINS servers.
	
	   - If they have the same owner, Replica2 will be kept.
	
	- If Replica1 and Replica2 are active, Replica2 will be kept.
	
	Conflict Between Owned Entry and
	Replica with Same or Different IP Address
	--------------------------------------------------------------------------
	
	- If Address1 is Tombstoned or released and Replica1 is Tombstoned, Address1 is
	  replaced.
	
	- If Address1 is Tombstoned or released and Replica1 is active, Address1 is
	  replaced.
	
	- If Address1 is active and Replica1 is Tombstoned, Address1 is kept.
	
	- If Address1 and Replica1 are active, Replica1 will be kept. Address1 will be
	  told to release the name, and Replica1 will increment its version stamp to
	  cause repropogation.
	
	If a Unique Name Conflicts with a Group Name
	--------------------------------------------
	
	The Group entry is kept.
	
	If There Is a Conflict Between Two Internet Group Names
	-------------------------------------------------------
	
	- If Group1 is Tombstoned or released and Group2 is Tombstoned, Group1 is
	  replaced.
	
	- If Group1 is Tombstoned or released and Group2 is active, Group1 is replaced.
	
	- If Group1 is active and Group2 is Tombstoned, Group1 is kept.
	
	- If Group1 and Group2 are active, A superset of both groups is maintained.
	
	If a Multihomed Record Conflicts
	--------------------------------
	
	- If a multihomed replica clashes with a tombstoned or released database entry,
	  the entry in the database is replaced with the replica.
	
	- If a tombstoned multihomed replica conflicts with an active entry with the
	  same owner, the entry is replaced. However, if the active entry is owned by a
	  different owner, then it is not replaced.
	
	- If an active multihomed entry conflicts with an active unique/multihomed
	  replica in the same database, it is replaced. If the owner is different, it
	  is not replaced.
	
	Additional query words: clash prodnt replica
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
