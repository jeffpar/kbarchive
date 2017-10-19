---
layout: page
title: "Q69747: COMTOKR.SYS and LAN Manager NDDK"
permalink: /kb/069/Q69747/
---

## Q69747: COMTOKR.SYS and LAN Manager NDDK

	Article: Q69747
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Problems:
	
	I have the OS/2 LAN Manager version 2.0 Network Device Driver Kit (NDDK) and am
	working on an Ethernet version of remote boot. The documentation that comes with
	the NDDK describes where to put the new .DLLs that come with the NDDK, but the
	documentation makes no mention of replacing the COMTOKR.SYS file that comes with
	OS/2 LAN Manager version 2.0. I thought COMTOKR.SYS was only for use on Token
	Ring networks.
	
	Response:
	
	COMTOKR.SYS works similar to a transport stack such as NETBEUI.SYS. Just as
	NETBEUI.SYS can be "bound" to either a Token-Ring or Ethernet MAC driver, so can
	COMTOKR.SYS.
	
	To bind COMTOKR.SYS to an Ethernet MAC driver, add a BINDINGS keyword to the
	[COMTOKR] section of PROTOCOL.INI. Specify the name of the Ethernet MAC section,
	just as you would for NetBEUI.
	
	To use the Ethernet .DLLs with COMTOKR.SYS, add them to the [REMOTEBOOT] section
	of LANMAN.INI using a RPLx keyword. For example:
	
	  RPL1 = ETHNET1.DLL ETHNET2.DLL ETHOEM.DLL
	
	If the Ethernet card is not on NET1, place the network number, minus 1, just
	after RPLOEM.DLL. Thus, if NET2 is Ethernet, you should use the following
	statement:
	
	  RPL2 = ETHNET1.DLL ETHNET2.DLL ETHOEM.DLL 1
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
