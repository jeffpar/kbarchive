---
layout: page
title: "Q253307: XCON: Dynamic RAS Connector Stops Delivering Messages"
permalink: /kb/253/Q253307/
---

## Q253307: XCON: Dynamic RAS Connector Stops Delivering Messages

{% raw %}

	Article: Q253307
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Dynamic Remote Access Service on Microsoft Exchange Server, the
	Dynamic RAS Connector may not deliver messages. When you set the message
	transfer agent (MTA) diagnostics logging to maximum for Field Engineering and
	X.400, Event Viewer displays the following events in the application log
	(numbers in the descriptions may vary):
	
	  Event ID: 9322
	  Source: MSExchangeMTA
	  Description: An interface error has occurred. An MtaBindBack over RPC has
	  failed. Locality Table (LTAB) index: %1, NT/MTA error code:5. Comms error %3,
	  Bind error %4,Remote Server Name %5, Protocol String %6 [%7 %8 %9 %10]
	
	  Event ID: 289
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: A connection to
	  /O=OrganizationName/OU=SiteName/CN=Configuration/CN=Connections/CN=ConnectorName
	  could not be opened. [MTA XFER-IN 17 26] (12)
	
	  Event ID: 1294
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: An association with entity
	  /O=OrganizationName/OU=SiteName/CN=Configuration
	  /CN=Connections/CN=ConnectorName ended abnormally. [198 1 0 1 PLATFORM KERNEL
	  20 130] (10)
	
	  Event ID: 9316
	  Source: MSExchangeMTA
	  Type: Warning
	  Description: An RPC communications error occurred. No data was sent over the
	  RPC connection. Locality table (LTAB) index: <x>. Windows NT error:
	  9301.The MTA will attempt to recover the RPC connection. [BASE IL PIPE RAS
	  xxxxx] (12)
	
	  Event ID 9311
	  Source: MSExchangeMTA
	  Type: Warning
	  Description: A RAS communications error has occurred for gateway
	  /o=MS/ou=PSS/cn=Configuration/cn=Connections/cn=DR. RAS error code returned:
	  718, RAS Table index: 0. The MTA will attempt to recover the RAS connection.
	  [BASE IL PIPE RAS 35 230] (12)
	
	CAUSE
	=====
	
	This behavior can occur when the data in the Remote Server Name box in the
	Dynamic RAS Connector dialog box differs from the data in the Local MTA Name box
	in the Message Transfer Agent property page. Note that data is case sensitive,
	and in this instance, the remote server name in the Dynamic RAS Connector dialog
	box was typed using a different case than in the Message Transfer Agent
	Properties dialog box.
	
	RESOLUTION
	==========
	
	To resolve this issue, confirm that the name of the server in the Remote Server
	Name box in the Dynamic RAS Connector Properties dialog box is identical to the
	name found in the Local MTA Name box in the remote Message Transfer Agent
	Properties dialog box.
	
	If you find a discrepancy, type the name in the Remote Server Name box exactly as
	it appears in the Local MTA Name box, and then stop and restart the MTA.
	
	MORE INFORMATION
	================
	
	To decipher Dynamic RAS Connector error codes found in the Description field of
	Event Viewer, consult the Rasphone.hlp file located on your Exchange Server
	computer. In addition, many MTA-related events can indicate multiple problems.
	
	For additional information about the Dynamic RAS Connector and the Message
	Transfer Agent, please see the following white papers in the Microsoft Knowledge
	Base:
	
	  LOCATION: http://support.microsoft.com/download/support/mslfiles/dras.doc
	  TITLE: Dynamic RAS Connector
	
	  LOCATION: http://support.microsoft.com/download/support/mslfiles/MTAshoot.doc
	  TITLE: MTA Troubleshooting Guide
	
	Additional query words: dynamic modem
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
