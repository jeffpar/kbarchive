---
layout: page
title: "Q262433: XADM: Error Message: Event ID 1043 Source MSExchangeDS"
permalink: /kb/262/Q262433/
---

## Q262433: XADM: Error Message: Event ID 1043 Source MSExchangeDS

{% raw %}

	Article: Q262433
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Knowledge Consistency Checker runs by default on a directory replication
	server or if you start the Knowledge Consistency Checker (in the server
	Directory Service properties, click Check Now on the General tab) on a server
	that has directory replication connectors to other sites, the following error
	message is logged in the Microsoft Windows NT Event Viewer application event
	log:
	
	  Event ID: 1043
	  Source: MSExchangeDS
	
	  Type: Error
	  Category: Knowledge Consistency Description:
	  The knowledge consistency checker has detected that site
	  /O=Organization/OU=Site can be replicated to this directory service from more
	  than one source. Remove one source and run the knowledge consistency checker
	  again. c1030b0f
	
	CAUSE
	=====
	
	This issue can occur if the directory replication connectors are set up in a
	configuration that creates a message loop between the directory replication
	servers within the Exchange Server organization. The Knowledge Consistency
	Checker detects duplicated knowledge of Exchange Servers through the duplicate
	directory replication connectors.
	
	For example, if you have Site A, Site B, and Site C set up with directory
	replication connectors as follows
	
	- Site A <==> Site B
	
	- Site B <==> Site C
	
	- Site C <==> Site A
	
	this setup creates a logical loop for the directory replication messages and
	generates the Knowledge Consistency Checker error message.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove one of the directory replication connectors that
	creates the loop between the sites.
	
	MORE INFORMATION
	================
	
	Each Exchange Server computer in a site runs a Knowledge Consistency Checker
	check every three hours to verify the Exchange Server computer's knowledge of
	other Exchange Server computers in the site. To verify this knowledge, the
	Exchange Server computer contacts another Exchange Server computer in the site
	to compare information. Which Exchange Server computer is contacted depends on
	the server's alphanumeric name. The Knowledge Consistency Checker is remote
	procedure call (RPC) based and operates only within the site.
	
	Additional query words: kcc
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
