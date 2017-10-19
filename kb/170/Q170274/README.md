---
layout: page
title: "Q170274: XCON: How to Configure DRAS Between Different Organizations"
permalink: /kb/170/Q170274/
---

## Q170274: XCON: How to Configure DRAS Between Different Organizations

	Article: Q170274
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Dynamic RAS Connector can be configured to connect two
	different Microsoft Exchange Organizations. This article describles some details
	that must be configured correctly to get mail flowing in both directions.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Administrator's guide, on page 190, refers to Connected
	Sites. To connect two different Organizations, the Connected Sites Property page
	of the Dynamic RAS connector must be configured properly. To do this, follow
	these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Click the New button to add a new Site.
	
	3. In the dialog that appears, enter in the information about the Site. It is
	  important to note that the Organization defaults to your Organization name.
	  This entry must be changed to reflect the Organization that you will be
	  connecting to.
	
	4. Click the Routing tab and verify that the X.400 routing information matches
	  the X.400 Site Addressing of the other Site.
	
	5. Click the OK button to add the Connected Site.
	
	After this is complete, recalculate the routing for the changes to be updated.
	Repeat this process on the other Microsoft Exchange Server. Once this is
	complete, it will be possible to send mail in both directions. To update the
	Global Address List, X.400 custom recipients can be used. This can be obtained
	by exporting both Directories and importing them into the other Site. For
	information on how to use import, refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q152659 XADM: Importing Exchange Accounts from Another Organization
	
	NOTE: Connected Sites should list only those Sites that are directly adjacent to
	the connector. Knowledge of all other Sites can only be inherited through
	directory replication and directory replication will not occurr between two
	different Microsoft Exchange Organizations.
	
	Additional query words: synchronization DRAS separate org orgs
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
