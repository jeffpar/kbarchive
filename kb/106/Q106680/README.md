---
layout: page
title: "Q106680: SFM: Macintosh Users Not Logged Off Despite Time Restrictions"
permalink: /kb/106/Q106680/
---

## Q106680: SFM: Macintosh Users Not Logged Off Despite Time Restrictions

	Article: Q106680
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Advanced Server allows for Logon Time Restrictions to be set on User
	accounts. If a Macintosh client is already logged on to a Windows NT Advanced
	Server and the allowable time frame for logging on has expired, that User will
	not be logged off from the server and will not receive any messages regarding
	time restrictions.
	
	Usually, if the Time Restrictions expire, a User would be logged off and receive
	a message stating their time restrictions have expired. However, once a
	Macintosh client is logged on, any Time Restrictions set on the User account do
	not apply until the User logs off and tries to log back on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
