---
layout: page
title: "Q171415: Network Adapter Fault Tolerance for Windows NT 4.0"
permalink: /kb/171/Q171415/
---

## Q171415: Network Adapter Fault Tolerance for Windows NT 4.0

	Article: Q171415
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network adapter fault tolerance provides improved reliability to a network
	server by using a second identical network adapter that can continue network
	operations in the event of a failure of the primary network adapter. Microsoft
	Windows NT does not directly provide this feature, but it is provided by some
	manufacturers of network interface cards.
	
	MORE INFORMATION
	================
	
	On a server that requires high availability, a single network card can be a
	critical point of failure. Network adapter fault tolerance provides an extra
	level of reliability by using an adapter and driver combination that senses a
	failure on one adapter, then migrates its function (including its IP address in
	a TCP/IP environment) in a manner transparent to the operation of both the host
	server and clients.
	
	Windows NT does not directly provide this function, but it has been implemented
	by third-party manufacturers of network adapters for use with Windows NT.
	
	Currently, these manufacturers are shipping adapter and driver sets that support
	network adapter fault tolerance:
	
	Compaq Computer Corporation, using Compaq Advanced Network Control Utility:
	
	- NetFlex-3/E Controller
	
	- NetFlex-3/P Controller
	
	- Netelligent 10/100TX PCI UTP Controller
	
	- Netelligent 10T PCI UTP Controller
	
	- Netelligent Integrated 10/100 TX UTP Controller
	
	- Netelligent Dual 10/100 TX PCI UTP Controller
	- Intel Pro 100 Intelligent Server Adapter
	
	Intel Corporation, Adapter Fault Detection using Softset:
	
	- EtherExpress(TM) PRO/100 Server adapters
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	REFERENCES
	==========
	
	Compaq white paper: Compaq Advanced Network Error Correction Support in a
	Microsoft Windows NT Server Environment. Available from the following location
	on the Internet:
	
	  http://www.compaq.com
	
	Intel Technical Document: Adapter Fault Tolerance (AFT) Installation Notes for
	the EtherExpress(TM) PRO/100 Server Adapter Under Windows NT 4.0. Available from
	the following location on the Internet:
	
	  http://www.intel.com
	
	Additional query words: ethernet team teaming aft
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
