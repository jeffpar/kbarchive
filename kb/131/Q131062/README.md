---
layout: page
title: "Q131062: Network Connections Made From Logon Script May Fail"
permalink: kb/131/Q131062/
---

## Q131062: Network Connections Made From Logon Script May Fail

	Article: Q131062
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows for Workgroups 3.11 or Windows 95 client initiates a session
	between the client and a server (for example, you run NET USE) from a login
	script, the connection may fail.
	
	CAUSE
	=====
	
	The connection fails because the domain name is not passed to the server in the
	Session Setup&X SMB. Without a domain name in the Session Setup&X SMB,
	the server checks to see if the user name exists in the local SAM database. If
	found, the user's password is compared to the one in local SAM database. If the
	user's name is not present in the server SAM database, the server sends
	pass-through authentication requests to each domain being trusted. The first one
	that responds is used to authenticate the user. If the password for the account
	doesn't match, the user is prompted for the password.
	
	This can cause problems when your network environment requires users to have
	duplicate accounts in multiple domains.
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually keep the passwords in each domain
	synchronized for users requiring multiple accounts.
	
	Once the user is logged in and the logon script has completed, any subsequent
	commands that initiate a session between the client and a server are sent with
	the domain name. Therefore, the problem should not occur when you attempt to
	initiates a session again.
	
	Additional query words: 3.11 95 win95 winnt wfw wfwg logon script in-sync sync
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WINDOWS:3.11,95
	Issue type        : kbprb
	
	=============================================================================
	
