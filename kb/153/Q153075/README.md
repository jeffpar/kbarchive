---
layout: page
title: "Q153075: RPL Clients Will Not Boot with a SMC 8432 Adapter"
permalink: /kb/153/Q153075/
---

## Q153075: RPL Clients Will Not Boot with a SMC 8432 Adapter

	Article: Q153075
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51; :2.2,2.2c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft LAN Manager, versions 2.2, 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an SMC 8432 adapter with an RPL client you will receive the
	following error:
	
	  NOT USER LEVEL SEC!
	  RPLDISK.SYS
	  Error in server \\<ServerName>.
	  System files not found (Non-System disk).
	
	CAUSE
	=====
	
	By default, the entries in the Protocol.ini file for the RPL clients are in
	lower case. When the RPL client parses through the Protocol.ini file, and the
	drivername for the SMC adapter under the [smcpwr_nif] section is in lower case,
	the RPL client will fail to start. Below is the default section of the
	[smcpwr_nif] from the Protocol.ini file:
	
	  [smcpwr_nif]
	    drivername = smcpwr$
	
	RESOLUTION
	==========
	
	Modify the Protocol.ini file and ensure that the drivername for the SMC adapter
	under the [smcpwr_nif] section is typed in upper case. A working Protocol.ini
	file is referenced below:
	
	  [protman]
	    drivername = protman$
	    dynamic = yes
	    priority = netbeui
	
	  [netbeui_xif]
	    drivername = netbeui$
	    bindings = smcpwr_nif
	    names = 6
	    ncbs = 12
	    packets = 20
	    pipeline = 10
	    sessions = 6
	    stacksize = 512
	    lanabase = 0
	
	  [xnsnb_xif]
	    drivername = xnsnb$
	    bindings = smcpwr_nif
	    load = xnsnb[cbr]
	    lanabase = 1
	
	  [xnstp_xif]
	    drivername = xnstp$
	    bindings = smcpwr_nif
	    load = xnstp[ub]
	    lanabase = 1
	
	  [tcpip_xif]
	    drivername = TCPIP$
	    disabledhcp = (TCPIP_NO_DHCP)
	    ipaddress0 = (TCPIP_ADDRESS)
	    subnetmask0 = (TCPIP_SUBMASK)
	    defaultgateway0 = (TCPIP_GATEWAY)
	    tcpsegmentsize = 1450
	    tcpwindowsize = 1450
	    nbsessions = 6
	    load = tcptsr[c],tinyrfc[c],emsbfr[cr]
	    unload = "unloadt /notsr[dc]"
	    bindings = smcpwr_nif
	    lanabase = 1
	
	  [ipx_xif]
	    drivername = ipx$
	    load = ipxmark[u],ipx[u]
	    unload = ipxrel[c]
	    bindings = smcpwr_nif
	    lanabase = 1
	
	  [msdlc_xif]
	    drivername = msdlc$
	    bindings = smcpwr_nif
	    load = msdlc[ub]
	    unload = msdlc[u]
	
	  [smcpwr_nif]
	    drivername = SMCPWR$
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan220 kbLanMan220c
	Version           : winnt:3.5,3.51; :2.2,2.2c
	Issue type        : kbprb
	
	=============================================================================
	
