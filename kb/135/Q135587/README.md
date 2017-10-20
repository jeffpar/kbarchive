---
layout: page
title: "Q135587: TCP/IP-32 3.11a May Produce IP Broadcast Storm"
permalink: /kb/135/Q135587/
---

## Q135587: TCP/IP-32 3.11a May Produce IP Broadcast Storm

{% raw %}

	Article: Q135587
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :3.11,3.11a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your HOSTS file contains incorrect IP address syntax and you PING the host
	computer by name, a broadcast storm can occur. You may receive several ICMP echo
	replies. An example of an incorrect IP address syntax is as follows:
	
	  157.54..65.212 myhosts
	
	CAUSE
	=====
	
	Given the above example, when you PING myhosts, TCP/IP-32 3.11a sends ICMP echo
	requests to the address of 255.255.255.255 (broadcast).
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups version 3.11a. This problem was corrected in TCP/IP-32 for Windows
	for Workgroups version 3.11b.
	
	
	Additional query words: prodtcp32 3.11 3.11a wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a
	Version           : WINDOWS:3.11; :3.11,3.11a
	
	=============================================================================
	

{% endraw %}
