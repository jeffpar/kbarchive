---
layout: page
title: "Q130521: Novell Password Cached and Login Script Processed Only Once"
permalink: /kb/130/Q130521/
---

## Q130521: Novell Password Cached and Login Script Processed Only Once

	Article: Q130521
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Client for NetWare Networks, Windows 95 does not
	prompt you for another Novell logon password in Network Neighborhood after you
	have logged off the Novell network server. Also, your login script is not
	processed again.
	
	CAUSE
	=====
	
	When you log off the Novell server, you are actually logged off. However, your
	password is cached. When you try to access the Novell server again, you are
	logged back on using the cached password. Your login script is processed only at
	the initial logon. Subsequent logons in Windows 95 do not process the login
	script again.
	
	RESOLUTION
	==========
	
	To prevent your logon password from being cached, use Policy Editor to disable
	password caching. Or, click Shutdown on the Start menu and then click the "Close
	all programs and log on as a different user" option in the Shut Down Windows
	dialog box. Using this option forces Windows 95 to prompt you for a new user
	name and password for logging on to the Novell server. After you log on again
	(whether as the same user or a different user), a password will be required for
	the Novell server and your login script will be processed again.
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
