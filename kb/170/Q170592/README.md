---
layout: page
title: "Q170592: XCLN: Client Appears to Hang When Using Check Names Command"
permalink: kb/170/Q170592/
---

## Q170592: XCLN: Client Appears to Hang When Using Check Names Command

	Article: Q170592
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0; Win95:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Exchange Client for Windows 95, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Check Names command in the Microsoft Exchange client, the
	Exchange Client computer may appear to hang. This can occur when you use a
	reserved address type for the address name space (such as SMTP, X400, or MS),
	the global address list (GAL) is of significant size (for example, thousands of
	addresses), and a recipient or distribution list (DL) does not exist with the
	same name. Eventually, the operation will fail with the following error:
	
	  The table requested by this operation contains too many names and cannot be
	  accessed.
	
	CAUSE
	=====
	
	This behavior is by design. The behavior and subsequent error occur because the
	Exchange client is actually attempting to return the entire list of all
	addresses available (SMTP, X400, MS, and so on). In a large GAL, this list of
	addresses can be in the thousands.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0; Win95:5.0
	Issue type        : kbprb
	
	=============================================================================
	
