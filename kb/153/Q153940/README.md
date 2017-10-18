---
layout: page
title: "Q153940: XFOR: Microsoft Mail Recipients Do Not Receive NDRs If CRs Exist"
permalink: kb/153/Q153940/
---

## Q153940: XFOR: Microsoft Mail Recipients Do Not Receive NDRs If CRs Exist

	Article: Q153940
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message sent from a Microsoft Mail user to a Microsoft Exchange Server system
	via the Microsoft Mail Connector interchange (MSMI) and routed to the Internet
	Mail Service (IMS) may not be delivered because the destination host is
	unavailable. If the message remains in the IMS queue until the message timeouts
	expire, the non-delivery report (NDR) will not be delivered to the originating
	Microsoft Mail sender. The NDR will reach the shadow postoffice of the MSMI and
	be renamed with a .max extension.
	
	CAUSE
	=====
	
	The SMTP proxy address for the custom recipient is the destination address
	rather than the Microsoft Mail address.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Remove the custom recipient object. If this is not an acceptable option,
	  please see STATUS section below.
	
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
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
