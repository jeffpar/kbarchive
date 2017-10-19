---
layout: page
title: "Q260839: XADM: Installing DMS ADC Prevents Site Replication"
permalink: /kb/260/Q260839/
---

## Q260839: XADM: Installing DMS ADC Prevents Site Replication

	Article: Q260839
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Directory replication may not finish if the Defense Message System (DMS) Active
	Directory Connector (ADC) is installed. Any computer that is running Exchange
	Server 5.5 Service Pack 2 or Service Pack 3 that has the DMS ADC (version
	6.0.4116.0) does not replicate the Configuration container-naming context. Other
	containers are replicated (for example, any changes to mailboxes replicate).
	
	If you change the directory service logging for replication events to maximum and
	you change the internal processing to minimum, the directory service logs the
	following events 1171 and 1082 in the application event log:
	
	  Event Type: Error
	  Event Source: MSExchangeDS
	  Event Category: Internal Processing
	  Event ID: 1171
	  Description:
	  Exception e0010002 has occurred with parameters 9 and 6 (internal ID 3190022).
	  Contact Microsoft Technical Support for assistance.
	
	  Event Type: Information
	  Event Source: MSExchangeDS
	  Event Category: Replication
	  Event ID: 1082
	  Description:
	  Replication warning: The directory replication agent (DRA) couldn't update
	  object /o=ORGANIZATION/ou=SiteName/cn=Configuration/cn=Servers/cn=ServerA
	  /cn=Synchronization Service (ServerA) with changes made by directory
	  EX:/o=ORGANIZATION/ou=SiteName/cn=Configuration/cn=Servers/cn=ServerA
	  /cn=Microsoft DSA because of error 9. The directory will try to update the
	  object later. If this condition persists, try to free more disk space or stop
	  and restart this Microsoft Exchange Server computer.
	
	Note that these events occur on the server that is receiving updates from the
	server on which the DMS ADC is installed. No error message events occur on the
	server on which the DMS ADC is actually installed.
	
	CAUSE
	=====
	
	This issue can occur because when the DMS ADC is installed, it adds several
	classes to the schema. Some of these additions are erroneously marked for
	replication.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
