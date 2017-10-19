---
layout: page
title: "Q138238: IPConfig Shows Default Subnet Mask and Gateway for RAS Client"
permalink: /kb/138/Q138238/
---

## Q138238: IPConfig Shows Default Subnet Mask and Gateway for RAS Client

	Article: Q138238
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the results that appear when you run IPCONFIG.EXE
	(WINIPCFG.EXE in Windows 95) from the Remote Access (RAS) client computer when
	you use Windows NT 3.5, 3.51, or Windows 95 as a PPP RAS client and dial into a
	Windows NT RAS server or any Windows NT-compatible PPP server using the TCP/IP
	protocol.
	
	MORE INFORMATION
	================
	
	The following is an example of what appears on your screen when you run
	IPCONFIG.EXE (WINIPCFG.EXE in Windows 95) on your RAS client:
	
	  Ethernet adapter NdisWan4:
	
	  IP Address. . . . . . . . . : 130.80.0.51
	  Subnet Mask . . . . . . . . : 255.255.0.0
	  Default Gateway . . . . . . : 130.80.0.51
	
	The IP address for the NDISWANx (where x is the number of the NDISWANx instance)
	adapter is the IP address of the RAS client. However, the subnet mask does not
	match the subnet mask of the PPP server and the default gateway shows the same
	address as the RAS client IP address.
	
	The subnet mask is not passed by the PPP Server. IPCP is the PPP component that
	passes TCP/IP address information, and the subnet mask is not defined in the
	Request For Comment (RFC) as a legal value to pass. RFC 1332 explains IPCP.
	
	In Windows NT 3.5, the subnet mask is displayed as 0.0.0.0. However in Windows NT
	3.51, the code has changed to give a subnet mask that is standard to the type of
	address that is passed by the PPP server. For example, if you receive a Class A
	IP address, a subnet mask of 255.0.0.0 is displayed.
	
	The RAS client uses the local subnet mask to determine whether to send data over
	the RAS connection or the local network connection. The default gateway displays
	the IP address of the RAS connection. This is expected behavior. It is up to the
	PPP server to forward RAS IP traffic to its own default gateway.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
