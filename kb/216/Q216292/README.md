---
layout: page
title: "Q216292: XFOR: Reasons for &quot;Unable to logon...&quot; Error Message"
permalink: kb/216/Q216292/
---

## Q216292: XFOR: Reasons for &quot;Unable to logon...&quot; Error Message

	Article: Q216292
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the Migration wizard to migrate account information from LDAP
	directories, you may receive the following error message:
	
	  Unable to log on to the server. Please verify server name, port, account name
	  and password.
	
	You may get this error message for a number of other reasons, listed in the "More
	Information" section of this article.
	
	MORE INFORMATION
	================
	
	
	If you get this error message, check the following:
	
	- LDAP Server Name
	
	- LDAP Port
	  This is typically TCP/IP port 389 or port 636 for LDAP over SSL.
	
	- Account Name
	  You must use the full distinguished name (DN).
	
	- Password
	
	- Default Naming Context
	  For servers with a default naming context specified, you must specify this in
	  the Internet Directory server name field. For example:
	
	  ldapserver/o=org
	
	- ADSI 2.0
	  Verify that the correct version of ADSI 2.0 is installed. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q216290 XFOR: Verifying which Version of ADSI Is Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
