---
layout: page
title: "Q173457: XFOR: Information Store Stops in URL Processing RTF to HTML"
permalink: kb/173/Q173457/
---

## Q173457: XFOR: Information Store Stops in URL Processing RTF to HTML

	Article: Q173457
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	A message that contains a URL consisting entirely of ignorable characters, for
	example, a tilde (~), may cause the information store to stop with an access
	violation and subsequent Dr. Watson error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The following URLs, when converted by the information store, will either present
	the converted message with garbage in the URL or cause the information store to
	stop with an access violation:
	
	  news:~
	
	  -or-
	
	  html:~
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	
