---
layout: page
title: "Q258731: XFOR: IMAP Migration Extractor Doesn't Work with Event ID 14002"
permalink: /kb/258/Q258731/
---

## Q258731: XFOR: IMAP Migration Extractor Doesn't Work with Event ID 14002

	Article: Q258731
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Internet Message Access Protocol (IMAP) Migration Extractor
	utility, that is included with Exchange Server 5.5 Service Pack 3 on a Banyan
	server, the following error message may be logged in the Windows NT Event Viewer
	application event log:
	
	  Event ID: 14002
	  Event Source: MSExchangeMig
	  IMAP server returned an error response while migrating mailbox
	  'usuario1%ncc%migracion': "0004 BAD UID Request "0004 UID FETCH 5
	  (RFC822.PEEK)" at column 25".
	
	CAUSE
	=====
	
	This issue can occur if the Banyan server does not accept the command UID FETCH
	5 (RFC822.PEEK) that is sent by the IMAP extractor.
	
	According to the Request for Comments (RFC) 2060, this command is now obsolete
	and should be replaced by the command UID FETCH 5 (RFC822).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: XMRP
	
	======================================================================
	Keywords          : kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
