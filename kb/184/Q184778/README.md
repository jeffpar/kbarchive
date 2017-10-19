---
layout: page
title: "Q184778: XADM: Unable to Modify Public Folder Client Permissions"
permalink: /kb/184/Q184778/
---

## Q184778: XADM: Unable to Modify Public Folder Client Permissions

	Article: Q184778
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Exchange 4.0 (version 837) client connected to an Exchange
	Server 4.0 computer in a hybrid Exchange Server 4.0/5.0 site, you may receive
	the following error message when you try to modify the client permissions of a
	public folder to which you have owner rights:
	
	  The modified permissions can not be saved. The client operation has Failed.
	
	You may also receive this error message when using an Exchange Server 4.0
	(version 837) Administrator program to modify client permissions of a public
	folder in a hybrid 4.0/5.0 site.
	
	CAUSE
	=====
	
	The schema was updated in version 4.0 Service Pack 2 and in version 5.0.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Update the Exchange clients to the latest service pack for Exchange client
	  4.0, or install the Exchange 5.0 client.
	
	  -OR-
	
	- When you modify public folder client permissions in a hybrid 4.0/5.0 site,
	  administer the 4.0 server from an Exchange 5.0 Administrator program.
	
	Additional query words: xcln xadm
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
