---
layout: page
title: "Q263448: XADM: System Requirements for Mailbox Manager"
permalink: kb/263/Q263448/
---

## Q263448: XADM: System Requirements for Mailbox Manager

	Article: Q263448
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP2,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc5sp2 exc55sp2 exc55sp3
	Last Modified: 11-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP2, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mailbox Manager is included with Exchange Server 5.5 Service Pack 3.
	Mailbox Manager is a tool to implement corporate e-mail retention policies.
	Features of Mailbox Manager include the following:
	
	- Configuration flexibility. You can configure Mailbox Manager to delete
	  messages according to message age, folder size, message type, and other
	  parameters.
	
	- Automation. You can create a weekly schedule that specifies when Mailbox
	  Manager deletes messages from Exchange Server mailboxes.
	
	- Report generation. You can configure Mailbox Manager to log detailed reports
	  about message removal and other Mailbox Manager activities and to send the
	  reports to administrators.
	
	This article lists the versions of Exchange Server and Microsoft Windows NT
	Server that must be installed for Mailbox Manager to work properly.
	
	MORE INFORMATION
	================
	
	Operating system version:
	
	  Microsoft Windows NT Server version 4.0 with Service Pack 3 or later
	
	Exchange Server version:
	
	- Microsoft Exchange Server version 5.0 Standard or Enterprise Edition with
	  Service Pack 2 or later
	
	-or-
	
	- Microsoft Exchange Server version 5.5 Standard or Enterprise Edition with
	  Service Pack 2 or later
	
	IMPORTANT: Although you can install and run Mailbox Manager on versions of
	Exchange Server 5.5 earlier than Service Pack 2, these earlier versions have a
	defect that causes continuous memory leaks while Mailbox Manager is running.
	That defect is corrected in Exchange Server 5.5 Service Pack 2.
	
	For additional information about Mailbox Manager, please see the user's guide
	that is located in the following folder in Exchange Server 5.5 Service Pack 3:
	
	  Support\Eng\Server\Support\Mbmngr\Setup\I386\Mbmanug.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5sp2 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange500SP2 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.0 SP2,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
