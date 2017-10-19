---
layout: page
title: "Q216049: XCLN: MAPIResolveName Doesn't Properly Handle DBCS Strings"
permalink: /kb/216/Q216049/
---

## Q216049: XCLN: MAPIResolveName Doesn't Properly Handle DBCS Strings

	Article: Q216049
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A simple Messaging Application Program Interface (MAPI) application passes a
	Double-Byte Character Set (DBCS) string to the MAPI call MAPIResolveName().
	MAPIResolveName fails when a two-byte DBCS character contains 0x5b or 0x5c as
	one of its bytes.
	
	CAUSE
	=====
	
	A supporting routine used by MAPIResolveName() was not written to properly
	handle DBCS strings, and mistakenly interprets the bytes 0x5b and 0x5c as '['
	and '\' respectively.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	Component: MAPI
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Mapi32.dll | 5.5.2535.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
