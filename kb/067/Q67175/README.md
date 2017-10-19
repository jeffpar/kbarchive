---
layout: page
title: "Q67175: OS/2 LAN Manager: Last Logon Information Sometimes Incorrect"
permalink: /kb/067/Q67175/
---

## Q67175: OS/2 LAN Manager: Last Logon Information Sometimes Incorrect

	Article: Q67175
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you log onto a domain controller from the NET shell, you should receive the
	time of the last logon. However, "NEVER" is always displayed. Also, if you view
	the user account information, Last Logon always shows "NEVER."
	
	Microsoft has confirmed this to be a problem in OS/2 LAN Manager version 2.00. We
	are researching this problem and will post new information here as it becomes
	available.
	
	This problem can be avoided by specifying a particular server for a user to log
	onto. The server can be specified when creating or viewing a user account in the
	full screen "net admin" interface. Choosing the "<Paths>" option displays
	a dialog box that allows the following choices:
	
	  Logon server .  .  .     (.) Domain Controller
	                           ( ) Any Server
	                           ( ) Servername [.................]
	
	Choosing the "Domain Controller" or "Servername" option will enable this
	particular server to keep track of the last time the user logged onto the
	network (in the user's domain).
	
	If "Any Server" (which is the default) is specified, the system cannot track this
	logon information.
	
	MORE INFORMATION
	================
	
	For more information, please refer to pages 91 and 98 of the "Microsoft
	Operating System/2 LAN Manager Administrator's Guide."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
