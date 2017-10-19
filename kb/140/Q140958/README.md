---
layout: page
title: "Q140958: XCON: MTA Mishandles Use of Default Dialogue-mode"
permalink: /kb/140/Q140958/
---

## Q140958: XCON: MTA Mishandles Use of Default Dialogue-mode

	Article: Q140958
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server is unable to communicate with a remote Message
	Transfer Agent (MTA) over an X.400 connector. In some cases you might be able to
	send to the foreign MTA, but it cannot receive messages. This is the case with
	the MEMO MTA.
	
	MORE INFORMATION
	================
	
	The problem only happens when the remote MTA does not explicitly send the
	dialogue mode in the SPDU Connect packet. This fact can be verified by tracing
	the beginning of the X.400 connection.
	
	One workaround is to configure both MTAs to the "two way alternate" dialogue
	mode.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 X.400 TWA Event ID 1153
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
