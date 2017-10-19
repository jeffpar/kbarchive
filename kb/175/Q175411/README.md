---
layout: page
title: "Q175411: XADM: POP3 Client May Cause Exchange Information Store to Crash"
permalink: /kb/175/Q175411/
---

## Q175411: XADM: POP3 Client May Cause Exchange Information Store to Crash

	Article: Q175411
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a POP3 client to retrieve a message with attachments from a
	Microsoft Exchange Server, the Microsoft Exchange Server Information Store (IS)
	may crash and a Dr. Watson report may be generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	MORE INFORMATION
	================
	
	This problem only occurs when a POP3 client retrieves a message containing
	Microsoft Word 6.0 attachments. A Dr. Watson may occur or the system will hang
	indefinitely. The POP3 client will hang, but it can be closed and the system
	will continue working.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
