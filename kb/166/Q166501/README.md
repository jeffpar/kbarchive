---
layout: page
title: "Q166501: XADM: NDR from Postmaster Incorrectly Formatted by IS"
permalink: kb/166/Q166501/
---

## Q166501: XADM: NDR from Postmaster Incorrectly Formatted by IS

	Article: Q166501
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user sends a message to an invalid or non-existent SMTP user, the
	originator of the message receives an NDR from postmaster%s_%g@site.org.com
	Where the %s_%g matches the wildcard used for the Microsoft Exchange Site's SMTP
	proxy address.
	
	CAUSE
	=====
	
	When the information store initializes, it queries the Directory Service for the
	SMTP proxy address. The information store keeps this address, in whole, in a
	global variable that is to be used with the Postmaster address. The information
	store incorrectly populates this variable with the entire SMTP proxy address
	rather than just the SMTP domain.
	
	WORKAROUND
	==========
	
	To avoid this problem, do not use wildcards in the site's global SMTP proxy
	address.
	
	RESOLUTION
	==========
	
	Apply the fix described in the "Status" section. In the fixed version, the
	information store was corrected to parse any characters to the left of the @
	sign in the SMTP proxy address store in the Directory. The global variable is
	now populated with just the SMTP domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	
	Additional query words: NDR report format bad
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
