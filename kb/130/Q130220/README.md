---
layout: page
title: "Q130220: DHCP Client Renew Fails after Deleting Active Lease"
permalink: /kb/130/Q130220/
---

## Q130220: DHCP Client Renew Fails after Deleting Active Lease

{% raw %}

	Article: Q130220
	Product(s): Microsoft Windows NT
	Version(s): 3.11a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows for Workgroups dynamic host configuration protocol (DHCP) client
	has an active lease that is manually deleted on the DHCP server, and the client
	attempts to renew its lease using IPCONFIG /RENEW or the standard renewal
	process based on lease expiration, the following error message appears:
	
	  DHCP.386: This DHCP client was unable to obtain an IP network address from a
	  DHCP server.
	
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	If you encounter this problem when you run IPCONFIG /RENEW on the client machine,
	you can work around this problem by running IPCONFIG /RELEASE before running
	IPCONFIG /RENEW.
	
	If this problem occurs during the normal lease renewal process, you must stop and
	restart the Microsoft DHCP Server service on the DHCP server to allow the client
	to receive a new IP address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	Additional query words: 3.11 prodnt prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311a
	Version           : :3.11a,3.5
	
	=============================================================================
	

{% endraw %}
