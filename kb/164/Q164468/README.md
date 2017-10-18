---
layout: page
title: "Q164468: XFOR: Hebrew or Arabic Microsoft Mail Message Body Corrupted"
permalink: kb/164/Q164468/
---

## Q164468: XFOR: Hebrew or Arabic Microsoft Mail Message Body Corrupted

	Article: Q164468
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Microsoft Exchange Server as backbone for Hebrew or Arabic Microsoft Mail,
	(that is, using two computers running Microsoft Exchange Server with the
	Microsoft Mail connector to connect a Hebrew or Arabic Microsoft Mail postoffice
	at each end, and using the Microsoft Exchange Server site connector to connect
	these two computers running Microsoft Exchange Server), if a message with Hebrew
	or Arabic characters in the subject and body is sent from a Hebrew or Arabic
	Microsoft Mail client to another Hebrew or Arabic Microsoft Mail client by means
	of the Microsoft Exchange Server backbone, the Hebrew or Arabic characters are
	shown as ?????, instead of regular Hebrew or Arabic characters.
	
	CAUSE
	=====
	
	There is a problem when converting or reconverting the Hebrew or Arabic
	Microsoft Mail code page in the Microsoft Exchange Server Microsoft Mail
	connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
