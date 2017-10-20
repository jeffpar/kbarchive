---
layout: page
title: "Q164394: BOOTP Service Does Not Populate ARP Cache"
permalink: /kb/164/Q164394/
---

## Q164394: BOOTP Service Does Not Populate ARP Cache

{% raw %}

	Article: Q164394
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 Service Pack 2 (SP2) provides a new feature that allows the DHCP
	Service to respond to BOOTP requests as well as DHCP requests.
	
	From RFC 1048, the BOOTP service is defined as follows:
	
	  "The Bootstrap Protocol (BOOTP) is a UDP/IP-based protocol that allows a
	  booting host to configure itself dynamically, and more significantly, without
	  user supervision. It provides a means to assign a host its IP address, a file
	  from which to download a boot program from some server, that server's
	  address, and (if present) the address of an Internet gateway."
	
	This means that a BOOTP server should provide 2 basic functions:
	
	1. Provide IP addresses to hosts who request them, without user intervention.
	  Additionally, the host should be provided with other relevant information,
	  such as default gateway address, name server address, and so forth.
	
	2. Provide location of image for client to start from. This is most often a
	  diskless workstation.
	
	For BOOTP clients that only require an IP address from the Windows NT BOOTP
	server, their clients simply request an address and the Windows NT Server
	provides the IP address.
	
	In the case where the host starts from an image file on a server, this is similar
	to how Remote Program Load (RPL) is used for remoteboot in a Microsoft
	networking environment.
	
	Typical BOOTP session:
	
	1. Client sends BOOTP request
	
	2. Server sends response containing:
	
	   - client's IP address
	
	   - boot image filename
	
	   - boot image servername
	
	   - other common IP parameters (router, dns, etc)
	
	3. Client starts trivial file transfer protocol (TFTP) download of boot image
	  file from boot image server.
	
	In this scenario, when the boot image server is specified as the Windows NT
	DHCP/BOOTP server, the client is never able to download the boot image.
	
	CAUSE
	=====
	
	There are two issues with using Windows NT as a BOOTP server, where an Image
	file is required:
	
	1. The download of the image file is done using TFTP. Windows NT does not
	  include a TFTP server service. To use Windows NT DHCP/BOOTP Server with BOOTP
	  clients who must boot from an image file (usually diskless workstations), a
	  third-party TFTP server is required. For more information on TFTP, see the
	  following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q142373
	  TITLE : TFTP Server Not Included With Windows NT
	
	2. There is a bug in the BOOTP function of the DHCP Service. When the BOOTP
	  client tries to start the TFTP session with the server, the server does an
	  address resolution protocol (ARP) query for the client's media access control
	  address. The client does not have a full operating system or TCP/IP stack
	  loaded at this time because it is dependent on the boot image file, therefore
	  the client never responds to the ARP request. The BOOTP service on the
	  Windows NT DHCP/BOOTP server should have populated the ARP cache with the
	  client address information when it sent the BOOTP response.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: bootp arp tftp
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
