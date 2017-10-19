---
layout: page
title: "Q154862: Web Browsers May Fail When Accessing SSL Secure Pages"
permalink: /kb/154/Q154862/
---

## Q154862: Web Browsers May Fail When Accessing SSL Secure Pages

	Article: Q154862
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Web Browsers that support Secure Sockets Layer (SSL) may fail when accessing
	secure pages on an Internet Information Server (IIS) version 1.0 through a
	firewall.
	
	CAUSE
	=====
	
	Some firewalls packetize SSL differently for connections that occur through a
	router. The firewalls' different behavior for remote connections results in
	problems for SSL browser clients that are directly connected, but SSL browser
	clients connected through a router fail.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in IIS version 1.0. This problem
	was corrected in the latest Windows NT 3.51 U.S. Service Pack. For information
	on obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis ie internet netscape 351SP5REL
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
