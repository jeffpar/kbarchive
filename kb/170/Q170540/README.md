---
layout: page
title: "Q170540: XFOR: All Mailboxes Replicate After Running Migsmtp.exe"
permalink: /kb/170/Q170540/
---

## Q170540: XFOR: All Mailboxes Replicate After Running Migsmtp.exe

	Article: Q170540
	Product(s): Microsoft Exchange
	Version(s): WINDOWS4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you run the Microsoft Mail SMTP Gateway Proxy Migration tool
	(Migsmtp.exe), which is included in the BackOffice Resource Kit, you will notice
	all mailboxes are being replicated. This occurs because all mailboxes are
	modified even if no change has been made to the mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Mail SMTP Gateway
	Proxy Migration Tool of the Microsoft Exchange Resource Kit. This has been fixed
	in version 5.0.1457.16 of the Microsoft Mail SMTP Gateway Proxy Migration Tool.
	This build of Migsmtp.exe can be obtained by downloading the new MigratNT.exe
	from the following location on the Microsoft Web site:
	
	  http://www.microsoft.com/msdownload/exchange/rkintel/rkintel.htm
	
	In this version, use the new -X switch to prevent mailboxes whose proxy addresses
	do not change from being modified and then replicated.
	
	MORE INFORMATION
	================
	
	Migsmtp.exe helps replace a Microsoft Mail SMTP gateway with a Microsoft
	Exchange Internet Mail Service by reducing the level of administrator
	intervention. It preserves current Internet addresses of the recipients and adds
	them as secondary proxies to the Microsoft Exchange Server global address list,
	which eliminates the need for the end users to republish their new Internet
	address for their business associates.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
