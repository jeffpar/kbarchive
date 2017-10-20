---
layout: page
title: "Q221778: XADM: Explanation of Various Types Used in Exchange PF Replicati"
permalink: /kb/221/Q221778/
---

## Q221778: XADM: Explanation of Various Types Used in Exchange PF Replicati

{% raw %}

	Article: Q221778
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When diagnostics logging is enabled for the Replication Categories on the
	Microsoft Exchange Server Information Store Public Object, the Windows NT
	Application Event log will log various events for tracking the public folder
	replication process. Specifically, incoming replication events are logged as the
	following:
	
	  Event ID: 3028
	  Src: MSExchangeIS Public
	  Type: Information
	  Category: Replication Incoming
	  Description:
	  An incoming replication message was processed.
	
	  Type: 0x2
	  Message ID: 1-14CE
	  CN min: 5-38A4
	  CN max: 5-38B6
	  RFIs: 0
	  IDCN deleted: 5-2B19,5-38B6
	
	  Server:
	  /O=ORGANIZATION/OU=SITE/CN=CONFIGURATION/CN=SERVERS/CN=EXCHSRVR/CN =MICROSOFT
	  PUBLIC MDB
	
	MORE INFORMATION
	================
	
	The following is a list of the different types of possible messages and the
	corresponding action:
	
	- Type 2 - folder tree data (hierarchy)
	  Folder Tree changes
	
	- Type 4 - folder messages data
	  Message changes
	
	- Type 8 - backfill request
	  Request for a specific CN range
	
	- Type 10 - type status
	  Folder status only (1 or more folders)
	
	- Type 20 - status request
	  Used to locate missing data
	  I?m Alive message to other servers
	
	Additional query words: 3028 pf replication incoming type:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
