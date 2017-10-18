---
layout: page
title: "Q164858: XCON: StarNine Mail Gateway May Rename Directory"
permalink: kb/164/Q164858/
---

## Q164858: XCON: StarNine Mail Gateway May Rename Directory

	Article: Q164858
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NOTE: As of 1/28/98, Quarterdeck Mail became StarNine Mail.
	
	You may see one of the following two symptoms when the Microsoft Exchange Server
	connection is run under the new Quarterdeck Mail Gateway Administrator:
	
	- The connection renames the MacToPC directory to MMFFx.msg and leave a
	  MMFFx.wrt file in this newly renamed directory.
	
	-or-
	
	- Microsoft Exchange Server stops responding.
	
	CAUSE
	=====
	
	Both of these problems are caused by an invalid pointer.
	
	
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
	
