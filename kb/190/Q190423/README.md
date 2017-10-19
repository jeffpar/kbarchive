---
layout: page
title: "Q190423: XFOR: MS Mail Migration Does Not Migrate New Messages"
permalink: /kb/190/Q190423/
---

## Q190423: XFOR: MS Mail Migration Does Not Migrate New Messages

	Article: Q190423
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.5; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Mail for Windows, version 3.5 
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you migrate users and messages from a Microsoft Mail for PC Networks
	postoffice, it may appear that some recent messages were not migrated.
	
	CAUSE
	=====
	
	When you migrate users and messages from an MS Mail (PC) postoffice, messages
	contained in the mail message file (MMF) or the Inbox on the postoffice are
	migrated to Microsoft Exchange Server. New messages that are delivered to the
	recipient after the migration is performed remain on the MS Mail (PC)
	postoffice.
	
	WORKAROUND
	==========
	
	To move new messages that were delivered after the migration to Exchange Server
	was performed, use one of the following methods.
	
	NOTE: If the recipient's mailbox has been deleted from the MS Mail (PC)
	postoffice, you must restore a backup of the postoffice to a separate folder
	before you perform one of the following procedures. After you restore a backup
	of the postoffice, have the recipient connect to the restored postoffice in the
	following procedures.
	
	- Have the recipient connect to the MS Mail (PC) postoffice using Mail for
	  Windows, and then check for new messages. Then, do one of the following:
	
	   - Perform the migration again.
	
	   - Use a Microsoft Exchange client to import the MMF that contains the new
	     messages.
	
	- Have the recipient connect to the MS Mail (PC) postoffice using the MS Mail
	  (PC) MS-DOS client and then forward all new messages to his or her Exchange
	  Server mailbox. To transfer messages between an MS Mail (PC) postoffice and
	  an Exchange Server postoffice, the appropriate transport agents must be
	  installed and functioning properly.
	
	- Have the recipient connect to the MS Mail (PC) postoffice using a Microsoft
	  Exchange client with the Microsoft Mail information service installed, and
	  then check for new messages. The messages are then transferred to the
	  recipient's mailbox on the Exchange Server computer or to a set of personal
	  folders.
	
	MORE INFORMATION
	================
	
	When you send a new message to an MS Mail (PC) recipient, the message is stored
	on the postoffice until the recipient starts Mail for Windows and then checks
	for new messages. The message is then transferred to the recipient's MMF. If you
	migrate users and messages from the MS Mail (PC) postoffice after the message
	has been received, the message is migrated to the Exchange Server computer
	regardless of whether the message has been transferred to the MMF. However, if
	the mailbox remains on the postoffice after the migration is performed, new
	messages may still be delivered to the recipient. These messages remain on the
	MS Mail (PC) postoffice and are not automatically migrated to Exchange Server.
	
	For additional information, please see the migration documentation located in the
	Migrate\Docs folder on the Exchange Server 4.0 CD-ROM.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMail350 kbMailPCN350
	Version           : WINDOWS:3.5; winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
