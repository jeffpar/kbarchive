---
layout: page
title: "Q126623: DHCP Manager Does Not Display Host Names"
permalink: /kb/126/Q126623/
---

## Q126623: DHCP Manager Does Not Display Host Names

{% raw %}

	Article: Q126623
	Product(s): Microsoft Windows NT
	Version(s): 2.2c,3.0,3.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows NT Server version 3.5 Dynamic Host Configuration Protocol
	(DHCP) Manager does not display the host name of a DHCP reservation acquired by
	the following clients:
	
	- Microsoft Network Client for MS-DOS
	
	- Microsoft LAN Manager 2.2c for MS-DOS
	
	MORE INFORMATION
	================
	
	The DHCP manager displays the IP address and empty brackets for all leases
	obtained by Microsoft Network Client for MS-DOS and Microsoft LAN Manager 2.2c
	for MS-DOS clients. The DHCP request frame does not contain a host name options
	field and cannot be recorded by the DHCP manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Network Client for
	MS-DOS, version 3.0 and Microsoft LAN Manager 2.2c for MS-DOS. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.20c 3.00 3.50 prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2c,3.0,3.5
	
	=============================================================================
	

{% endraw %}
