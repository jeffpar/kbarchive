---
layout: page
title: "Q306958: XCON: MTA Stops with Large IMCData Archive Folders"
permalink: /kb/306/Q306958/
---

## Q306958: XCON: MTA Stops with Large IMCData Archive Folders

	Article: Q306958
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbenv kbExchange550
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are large Archive folders in the IMCData\In and IMCData\Out folders,
	the Exchange Server Message Transfer Agent (MTA) service may shut down.
	
	CAUSE
	=====
	
	This behavior can occur when disk space is depleted. The MTA service needs disk
	space to run.
	
	The Archive folders in IMCData\In and IMCData\Out rapidly consume disk space when
	diagnostics logging is set to archive messages. Additionally, if the Internet
	Mail Service (IMS) does not successfully convert messages, IMS places the
	unconverted messages in one of the appropriate Archive folders.
	
	RESOLUTION
	==========
	
	To resolve this behavior, start Windows Explorer, and then delete the archived
	messages.
	
	To prevent recurrence of this behavior, turn off message archiving:
	
	1. In Exchange Administrator, open the Internet Mail Service Properties dialog
	  box.
	
	2. Click the Diagnostics Logging tab.
	
	3. Click Message Archival, click None, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
