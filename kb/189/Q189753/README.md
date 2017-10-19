---
layout: page
title: "Q189753: XCON: Exchange MTA Logs Event 1136"
permalink: /kb/189/Q189753/
---

## Q189753: XCON: Exchange MTA Logs Event 1136

	Article: Q189753
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send messages from a third-party message transfer agent (MTA) to
	Microsoft Exchange Server 5.5 using the X.400 Connector, sending may fail and
	the Event 1136 may be logged as follows:
	
	  An interoperability error occurred with entity
	  /O=Org/OU=Site/CN=CONFIGURATION/CN=CONNECTIONS/CN=X400.
	  A reliable transport service element (RTSE) error occurred.
	  ASN.1 decode failure.
	  Server error code 164 was detected at offset 28711.
	  Node label Pusep.
	  Control block index 2001. [PLATFORM RTSE 31 151] (14)
	
	CAUSE
	=====
	
	This error is only logged, if the third-party MTA uses a large checkpoint size,
	64 for example. The error is very dependent on the size of the message or
	attachment. The error may occur when you send attachments of a very specific
	size and not with others that are a little smaller or larger. Setting the
	checkpoint size to a lower value, for example to 15, resolves the issue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
