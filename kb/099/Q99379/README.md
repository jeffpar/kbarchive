---
layout: page
title: "Q99379: Configuring WFWG Workstations Through Novell Router"
permalink: kb/099/Q99379/
---

## Q99379: Configuring WFWG Workstations Through Novell Router

	Article: Q99379
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Consider a configuration that includes a Novell (or other) router, two net
	cards, and several Windows for Workgroups workstations in each of the two
	network segments. Here is how to make Windows for Workgroups workstations (or
	any other Microsoft NetBIOS ones) work through the Novell router:
	
	- Add entries to LMHOSTS on each Microsoft node for any system that you want to
	  talk to through the router.
	
	- Set the default gateway (DEFAULTGATEWAY0) on each workstation to the IP
	  address of the "near side" of the router.
	
	Workstations use the NetBIOS over TCP/IP interface, but NetBIOS uses broadcasts
	for name claims, name resolution, and so on. This means that functions relying
	on broadcasts won't work over the router unless it forwards broadcasts. The
	browser is an example.
	
	Use LMHOSTS to map NetBIOS names to IP ADDRESSES, and HOSTS to map Internet
	domain names to IP ADDRESSES. TCP/IP utilities such as FTP and Telnet use
	Internet domain names, and Windows for Workgroups file and print services use
	NetBIOS names.
	
	REFERENCES
	==========
	
	"LAN Manager Resource Kit," volume 3 number 9, pages 8-15
	
	TCP/IP Transport Supervisor Guide of NetWare, pages 5-4 to 5-7
	
	Additional query words: wfw wfwg 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
