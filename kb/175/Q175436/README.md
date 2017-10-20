---
layout: page
title: "Q175436: DNS Stops Forwarding Queries After PPP Link Goes Down"
permalink: /kb/175/Q175436/
---

## Q175436: DNS Stops Forwarding Queries After PPP Link Goes Down

{% raw %}

	Article: Q175436
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Microsoft Windows NT Domain Name Service (DNS) server is configured to
	forward requests to a DNS server across a Point-to-Point Protocol (PPP) link and
	that link goes down, your DNS clients on your local area network (LAN) may
	receive an error message similar to the following when they attempt to resolve
	host names:
	
	  Bad IP address
	
	NOTE: Your clients will still receive this error even after the PPP link is
	re-established.
	
	CAUSE
	=====
	
	When the PPP link goes down, your Microsoft DNS server cannot automatically
	rebind to the Remote Access Service (RAS) IP address.
	
	RESOLUTION
	==========
	
	To work around this issue, any time your PPP link goes down you will need to
	stop and restart the Microsoft DNS server service to rebind the service to its
	RAS IP address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
