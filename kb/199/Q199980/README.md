---
layout: page
title: "Q199980: XFOR: Err Msg: Could not Migrate MMF File for Account"
permalink: /kb/199/Q199980/
---

## Q199980: XFOR: Err Msg: Could not Migrate MMF File for Account

{% raw %}

	Article: Q199980
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server administrator may receive the following error message when
	attempting to migrate a user from Microsoft Mail to Exchange Server:
	
	  Could not migrate MMF file for account.
	
	In the Event Viewer, the administrator may see the following events:
	
	  Event ID: 151 Source: MSExchangeMig Description: "Could not migrate MMF file
	  for account. " "UserId : <username>"
	
	  "Mmfpath: <path>"
	
	  -or-
	
	  ID: 135 Source: MSExchangeMig Description: "Could not migrate MMF file for
	  account. " "UserId : <username>" "Mmfpath: <path>"
	
	CAUSE
	=====
	
	The mail message file (MMF) is either locked open or is in an unstable
	condition.
	
	WORKAROUND
	==========
	
	To work around this problem, the administrator should follow these steps:
	
	1. Recover the user's MMF password.
	
	2. Logon as that user, and then log off.
	
	3. Rerun the migration utility for this user.
	
	The user should now be migrated without a problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
