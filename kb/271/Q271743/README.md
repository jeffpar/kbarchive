---
layout: page
title: "Q271743: XFOR: Exchange Server Users Not Receiving Free and Busy Results"
permalink: /kb/271/Q271743/
---

## Q271743: XFOR: Exchange Server Users Not Receiving Free and Busy Results

{% raw %}

	Article: Q271743
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users perform free and busy queries from Exchange Server 5.5 Service Pack 3
	to Novell GroupWise 5.x across the Calendar Connector, the queries may not
	return the free and busy results for the GroupWise user. If you set diagnostic
	logging to maximum, Windows NT Event Viewer displays several 6001 event
	messages. Some of the event messages contain the following descriptions:
	
	  Event ID: 6001
	  Source: MSExchangeCalCon
	  Type: Informational
	  Description: Unable to find Requestor in Directory.
	
	  Event ID: 6001
	  Source: MSExchangeCalCon
	  Type: Informational
	  Description: HrProcessNext Transaction Failed.
	
	CAUSE
	=====
	
	This issue can occur if the system attendant does not have a GroupWise address.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. In the Exchange Server Administrator program, open the system attendant
	  properties, click Server, and then click Server Name.
	
	2. Click Private Information Store, click Mailbox Resources, and then add a
	  GroupWise address. To use the proper GroupWise address format, use an
	  Exchange Server user to obtain the correct GroupWise domain and post office,
	  and then use the name of the Exchange Server system attendant for the name,
	  for example:
	
	  gwise:{<domain>.<postoffice>.<exchange_server_name>-<system_attendant>....<usdomain>.<uspostoffice>.exchange-<system_attendant>
	
	
	Additional query words: calcon
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
