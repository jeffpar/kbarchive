---
layout: page
title: "Q136706: Address 0.0.0.0 in DHCP DNS Servers Causes Client DNS to Fail"
permalink: kb/136/Q136706/
---

## Q136706: Address 0.0.0.0 in DHCP DNS Servers Causes Client DNS to Fail

	Article: Q136706
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 3.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Dynamic Host Configuration Protocol (DHCP) client does not use the Domain
	Name System (DNS) server supplied by the DHCP server. Host names are not
	resolved properly if a DHCP server supplies the DNS address, but if the client
	is configured manually for the DNS server host name resolution works fine.
	
	CAUSE
	=====
	
	The DHCP Manager DNS Servers option is set to the default value of 0.0.0.0.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	In DHCP Manager, choose the DHCP Options menu. Each of the drop down menu choices
	( Global, Scope, and Defaults) will display the current value for the "006 DNS
	Servers" option. If the address 0.0.0.0 is included in the array, remove it. If
	this option is configured for each scope rather than globally, check each scope
	for a 0.0.0.0 entry in the DNS Servers definition and remove it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem was corrected in Windows NT Workstation or Server version 4.0.
	
	Additional query words: prodnt 3.1x
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : 3.5 3.51 3.11
	
	=============================================================================
	
