---
layout: page
title: "Q151879: Cisco Internet Junction Software Is an IPX-to-IP Gateway"
permalink: kb/151/Q151879/
---

## Q151879: Cisco Internet Junction Software Is an IPX-to-IP Gateway

	Article: Q151879
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Cisco Internet Junction provides direct access for Novell clients to the
	resources of the Internet (World Wide Web, FTP, News, Telnet).
	
	MORE INFORMATION
	================
	
	The software enables you to run Winsock 1.1-compliant TCP/IP applications over
	IPX without having to install a TCP/IP stack at every workstation. Only one IP
	address is required to connect an entire Novell network.
	
	The Cisco Internet Junction also acts as a firewall. Since IP addresses are not
	located anywhere on the LAN, the network is effectively isolated from the
	Internet.
	
	Internet Junction software is independent of your connection to the Internet.
	Internet Junction software works with any type of connection you may have to the
	Internet.
	
	As of April 1996, the latest version is 1.2.2.
	
	System Requirements
	-------------------
	
	Client workstations:
	
	  CPU:                    IBM PC or compatible
	  OS:                     Windows 3.1x, Windows for Workgroups, Windows 95
	  Applications:           WinSock 1.1 compliant application(s)
	
	Gateway platform (Windows NT platform):
	
	  CPU:                    IBM PC or compatible
	  OS:                     Microsoft Windows NT 3.51
	  WAN options:            PPP/SLIP (via dialup modem), ISDN, Frame Relay,
	                             56K, T1, Microsoft RAS, and so on
	
	  Internet connections:   A low/high speed link to the Internet service
	                             provider
	
	Memory Requirements
	-------------------
	
	Client workstations:                      60K of RAM
	Gateway platform (Windows NT platform):   60K of RAM plus 4K of RAM
	                                            per client*
	
	* Example: If three clients are connected to Gateway, total memory needed is 72K
	of RAM.
	
	Disk Requirements
	-----------------
	
	Client workstations:                      320 bytes
	Gateway platform (Windows NT platform):   350 Kbytes
	
	Main components of Cisco Internet Junction software (Windows NT platform):
	
	  Ijgate.exe
	  Ijdnsd.exe
	
	Registry entries made by Internet Junction software are placed in (Windows NT
	platform):
	
	HKEY_LOCAL_MACHINE/system/current_control_set/service/ijservice
	
	For more information, contact Cisco:
	
	  E-mail:  ij-info@cisco
	
	  U.S. and Canada : (800) GO-CISCO
	  Europe : (32) (2) 778-4242
	  Australia: (61) (2) 9935-4107
	  Other: (408) 526-7902
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The Cisco Internet Junction is manufactured by Cisco, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding the product's
	performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
