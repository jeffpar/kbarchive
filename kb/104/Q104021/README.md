---
layout: page
title: "Q104021: Removing the Workgroup MS Mail Postoffice"
permalink: /kb/104/Q104021/
---

## Q104021: Removing the Workgroup MS Mail Postoffice

	Article: Q104021
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The following procedure outlines the steps to remove an unwanted
	workgroup postoffice (WGPO) under Windows NT. This procedure returns
	Microsoft Mail to the state it was in before running Mail for the
	first time.
	
	Windows NT 4.0
	--------------
	
	If you are running Windows NT 4.0, you can easily remove the post office
	by simply:
	
	1. Go to Control Panel.
	
	2. Select Add/Remove Programs.
	
	3. Click Windows NT Setup.
	
	4. Uncheck the Windows Messaging check box.
	
	Windows NT 3.x
	--------------
	
	WARNING: Back up (export) any mail you want to retain before proceeding
	with the following.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Using File Manager, delete the postoffice directory and all subdirectories in
	  it. The default name of the Windows NT postoffice directory is WGPO and it
	  can be located in the root directory or a subdirectory of any available
	  partition on the hard disk drive.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	2. Start Registry Editor (REGEDT32.EXE) and select the following subkey to
	  highlight it:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Mail\Microsoft Mail
	
	3. Press the DELETE key on your keyboard, or choose Delete from the Edit menu,
	  and then press ENTER to confirm the action.
	
	The next time you start MS Mail, you will have the option of
	connecting to an existing postoffice, or creating a new postoffice,
	and then continuing with the rest of the initial MS Mail setup.
	
	REFERENCES
	==========
	
	Windows NT "System Guide," chapter 7
	
	Additional query words: prodnt post office manager po
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51,4.0
	
	=============================================================================
	
