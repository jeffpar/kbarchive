---
layout: page
title: "Q166559: XCLN: Setup /q1 Ignores HomeServer &amp; MailboxName in Default.prf"
permalink: /kb/166/Q166559/
---

## Q166559: XCLN: Setup /q1 Ignores HomeServer &amp; MailboxName in Default.prf

	Article: Q166559
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install the Microsoft Exchange Windows 3.x client in quiet mode with
	the command
	
	  setup /q1
	
	and create a default profile called Default.prf, some properties such as
	HomeServer and MailboxName are not put into the profile correctly; they are just
	ignored quietly.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Do not use quiet mode (setup /q1).
	
	  -or-
	
	- Copy the default.prf file to end user's local windir, and run Newprof.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows 3.x
	client, version 4.0, Microsoft Exchange Windows NT client versions 4.0 and 5.0,
	and Microsoft Exchange Windows 95 client, versions 4.0 and 5.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows 3.x
	client, version 5.0. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Exchange Server version 5.0. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
