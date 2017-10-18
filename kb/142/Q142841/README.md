---
layout: page
title: "Q142841: PC DirSync: No Updated Address List With Multiple T2 Cycles"
permalink: kb/142/Q142841/
---

## Q142841: PC DirSync: No Updated Address List With Multiple T2 Cycles

	Article: Q142841
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If more than one T2 (Srvmain -r) cycles occur between the T1 (Reqmain -t) and T3
	(Reqmain -r) times, a Config, Dirsync, Requestor Import (CDRI) request made by a
	requestor may never be processed by the requestor. As a result, the addresses on
	that requestor are not updated to match the Directory Synchronization (Dir-Sync)
	server list.
	
	The address list also may not be processed by T3 if a T2 cycle runs between a
	CDRI request and a T1 cycle.
	
	CAUSE
	=====
	
	A CDRI request from a requestor postoffice creates a $System message to be
	delivered to the Dir-Sync server. The Message Transfer Agent (MTA) delivers this
	message. If a T2 process is run after the CDRI request but before the
	requestor's T1 cycle is run, the Dir-Sync server will process the CDRI request.
	
	The Dir-Sync server then submits a similar $System message containing its
	complete address list back to the requestor postoffice. If T3 is not run on the
	requestor, then that message is not processed. If a T1 process begins at this
	point, it will submit its normal request for updates to the Dir- Sync server.
	The Dir-Sync server then runs T2 again, this time only resubmitting updates
	(instead of the entire address list) to the requestor in the form of another
	$System message. When T3 runs, it will process the latest $System message that
	it has received. So the original request for a complete list is never processed
	by the requestor postoffice.
	
	RESOLUTION
	==========
	
	Run T1, T2, and T3 cycles in order for all requestor postoffices, and avoid
	running multiple T2 between any requestors T1 and T3.
	
	If it is necessary to run multiple T2 cycles between some or all T1 and T3 times,
	then perform an Import -s on the Dir-Sync server to create a RESYNC.GLB file and
	copy that file to the requestor process and run a manual T3.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q105125 Address Deleted After Dir-Sync Import or Resync
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.2, 3.2a, and 3.5 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20 3.20a 3.50 srvmain requester
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
