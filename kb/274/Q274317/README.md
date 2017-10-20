---
layout: page
title: "Q274317: XADM: How to View Windows NT Accounts that Access Mailboxes"
permalink: /kb/274/Q274317/
---

## Q274317: XADM: How to View Windows NT Accounts that Access Mailboxes

{% raw %}

	Article: Q274317
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine if Microsoft Windows NT accounts are
	attempting to open mailboxes in Exchange Server.
	
	MORE INFORMATION
	================
	
	To view this information, follow these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. In the console tree, double-click Servers, right-click the server object, and
	  then click Properties.
	
	3. Click the Diagnostic Logging tab, and then in Services, click MSExchangeIS -
	  Private.
	
	4. In Categories, click "Logons and Access Control", and then set the logging
	  level to Maximum.
	
	5. Click OK to apply the settings. You do not have to restart any of the
	  services for event messages to be logged.
	
	Once the logging level is set, view the application event log in Event Viewer.
	Four different events messages report information about Windows NT accounts that
	are accessing mailboxes:
	
	- An event 1009 message indicates that a Windows NT account has logged into a
	  particular Exchange Server mailbox:
	
	  Event ID: 1009
	  Event Type: Success Audit
	  Event Source: MSExchangeIS Private
	  Event Category: Logons
	  Description: DOMAIN\User1 logged on as /o=ORG/ou=SITE/cn=Recipients/cn=User1.
	
	- An event 1013 message indicates that an account has opened its primary
	  mailbox, and that it has opened an additional mailbox. This message does not
	  report if the account has opened any folders or messages. To find this
	  information, you can check mail client permissions on folders in the client
	  program by getting the properties of folders in the client and checking the
	  Permissions tab. You can also check the Permissions tab on the properties of
	  the mailbox object in the Exchange Administrator program to see if any
	  additional accounts have been given direct or inherited permission to the
	  mailbox:
	
	  Event ID: 1013
	  Event Type: Success Audit
	  Event Source: MSExchangeIS Private
	  Event Category: Logons
	  Description: DOMAIN\User1 was validated as
	  /o=ORG/ou=SITE/cn=Recipients/cn=User1 and logged on to
	  /o=ORG/ou=SITE/cn=Recipients/cn=User2.
	
	- An event 1016 message indicates that a Windows NT account accessed an
	  Exchange mailbox, but that it is not the primary account for that mailbox.
	  This event message is logged regardless of the diagnostic logging level:
	
	  Event ID: 1016
	  Event Type: Success Audit
	  Event Source: MSExchangeIS Private
	  Event Category: Logons
	  Description: NT User DOMAIN\User1 logged on to User2 mailbox, and is not the
	  primary Windows NT account on this mailbox.
	
	- An event 1029 message indicates that a particular mailbox was unable to gain
	  access to a folder after it logged into another mailbox. To determine why
	  this mailbox was denied access, use the Exchange Administrator program to
	  determine which permissions have been set in the administrator and the client
	  computer:
	
	  Event ID: 1029
	  Event Type: Warning
	  Event Source: MSExchangeIS Private
	  Event Category: Access Control
	  Description: /O=ORG/OU=SITE/CN=RECIPIENTS/CN=USER1 failed an operation because
	  the user did not have the following access rights:
	
	  'Create Subfolder'
	
	  The distinguished name of the owning mailbox is
	  /O=ORG/OU=SITE/CN=RECIPIENTS/CN=USER2. The folder ID is in the data section
	  of this event.
	
	For the preceding event messages, User1 is accessing User2's mailbox. User1's
	Exchange mailbox is using DOMAIN\User1 as the primary Windows NT account.
	User2's mailbox is using DOMAIN\User2 as the primary Windows NT account.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q173692 XADM: Event 1016 Generated When You Open Mailbox or Schedule of
	  Another User
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
