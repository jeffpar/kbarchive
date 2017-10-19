---
layout: page
title: "Q245545: XFOR: Notes Connector Error 41220: No Notes Session Open"
permalink: /kb/245/Q245545/
---

## Q245545: XFOR: Notes Connector Error 41220: No Notes Session Open

	Article: Q245545
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 01-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Notes Connector, two processes
	in the Exchange Connectivity Administrator do not start, and the browse logs
	have an entry that shows the following:
	
	  LME-NOTES-NTSMEX(0130) 1 41220:Error: no Notes Session Open
	
	CAUSE
	=====
	
	The connector account is not connected to the Lotus Notes server, for either of
	the following reasons:
	
	- Cause 1. The Notes.ini file that the connector is configured to use does not
	  point to the Connector.id file.
	
	- Cause 2. Connectivity cannot be established to the Notes server.
	
	RESOLUTION
	==========
	
	To resolve Cause 1, ensure that the Notes.ini file is referring to the
	Connector.id file:
	
	1. Open the properties for the Exchange Notes Connector and click the Advanced
	  tab.
	
	2. Open the Notes.ini file indicated in the "Notes INI file location" field, and
	  check for a line of text containing "keyfilename=". Make sure that this line
	  refers to the correct .id file for the connector.
	
	To resolve Cause 2, verify that a regular Notes client can connect to the
	server.
	
	In both cases, you can use the "show users" command from the Notes server console
	window to return a listing of users currently connected to the Notes server. For
	proper connectivity, the connector.id must be connected.
	
	If the Connector.id file is connected and the 41220 message is still written to
	the log, make sure that the Connector.id file has proper access rights.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
