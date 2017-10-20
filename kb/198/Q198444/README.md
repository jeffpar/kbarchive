---
layout: page
title: "Q198444: XWEB: Can't Log On to OWA because of Ambiguous Mailbox Names"
permalink: /kb/198/Q198444/
---

## Q198444: XWEB: Can't Log On to OWA because of Ambiguous Mailbox Names

{% raw %}

	Article: Q198444
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5,5.5SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to log on to an Outlook Web Access (OWA) client, you may
	encounter the following error message:
	
	  HTTP Error 401
	  401.1 Unauthorized: Logon Failed
	
	  This error indicates that the credentials passed to the server do not
	  match the credentials required to log on to the server.
	
	  Please contact the Web server's administrator to verify that you have
	  permission to access the requested resource.
	
	  -or-
	
	  Failed to get Inbox.
	
	CAUSE
	=====
	
	This problem may occur because of a problem with ambiguous name resolution. In
	the case that there are two or more ambiguous Exchange Server mailboxes aliases,
	the log on cannot be resolved correctly.
	
	For example, if there are two mailboxes with aliases such as JohnA and JohnAa,
	the ambiguity of the aliases cannot be resolved by OWA.
	
	RESOLUTION
	==========
	
	When creating domain accounts, administrators should try to avoid using names
	with similar prefixes and repeating suffixes. Try to create unique Windows NT
	domain logon names as well as Exchange Server mailbox alias names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5,5.5SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
