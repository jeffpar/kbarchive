---
layout: page
title: "Q142260: XCON: IMC Replies To SMTP Messages In RTF"
permalink: kb/142/Q142260/
---

## Q142260: XCON: IMC Replies To SMTP Messages In RTF

	Article: Q142260
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange user replies to an SMTP message, the SMTP recipient
	receives it in Microsoft Rich Text Format (RTF). This occurs even though the
	recipient and the Microsoft Exchange Internet Mail Connector (IMC) are
	configured for non-RTF.
	
	CAUSE
	=====
	
	If the IMC does not explicitly set inbound mail to be non-RTF, the Microsoft
	Exchange Information Store (IS) defaults to using RTF. Thus when the reply mail
	is generated, the message has the RTF property set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
