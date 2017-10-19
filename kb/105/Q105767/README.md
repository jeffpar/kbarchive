---
layout: page
title: "Q105767: MS Mail Err Msg: Mail Cannot Be Started Because it Cannot..."
permalink: /kb/105/Q105767/
---

## Q105767: MS Mail Err Msg: Mail Cannot Be Started Because it Cannot...

	Article: Q105767
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears after you start Microsoft Mail for the first
	time and attempt to create a new workgroup postoffice or to connect to an
	existing postoffice:
	
	  Mail cannot be started because it cannot update its configuration
	  information.
	
	CAUSE
	=====
	
	This problem occurs if any one of the following conditions are true:
	
	- There is no Mail key in HKEY_CURRENT_USER\Software\Microsoft.
	
	- You do not have the permissions needed to modify
	  HKEY_CURRENT_USER\Software\Microsoft.
	
	- You do not have the permissions needed to modify the WIN.INI file.
	
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	There is no Mail key in HKEY_CURRENT_USER\Software\Microsoft
	------------------------------------------------------------
	
	To correct this problem:
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software\Microsoft
	
	3. From the Edit menu, choose Add Key.
	
	4. Type "Mail" (without the quotation marks) in the Key Name text box.
	
	5. Choose OK and then restart Mail.
	
	You do not have the permissions needed to modify HKEY_CURRENT_USER\Software\Microsoft
	-------------------------------------------------------------------------------------
	
	To correct this problem:
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software\Microsoft\Mail
	
	3. From the Security menu, choose Permissions.
	
	4. Verify the current permissions for the key and:
	
	  - Add your user account with the appropriate permissions (the default is Full
	  Control).
	
	  -or-
	
	  - Log off from your current user account and log on to a user account that has
	  the appropriate permissions for this key.
	
	5. Restart Mail.
	
	You do not have the permissions needed to modify the WIN.INI file
	-----------------------------------------------------------------
	
	To correct this problem:
	
	1. Run File Manager.
	
	2. Select the WIN.INI file in the %SYSTEMROOT% directory (typically C:\WINDOWS
	  or C:\WINNT).
	
	3. From the Security menu, choose Permissions.
	
	4. Verify the current permissions for the key and:
	
	  - Add your user account with the appropriate permissions (the default is Full
	  Control).
	
	  -or-
	
	  - Log off from your current user account and log on to a user account that has
	  the appropriate permissions for this file.
	
	5. Restart Mail.
	
	MORE INFORMATION
	================
	
	There is no Mail key in HKEY_CURRENT_USER\Software\Microsoft
	------------------------------------------------------------
	
	If you inadvertently delete this key, Mail is unable to place its settings in the
	appropriate subkeys. This results in the following:
	
	1. The error message reference above appears.
	
	2. Mail does not place any settings in the Registry.
	
	3. If you choose to create a new workgroup postoffice, Mail does not create the
	  WGPO directory structure.
	
	4. If you choose to connect to an existing postoffice and have not yet created a
	  Mail account for yourself, Mail creates the Mail account on the postoffice
	
	5. Mail does not create a local message folder (.MMF) for your Mail account.
	
	6. Mail creates a WIN.INI, if one did not exist before the Mail initialization
	  procedure, but places no settings in it.
	
	7. Mail closes.
	
	8. The next time you start Mail, it starts the initialization process again.
	
	You do not have the permissions needed to modify HKEY_CURRENT_USER\Software\Microsoft
	-------------------------------------------------------------------------------------
	
	If you do not have the appropriate Registry key permissions to modify the Mail
	key in the Registry path specified above, Mail is unable to place its settings
	within the subkeys of this key. This has the result as the previous cause.
	
	You do not have the permissions needed to modify the WIN.INI file
	-----------------------------------------------------------------
	
	If the WIN.INI file is located on a Windows NT file system (NTFS) partition, and
	you do not have the appropriate file permissions to modify the file, Mail writes
	the following information to the WIN.INI file upon completion of the
	initialization sequence:
	
	  [Mail]
	  MAPI=1
	
	If the WIN.INI file does not exist, Mail re-creates it, and places the above
	settings in it for 16-bit application support. If the WIN.INI file exists, but
	you do not have the appropriate file permissions to edit it, Mail is unable to
	place its settings in the file. This results in the following:
	
	1. The error message reference above appears.
	
	2. Mail places some settings in the Registry, as follows.
	
	  - The Custom Commands subkey is created, but is missing the WGPOMgr1 and
	  WGPOMgr2 values.
	
	  - The Custom Messages subkey is created.
	
	  - The Microsoft Mail subkey is created, but is missing the Login, MAPIHELP,
	  OfflineMessages, ServerPassword, ServerPath, and Window values.
	
	3. If you choose to create a new workgroup postoffice, Mail does not create the
	  WGPO directory structure.
	
	4. If you choose to connect to an existing postoffice and have not yet created a
	  Mail account for yourself, Mail creates the Mail account on the postoffice.
	
	5. Mail does not create a local message folder (.MMF) for your Mail account.
	
	6. The WIN.INI file is not modified.
	
	7. Mail closes.
	
	8. The next time you start Mail, it starts the initialization process again.
	
	Additional query words: prodnt PO MSMail
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
