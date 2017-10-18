---
layout: page
title: "Q177497: Server Service Fails to Start at Startup w/ Event ID 2505"
permalink: kb/177/Q177497/
---

## Q177497: Server Service Fails to Start at Startup w/ Event ID 2505

	Article: Q177497
	Product(s): Microsoft Windows NT
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The event log shows an Event ID 2505 error (duplicate name on the network). The
	error may appear in the event log as either of the following messages:
	
	  Event ID : 2505
	  The server could not bind to the transport/device/netbt_<nic driver>
	  because another computer on the network has the same name. The server
	  could not start.
	
	-or-
	
	  Event ID : 2505
	  The server could not bind to the transport/device/nbf_<nic driver>
	  because another computer on the network has the same name. The server
	  could not start.
	
	MORE INFORMATION
	================
	
	WINS may or may not be present in the environment. Error messages can occur in
	both single and multihomed systems. Multiple error messages (7001, 7002, 7023,
	and so on) may be present from the failure of various services to load that
	depend on NetBIOS support to be bound to the NIC.
	
	For related information, see the following article in the Microsoft Knowledge
	Base:
	
	ARTICLE-ID: Q103470
	TITLE : NetBIOS Name Conflicts When NetBEUI Used on Multiple NICs
	
	CAUSE
	=====
	
	This failure can occur when a user performs an upgrade with Microsoft Windows NT
	Server 4.0 over a Microsoft Windows NT Server 3.51 installation that was
	installed from a Compaq SmartStart compact disc. This problem may also occur on
	a Compaq machine using the Netflex III onboard network adapter. The registry
	entries that pertain to providing NetBIOS support over the Microsoft-supplied
	network protocols (such as TCP/IP and NetBEUI) are not correctly translated into
	the new version of the registry. When the system is restarted, the user receives
	the above error(s). Also, if you have NetBEUI bound to two network adapters on a
	multi-homed computer on the same network (the two adapters could be bridged),
	you will get the Event ID 2505 as well and Server Service will not start at
	Startup.
	
	RESOLUTION
	==========
	
	Removing and reinstalling NetBEUI will correct the NetBEUI frame (NBF) errors.
	However, to correct the NetBT errors will require that the TCP/IP protocol be
	removed and reinstalled.
	
	But, under these circumstances, any attempt to remove TCP/IP will result in the
	following error message:
	
	  TCP/IP gets Registry Service subkey already exists. Unable to remove
	  name space provider.
	
	For additional information on how to manually remove the registry entries
	relating to TCP/IP, please see the following article in the Microsoft Knowledge
	Base:
	
	ARTICLE-ID: Q151237
	TITLE : Error Message When Installing TCP/IP or Adding TCP/IP Service
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 4.00
	Hardware          : x86
	
	=============================================================================
	
