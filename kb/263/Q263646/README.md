---
layout: page
title: "Q263646: XCON: Mail for Local Mailbox Remains in Queue Folder"
permalink: kb/263/Q263646/
---

## Q263646: XCON: Mail for Local Mailbox Remains in Queue Folder

	Article: Q263646
	Product(s): Microsoft Exchange
	Version(s): winnt:2.0,5.5
	Operating System(s): 
	Keyword(s): MCIS_MSG exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Commercial Internet System version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users in local domains may be unable to receive mail. Inbound mail that is
	destined for the users may remain in the Queue folder of the Simple Mail
	Transfer Protocol (SMTP) service.
	
	The local retry (.ltr) file for the associated message may contain the following
	information:
	
	  <user>@<domain>.com
	  The system cannot find the path specified.
	
	CAUSE
	=====
	
	This issue can occur if the users' mailbox location is incorrectly specified.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the mailbox location is specified by using
	the / switch (for example, /<mailbox>):
	
	1. Use Management Console to open the Membership Directory Manager.
	
	2. Click the ou=Members container.
	
	3. Double-click a user.
	
	4. Click mailbox-location.
	
	5. If the mailbox is listed with a backslash (\), change the backslash to a
	  slash mark (/).
	
	
	Additional query words: mcis
	
	======================================================================
	Keywords          : MCIS_MSG exc55 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMCISSearch kbMCIS200
	Version           : winnt:2.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
