---
layout: page
title: "Q169666: XADM: POP3 Users may not Receive an Attachment if Part of DL"
permalink: kb/169/Q169666/
---

## Q169666: XADM: POP3 Users may not Receive an Attachment if Part of DL

	Article: Q169666
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Custom recipients (CRs) that are members of Microsoft Exchange Distribution
	Lists (DLs) and use POP3 clients, may not receive attachments when messages are
	sent to the DL.
	
	CCMAIL users who are SMTP custom recipients may receive the attachment as a
	base64 file called Mime6.raw.
	
	CAUSE
	=====
	
	When the DL is created, the default property for the DL is to Allow Rich Text
	and this is inherited by all members of this DL.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The property to Allow Rich Text is set for Microsoft Exchange Recipients and DLs
	automatically. This property is not set for CR. However, if the CR is part of a
	DL, the CR inherits this property from the DL as it is expanded. With this Allow
	Rich Text property set, the IMS will send out message with Transport Neutral
	Encoding Format (TNEF) attachments and most POP3 clients cannot read this
	format.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
