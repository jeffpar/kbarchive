---
layout: page
title: "Q96685: TCP Extensions for LAN Manager Require TCP/IP"
permalink: /kb/096/Q96685/
---

## Q96685: TCP Extensions for LAN Manager Require TCP/IP

{% raw %}

	Article: Q96685
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	In addition to LAN Manager system requirements, NetBIOS applications such as the
	TCP/IP extensions for LAN Manager require resources such as sessions, names, and
	NCBs from the protocol stack (TCP/IP in this case).
	
	The PROTOCOL.INI file is used to configure the protocol stacks and determine the
	number of resources the stacks provide to applications. The LANMAN.INI file is
	used to determine how many of the protocol stack resources LAN Manager is
	allowed to appropriate.
	
	ALLOCATION
	----------
	
	At startup, LAN Manager by default takes all of the sessions, NCBs, and names
	that are offered by the stack, leaving none for other NetBIOS applications.
	However, the [networks] section of LANMAN.INI can be modified in order to limit
	this usage. The Setup program should take care of this for you, but if you
	choose to edit the files, you must be careful not to create other problems.
	
	  [networks]
	
	  netn=devicename$,ln,type,sessions,ncbs,names
	  by defaultdevicename = NetBIOS device driver name from PROTOCOL.INI
	  ln = The lana number, default is 0
	  type = The driver type. LM10 and LM30 are valid entries
	  sessions = The number of NetBIOS sessions for LANMAN to use
	  ncbs = The number of network control blocks for LANMAN to use
	  names = The number of NetBIOS names for LANMAN to use
	
	In order for the TCP/IP extensions to start, LAN Manager must leave at least one
	session, NCB, and name available. This means that there must be a line in the
	[networks] section of LANMAN.INI specifying these numbers, and that the numbers
	must be at least one less than what the TCP/IP stack provides as determined by
	PROTOCOL.INI.
	
	EXAMPLES
	--------
	
	PROTOCOL.INI
	------------
	
	[TCPIP_XIF]
	
	 DRIVERNAME = TCPIP$
	 IPADDRESS0 = 11 1 9 220
	 SUBNETMASK0 = 255 255 0 0
	 DEFAULTGATEWAY0 =
	 TCPSEGMENTSIZE  = 1450
	 TCPWINDOWSIZE   = 4350
	 NBSESSIONS = 100
	 NUMNCBS         = 200
	 BINDINGS = "UBNEITP_NIF"
	; numnames = 18   (by default)
	
	This stack is providing 100 sessions, 200 ncbs, and 18 names for
	NetBIOS applications to use.
	
	LANMAN.INI
	----------
	
	  [networks]
	
	  net1 = tcpnb$,0,LM10,98,198,10
	  net2 = netbeui$,0
	
	LANMAN.INI specifies that LAN Manager should only use 98 sessions, 198 ncbs, and
	10 names of those available for the TCP/IP stack. This leaves 2 sessions, 2
	ncbs, and 8 names available for other applications, such as the TCP/IP
	extensions. Because the NetBEUI line doesn't specify any limits, LAN Manager
	will acquire all sessions, names, and NCBs available from NetBEUI.
	
	ADJUSTMENTS BEFORE STARTUP
	--------------------------
	
	The TCP/IP extensions for LAN Manager will not start correctly unless an entry
	limiting resources consumed by LAN Manager is in LANMAN.INI. If sessions, NCBs,
	or names are re-configured in PROTOCOL.INI, then the corresponding parameter in
	LANMAN.INI must also be modified in order for the change to work properly. This
	is explained on page 381 of the LAN Manager 2.2 "Installation and Configuration
	Guide," but the last line on that page is incorrect. TCPIP$, not NETBEUI$,
	applies here.
	
	If no resources are available for the TCP/IP extensions, the following error will
	result when attempting to start the related services:
	
	  NET3057: An internal consistency error has occurred.
	
	REFERENCES
	==========
	
	LAN Manager version 2.1a "Update for Administrators" manual
	
	LAN Manager version 2.2 "Installation & Configuration Guide"
	
	Additional query words: node hub 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
