---
layout: page
title: "Q201586: Reinstalling the SBS Client Computer to an Existing Client"
permalink: /kb/201/Q201586/
---

## Q201586: Reinstalling the SBS Client Computer to an Existing Client

	Article: Q201586
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Small Business Server (SBS) client software to a
	computer that is currently a member of another SBS domain, or when trying to run
	a new client disk to change the information on an existing SBS client, the
	following error messages may result and prevent the SBS client software from
	functioning:
	
	  Setup was unable to open the information file
	  \\<servername>\clients\response\<machinename>\clioc.inf
	  Contact your system administrator. The Specific error code is ## at line
	  ########
	
	  Setup was unable to load the master information file.
	
	  The Application could not be initialized.
	
	RESOLUTION
	==========
	
	To work around this problem, prepare the server and the workstation for the SBS
	client install by performing the following steps, where appropriate.
	
	On the Client Machine
	---------------------
	
	You may get errors when removing applications -- ignore them and continue through
	all steps.
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Select Microsoft BackOffice Small Business Server.
	
	4. Click Add/Remove.
	
	5. Click to clear the SBS Applications you want to remove.
	
	  NOTE: You cannot deselect the Microsoft Small Business Client.
	
	6. Click Next, continue with the rest of the uninstall.
	
	  NOTE: It is recommended you leave shared files in place if you are prompted to
	  remove any during the uninstall.
	
	7. In the root directory of the hard drive, locate and delete the following
	  file:
	
	  Startcli.log
	
	8. Restart the client computer.
	
	On the Server
	-------------
	
	1. Remove the reference to the old workstation from the following folder:
	
	  <drive>:\SmallBusiness\Clients\RESPONSE\
	
	2. There will be a folder here named the same as the computer name. Delete this
	  folder and all of its contents.
	
	The client computer can now be set up with a new SBS client setup disk It is
	important that you create a new client setup disk for each computer you want to
	have on the SBS network.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbAudDeveloper kbWin95search kbWin98search kbSBServSearch kbZNotKeyword3 kbWin98 kbSBServ400 kbSBServ400a
	Version           : WINDOWS:95; winnt:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
