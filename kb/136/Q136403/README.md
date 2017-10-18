---
layout: page
title: "Q136403: Description of UDP Ports"
permalink: kb/136/Q136403/
---

## Q136403: Description of UDP Ports

	Article: Q136403
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1,3.11,3.11a,3.11b,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The User Datagram Protocol is an unreliable, connectionless oriented protocol
	that uses an IP address for the destination host and a port number to identify
	the destination application.
	
	The UDP port number is distinct from any physical port on a computer such as a
	COM port or an I/O port address. The UDP port is a 16-bit address that exists
	only for the purpose of passing certain types of datagram information to the
	correct location above the transport layer of the protocol stack.
	
	MORE INFORMATION
	================
	
	UDP ports are not the same as TCP ports, though TCP and UDP may use the same
	port number in certain instances. The UDP ports can receive more than one
	message at a time, and they are identified by "well known" port numbers. The
	following is a listing of some of the more common "well known" UDP ports:
	
	Port   Keyword       Description
	----   -----------   ------------------------------
	
	15     NETSTAT       What is the network status
	
	53     DOMAIN        Domain Name Server
	
	69     TFTP          Trivial File Transfer Protocol
	
	137    NETBIOS-NS    NetBIOS name service
	
	138    NETBIOS-DGM   NetBIOS datagram service
	
	161    SNMP          SNMP network monitor
	
	The UDP specification is defined in RFC 768.
	
	Note: The NETBIOS-NS (NetBIOS name service) port value can be configured to
	accommodate products from specific vendors. The Registry parameter that controls
	this value is NameServerPort.
	
	For additional information on the NameServerPort parameter, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	REFERENCES
	==========
	
	"Inter-Networking with Microsoft TCP/IP Using Microsoft Windows NT,
	Participant's Workbook," P/N 4275A, Appendix A, page 222.
	
	"TCP/IP Illustrated, Volume 1, The Protocols," W. Richard Stevens, pp 6,7,12,13,
	Addison-Wesley, 1994.
	
	Additional query words: ppp endpoint connection
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.1,3.11,3.11a,3.11b,3.5,3.51
	
	=============================================================================
	
