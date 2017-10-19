---
layout: page
title: "Q159294: XFOR: Extra Carriage Return in Dir-Sync Message"
permalink: /kb/159/Q159294/
---

## Q159294: XFOR: Extra Carriage Return in Dir-Sync Message

	Article: Q159294
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A dir-sync message coming from the Microsoft Exchange Server Directory
	Synchronization Agent (DXA) has an extra carriage return (CR) at the end of each
	dir-sync transaction. The dir-sync message's attachment may look similar to the
	following:
	
	  A Shannon BoydPCM:ABC/NYC/SBOYD
	
	  A Paul Canniff PCM:ABC/NYC/PCANNIFF
	
	  D Stephanie ConroyPCM:ABC/NYC/SCONROY
	
	And so on.
	
	CAUSE
	=====
	
	There are three formats for the transactions in dir-sync messages.
	
	- inattachment: the transactions are sent in a separate attachment.
	
	- inbody: the transactions are sent in the body of the message.
	
	- internal: the transactions are sent in MSMail GLB format.
	
	An error in the logic of the DXA causes an extra CR to be placed at the end of
	each transaction if the transactions are sent inattachment. The extra CR is not
	placed at the end of the transaction if the format of the transactions is either
	inbody or internal.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Configure to send and receive dir-sync messages inbody or internal.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
