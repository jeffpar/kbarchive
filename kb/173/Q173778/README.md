---
layout: page
title: "Q173778: XWEB: HTTP/1.0 500 Server Error-The Account Is Currently Locked"
permalink: /kb/173/Q173778/
---

## Q173778: XWEB: HTTP/1.0 500 Server Error-The Account Is Currently Locked

	Article: Q173778
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a client mailbox on an Exchange Server 5.0 computer using a
	Web browser such as Internet Explorer, the following error message occurs:
	
	  HTTP/1.0 500 Server Error (The referenced account is currently locked out and
	  may not be logged on to.)
	
	CAUSE
	=====
	
	The user is attempting to log on to an account that is locked by the Windows NT
	account information. This may be due to logging on with incorrect information a
	number of times, and thus exceeding the limit set by the administrator for bad
	login attempts.
	
	WORKAROUND
	==========
	
	After you have waited the amount of time set in the lockout duration by the
	administrator in User Manager for Domains for invalid logins, try logging on
	again to the Exchange Server computer, or have the Windows NT administrator
	reset the account information and unlock the account.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	
	=============================================================================
	
