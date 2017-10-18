---
layout: page
title: "Q100313: Windows for Workgroups &quot;V86ModeLanas&quot; and TCP/IP"
permalink: kb/100/Q100313/
---

## Q100313: Windows for Workgroups &quot;V86ModeLanas&quot; and TCP/IP

	Article: Q100313
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Microsoft TCP/IP for Windows for Workgroups setup makes several modifications to
	the WFWG SYSTEM.INI file. Although the WFWG resource kit specifies that
	SYSTEM.INI should contain the line V86ModeLanas=1, this line is NOT necessary,
	and is not added by TCP/IP setup.
	
	MORE INFORMATION
	================
	
	When VNetBIOS comes up, it probes for NetBIOS drivers on LANAs 0 through 7. The
	default is to use all drivers found, so the V86ModeLana parameter limits the
	drivers probed because some old transports answer on all LANAs even though there
	is really only one driver on one card.
	
	Because the Microsoft TCP/IP stack correctly uses the LANA number in the NCB, you
	should NOT set the V86ModeLana parameter.
	
	REFERENCES
	==========
	
	Microsoft Windows for Workgroups Resource Kit.
	
	Additional query words: 2.20 2.2 3.10 3.1 resource WFW tcpip ntdocerr doc
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
