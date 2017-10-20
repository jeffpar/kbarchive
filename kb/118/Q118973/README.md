---
layout: page
title: "Q118973: Err Msg: Login Failure Account Restriction w/ NetWare Gateway"
permalink: /kb/118/Q118973/
---

## Q118973: Err Msg: Login Failure Account Restriction w/ NetWare Gateway

{% raw %}

	Article: Q118973
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to set up a NetWare gateway on Windows NT Advanced Server, the
	following error message may appear when you add a share:
	
	  Login failure. Account restriction.
	
	CAUSE
	=====
	
	This can be caused by using a NetWare user account that has Limit Concurrent
	Connections set to Yes under Account Restrictions in SYSCON, and that user
	account has exceeded the maximum number of concurrent connections it is allowed
	to have. For example the Maximum Connections is set to 1 and the user is already
	logged on to Windows NT and has a drive connection to the NetWare server.
	
	RESOLUTION
	==========
	
	To avoid this problem, do one of the following:
	
	- Use an account that is reserved for the gateway account and not an existing
	  user's account.
	
	  -or-
	
	- Increase the maximum number of concurrent connections for that user account
	  using SYSCON.
	
	  -or-
	
	- Set Limit Concurrent Connections to No for that user account using SYSCON.
	
	The NetWare product discussed here is manufactured Novell Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt 3.10 nwcs gsnw csnw services ncc logon
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	
	=============================================================================
	

{% endraw %}
