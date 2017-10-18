---
layout: page
title: "Q170036: XCLN:The Mapi Spooler Has Shut Down Unexpectedly"
permalink: kb/170/Q170036/
---

## Q170036: XCLN:The Mapi Spooler Has Shut Down Unexpectedly

	Article: Q170036
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows Messaging client included with Windows NT Server 4.0 or
	Windows NT Workstation 4.0 to send an attached file through Internet e-mail
	through a POP3 mail server, the following error message may occur:
	
	  Microsoft Windows Messaging Subsystem: The MAPI Spooler has shut down
	  unexpectedly. Close all mail-enabled applications before attempting to log on
	  again.
	
	After you shut down and restart the Microsoft Exchange client, you receive the
	same message.
	
	CAUSE
	=====
	
	This error is caused when you send an attached file that has no extension on the
	file name. This causes the MAPI spooler to have an access violation when it
	attempts to send the file over Internet e-mail. This problem does not occur when
	you use an Exchange Server computer as your mail server; it only occurs when
	using a POP3/SMTP mail server. When the error occurs, the mail message does not
	leave the Outbox so every time the client starts, it tries to send the message,
	which causes the MAPI spooler to have another access violattion.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
