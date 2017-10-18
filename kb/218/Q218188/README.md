---
layout: page
title: "Q218188: XADM: Sender Receives NDR When Sending to User From OAB"
permalink: kb/218/Q218188/
---

## Q218188: XADM: Sender Receives NDR When Sending to User From OAB

	Article: Q218188
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server versions 5.0 SP1 and SP2 may generate an Offline
	Address Book (OAB) that results in an offline user occasionally receiving
	non-delivery reports (NDRs) when attempting to send messages to particular
	addresses in the OAB. The error message returned to the sender may be similar to
	the following:
	
	  No transport provider was available for delivery to this recipient.
	
	CAUSE
	=====
	
	This may occur when two identical aliases exist for different users in separate
	sites.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Offline Address Book
	
	+--------------------------+
	| File name  | Version     | 
	+--------------------------+
	| Oabgen.dll | 5.0.1461.90 | 
	+--------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
