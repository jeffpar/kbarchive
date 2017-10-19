---
layout: page
title: "Q151387: WFWG 3.11 DHCP Client Does Not Release IP Address"
permalink: /kb/151/Q151387/
---

## Q151387: WFWG 3.11 DHCP Client Does Not Release IP Address

	Article: Q151387
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows for Workgroups 3.11 DHCP client running TCP/IP-32 does not release and
	unbind its IP address from the Network Interface Card (NIC) even after the lease
	has expired until the user acknowledges the pop-up message that is displayed on
	the screen indicating that the lease has expired.
	
	CAUSE
	=====
	
	This particular situation can arise when a Dynamic Host Configuration Protocol
	(DHCP) server is not available on the network to renew the client lease at the
	time of expiration. The client, after repeated attempts to renew the current
	lease, will try to obtain a new lease thereafter. If it fails to get a new lease
	as well, it should relinquish the current lease and release the IP address it is
	currently using.
	
	This can also create duplicate addresses on the network, when the DHCP server
	reuses the address and leases it to another client because the earlier lease had
	expired.
	
	RESOLUTION
	==========
	
	The module Vdhcp.386 was changed to release the IP address before displaying the
	dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP32. A fix to this problem
	is in development, but has not been regression tested and may be destabilizing
	in production environments. Microsoft does not recommend implementing this fix
	at this time. Contact Microsoft Product Support Services for more information on
	the availability of this fix.
	
	
	Additional query words: WFW 3.11 TCP32 DHCP lease expired
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
