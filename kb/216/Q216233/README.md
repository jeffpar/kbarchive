---
layout: page
title: "Q216233: XFOR: Auditing Client Access to Exchange Using Internet Protocol"
permalink: /kb/216/Q216233/
---

## Q216233: XFOR: Auditing Client Access to Exchange Using Internet Protocol

{% raw %}

	Article: Q216233
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be a time when you want to generate an event log that audits the
	mailbox and client name accessing your Microsoft Exchange Server computer. You
	can audit logons for POP3, IMAP4, and NNTP protocol clients by following the
	instructions below:
	
	1. Start the Microsoft Exchange Administrator program, and in the left pane,
	  click to expand Configuration, expand Servers, expand <Server Name>,
	  and click the Protocols object.
	
	2. Click the specific protocol that you want to audit (that is, POP3, IMAP4,
	  NNTP), and on the File menu, click Properties.
	
	3. Click the Diagnostics Logging tab and increase Client Actions to maximum.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
