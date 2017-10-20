---
layout: page
title: "Q275931: XCON: DNS Errors When Installing IMS on Top of Cluster Server"
permalink: /kb/275/Q275931/
---

## Q275931: XCON: DNS Errors When Installing IMS on Top of Cluster Server

{% raw %}

	Article: Q275931
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Exchange Internet Mail Service on an Exchange 5.5 server on
	top of a Windows 2000 cluster node, you receive the following error message:
	
	  The Internet Mail Service requires DNS domain name to be configured on
	  [SERVERNAME]. To configure domain name use network control panel on
	  [SERVERNAME] or select another server.
	
	CAUSE
	=====
	
	In a normal installation, this error is sufficient for most users to correct the
	problem. In a cluster environment, the [SERVERNAME] actually refers to the
	Virtual Server name of the cluster.
	
	RESOLUTION
	==========
	
	To correct this behavior in a cluster environment, you need to configure the DNS
	host name on all cluster nodes before you can install IMS. The DNS name on each
	cluster needs to be unique. Entering the cluster virtual server name on each
	machine does not work.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
