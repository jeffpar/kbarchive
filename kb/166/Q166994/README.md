---
layout: page
title: "Q166994: XWEB: Spaces in Alias Name Cause &quot;Failed to get Inbox&quot;"
permalink: /kb/166/Q166994/
---

## Q166994: XWEB: Spaces in Alias Name Cause &quot;Failed to get Inbox&quot;

	Article: Q166994
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a browser to access a Microsoft Exchange Server mailbox
	(that is, using the Microsoft Exchange Server Web Connector), one of the
	following error messages is displayed:
	
	  Microsoft Internet Explorer
	  Failed to get inbox.
	
	  -or-
	
	  Netscape Navigator
	  Failed to get inbox.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server mailbox alias name has a comma or spaces in it.
	
	RESOLUTION
	==========
	
	Your server administrator can use the Microsoft Exchange Server Administrator
	program to remove any spaces from any mailbox name that contains spaces.
	
	NOTE: An underscore can be used in the alias name without problem.
	
	NOTE: This same error can also be an example of an ambiguous name resolution
	problem. This occurs when the alias names are similar to other alias names due
	to the last name being the same. If you perform a check name on an Exchange or
	Outlook Client and it pulls up a list, this is what is happening.
	
	Additional query words: Kluane web connector IE explorer browser netscape
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbExchangeActiveServComp500
	Version           : 5.0
	
	=============================================================================
	
