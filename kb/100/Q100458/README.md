---
layout: page
title: "Q100458: PC WRmt: MAPI Ignores Scheduled Connections"
permalink: /kb/100/Q100458/
---

## Q100458: PC WRmt: MAPI Ignores Scheduled Connections

	Article: Q100458
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message is sent from an application that uses Simple MAPI (such as
	Microsoft Word version 2.0 for Windows), and you have version 3.2 of Microsoft
	Mail Remote for Windows installed but not running, the message is always sent
	immediately, despite the Mail Remote for Windows connection-scheduling feature
	that tells Mail to wait until the scheduled time.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Choose the Cancel button, which leaves the mail in the Outbox and lets it
	  wait for the next scheduled connection.
	
	-or-
	
	- Leave Mail Remote for Windows running in the background to ensure that it
	  manages the scheduled connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If Mail Remote for Windows is running when a user chooses the Send command from
	inside the application, the message is put into the Outbox and sent at the next
	scheduled connection or whenever the user activates the Send.
	
	However, if Mail Remote for Windows is not running, performing a Send brings up
	the password dialog box, the user is asked to Sign In, and the connection takes
	place immediately.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
