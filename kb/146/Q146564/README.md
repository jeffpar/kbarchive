---
layout: page
title: "Q146564: XCLN: Err Msg: Rules in Error"
permalink: kb/146/Q146564/
---

## Q146564: XCLN: Err Msg: Rules in Error

	Article: Q146564
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might receive the following error message either when starting a Microsoft
	Exchange client or after receiving a new message that a rule attempts to
	process.
	
	  Title : Rules in Error
	  Rule
	  Subject:xxxMOVE TO:<unavailable>
	  Error:
	  Failed to perform client side action
	
	CAUSE
	=====
	
	The Personal Folder is password protected and the proper password has not been
	entered. This problem can occur under two circumstances:
	
	- Assume you quit from Microsoft Exchange and a personal folder has the focus.
	  The next time you start Microsoft Exchange, you are prompted for the password
	  immediately. In this case, the rule can find the folder and processes
	  correctly.
	
	  If, however, when you quit Microsoft Exchange, the Mailbox has focus (instead
	  of a personal folder), the rule tries to process before knowing the password
	  to the personal folder and the "Rules in error" message appears. Any mail
	  messages that were to be copied to the personal folder, will instead appear
	  in the Inbox of the Mailbox.
	
	- You cancel a personal folder password dialog without typing the password
	  during startup of the Microsoft Exchange client, and a message is received
	  (at any point) that the Inbox Assistant attempts to process (copy or move) to
	  that personal folder. Because the personal folder cannot be opened, the rule
	  cannot be processed.
	
	RESOLUTION
	==========
	
	When you exit Microsoft Exchange, place focus on a personal folder (not the
	Mailbox).
	
	When you start Microsoft Exchange, enter the password for (any) personal folders
	involved with rules processing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of the Microsoft
	Exchange clients for Windows 3.x and Windows NT. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
