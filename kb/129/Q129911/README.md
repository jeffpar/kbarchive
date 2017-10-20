---
layout: page
title: "Q129911: Querying Macintosh Clients in Systems Management Server"
permalink: /kb/129/Q129911/
---

## Q129911: Querying Macintosh Clients in Systems Management Server

{% raw %}

	Article: Q129911
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Macintosh client computer is not registered in the Macintosh Sharing Setup
	application, the Macintosh computer's name is not displayed in the Systems
	Management Server Administrator utility. This article describes a method of
	querying for all client computers detected by the Systems Management Server.
	
	MORE INFORMATION
	================
	
	In order to query all client computers without computer names in Systems
	Management Server:
	
	1. From the Systems Management Server Administrator Utility File menu, choose
	  Query.
	
	2. Select the <Ad Hoc Query> option from the Query field, then choose OK.
	
	3. Select Add OR.
	
	4. Select the SMSLocation attribute from the Identification group.
	
	5. Change the Operator to "is".
	
	6. Enter the following information in the Value field for a Systems Management
	  Server domain in which you want to query:
	
	  " <Sitecode>|<Domain>| " (without the quotation marks)
	
	7. Choose OK.
	
	8. Repeat steps 3 to 7 for each Systems Management Server domain to be queried.
	
	9. Choose OK.
	
	The query method above displays all Macintosh clients within the specified
	Systems Management Server domains that have blank name attributes. In Systems
	Management Server, the inventory agents for all clients (except Macintosh
	clients) require that all clients have an entry for their name attributes.
	
	The SMSLocation is defined as a concatenation of the client's site code, domain,
	and name delimited by the pipe (|) symbol. Therefore, only Macintosh clients
	will be returned using the above query.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
