---
layout: page
title: "Q143375: XADM: Multiple Messages Received by Exchange Client"
permalink: kb/143/Q143375/
---

## Q143375: XADM: Multiple Messages Received by Exchange Client

	Article: Q143375
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are instances when an Exchange Mail client receives multiple copies of the
	same message that is sent from the Internet via the Internet Mail Connector
	(IMC) or by a Microsoft Mail 3.x client via the Microsoft Mail Connector.
	
	MORE INFORMATION
	================
	
	This happens if the Exchange recipient belongs to multiple Distribution Lists
	(DL). For instance, if user1 belongs to Distribution List 1 (DL1) and to
	Distribution List 2 (DL2) and an Internet or Microsoft Mail 3.x client sends to
	both DL's then the Exchange client receives two copies of the same message. If
	DL2 is a member of DL1, then the Exchange recipient receives three messages.
	
	This is by design. It is an X.400 feature. The Exchange Server tries to eliminate
	duplicates, but for mail coming from external sources, the needed information to
	accomplish the task is not available.
	
	
	Additional query words: ms mail mta message transfer agent
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; winnt:4.0
	
	=============================================================================
	
