---
layout: page
title: "Q193346: XFOR: Message Delivery Is Slowed or Stopped to SNADS"
permalink: /kb/193/Q193346/
---

## Q193346: XFOR: Message Delivery Is Slowed or Stopped to SNADS

	Article: Q193346
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The LSDIAMEX process of the Exchange SNADs Connector may shut down and stop
	delivering messages to Exchange. You may see an error message similar to the
	following in the Exchange Connectivity Manager's log browser:
	
	  Queue threshold exceeded. Suspending SNA Link. Please Reduce Disk
	  Usage.
	
	CAUSE
	=====
	
	When a message with an embedded mail object is sent from the host to Exchange
	using inbody addressing, the message arrives in the SNADS connector's Gateway
	Mail List input queue as two separate mail objects. The SNADS connector
	processes the message body (the first mail object in the queue) correctly but
	shuts down when processing the embedded attachment. The code tries to close the
	file handle of the embedded mail object, which had been previously closed when
	it was being added into Exchange as an attachment. Note that the error only
	occurs when the embedded mail object is added to Exchange as an attachment.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: SNADS Connector
	
	  File Name      Version
	  -------------------------
	  Lsdiamex.exe   5.5.2347.0
	  Lslmeens.msg   5.5.2347.0
	  Mexdia.msg     5.5.2347.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
