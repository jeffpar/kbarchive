---
layout: page
title: "Q186580: XFOR: OV/VM Connector Fails to Return NDR for Message Addressed"
permalink: /kb/186/Q186580/
---

## Q186580: XFOR: OV/VM Connector Fails to Return NDR for Message Addressed

{% raw %}

	Article: Q186580
	Product(s): Microsoft Exchange
	Version(s): 3.2, 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The LinkAge Connector version 3.2 and Microsoft Exchange Connector for IBM OV/VM
	version 5.5 fail to return non-delivery reports (NDRs) for messages that are
	addressed to non-existent Exchange PROFS proxy addresses.
	
	MORE INFORMATION
	================
	
	PROFS
	
	     PROFS
	  NODE2 (USER2)
	        |
	        |<- OV/VM Connector
	        |
	Exchange Site 1
	  NODE1 (USER1)
	
	Address Space on OV/VM Connector in Site 1:
	
	  PROFS * cost=1
	
	If a user in Site 1 addresses a message to an unknown mailbox, using Site 1's
	PROFS proxy node name of NODE1, the sender never receives an NDR. For example,
	if the Exchange user USER1 addresses a message to the unknown PROFS proxy
	address NODE1(UNKNOWN), USER1 never receives an NDR. However, if the same user
	addresses a message to an unknown PROFS address whose node name is not used as
	an Exchange Site Addressing PROFS proxy address, the sender receives an NDR as
	expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2. A supported fix is now available, but has not been fully regression-tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : 3.2, 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
