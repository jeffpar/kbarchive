---
layout: page
title: "Q184125: Setup Computer Wizard Does Not Set Up Printer for Client"
permalink: /kb/184/Q184125/
---

## Q184125: Setup Computer Wizard Does Not Set Up Printer for Client

	Article: Q184125
	Product(s): Microsoft Windows NT
	Version(s): Windows:4.0,4.0a,95; WinNT:4.0
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Small Business Server client setup process on a Windows 95 or Windows NT
	computer does not include the creation of printers.
	
	If the Fax Client is installed, fax printers are created during the client setup
	process; this may be a source of confusion to SBS Administrators because the
	administrators are prompted for both printer and fax permissions during the
	creation of a user account.
	
	CAUSE
	=====
	
	The specification for the Setup Computer Wizard does not include setting up a
	printer for the client computer.
	
	RESOLUTION
	==========
	
	To work around this problem, use the Add Printer Wizard in the Printers folder
	to manually add printers to client computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Small Business Server versions
	4.0 and 4.0a. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	During the creation of a new user (Manage Users), you are prompted to give the
	new user permissions to both printers and faxes. After creating the user, you
	are prompted to run the Setup Computer Wizard. In the setup wizard, you only
	have the choice for installing applications, such as the Microsoft Fax Client.
	Because a printer is not an application, the Setup Computer Wizard will not
	automatically create printers on the client.
	
	Additional query words: smallbiz install installation create scw missing
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWin95search kbSBServSearch kbZNotKeyword3 kbSBServ400 kbSBServ400a
	Version           : Windows:4.0,4.0a,95; WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
