---
layout: page
title: "Q177374: XCON: Disable BilateralInformation and IternalTraceInformation"
permalink: /kb/177/Q177374/
---

## Q177374: XCON: Disable BilateralInformation and IternalTraceInformation

{% raw %}

	Article: Q177374
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) may receive an NDR
	for a message sent containing BilateralInformation or 1984 MOTIS
	InternalTraceInformation. Some X.400 MTAs are not able to accommodate the
	information and discard the message or return a non-delivery report (NDR).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. To avoid the NDR, you now have the option to strip this
	information. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The information can be masked by setting the heuristics property for the X.400
	connector as:
	
	0x400 : Strip Bilateral Information
	0x800 : Strip Internal Trace Information (on 1984 only)
	
	For additional information in reference to setting the heuristics property, see
	the following article in the Microsoft Knowledge Base:
	
	  Q169685 XFOR: When You Select "Remote clients support MAPI," BP9 Is Not Sent
	  with Forwarded Messages
	
	Please be aware these values are in hex and cumulative in nature (0x000).
	
	BilateralInformation or 1984 MOTIS InternalTraceInformation is a mandatory field
	that some MTAs do not accommodate.
	
	Additional query words: ASN.1 X400 EIT BIT HP OPENMAIL XFOR
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
