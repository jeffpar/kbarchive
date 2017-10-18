---
layout: page
title: "Q201121: XFOR: MSExchangeIMC Profile Registry Key Is Missing"
permalink: kb/201/Q201121/
---

## Q201121: XFOR: MSExchangeIMC Profile Registry Key Is Missing

	Article: Q201121
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are logged on to the Exchange Server computer as the Exchange Service
	account, the MSExchangeIMC xxxxxxxxxx key is missing from the following registry
	key when the Internet Mail Service (Internet Mail Connector service in Exchange
	Server 4.0) is not started:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows NT\ CurrentVersion\Windows
	  Messaging Subsystem\Profiles\
	
	MORE INFORMATION
	================
	
	When the Internet Mail Service starts, it creates the key, and when it stops, it
	deletes the key.
	
	Additional query words: IMS IMC
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
