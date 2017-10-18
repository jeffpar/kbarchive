---
layout: page
title: "Q142880: NetBT Fails to Bind to a Large Number of IP Addresses"
permalink: kb/142/Q142880/
---

## Q142880: NetBT Fails to Bind to a Large Number of IP Addresses

	Article: Q142880
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a computer running Windows NT is configured with a large number of IP
	addresses through the registry, NetBT may fail to bind. The following event log
	error may be generated:
	
	  Initialization failed because the driver device could not be created.
	
	CAUSE
	=====
	
	Only five IP addresses can be configured per network interface using the TCP/IP
	configuration screens. However, more may be added using the registry editor.
	When a large number of IP addresses is assigned to a single Network Interface
	card, NetBT may fail to bind. Reports on the number of addresses attainable
	without failure vary from 16 to about 24.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: multi homed ISP gibralter Gibraltar IIS internet server multiple addresses more NIC adding multihomed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
