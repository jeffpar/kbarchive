---
layout: page
title: "Q115388: Ping and FTP Resolve IP Address with Leading Zero as Octal"
permalink: kb/115/Q115388/
---

## Q115388: Ping and FTP Resolve IP Address with Leading Zero as Octal

	Article: Q115388
	Product(s): Microsoft Windows NT
	Version(s): ; WINDOWS:2000; winnt:3.5,4.0
	Operating System(s): 
	Keyword(s): kbnetwork w2000mscs kbClustering
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	- Microsoft TCP/IP-32 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups with TCP/IP-32 and Windows NT utilities can accept
	Internet Protocol (IP) addresses comprised of decimal, octal, or hexadecimal
	numbers. This can cause confusion if you unintentionally use a leading zero in a
	decimal octet. With a leading zero, the number is resolved by these utilities as
	an octal number, thus specifying the wrong IP address.
	
	MORE INFORMATION
	================
	
	Many TCP/IP programs such as Ping and FTP use the inet_addr() sockets function
	to translate IP address strings into 4-byte addresses. This function accepts an
	IP address in standard decimal, octal, and hexadecimal notation, such that the
	following IP address examples are acceptable to Ping and FTP and resolve to the
	same IP address:
	
	  22.101.31.153 (decimal)
	  026.0145.037.0231 (octal)
	  0x16.0x65.0xF1.0x99 (hexadecimal)
	  0x16.101.037.153 (a combination of all three number systems)
	
	If you unintentionally enter a leading zero in an octet, the IP address that Ping
	and FTP resolve is not the same as you intended, as in the following example
	(using Ping):
	
	  In Windows NT 3.1:
	
	     c:\>ping 022.101.31.153
	     Pinging host 022.101.31.153 (unnamed) : 18.101.31.153
	     ICMP Echo Reply:TTL 32
	     ICMP Echo Reply:TTL 32
	     ICMP Echo Reply:TTL 32
	     ICMP Echo Reply:TTL 32
	     Host 022.101.31.153 replied to all 4 of the 4 pings
	
	  In Windows NT 3.5:
	
	     c:\>ping 022.101.31.153
	     Pinging 18.101.31.153 with 32 bytes of data:
	     Ping succeeded: 32 bytes time=10ms TTL=32
	     Ping succeeded: 32 bytes time=10ms TTL=32
	     Ping succeeded: 32 bytes time=10ms TTL=32
	     Ping succeeded: 32 bytes time=10ms TTL=32
	
	NOTE: In this example, 022.101.31.153 is resolved by Ping to be 18.101.31.153
	decimal, not 22.101.31.153 decimal.
	
	This results in either a successful (shown above) or unsuccessful verification of
	the wrong IP address, depending on whether the resolved IP address is a valid IP
	address in your network environment.
	
	Windows NT 4.0 Enterprise Cluster Administrator will give the following error if
	you specify an ip address to connect to the cluster with leading zeroes on the
	decimal octet, you may get the following error:
	
	"A connection to the cluster at "022.101.31.153" could not be opened. This may be
	caused by the customer on node "022.101.31.153" not being started. Would you
	like Cluster Administrator to attempt to start the Cluster Service on node
	"022.101.31.153"."
	
	
	To avoid an address being incorrectly resolved, it is recommended that you check
	for and remove leading zeros, unless an octal number is intended.
	
	The following utilities also exhibit this behavior:
	
	PING
	FTP
	TELNET
	Internet Explorer (IE)
	Microsoft Cluster Adminitrator
	Microsoft Cluster Setup Wizard
	
	
	Additional query words: prodnt mscs
	
	======================================================================
	Keywords          : kbnetwork w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS350search kbWinNTS310search kbAudDeveloper kbClustServSearch kbWinNT310Search kbWinNTW310Search kbTCPIPSearch kbWFWSearch kbWinAdvServSearch
	Version           : :; WINDOWS:2000; winnt:3.5,4.0
	
	=============================================================================
	
