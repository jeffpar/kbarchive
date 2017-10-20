---
layout: page
title: "Q187869: XADM: Information Store Stops While Processing Message"
permalink: /kb/187/Q187869/
---

## Q187869: XADM: Information Store Stops While Processing Message

{% raw %}

	Article: Q187869
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The information store stops after receiving an Internet message. The following
	description is included in an event in the Event Viewer's application log, (the
	event IDs may vary).
	
	  An error (0x80004005) occurred while rendering a message for download
	  on mailbox /O=<Organization >/OU=<Site >/CN=RECIPIENTS/CN=<mailbox>.
	
	The common event IDs are 5000, 1120, and 1121 from the MSExchangeIS.
	
	A non-delivery report may also be generated prior to the information store
	shutting down. It includes the following:
	
	  MSEXCH:IMS:<ORG>:<Site>:<Server> 0x80004005
	  (000502CC) Conversion to Internet format failed
	
	CAUSE
	=====
	
	Certain applications may add an NLS entry in the registry mapping 50000
	(User-Defined ) to cp1252.nls. The information store has an internal codepage
	mapping table that maps raw codepages to 12 bit, and unless these get updated to
	add a mapping for the new codepage, the store will fail to furnish properties to
	Imail on outbound.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
