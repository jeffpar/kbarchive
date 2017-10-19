---
layout: page
title: "Q164859: XFOR: Macintosh Attachments Over IMC Are Named Message.txt"
permalink: /kb/164/Q164859/
---

## Q164859: XFOR: Macintosh Attachments Over IMC Are Named Message.txt

	Article: Q164859
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sending multiple attachments across the Internet Mail Connector (IMC) between
	two computers running Microsoft Exchange Server 4.0 may result in a message from
	the System Administrator saying "inbound mail failure - The message conversion
	failed." You may receive another message containing a Message.txt attachment.
	
	CAUSE
	=====
	
	The IMC does not validate line counts for binhex bodyparts in inbound non-MIME
	messages, due to a fix of an issue on decoding binhex data. For more
	information, see the following article in the Microsoft Knowledge Base:
	
	  Q164860 XFOR: Garbled Attachments Between Exchange 4.0 and 5.0 IMCs
	
	WORKAROUND
	==========
	
	To work around this problem, configure the IMCs to transfer messages in binhex,
	with TNEF disabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
