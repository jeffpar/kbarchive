---
layout: page
title: "Q255221: Client Can't Connect to Secure Web Site Requiring Reverse Lookup"
permalink: kb/255/Q255221/
---

## Q255221: Client Can't Connect to Secure Web Site Requiring Reverse Lookup

	Article: Q255221
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network clients may be unable to connect to secure Web sites that verify that
	the client Internet Protocol (IP) address belongs to a domain name registered in
	North America. If you attempt to download 128-bit encryption, you may receive a
	message stating that your IP address cannot be resolved to a domain name
	registered in North America.
	
	Clients experience no other problems browsing the Internet. Your Domain Naming
	System (DNS) server has a reverse lookup zone that is correctly configured.
	
	CAUSE
	=====
	
	This behavior can occur when your DNS server is not registered with Internic to
	provide reverse lookup resolution for the network address of a segment of your
	network. When the DNS server has not registered a segment's network address with
	Internic, reverse lookup will not succeed for clients that have an IP address
	belonging to that network segment; the IP address cannot be resolved to a domain
	name.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use reverse lookup resolution for the network segment
	by registering the network address of the segment with Internic on your DNS
	server.
	
	MORE INFORMATION
	================
	
	For information about how to contact Internic, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
