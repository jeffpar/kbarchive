---
layout: page
title: "Q201012: XADM: Error Accessing Properties of Mailbox Cleanup Agent"
permalink: kb/201/Q201012/
---

## Q201012: XADM: Error Accessing Properties of Mailbox Cleanup Agent

	Article: Q201012
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to open and view properties on the Mailbox Cleanup Agent
	version 1.9.1 from an Exchange Server computer that does not have the Mailbox
	Cleanup Agent Service installed, you may get the following error message:
	
	  Unable to initialize Extension Data Attributes!
	
	After you click OK, you see the Mailbox Cleanup Agent Properties page, but when
	you attempt to click on any of the tabs, you get the following error message:
	
	  An exception has occurred in an extension .DLL file. Contact your extension
	  supplier Microsoft Exchange Administrator ID No: c10312fb
	
	Also, if you click on the Exclude Mailbox button and try to cancel the screen,
	you might receive a Dr. Watson error message similar to the following:
	
	  An application error has occurred and an application error log is being
	  generated. Admin.exe Exception: Access Violation (0xc0000005), Address:
	  0x10005cbd
	
	CAUSE
	=====
	
	The reason for this behavior is that the Mailbox Cleanup Agent can only be
	administered from the computer on which the service was installed.
	
	WORKAROUND
	==========
	
	Administer the Mailbox Cleanup Agent from the server where the Mailbox Cleanup
	Agent Service is running.
	
	MORE INFORMATION
	================
	
	Mailbox Cleanup Agent is a server-based Exchange Server utility in the Microsoft
	BackOffice Resource Kit and the Microsoft Exchange Resource Kit that can be used
	to delete older e-mail messages by logging onto each mailbox and deleting mail
	information based on certain parameters.
	
	Additional query words: MCA
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
