---
layout: page
title: "Q157002: XCLN: Attachments Might be Lost When Moving from OST to Server"
permalink: kb/157/Q157002/
---

## Q157002: XCLN: Attachments Might be Lost When Moving from OST to Server

	Article: Q157002
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attachments to a message might not be copied from an Offline Storage (OST)
	message to a message held in the Microsoft Exchange Server Information Store
	(IS).
	
	CAUSE
	=====
	
	In the process of copying messages from OST to the IS, an attachment table
	describing the attachments in a message needs to be updated. "MODIFY"
	permissions on the parent message are not given at the point of generating the
	message body and attachments from RTF during the copy process.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
