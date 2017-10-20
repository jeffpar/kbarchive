---
layout: page
title: "Q155124: XADM: Error: Initializing Extension Data Attributes"
permalink: /kb/155/Q155124/
---

## Q155124: XADM: Error: Initializing Extension Data Attributes

{% raw %}

	Article: Q155124
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While displaying the properties for the Mailbox Cleanup Agent in the Microsoft
	Exchange Administrator program, you may receive the following error message:
	
	  Error: Initializing Data Extensions
	
	Also, when changing any of the settings for Mailbox Cleanup Agent, you may
	receive a Dr. Watson error similar to the following:
	
	  An application error has occurred and an application error log is being
	  generated.
	  Admin.exe
	  Exception: Access Violation (0xc0000005), Address: 0x00ab4932
	
	CAUSE
	=====
	
	The behavior mentioned above will be seen when the Display Name of your Exchange
	Site contains one or more non-alphanumeric characters, such as a space or a
	parenthesis.
	
	WORKAROUND
	==========
	
	Remove all non-alphanumeric characters from the display name of the Exchange
	Site.
	
	STATUS
	======
	
	This has been fixed in Mailbox Cleanup Agent Version 1.4 that shipped in the
	BackOffice Resource Kit, Part One. This utility and other Exchange tools in the
	BackOffice Resource Kit, Part One, can be downloaded from the Exchange 4.0
	Resource Kit page on http://www.microsoft.com/exchange.
	
	
	Additional query words: 4.00 resource kit mailbox MCA
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
