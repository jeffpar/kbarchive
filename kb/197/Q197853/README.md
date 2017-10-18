---
layout: page
title: "Q197853: SBS Client Setup Will Not Run After Reboot"
permalink: kb/197/Q197853/
---

## Q197853: SBS Client Setup Will Not Run After Reboot

	Article: Q197853
	Product(s): Microsoft Windows NT
	Version(s): Windows:95; WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbnetwork sbs
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Small Business Server (SBS) client setup application configures a new
	workstation to join the SBS domain, but does not install client applications
	after rebooting.
	
	CAUSE
	=====
	
	This problem can occur because of any of the following:
	
	- The user is not set up to use a logon script.
	
	- The user does not have permission to run the logon script.
	
	- The logon script does not exist.
	
	RESOLUTION
	==========
	
	Any user created through the console will be set up to use a logon script. This
	setting can be verified from User Manager for Domains by following these steps:
	
	1. Select the user.
	
	2. Press ENTER to view properties.
	
	3. Click Profiles.
	
	4. Verify that the logon script name is SmallBusiness\<username>.bat.
	
	5. Verify that this file exists in the following folder:
	  %SystemRoot%\System32\Repl\Import\Scripts\SmallBusiness
	
	6. If the logon script is missing, copy it from
	
	  c:\smallbusiness\template\template.bat
	
	  to
	
	  %SystemRoot%\System32\Repl\Import\Scripts\SmallBusiness\<username>.bat
	
	7. In the Manager Server Console, run the software setup for this user and his
	  or her computer again.
	
	8. Verify that the user has read permission on the scripts folder, the
	  Smallbusiness folder, and the <username>.bat file.
	
	MORE INFORMATION
	================
	
	The user's logon script is stored under the following folder:
	
	  %SystemRoot%\System32\Repl\Import\Scripts
	
	By default, this folder should be shared out as Netlogon and the Everyone group
	should have read permission to both the share and the folder.
	
	The scripts folder should contain a SmallBusiness folder. The Everyone group
	should have read permission on this folder.
	
	In the SmallBusiness folder, there should be a batch file named after each user
	for which a client workstation has been set up. This batch file starts the
	client application installation program and sets the parameters for that
	installation.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbnetwork sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbAudDeveloper kbWin95search kbWin98search kbSBServSearch kbZNotKeyword3 kbWin98 kbSBServ400 kbSBServ400a
	Version           : Windows:95; WinNT:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
