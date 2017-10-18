---
layout: page
title: "Q196095: PRB: SBS Client Installation Does Not Continue After Restart"
permalink: kb/196/Q196095/
---

## Q196095: PRB: SBS Client Installation Does Not Continue After Restart

	Article: Q196095
	Product(s): Microsoft Windows NT
	Version(s): Windows:95,98;WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Small Business Server (SBS) Client Setup Disk on a computer
	running Windows 95, Windows 98, or Windows NT Workstation 4.0 and then restart
	the computer, the SBS Client Application installation program does not continue
	after the initial logon screen and finish the applications install.
	
	The logged on user does get a logon script, and has full connectivity to the SBS
	server as determined by permissions set during User Setup Wizard.
	
	Shortcuts appear on desktop and are available.
	
	CAUSE
	=====
	
	The cause for this problem can be any of the following:
	
	- The computer was a client to another SBS domain at some time.
	
	- The client setup installation was previously stopped.
	
	- There was a corrupted log file during setup.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Locate and delete the following LOG file:
	
	  c:\startcli.log
	
	2. Restart the client computer.
	
	3. If the SBS Client Installation does not continue when logging on, click
	  Start, click Run, and type the following line:
	
	  \\<ServerName>\clients\setup\<ClientType>\startcli.exe
	
	  Replace <ServerName> with the name of your SBS Server.
	
	  Replace <ClientType> with i386 for Windows NT Workstation clients and
	  win95 for Windoes 95 or Windows 98 clients.
	
	4. Click OK.
	
	
	Additional query words: kbDSupport abort
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin95search kbWin98search kbSBServSearch kbZNotKeyword3 kbWin98 kbSBServ400 kbSBServ400a
	Version           : Windows:95,98;WinNT:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
