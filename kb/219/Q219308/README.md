---
layout: page
title: "Q219308: Cannot Obtain Lease with DHCP Scopes Using Multicast Addresses"
permalink: /kb/219/Q219308/
---

## Q219308: Cannot Obtain Lease with DHCP Scopes Using Multicast Addresses

	Article: Q219308
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a computer running Windows NT 4.0 Server using Dynamic Host
	Configuration Protocol (DHCP), computers on your network may not be able to
	obtain a lease.
	
	In addition, computers configured as DHCP clients that have already obtained a
	lease may not function properly.
	
	CAUSE
	=====
	
	This behavior occurs when you create a DHCP scope using DHCP Manager, and
	specify a class D TCP/IP address (multicast group address). DHCP scopes cannot
	contain class D TCP/IP multicast addresses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	In the TCP/IP address space, class D addresses are reserved for multicast
	groups. The address range is 224.0.0.0 to 239.255.255.255. Class D addresses are
	not segregated into network and host units. Some class D multicast groups are
	reserved.
	
	For additional information about DHCP, scopes, and multicasting, please refer to
	the following Request for Comment (RFC) documents:
	
	  Dynamic RFC1541: Host Control Protocol
	
	  RFC1112: Host Extensions for IP Multicasting
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
