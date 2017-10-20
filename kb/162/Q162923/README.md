---
layout: page
title: "Q162923: WinNT Err: User Cannot Be Authenticated on Server"
permalink: /kb/162/Q162923/
---

## Q162923: WinNT Err: User Cannot Be Authenticated on Server

{% raw %}

	Article: Q162923
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0;Win95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to log on to your NetWare server through Windows NT or Windows 95
	with the Client or Gateway Services for Netware installed you may receive the
	following error:
	
	  You Cannot Be Authenticated On <server name> Due To The Following
	  Reason: Logon Failure: Account Currently Disabled.
	
	  Do You Want To Select Another Preferred Server?
	
	CAUSE
	=====
	
	You will get this error message if all of the following conditions are true:
	
	- Your Windows NT or Windows 95 log on IDs match your NetWare logon.
	
	  -and-
	
	- Your passwords are unique to each other.
	
	  -and-
	
	- The Intruder Detection/Lockout is set to lockout user accounts after 1
	  incorrect login attempt.
	
	Windows NT and Windows 95 cache the logon password and use this password for a
	first attempt at logging on to other network resources. Because the lockout is
	set to 1, the account will be disabled after the first bad logon attempt.
	
	RESOLUTION
	==========
	
	Set the Incorrect Logon Attempts in the Intruder Detection/Lockout on the
	NetWare server to something greater than 1 attempt.
	
	Additional query words: lockout netware login GSNW CSNW
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWin95search kbWinNT310Search kbWinNTW310Search kbZNotKeyword3
	Version           : WinNT:3.1,3.5,3.51,4.0;Win95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
