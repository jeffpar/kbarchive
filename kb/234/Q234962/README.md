---
layout: page
title: "Q234962: XCON: Certain Builds of the MTA Do Not Generate 9301 Event ID"
permalink: /kb/234/Q234962/
---

## Q234962: XCON: Certain Builds of the MTA Do Not Generate 9301 Event ID

	Article: Q234962
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Event ID 9301 can be a useful indicator of certain problems with X.400
	Connectors. It is normally logged in the application event log by the Microsoft
	Exchange Server Message Transfer Agent (MTA), and can be especially useful for
	diagnosing bad Stack entries or problems with name lookups. However, this event
	ID is not be logged by certain builds of the MTA.
	
	MORE INFORMATION
	================
	
	Some MTA builds between 2354-2620 do not log Event ID 9301. Build 2621 and later
	do log this event ID.
	
	  Description:
	  "The message transfer gateway that uses the network address xxxxxxxx and the
	  transport stack
	  /o=EXORG/ou=EXSITE/cn=Configuration/cn=Servers/cn=EXSERVER/cn=TCP (EXSERVER)
	  could not be found. Check the configuration of the mail gateway. [BASE IL
	  TCP/IP DRVR 8 218] (10)"
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q189345 XCON: MTA Logs Event 9301 Though X.400 Connector Is Identified
	
	  Q197378 XCON: MTA Generates 9301 Events on Incoming Connections
	
	  Q193380 XCON: Mail Does Not Flow over X.400 Connector; Event 9301
	
	  Q169113 XCON: Using X.400 Connector with TCP/IP in Cluster Environment
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
