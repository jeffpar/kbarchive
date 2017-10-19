---
layout: page
title: "Q170858: Err. Msg.: The Referenced Account is Currently Locked Out"
permalink: /kb/170/Q170858/
---

## Q170858: Err. Msg.: The Referenced Account is Currently Locked Out

	Article: Q170858
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access the Internet Information Server (IIS) from a browser, you
	may get one of the following error messages:
	
	  HTTP/1.0 500 Server Error (The referenced account is currently
	  locked out and may not be logged on to. )
	
	  -or-
	
	  Internet Explorer cannot open the Internet site http://
	  The requested header was not found.
	
	CAUSE
	=====
	
	The account being used to logon to IIS (including the Anonymous logon user
	account) is locked out. This condition may result because the password may be
	expired or the password for the Anonymous logon user account does not match the
	password for the account in User Manager.
	
	WORKAROUND
	==========
	
	1. Open User Manager.
	
	2. Select the account being used to logon.
	
	3. Select User and then Properties.
	
	4. Disable the Account Locked Out.
	
	5. If the password has expired, type and confirm the password in the User
	  Properties.
	
	6. If the logon account being used is the Anonymous logon user account, then go
	  to Internet Service Manager. Select WWW Service Properties, and type and
	  confirm the same password used in User Manager.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
