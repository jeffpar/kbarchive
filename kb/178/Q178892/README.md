---
layout: page
title: "Q178892: XADM: DMS-Latest Delivery Settings Not Effective"
permalink: /kb/178/Q178892/
---

## Q178892: XADM: DMS-Latest Delivery Settings Not Effective

{% raw %}

	Article: Q178892
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message using an Outlook client, in the case of the Defense
	Messaging System (DMS) version of Exchange, clients sending messages by virtue
	of DMS client extensions have an option for setting latest delivery. This option
	is not available with the existing standard product clients, because it requires
	the extensions for the related property pages. With this option, messages can be
	sent with delivery options set with the "At any time" but "No later than"
	condition. When the time for delivery expires, the expected behavior is a
	non-delivery report (NDR) from the remote message transfer agent (MTA) with
	"Delivery Time Expired" as the diagnostic code. However, the message is
	delivered even after the delivery time has expired.
	
	CAUSE
	=====
	
	The cause is that the latest delivery time is not being implemented, either for
	local delivery or for giving to the MTA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
