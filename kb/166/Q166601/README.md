---
layout: page
title: "Q166601: XADM: Folder(s) Missing After Using Move Mailbox Command"
permalink: /kb/166/Q166601/
---

## Q166601: XADM: Folder(s) Missing After Using Move Mailbox Command

	Article: Q166601
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Move Mailbox command in the Microsoft Exchange Administrator program is used
	to move a mailbox from one server in a Microsoft Exchange Server site to another
	server in the same site. After using this command, the user may log on to the
	mailbox on the new server and find one or more folders and their contents
	missing.
	
	MORE INFORMATION
	================
	
	Each Microsoft Exchange mailbox contains the following default system folders:
	Inbox, Outbox, Sent Items, and Deleted Items. The problem mentioned in the
	Symptoms section will occur if one of these default system folders has been
	renamed and a new folder created with that default name. After moving the
	mailbox, the renamed folder and its contents will not appear in the mailbox.
	
	For example, the problem will occur if the server-based system folder "Inbox" is
	renamed "My Inbox" and a new folder called "Inbox" is created. "My Inbox" will
	remain a system folder and all new mail will be delivered to it.
	
	After using the Move Mailbox command, the default system folder will be renamed
	"Inbox" and will contain the mail from the non-system "Inbox" folder. The "My
	Inbox" folder and its contents will not be in the mailbox.
	
	This only occurs when the server-based folder is renamed and another folder
	exists with the default name of the server-based folder. For example, if "Inbox"
	is renamed "My Inbox" and there is no other folder named "Inbox," the contents
	of "My Inbox" will exist on the new server in the "Inbox" folder after the Move
	Mailbox Command has been executed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	4.0. We are researching the problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	WORKAROUND
	==========
	
	To avoid this problem, rename the non-system folder and then rename the system
	folder to its original name before using the Move Mailbox Command.
	
	If you have already used the Move Mailbox Command, the folder and its contents
	will need to be recovered from the last full backup. For additional information
	about recovering a single mailbox, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q163713 INF: XADM: Recovering a Single Mailbox from the Online Backup
	
	After the single folder has been restored to a PST, it can be manually moved back
	up to the server.
	
	======================================================================
	Keywords          : kbusage kbBug kbISS 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
