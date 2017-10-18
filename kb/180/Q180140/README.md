---
layout: page
title: "Q180140: SBS WinNT Workstation Client Has Server Service Error"
permalink: kb/180/Q180140/
---

## Q180140: SBS WinNT Workstation Client Has Server Service Error

	Article: Q180140
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup sbs
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Microsoft Small Business Server client setup disk on a
	workstation running Windows NT 4.0 with Service Pack 3, the following error
	message may be displayed on restarting:
	
	  Service Control Manager
	  -----------------------
	  At least one service or driver failed during system startup.
	  Use Event Viewer to examine the event log for details.
	
	The event viewer may have two logs pertaining to this error as follows:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Description: The Server service terminated with the following error:
	               Not enough server storage is available to process this
	               command.
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Type: Error
	  Description: The Computer browser service depends on the server
	               service which failed to start because of the following
	               error:  Not enough server storage is available to
	               process this command.
	
	CAUSE
	=====
	
	After the client setup procedure finishes, the user is prompted to reinstall
	Service Pack 3. Failing to reinstall SP3 when prompted following the Windows NT
	Workstation client setup will prevent Computer Browser and Server services from
	starting thereafter.
	
	RESOLUTION
	==========
	
	To work around this problem, reinstall Service Pack 3 on the Windows NT
	Workstation client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft BackOffice Small
	Business Server Version 4.0. We are researching this problem and will post
	additional information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: sbs
	======================================================================
	Keywords          : kbsetup sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
