---
layout: page
title: "Q99165: Explanation of the num_logons Variable"
permalink: kb/099/Q99165/
---

## Q99165: Explanation of the num_logons Variable

	Article: Q99165
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	NetWkstaSetUID2, NetUserGetInfo, and NetUserValidate2 reference the variable
	usrlog1_num_logons. This article explains the meaning supplied for the value of
	this variable and what conditions cause the value to be reset.
	
	Page 669 of the "Microsoft LAN Manager Programmer's Reference" states that this
	value is for the "number of times this user user is logged on." A clearer
	statement is:
	
	     [num_logons is a cumulative historical record of logons ]
	
	      num_lo
	
	  Specifies the total number of times this user has logged on. A value of -1
	  means the number of logons is UNKNOWN or that the user's account is set to
	  logon to "any server".
	
	
	MORE INFORMATION
	================
	
	As stated above, the "number of times this user is logged on" is not the number
	of concurrent logons but the number of cumulative logons for a given user.
	
	The user option shown in /Net Admin/Accounts/Users/Zoom/Paths must be set for a
	specific server to handle logon requests:
	
	  ( ) Domain controller
	  ( ) Any Server
	  (*) Servername [.....................] <-Set to specific servername
	
	The usrlog1_num_logons value is changed to zero if the user preference noted
	above is changed (for example, to Domain controller, Any Server, and so on).
	
	The value is zero when the user account is created, and it is incremented for
	each logon to a specified "named" server. Otherwise, the value remains -1
	(UNKNOWN)--the "Any Server" options do not allow a consistent updating of the
	num_logons variable.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
