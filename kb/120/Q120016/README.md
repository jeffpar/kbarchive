---
layout: page
title: "Q120016: TCP/IP-32: ARP -S Switch Fails on First Entry Added to ARP Cache"
permalink: /kb/120/Q120016/
---

## Q120016: TCP/IP-32: ARP -S Switch Fails on First Entry Added to ARP Cache

{% raw %}

	Article: Q120016
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With Microsoft TCP/IP-32, when you attempt to add the first Address Resolution
	Protocol (arp) entry into an empty arp cache using the arp -s switch, it will
	appear to function correctly, but the entry will fail to load if you provide
	only the first two parameters. For example, when you execute the command:
	
	  arp -s 22.101.33.237 08-00-2b-2e-98-b3
	
	it will appear to have been added, but when you interogate the protocol data by
	executing the command:
	
	  ARP -a
	
	you will receive no results, indicating the arp cache is still empty.
	
	WORKAROUND
	==========
	
	You can work around this problem by providing all three of the arp -s parameters
	when adding an initial entry into an empty arp cache.
	
	After the following complete arp -s initial arp cache entry:
	
	  arp -s 22.101.33.236 08-00-2b-30-d1-e0 22.101.33.237
	
	the following results would be reported from the arp cache using arp -a:
	
	Interface: 22.101.33.237
	
	 Internet Address       Physical Address          Type
	 22.101.33.236          08-00-2b-30-d1-e0         Static
	
	NOTE: To get a complete description of arp switches and parameters, at the
	command prompt type "arp" (without the quotation marks) and press ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS TCP/IP-32. We are researching
	this problem and will post new information in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: wfw wfwg prodtcp32 1.0
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11
	
	=============================================================================
	

{% endraw %}
