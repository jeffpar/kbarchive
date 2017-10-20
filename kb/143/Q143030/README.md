---
layout: page
title: "Q143030: RAS Clients Not Able to Connect to RAS Server's Network"
permalink: /kb/143/Q143030/
---

## Q143030: RAS Clients Not Able to Connect to RAS Server's Network

{% raw %}

	Article: Q143030
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you connect to a Windows NT Remote Access Service (RAS) server and your
	RAS client computer is assigned an IP address from the RAS server, the RAS
	client computer is not able to connect to any computer on the RAS server's
	network.
	
	CAUSE
	=====
	
	This problem occurs when more than 12 IP addresses are configured for the Remote
	Access server's Network Card. An internal buffer overflow occurs and the RAS
	server does not properly respond to ARP requests for the RAS client. The RAS
	client computer can use PING and connect to shares on the RAS server only.
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt internet ISP multiple registry cannot
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
