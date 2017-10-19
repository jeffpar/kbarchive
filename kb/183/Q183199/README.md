---
layout: page
title: "Q183199: DHCP Server Does Not Provide Options to Remote Boot Clients"
permalink: /kb/183/Q183199/
---

## Q183199: DHCP Server Does Not Provide Options to Remote Boot Clients

	Article: Q183199
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your diskless workstations (or other devices), that use Dynamic Host
	Configuration Protocol (DHCP) to obtain IP address information and BOOTP file
	and server information, may not obtain the DHCP options that are configured in
	the client's DHCP reservation.
	
	CAUSE
	=====
	
	Some DHCP clients do not request any option parameters in their DHCPDISCOVER
	packet or their DHCPREQUEST packet. Windows NT DHCP server expects the client to
	request the necessary options in either the DHCPDISCOVER or the DHCPREQUEST
	packet. Windows NT DHCP server will not provide any option parameters unless
	specifically requested by the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post additional information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on BOOTP, please see the following articles in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q174765
	  TITLE : How to Configure Microsoft DHCP Server for BOOTP Clients
	
	  ARTICLE-ID: Q142373
	  TITLE : TFTP Server Not Included With Windows NT
	
	  ARTICLE-ID: Q164394
	  TITLE : BOOTP Service Does Not populate ARP cache
	
	  ARTICLE-ID: Q167708
	  TITLE : BOOTP Client Name Disappear in DHCP Manager
	
	For more information about DHCP and BOOTP, see RFC1532, RFC2131, and RFC2132.
	
	RFCs may be obtained through the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information, contact NIC@NIC.DDN.MIL). Online
	copies are available through FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt
	or rfc/rfc####.PS (#### is the RFC number without leading zeros).
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
