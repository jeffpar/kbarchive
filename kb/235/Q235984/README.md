---
layout: page
title: "Q235984: XADM: Event ID 1025 During Information Store Storage Warning"
permalink: kb/235/Q235984/
---

## Q235984: XADM: Event ID 1025 During Information Store Storage Warning

	Article: Q235984
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the information store storage warning cycle, you may see the following
	warning logged in the Event Viewer:
	
	  Event ID: 1025
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: General
	  Description: An error occurred.
	  Function name or description of problem: EcDoDeliverMessage
	  Error: 0x4d9
	
	The user may also receive a storage limit warning message.
	
	CAUSE
	=====
	
	A user or users have exceeded their mailbox storage limit and the storage
	warning message is unable to be delivered to the user by the system attendant.
	
	In situations where both a storage limit warning message is delivered to the user
	and a 1025 event is logged, the user may have a rule set in his or her mailbox,
	which is applied on the storage limit warning message. Because of the storage
	quota limit, the rule cannot be applied, and event 1025 is logged.
	
	RESOLUTION
	==========
	
	Have those users who have exceeded their mailbox storage limit clean out or
	archive messages from their mailboxes. Or, raise or remove their mailbox storage
	limit in the Microsoft Exchange Server Administrator program.
	
	MORE INFORMATION
	================
	
	Use the Error.exe utility on the Exchange Server CD in the
	Support\Utils\<Platform> folder to determine what error 0x4d9 means.
	
	  Error 0x4d9 is:
	  Error 1241 (0x4d9) = ecQuotaExceeded
	
	To find out which users have exceeded their mailbox storage limits:
	
	1. In the Exchange Server Administrator program, under Private Information
	  Store, set Diagnostic Logging to Maximum on Storage Limits.
	
	2. In the application log, look for these Event IDs:
	
	  Event ID: 1077
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: Storage Limits
	  Description: The following users have exceeded the Issue Warning Storage
	  Limit:
	
	Depending on what storage limits you have set, you may also see these event IDs:
	
	  Event ID: 1078
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: Storage Limits
	  Description: The following users have exceeded the Prohibit Send Storage
	  Limit:
	
	  Event ID: 1218
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: Storage Limits
	  Description: The following users have exceeded the Prohibit Send and Receive
	  Storage Limit:
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
