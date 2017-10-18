---
layout: page
title: "Q254725: XCON: (040) and (041) in DDA Addresses Cause NDRs"
permalink: kb/254/Q254725/
---

## Q254725: XCON: (040) and (041) in DDA Addresses Cause NDRs

	Article: Q254725
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message to an X.400 address similar to the following, you may
	receive a non-delivery report (NDR):
	
	- C=FR;a=ATLAS;p=INTERNET;DDA:RFC-822=first(u)last@domain.com
	
	- C=FR;a=ATLAS;p=INTERNET;DDA:RFC-822=first_last(a)domain.com
	
	CAUSE
	=====
	
	This issue can occur if the Tracking.log file contains addresses similar to the
	following:
	
	- C=FR;a=ATLAS;p=INTERNET;DDA:RFC-822=first(040)u(041)last@domain.com
	
	- C=FR;a=ATLAS;p=INTERNET;DDA:RFC-822=first(u)last(040)a(041)domain.com
	
	The Exchange Server message transfer agent (MTA) generates NDRs because of the
	(040) and (041) in the address. The following characters,
	
	- a
	- b
	- p
	- q
	- u
	- r
	- l
	
	are recognized as printable representations of non-printable character
	substitutions when inside of parenthesis. For example, the (a) can be used to
	represent the non-printable character @. The combination of the printable and
	non-printable character representations creates an address that is difficult to
	resolve.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, manually rewrite the address so that it does not
	include both printable and non-printable characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Note that messages sent to addresses similar to the following are handled
	correctly:
	
	- C=FR;a=ATLAS;p=INTERNET;DDA:RFC-822=first_last@domain.com
	
	- C=FR;a=ATLAS;p=INTERNET;DDA:RFC-822=first(u)last(a)domain.com
	
	Additional query words: unicode non-printable
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
