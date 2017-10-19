---
layout: page
title: "Q169263: Err Msg: HTTP 1.0 Server 500 Error: The Referenced Account Is..."
permalink: /kb/169/Q169263/
---

## Q169263: Err Msg: HTTP 1.0 Server 500 Error: The Referenced Account Is...

	Article: Q169263
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the passwords in User Manager and Internet Server Manager are not identical,
	you will get the following error message:
	
	  HTTP 1.0 Server 500 Error: The referenced account is currently
	  locked out and may not be logged onto.
	
	CAUSE
	=====
	
	If in User Manager, under account policies, the Account Lockout security feature
	has been selected, and the passwords for the anonymous Internet account
	(IUSR_machine-name, by default) are different in User Manager and Internet
	Service Manager, then when you establish an anonymous connection, you will get
	an incomplete header message returned the first time. On subsequent login
	attempts, you will get the following error message:
	
	  Server 500 error: THE REFERENCED ACCOUNT IS CURRENTLY LOCKED OUT
	  AND MAY NOT BE LOGGED ONTO.
	
	This occurs because IUSR tried to log onto the server with an incorrect password.
	After x attempts (where x is defined in User Manager, Policies, Account, Lockout
	after x bad login attempts), the account becomes locked out.
	
	WORKAROUND
	==========
	
	To restore this account, you must first go into User Manager, open the
	properties for the account, and clear the check box in the account locked out
	check box. Next, you must change the passwords in User Manager and Internet
	Server Manager making sure that they are identical.
	
	Additional query words: iis remove
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
