---
layout: page
title: "Q163512: Err. Msg.: The Mapi Spooler Has Shut Down Unexpectedly"
permalink: kb/163/Q163512/
---

## Q163512: Err. Msg.: The Mapi Spooler Has Shut Down Unexpectedly

	Article: Q163512
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows Messaging client included with Windows NT 4.0 Server or
	Workstation to send an attached file via Internet email through a POP3 mail
	server, you may receive the following error message:
	
	  Microsoft Windows Messaging Subsystem:
	  The MAPI Spooler has shut down unexpectedly. Close all mail-enabled
	  applications before attempting to log on again.
	
	After shutting down and restarting the Exchange client, you receive the same
	message.
	
	CAUSE
	=====
	
	This error is caused when you send an attached file that has no extension on the
	file name. This causes the MAPI spooler to access violate when it attempts to
	send the file over Internet email. This problem does not occur when you use
	Exchange servers as your mail server, only when using a POP3/SMTP mail server.
	
	When the error occurs, the mail message does not leave the Outbox so every time
	the client starts, it tries to send the message, causing the MAPI spooler to
	access violate again.
	
	
	RESOLUTION
	==========
	
	Once you have encountered this error, the only way to stop it is to install the
	fix mentioned below or to delete the mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
