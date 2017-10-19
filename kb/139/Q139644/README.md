---
layout: page
title: "Q139644: XCLN: Err Msg: Items cannot be transferred or deleted..."
permalink: /kb/139/Q139644/
---

## Q139644: XCLN: Err Msg: Items cannot be transferred or deleted...

	Article: Q139644
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Mail from a Microsoft Exchange, version 4.0, Windows 95
	client the following error message appears:
	
	  The marked items cannot be transferred or deleted because your mailbox has
	  been modified. Click OK to update mail headers to reflect changes to your
	  mailbox.
	
	CAUSE
	=====
	
	This error indicates that the messages in your mailbox on your Internet server
	(the POP3 host) have changed in status since the last time you updated mail
	headers.
	
	RESOLUTION
	==========
	
	Click OK to update the mail headers seen in Internet Mail to reflect changes
	seen in your mailbox on your Internet server.
	
	MORE INFORMATION
	================
	
	Each time you update the mail headers, Internet Mail saves that information.
	
	The status of your mail can change on your Internet server after the update if
	you have logged onto your Internet mailbox from another computer and transferred
	or deleted messages. Thus, the next time you try to delete or transfer in the
	first session, the header information stored on your Windows 95 PC does not
	match the information on your Internet server.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
