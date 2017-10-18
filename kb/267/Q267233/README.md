---
layout: page
title: "Q267233: XADM: &quot;The Client Operation Failed&quot; Err Msg Using Move Mailbox"
permalink: kb/267/Q267233/
---

## Q267233: XADM: &quot;The Client Operation Failed&quot; Err Msg Using Move Mailbox

	Article: Q267233
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to move mailboxes from one server to another by using the Move
	Mailbox feature in the Exchange Administrator program, you may receive the
	following error message:
	
	  The Client Operation Failed
	
	  Microsoft Exchange Information Store
	  ID No. 80004005-0501-0000050a
	
	CAUSE
	=====
	
	This behavior may be caused by third-party anti-virus software services that are
	running against the information store.
	
	WORKAROUND
	==========
	
	To work around this problem, quit all anti-virus services, and then run the Move
	Mailbox feature.
	
	MORE INFORMATION
	================
	
	For additional information about the Move Mailbox feature and anti-virus
	Application Programming Interface (API) enabled anti-virus software, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q264731 XADM: MAPI-Based Tasks Do Not Work with Virus API Anti-Virus Software
	  Running on the Exchange Server Computer
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
