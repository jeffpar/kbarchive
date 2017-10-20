---
layout: page
title: "Q106102: Environment Vars in Logon Scripts on a Non-Windows NT Client"
permalink: /kb/106/Q106102/
---

## Q106102: Environment Vars in Logon Scripts on a Non-Windows NT Client

{% raw %}

	Article: Q106102
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Windows NT system environment variables in a logon script, those
	environment variables will not be correctly resolved when you attempt to log on
	to a non-Windows NT client.
	
	NOTE: This can also occur in Windows 95, 98, and 98 SE.
	
	MORE INFORMATION
	================
	
	Windows NT allows you to specify a logon script as part of the profile for each
	user name account on the domain and on the local computer. Each time an attempt
	is made to log on with a particular user name, the user name's associated logon
	script will execute. Within the logon script, you may include Windows NT system
	environment variables. However, if you attempt to log on to a Windows NT
	Advanced Server-based domain from a non-Windows NT client, any Windows NT system
	environment variables contained within the logon script will not be resolved on
	the non-Windows NT client. This is expected behavior because the Windows NT
	system environment variables are not defined on the non-Windows NT client.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create the following logon script in any text editor and save it as
	  TSTSCRPT.BAT:
	
	     echo off
	     echo hello %USERNAME%
	     echo thank you for logging on to %USERDOMAIN%
	     pause
	
	2. Using User Manager for Domains on a Windows NT Advanced Server Domain
	  Controller, create a domain user account called 'Test' and modify the profile
	  so that TSTSCRPT.BAT is specified as the Logon Script Name.
	
	3. Log on to the domain from a client computer running a non-Windows NT
	  networking operating system, such as LAN Manager or Windows for Workgroups
	  3.1. The logon script will execute and the following will be displayed on the
	  screen:
	
	     hello
	     thank you for logging on to
	     Press any key to continue...
	
	The environment variables %USERNAME% and %USERDOMAIN% will not be resolved, thus
	leaving no information on the screen for those values.
	
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
