---
layout: page
title: "Q176148: XCON: No NDR on Malformed X.400 Addresses"
permalink: kb/176/Q176148/
---

## Q176148: XCON: No NDR on Malformed X.400 Addresses

	Article: Q176148
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message is sent to an invalid originator/recipient (O/R) address, a
	non-delivery report (NDR) is generated, as expected. However, the NDR is never
	delivered to the originator of the message.
	
	CAUSE
	=====
	
	When a message is sent to an invalid, manually entered X.400 O/R address
	(referred to as an one-off routing address), the store uses Address.dll to
	normalize the O/R address. The normalizing process consists of ordering the
	attributes in the O/R address which is in the form of a string. This ordering is
	important so that the address can be resolved to a DN (just like for a X400
	proxy). The message is submitted to the MTA. During message submission to the
	MTA, the store checks the syntax but not the "routability" of the message.
	
	As expected this message will cause the remote MTA to generate an NDR. As this
	NDR reaches the sender's store the same code path is taken for entryid
	generation for the actual recipient name. The store now proceeds to parse the
	NDR and encounters the attributes that refer to the actual recipient of the
	original message. It fails to parse these and proceeds to drop the NDR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: OR
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
