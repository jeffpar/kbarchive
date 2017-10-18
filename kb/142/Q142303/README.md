---
layout: page
title: "Q142303: DNS Address from RAS Server Not Passed to RAS Client"
permalink: kb/142/Q142303/
---

## Q142303: DNS Address from RAS Server Not Passed to RAS Client

	Article: Q142303
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT RAS client is configured for a server assigned IP address, but
	does not get a Domain Name Service (DNS) server address from the Windows NT RAS
	server.
	
	The RAS server is configured to use DHCP to assign remote TCP/IP client
	addresses. The DHCP server is configured to give out DNS server addresses. The
	RAS server itself has a DNS address configured, but this address is not being
	passed along to the RAS clients.
	
	CAUSE
	=====
	
	Currently, a Windows NT RAS server that has obtained a DNS server address
	through DHCP will not pass this address on to its RAS clients.
	
	RESOLUTION
	==========
	
	To work around this issue with Windows NT version 3.51, you must manually
	configure the RAS server with a DNS server address using the following steps:
	
	1. From Control Panel double-click Network.
	
	2. Click TCP/IP Protocol, click Configure, and click DNS.
	
	3. Enter the DNS server address and click Close.
	
	4. Restart the RAS Server when prompted.
	
	To resolve this issue with Windows NT version 4.0, obtain the latest Service
	Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.10 3.50 2.20 3.11 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
