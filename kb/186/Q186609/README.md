---
layout: page
title: "Q186609: Terminal Server's Application Security"
permalink: /kb/186/Q186609/
---

## Q186609: Terminal Server's Application Security

	Article: Q186609
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Terminal Server administrator tool, Application
	Security. This tool is used to limit user applications to an explicit set of
	executables.
	
	MORE INFORMATION
	================
	
	This utility is very powerful. Its effect is similar to setting a system policy
	that allows users to run only specific applications. The difference is that the
	system policy only watches over the shell. That is, if your application allows
	you to return to a command prompt, the system policy will not prevent users from
	running an application from the prompt. Application Security does not have this
	limitation.
	
	The Application Security application lets the administrator decide exactly which
	programs clients can execute. However, while this feature gives the
	administrator a great deal of control, the administrator must manually authorize
	every executable that the client will run. This may be a good solution if the
	administrator intends for clients to run only a few applications. However, if
	the clients will be running more than a few applications, the administrator may
	find that using policies and profiles or an NTFS file and directory permissions
	is a better solution.
	
	You can start the Application Security application from the
	Start/Programs/Administrative Tools menu, or at the command prompt with the
	APPSEC command. When you start the utility, you first have the option to enable
	or disable security. This gives administrators a quick way to turn off security
	if something does not work.
	
	If Application Security is set so that a user can run no applications, after
	security has been enabled, a client can still attempt to connect to the Terminal
	Server. Administrators can always connect, because Application Security does not
	affect them. Non- administrative clients will receive an error when they attempt
	to log on:
	
	  An error (193) occurred while creating user logon. Failing component:
	  explorer.exe.
	
	When you click OK, the client will terminate.
	
	At the Terminal Server, the administrator can add Explorer.exe to the list of
	authorized applications. To do this, run the Application Security application
	and choose ADD. Browse for the application or enter the path:
	
	  drive:\systemroot\explorer.exe
	
	If the non-administrator user tries to connect to the Terminal Server at this
	point, an error similar to the following will occur:
	
	  D:\Winnt\System32\SysTray.Exe is not a valid Windows NT application.
	
	Systray is the application that runs the Task bar.
	
	This is the standard error message seen when users attempt to run unauthorized
	applications. Occasionally, the error will occur without a file name being
	displayed (<blank> is not a valid Windows NT application). If this
	happens, the administrator needs to look at the properties for the unauthorized
	application, to determine which executable needs to be added in Application
	Security.
	
	With Explorer.exe and SysTray.exe authorized, the client should be able to view
	the Desktop. Some functions (such as Find) that are part of Windows Explorer
	will run, but most will generate the "not a valid Windows NT application" error
	until the administrator authorizes the application.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
