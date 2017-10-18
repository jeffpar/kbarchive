---
layout: page
title: "Q174765: How to Configure Microsoft DHCP Server for BOOTP Clients"
permalink: kb/174/Q174765/
---

## Q174765: How to Configure Microsoft DHCP Server for BOOTP Clients

	Article: Q174765
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbhowto
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 2 (SP2) or later provides a feature that allows the
	Dynamic Host Configuration Protocol (DHCP) Server Service to respond to BOOTP
	requests as well as DHCP requests. There are two types of BOOTP clients:
	
	- BOOTP clients that can request an IP address and other relevant information,
	  such as default gateway address, name server address, and so on.
	
	- BOOTP clients that can request the location of the boot file information from
	  which the client is to boot. This is most common with diskless workstations.
	
	This article discusses the procedures required to configure a Microsoft Windows
	NT DHCP server to provide the requested information to either of the above BOOTP
	clients.
	
	MORE INFORMATION
	================
	
	NOTE: The following steps assume that your computer running Microsoft Windows NT
	Server already has the DHCP Server Service installed and correctly configured
	for DHCP clients.
	
	BOOTP Clients Requesting IP Address Information Only
	----------------------------------------------------
	
	To configure your Microsoft Windows NT DHCP Server to assign IP address
	information to BOOTP clients, you must add a reservation for each BOOTP client.
	For information about how to add a reservation, view the "Managing Client
	Reservations" Help topic in DHCP Manager (Dhcpadmn.exe).
	
	The reservation builds an association between the media access control address
	and the IP address. The clients simply request an address and Windows NT Server
	provides the IP address based on the client's media access control address in
	the BOOTP request frame. Your scope options apply to both your DHCP and your
	BOOTP clients, so it is imperative to verify that your scopes are configured
	correctly.
	
	BOOTP Clients Requesting Boot File Information
	----------------------------------------------
	
	To configure your Microsoft Windows NT DHCP server to provide boot file
	information to BOOTP clients, you must edit the BOOTP table in DHCP Manager. The
	BOOTP Table is located in the Server Properties dialog box that can be accessed
	from the Server menu. For information about how to edit the BOOTP Table, view
	the "BOOTP Table" Help topic in DHCP Manager (Dhcpadmn.exe).
	
	NOTE: A reservation must be configured in the appropriate scope for each BOOTP
	client as specified in the section BOOTP Clients Requesting IP Address
	Information Only above.
	
	The downloading of the image file by the client is performed using Trivial File
	Transfer Protocol (TFTP). Microsoft Windows NT does not include a TFTP Server
	service. To use your Windows NT DHCP Server with BOOTP clients who must boot
	from an image file (usually diskless workstations), a third-party TFTP server is
	required.
	
	For more information on BOOTP see the following articles in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q142373
	TITLE : TFTP Server Not Included With Windows NT
	
	ARTICLE-ID: Q164394
	TITLE : BOOTP Service Does Not populate ARP cache
	
	ARTICLE-ID: Q167708
	TITLE : BOOTP Client Name Disappear in DHCP Manager
	
	REFERENCES
	==========
	
	For more information about BOOTP, see RFC 1532, RFC 2131, and RFC 2132.
	
	RFCs may be obtained through the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information, contact NIC@NIC.DDN.MIL). Online
	copies are available through FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt
	or rfc/rfc####.PS (#### is the RFC number without leading zeros).
	======================================================================
	Keywords          : kbnetwork kbhowto 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
