---
layout: page
title: "Q163790: RPC Service Stops Responding on UDP Port 135"
permalink: /kb/163/Q163790/
---

## Q163790: RPC Service Stops Responding on UDP Port 135

	Article: Q163790
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbRPC kbSDKPlatform kbGrpDSNetkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 has the capability to use UDP port 135 for RPC server and client
	services. Intermittently, the computer running Windows NT will stop responding
	to RPC requests on the UDP port. Windows NT does not inherently use the UDP port
	135 for native Windows NT RPC requests; however, there are third party
	applications that are designed to use RPC over UDP 135.
	
	
	CAUSE
	=====
	
	Broadcasts from other applications over UDP port 135 cause Windows NT to stop
	responding to RPC traffic intended for it.
	
	RESOLUTION
	==========
	
	Apply the fix mentioned below. It will replace the Rpcrt.dll file, which has
	been fixed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt rpc udp
	
	======================================================================
	Keywords          : kbnetwork kbRPC kbSDKPlatform kbGrpDSNet kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
