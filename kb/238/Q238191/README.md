---
layout: page
title: "Q238191: Partial Replication May Take a Long Time with Very Large Groups"
permalink: kb/238/Q238191/
---

## Q238191: Partial Replication May Take a Long Time with Very Large Groups

	Article: Q238191
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following symptoms may occur on a domain with very large groups containing
	thousands of users that are changed frequently:
	
	- On the primary domain controller (PDC), there is a large number (up to
	  several events per minute) of 5711 events for each backup domain controller
	  (BDC):
	
	  Event Id 5711 - Source: NETLOGON
	  Description: The partial synchronization request from the server <BDC>
	  completed successfully. X changes(s) has (have) been returned to the caller.
	
	- On the BDC, there is only one 5715 event between two replications:
	
	  Event Id 5715 - Source: NETLOGON
	  The partial synchronization replication of the SAM database from the primary
	  domain controller <PDC> completed successfully. X change(s) is (are)
	  applied to the database.
	
	- The partial replication could take a very long time.
	
	- The amount of data that goes across the wire for a single replication to a
	  given BDC may be very large, and even larger than the size of the SAM on the
	  PDC. (Use the command "NBTSTAT ?S" to monitor the amount of data sent to each
	  BDC.)
	
	- The CPU on the PDC may remain at 100 percent usage during the replication.
	
	RESOLUTION
	==========
	
	You should not make too many changes to very large groups that contain thousands
	of users. If you do have to make large SAM modifications and have to modify the
	members of very large groups, you can:
	
	1. Make all the changes on the PDC.
	
	2. Force a full replication for all BDCs (issue the NLTEST/SYNC command on each
	  BDC).
	
	MORE INFORMATION
	================
	
	
	On the PDC, Netlogon is notified of all SAM changes. When a group is changed,
	Netlogon stores that change in the change log file (Netlogon.chg). The members
	of the group are not stored in the change log file, but only a reference to the
	change (that is, the SID of the group, a serial number, and so on). This is why
	changing such groups many times does not fill up the change log file.
	
	When the pulse timeout expires, the PDC notifies the BDCs with a pulse. Then,
	each BDC (within the limit of the PulseConcurrency setting) asks the PDC to
	perform the replication. If the Netlogon logging facility is enabled on the PDC,
	the Netlogon.log file includes a line similar to:
	
	  [SYNC] NetrDatabaseDeltas: SAM partial sync called by <BDC>
	  SerialNumber:XX
	
	When the PDC reads the Netlogon.chg file and finds an entry indicating that a
	group has changed, it sends the contents of the group to the BDC. If the group
	contains thousands of users, the amount of data that goes across the wire for
	that single change can be very large (approximately 8 KB for a group with 1,000
	users).
	
	If the same group is changed hundreds of times (for example, when new users are
	created and added to that group), and if in between two changes to the group
	there are other changes, the same group is sent hundreds of times to each BDC.
	The replication occurs as follows:
	
	- The BDC asks the PDC to perform a partial replication (all changes are in the
	  Netlogon.chg file. Remember that the Netlogon.chg file includes only
	  references to the SAM objects that are modified and does not include the
	  objects themselves).
	
	- The amount of data that can be sent by the PDC to the BDC depends on the
	  ReplicationGovernor parameter set on the BDC (if it is 100 percent, the
	  buffer size is 128 KB, if it is 50 percent, the buffer size is 64 KB, and so
	  on).
	
	- If the amount of data to send to the BDC is larger than the buffer size
	  provided by the BDC, the PDC sends, for example, only the first 128 KB with
	  the status 0x105 = STATUS_MORE_ENTRIES:
	
	  [MISC] Eventlog: 5711 (4) "BDC" "7"
	  [SYNC] NetrDatabaseDeltas: SAM returning (0x105) to <BDC>
	
	  The PDC logs an event 5711 indicating that the BDC has completed the partial
	  replication with the PDC successfully. This does not mean that there is no
	  more data to send to the BDC
	
	- Upon reception of the STATUS_MORE_ENTRIES entry, the BDC contacts the PDC
	  again to get the remaining data. The BDC logs event 5715 only at the very end
	  of the replication process, when there is no more data to retrieve, whereas
	  multiple 5711 events are logged on the PDC.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
