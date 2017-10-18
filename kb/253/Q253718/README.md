---
layout: page
title: "Q253718: XCON: Message Transfer Agent Event IDs 2110, 2171"
permalink: kb/253/Q253718/
---

## Q253718: XCON: Message Transfer Agent Event IDs 2110, 2171

	Article: Q253718
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the application event log, the following event IDs may be logged by the
	Exchange Server message transfer agent (MTA):
	
	  2110
	  A fatal MTA database server error was encountered. A bad list member length is
	  on object 06000035. File offset: 2004. Attribute ID: 79. Referenced object
	  00000000 (0 => N/A). Referenced object error: 0. [DB Server DISP:ROUTER 13
	  42] (16)
	
	  2171
	  An MTA database server error was encountered while reading an attribute.
	  Called from MTA. Procedure: 138. Database error code: 2111. Object at fault:
	  06000035. Attribute identifier: 79. Value number: 1. Referenced object:
	  00000000 (00000000 => N/A). Referenced object error 0. [DB Server
	  DISP:ROUTER 13 26] (14)
	
	The Db000035.dat file also grows continuously in size.
	
	CAUSE
	=====
	
	This issue can occur if the MTA loops on handling attribute 79 of object
	DB000035.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: fat dat
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
