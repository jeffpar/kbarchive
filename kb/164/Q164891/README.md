---
layout: page
title: "Q164891: SMS: Invwin32.exe Does Not Respond to Resync Requests"
permalink: /kb/164/Q164891/
---

## Q164891: SMS: Invwin32.exe Does Not Respond to Resync Requests

	Article: Q164891
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an inventory resynchronization (resync) is requested by the Systems
	Management Server site server to a computer running Windows NT Server that only
	runs the SMS_INVENTORY_AGENT_NT service (Invwin32.exe), the resync never
	occurs.
	
	
	Systems with this problem are typically missing some inventory groups that are
	normally displayed in the client's Personal Computer Properties window. A common
	scenario is to see only the Identification and Network Monitor groups, and no
	others.
	
	WORKAROUND
	----------
	
	To work around this problem, delete the history file that corresponds to the
	computer's Systems Management Server Unique ID. This file is located in the
	following directory on the Systems Management Server site server:
	
	  SMS\Site.srv\Inventry.box\History
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	1.2. This problem was corrected in the latest Microsoft Systems Management
	Server version 1.2 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms inv32cli.exe
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
