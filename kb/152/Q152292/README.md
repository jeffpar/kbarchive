---
layout: page
title: "Q152292: XFOR: IA5 Body Part Used Although Different Setting is Selected"
permalink: /kb/152/Q152292/
---

## Q152292: XFOR: IA5 Body Part Used Although Different Setting is Selected

	Article: Q152292
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server version 5.0 ignores the setting of the "X.400 bodypart
	for message text" in the X.400 connector object. All outgoing messages are coded
	with IA5, causing extended characters (French, German, and so on) to be
	downgraded to pure IA5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
