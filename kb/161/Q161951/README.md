---
layout: page
title: "Q161951: XADM: WinDbg Hits Breakpoint During DN Conversion"
permalink: /kb/161/Q161951/
---

## Q161951: XADM: WinDbg Hits Breakpoint During DN Conversion

	Article: Q161951
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Conversion of the P1 Originator may cause a hard-coded breakpoint in WinDbg,
	resulting in a potential heap corruption.
	
	CAUSE
	=====
	
	Within the P1 Originator, there is RDN data that is not a DB reference. It is
	unconditionally marked as a reference in the descriptor->syntax field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
