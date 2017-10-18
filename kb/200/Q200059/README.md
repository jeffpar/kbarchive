---
layout: page
title: "Q200059: XFOR: IMC Generates NDR with Mail From: &lt;&gt;"
permalink: kb/200/Q200059/
---

## Q200059: XFOR: IMC Generates NDR with Mail From: &lt;&gt;

	Article: Q200059
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server 4.0 Internet Mail Connector (IMC), or the Internet
	Mail Service in Microsoft Exchange Server 5.0 and 5.5, generates a non-delivery
	report (NDR) with an empty Mail From: <> header. This is the preferred
	method in accordance with RFC 821 Section 3.6.
	
	MORE INFORMATION
	================
	
	This is done to avoid looping error messages between servers as described in the
	RFC.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
