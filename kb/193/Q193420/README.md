---
layout: page
title: "Q193420: XFOR: Exchange Notes Connector Hangs If Trace Message Enabled"
permalink: /kb/193/Q193420/
---

## Q193420: XFOR: Exchange Notes Connector Hangs If Trace Message Enabled

	Article: Q193420
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is sent from Lotus Notes with trace setting on, the message
	causes the Notes conversion process on the Exchange Notes Connector to stop with
	errors. This impedes all further messages from moving to Exchange Server.
	
	CAUSE
	=====
	
	The Notes Router generates trace reports back to the Notes Sender. Because the
	Name and Address Book indicates that the user is no longer on Notes, the Trace
	Report gets forwarded to Exchange Server, regardless of the fact that it was
	sent from Lotus Notes in the first place. The Exchange Notes Connector then
	stops responding (hangs) on the actual trace report.
	
	WORKAROUND
	==========
	
	To work around this problem, do not enable the Trace Entire Path feature from
	the Notes client.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
