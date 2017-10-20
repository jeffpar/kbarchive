---
layout: page
title: "Q245035: Logon Script Does Not Run Remotely Using RAS Dial-up Connection"
permalink: /kb/245/Q245035/
---

## Q245035: Logon Script Does Not Run Remotely Using RAS Dial-up Connection

{% raw %}

	Article: Q245035
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	Also applies to Windows 2000 Professional clients.
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a domain through a Remote Access Service (RAS) dial-up
	connection from a Microsoft Windows NT Workstation 4.0-based computer, logon
	scripts that are set to run may not run. However, when you use the same user
	account to log on to the domain through a RAS dial-up connection from a
	Microsoft Windows 95-based computer, the logon scripts run as expected.
	
	CAUSE
	=====
	
	This behavior can occur if the Windows NT Workstation 4.0-based computer does
	not have a computer account on the domain. In order for logon scripts to run,
	you must log on to the domain, and logging on to a domain from a Windows NT
	Workstation-based computer requires that the computer have a computer account on
	the domain.
	
	NOTE: In order to logon to the domain through RAS, you must use the check box on
	the <CTRL> + <ALT> + <DEL> screen.
	
	RESOLUTION
	==========
	
	You can work around this issue by using the steps below.
	
	NOTE: Microsoft does not recommend running logon scripts when you log on to a
	domain through a RAS dial-up connection. In Windows NT 4.0, you can use a user
	profile to achieve the same result.
	
	1. Make sure that the remote Windows NT Workstation 4.0-based computer has a
	  computer account on the domain.
	
	2. If this does not resolve the issue, follow one of these steps:
	
	  a. Use Windows 95 or Microsoft Windows 98 as the operating system for
	     computers that are to log on to the domain through a RAS dial-up
	     connection.
	
	  -or-
	
	  b. Create a shortcut to the script file, and then place the shortcut in the
	     StartUp folder on the remote computers.
	
	  NOTE: The script file is located on the Netlogon share. The default location
	  of the Netlogon share on the primary domain controller is the
	  %SystemRoot%\System32\Repl\Import\Scripts folder.
	
	Additional query words: dialin RAS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
