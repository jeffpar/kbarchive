---
layout: page
title: "Q186944: XWEB: Some Messages Sent From Contact List Are Undeliverable"
permalink: kb/186/Q186944/
---

## Q186944: XWEB: Some Messages Sent From Contact List Are Undeliverable

	Article: Q186944
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Sending mail to a contact's Internet mail address using the Outlook Web Access
	(OWA) client can result in the mail being returned as undeliverable.
	
	CAUSE
	=====
	
	If the Internet e-mail address was originally saved as a Contact using an
	Outlook 97 client, the OWA client will not be able to use it. If the Internet
	e-mail address was originally saved as a Contact using an Outlook 98 client, the
	OWA client can send to it. This is due to the format in which each Outlook
	client saves the Internet address. Outlook 97 saves the address enclosed in
	square brackets (example: Test User[testuser@test.com]) and Outlook 98 will
	saves the address in it's current format (example: "testuser@test.com"). The
	brackets surrounding the address cause the message to be undeliverable.
	
	WORKAROUND
	==========
	
	To work around this problem, create the contact manually or use Outlook 98.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
