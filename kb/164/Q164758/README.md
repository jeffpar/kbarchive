---
layout: page
title: "Q164758: Remote Procedure Call (RPC) Service Access Violation"
permalink: kb/164/Q164758/
---

## Q164758: Remote Procedure Call (RPC) Service Access Violation

	Article: Q164758
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbRPC kbSDKPlatform kbGrpDSNet kbHardwarekbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The remote procedure call (RPC) service fails with an access violation.
	Typically, this produces a failure report in the Drwtsn32.log file that looks
	similar to the following:
	
	  Application exception occurred:
	     App: exe\rpcss.dbg (pid=129)
	     When: 03/04/1997 @ 11:17:7.316
	     Exception number: c0000005 (access violation)
	
	
	CAUSE
	=====
	
	A corrupt RPC packet is being sent to the remote procedure call (RPC) service.
	The code that unmarshalls the data (unpacks it for execution) fails under
	certain conditions of packet corruption.
	
	RESOLUTION
	==========
	
	The only workaround to the problem is to determine the cause of the RPC packet
	corruption from the client. This has been historically traced back to hardware
	problems caused by a failure to copy the bytes of the packet correctly by a
	router, bridge, or network card. In one instance, a network card was using bus
	mastering I/O and this appeared to be causing the frame to be transmitted
	improperly. Disabling bus mastering on the client network card solved this
	problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbnetwork kbRPC kbSDKPlatform kbGrpDSNet kbHardware kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
