---
layout: page
title: "Q216798: XFOR: Embedded OLE Objects Are Not Converted"
permalink: /kb/216/Q216798/
---

## Q216798: XFOR: Embedded OLE Objects Are Not Converted

	Article: Q216798
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a MAPI client embeds an OLE object into a mail message and sends it either
	out of the Internet Mail Service to a user on the Internet or to a user on
	Exchange Server who retrieves mail using POP3 or IMAP, the recipient may not
	receive the OLE object. This happens regardless of which client is use by the
	recipient. A placeholder that looks like "<<...>>" is found in place
	of the OLE object. There is no indication to the recipient that this placeholder
	indicates non-transferred data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 4.0, 5.0, and
	5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
