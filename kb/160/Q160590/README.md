---
layout: page
title: "Q160590: XFOR: PCMTA: The Status Could Not Be Logged"
permalink: /kb/160/Q160590/
---

## Q160590: XFOR: PCMTA: The Status Could Not Be Logged

	Article: Q160590
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MSMail Connector message transfer agent (PCMTA) tries to log its
	current status to the Event Viewer, it might report the following stop error
	message:
	
	  STOP The status could not be logged. Use the Services icon in Control Panel
	  to ensure the service is running.
	
	Checking the Services shows the PCMTA services are running, mail is being
	transferred, and the expected Microsoft Exchange services are working properly.
	
	RESOLUTION
	==========
	
	Add the Microsoft Exchange Service Account to the local computer's
	Administrators group or the Domain Administrators group as follows:
	
	1. Add the Microsoft Exchange Service Account to the Administrators group using
	  the Windows NT User Manager program.
	
	2. In Control Panel Services, stop and restart the PCMTA service(s) that logging
	  is being attempted on.
	
	NOTE: This may also require a synchronization of the servers in the domain if
	this is a member server and a reboot of the computer running Microsoft Exchange
	Server to activate the new access controls for this user account.
	
	MORE INFORMATION
	================
	
	The Log Status button is located within the Configuration/Connections/MS Mail
	Connector Properties under the Connector MTAs tab in the Microsoft Exchange
	Server Administrator program.
	
	Additional query words: MSMI logging
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
