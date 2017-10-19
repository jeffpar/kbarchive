---
layout: page
title: "Q161946: XCON: Free Form Name Attribute not Handled by Sprint"
permalink: /kb/161/Q161946/
---

## Q161946: XCON: Free Form Name Attribute not Handled by Sprint

	Article: Q161946
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Connectivity between the Microsoft Exchange X.400 Message Transfer Agent (MTA)
	and a foreign Sprint X.400 gateway cannot be established. The Sprint gateway may
	indicate that messages from Microsoft Exchange contain an invalid property in
	the ASN.1 header.
	
	CAUSE
	=====
	
	The Sprint X.400 gateway does not support the Free-form Name (FFN) attribute in
	the Domain Defined Attribute (DDA) field of a message. The inclusion of a
	Free-Form Name is optional, but support for it is mandatory. The Sprint X.400
	gateway should ignore the field if it chooses not to use it, but must be able to
	receive it in a message.
	
	The Free-form name is not part of the O/R Address, it is a "friendly name" field
	for which support is mandatory. References to this support is located in the Red
	Book X.420 3.2.1 and the Blue Book X.420 7.1.3 discussion of ORDescriptor. The
	syntax of this data is TeletexString.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Contact Sprint about the availability of an X.400 gateway software revision
	  that supports this attribute correctly, or obtain this hotfix from Microsoft.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The issue may be accompanied by a number of Event Id 316's in the Windows NT
	Event Log:
	
	  Event Id:316
	  Source:MSExchangeMTA
	  Type:Information
	  Category:Resource
	  Description:[MTA MAIN BASE (1) Proc 15] 
	  Free ASB at index 2001
	  This leaves 1 CB's remaining (4)
	
	The following Event Id 316's will document the index in an incrementing manner
	(2001, 2002, 2003...).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
