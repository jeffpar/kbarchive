---
layout: page
title: "Q230682: XFOR: Convert Processes MEXNTS and NTSMEX Don't Run"
permalink: /kb/230/Q230682/
---

## Q230682: XFOR: Convert Processes MEXNTS and NTSMEX Don't Run

	Article: Q230682
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run the "Convert Notes to Exchange (LME-NOTES-NTSMEX)" or
	"Convert Exchange to Notes (LME-NOTES-MEXNTS)" convert process on a Lotus Notes
	server, it may not run.
	
	CAUSE
	=====
	
	This Notes server has settings of double-byte character set (DBCS) certifier
	name or DBCS certifier distinguished name, and a Notes Mail Connector (NMC)
	installed and configured on it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: high bit, 8-bit
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
