---
layout: page
title: "Q196690: XADM: Failed to Traverse Mailboxes Using MBCLEAN on Exchange"
permalink: kb/196/Q196690/
---

## Q196690: XADM: Failed to Traverse Mailboxes Using MBCLEAN on Exchange

	Article: Q196690
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run the Mailbox Cleanup Agent on an Exchange 5.5 Server
	computer the user may receive the following message in the Windows NT
	Application log:
	
	  Event ID 722
	  MSExchangeMCA
	  Description:
	  Failed to traverse mailbox's in container ORG~Site~Recipients - Mailbox:
	  Mailboxname.
	
	CAUSE
	=====
	
	This problem can occur when the cleanup agent finds a mailbox that is no longer
	accessible. For example, the mailbox was deleted but still exists in the
	directory.
	
	This has been shown to occur most of the time when a user runs Loadsim on the
	Exchange Server computer and the Mailbox Cleanup Agent is run against one of the
	containers it creates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Mailbox Cleanup Agent of the
	Microsoft Exchange Resource Kit. This has been addressed in version 5.0.1.91.0
	of the Mailbox Cleanup Agent.
	
	Additional query words: mbclean BORKIII BORK MCA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	
	=============================================================================
	
