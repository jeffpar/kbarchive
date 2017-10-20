---
layout: page
title: "Q241939: XADM: Routing Calculation Stops with Administrator ID c1031651"
permalink: /kb/241/Q241939/
---

## Q241939: XADM: Routing Calculation Stops with Administrator ID c1031651

{% raw %}

	Article: Q241939
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the routing on a server is being recalculated, the following error message
	is displayed:
	
	  The system attendant on server 'SERVER NAME' could not recalculate the
	  routing table.
	
	  The routing table cannot be recalculated because the remote directory is
	  unavailable. Try again later.
	
	  Microsoft exchange Administrator ID no: c1031651
	
	The following event is logged in the application event log:
	
	  Event ID: 5000
	  Source: MsexchangeSA
	  Type: Error
	  Category: General
	  Description: Recalculation of the routing table is complete, Result: The
	  routing table cannot be recalculated because the remote directory is
	  unavailable. Try again later.
	
	CAUSE
	=====
	
	The Exchange Server System Attendant service is set to log on using the system
	account, rather than using the Exchange Server service account.
	
	RESOLUTION
	==========
	
	In Control Panel, double-click Services, and click to select Microsoft Exchange
	System Attendant Service. Click Startup, and under Log On As, select This
	Account. Type the domain and account name (<domain>\<account name>)
	for the Exchange Server service account, and then type the password for the
	service account.
	
	Ensure that the Startup settings for all other Exchange Server services also use
	the correct Exchange Server service account, and not the system account.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
