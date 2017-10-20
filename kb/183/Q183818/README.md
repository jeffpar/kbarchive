---
layout: page
title: "Q183818: XCON: MTA Unable to Send Message to Large Number of Recipients"
permalink: /kb/183/Q183818/
---

## Q183818: XCON: MTA Unable to Send Message to Large Number of Recipients

{% raw %}

	Article: Q183818
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to send a message to an extremely large number of recipients,
	either by sending the message directly to the recipients or by sending the
	message to a distribution list (DL) that contains the recipients, the message
	transfer agent (MTA) may stop unexpectedly. If you send the message to a DL, the
	MTA may take an unusually long time to process the message, instead of stopping
	unexpectedly. This problem is most likely to occur when you send the message to
	more than 8,288 recipients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
