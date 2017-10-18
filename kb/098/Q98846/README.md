---
layout: page
title: "Q98846: Netwkstasetuid2 (Return 5) Error Means Privilege Problem"
permalink: kb/098/Q98846/
---

## Q98846: Netwkstasetuid2 (Return 5) Error Means Privilege Problem

	Article: Q98846
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	The undocumented error
	
	  Netwkstasetuid2 (return 5)
	
	occurs when a user tries to log on.
	
	CAUSE
	=====
	
	Netwkstasetuid2 is a net API call that logs a user on or off from the network
	and runs the logon script. Error # 5 means that access is denied because the
	user has insufficient privileges.
	
	Possible reasons:
	
	- corrupt user password
	
	- corrupt user account database or file permissions
	
	- many users logged on at once
	
	RESOLUTION
	==========
	
	If too many users logged on at once and initiated the error, have users who
	received the error log on again after some time. This often is enough to clear
	the problem.
	
	Otherwise, investigate the password, user account database or file permissions
	and correct any problems you find.
	
	REFERENCES
	==========
	
	"Microsoft LAN Manager Programmer's Reference," page 677
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
