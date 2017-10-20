---
layout: page
title: "Q200211: DUN Clients Do Not Receive DNS Domain Name over RAS/RRAS"
permalink: /kb/200/Q200211/
---

## Q200211: DUN Clients Do Not Receive DNS Domain Name over RAS/RRAS

{% raw %}

	Article: Q200211
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95,98; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RAS or DUN clients are unable to resolve friendly host names. The user must
	define/use the fully qualified domain name (FQDN) of the resource.
	
	CAUSE
	=====
	
	The client does not have the domain name configured in its TCP/IP properties.
	
	RAS or RRAS use Point to Point Protocol (PPP) Internet Protocol Control Protocol
	(IPCP), which is defined in RFC (Request for Comments) 1877 to provide name
	server (DNS server) and NetBIOS name server (NBNS) or WINS server IP addresses
	to the RAS client. RAS or RRAS do not support DHCP forwarding. Additionally,
	PPP-IPCP does not support this either.
	
	When an RAS/RRAS server is configured to either use DHCP or a static pool for
	addresses, it follows the information found in the following article in the
	Microsoft Knowledge Base:
	
	  Q160699 Understanding DHCP IP Address Assignment for RAS Clients
	
	Only the IP address of the primary and secondary DNS and/or NBNS WINS is
	negotiated with the PPP client.
	
	MORE INFORMATION
	================
	
	Future releases of Windows server operating systems will be able to pass DNS
	domain names to RAS clients through a DHCP inform packet after the PPP and IPCP
	have converged. Additional information will be available for this procedure upon
	the next release of Windows server.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q139904 How to Configure Your DHCP Server Scope
	
	  Q187742 Methods of Setting DHCP Options
	
	Cobb, S., "PPP Internet Protocol Control Protocol Extensions for Name Server
	Addresses", RFC 1877, Microsoft Corporation, December 1995
	
	
	Additional query words: resolution append win98x win95x
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
