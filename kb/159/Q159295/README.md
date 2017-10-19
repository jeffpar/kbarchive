---
layout: page
title: "Q159295: XFOR: Exchange Dir-Sync Failing with Event ID 134"
permalink: /kb/159/Q159295/
---

## Q159295: XFOR: Exchange Dir-Sync Failing with Event ID 134

	Article: Q159295
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Microsoft Exchange Server Service Pack 3, directory
	synchronization (dir-sync) between Microsoft Exchange Server and Microsoft Mail
	fails. After you turn up diagnostic logging on the Microsoft Exchange directory
	synchronization agent (DXA), the following event ID appears in the application
	event log:
	
	  Event ID: 134
	  Type: Error
	  Source: MSExchangeDX
	  Category: Event Handler
	  Description:
	  Error MH_RC_SESSION_BUSY returned by the MTA. (Thread 812).
	
	CAUSE
	=====
	
	Copying the Microsoft Mail Administrator mailbox on outgoing (from Microsoft
	Exchange Server) dir-sync messages (whether the computer running Microsoft
	Exchange Server is a dir-sync server or requestor) and then deleting these
	messages from both the Inbox and Deleted Items folder without reading them
	causes a non-read notification (NRN) to be returned to the Message Transfer
	Agent (MTA). The MTA fails during message conversion (MDBEF -> P2) and the
	message is incorrectly handled.
	
	
	WORKAROUND
	==========
	
	To prevent this problem, do the following:
	
	- Don't copy the dir-sync administrator on dir-sync messages.
	
	- Don't delete the dir-sync messages.
	
	- Open the messages before deleting them.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. The MTA code was fixed to properly handle the
	message conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: hang loop looping
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
