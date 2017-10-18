---
layout: page
title: "Q109437: Moving Workgroup Postoffice and Changing Postoffice Manager"
permalink: kb/109/Q109437/
---

## Q109437: Moving Workgroup Postoffice and Changing Postoffice Manager

	Article: Q109437
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	This article details moving the workgroup postoffice (WGPO) and changing
	the workgroup Postoffice Manager.
	
	Windows NT 4.0:
	---------------
	
	Mail system in Windows NT 4.0 now is called Windows Messaging. The registry
	entries are completely different and therefore the suggestion in this
	article is not applicable anymore.
	
	Moving the Workgroup Postoffice
	-------------------------------
	
	To move the workgroup postoffice, do the following:
	
	1. Be sure that the new directory is shared with full access.
	
	2. Use File Manager to move the WGPO to its new location; be sure to move all
	  subdirectories.
	
	3. Run REGEDT32.EXE.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	4. Select the following subkey:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Mail\Microsoft Mail
	
	5. Double-click the ServerPath entry.
	
	6. Change the String to reflect the new WGPO location.
	
	NOTE: For each Windows for Workgroups user, edit the MSMAIL.INI file to
	change the ServerPath= line so that it points to the new WGPO location.
	
	Changing the Workgroup Postoffice Manager
	-----------------------------------------
	
	To change the name of the existing Postoffice Manager without moving the
	Postoffice Manager functionality to another machine, select the Mail
	option, then select Postoffice Manager and edit the details of the existing
	Postoffice Manager account.
	
	To move the Postoffice Manager functionality to another machine, do the
	following:
	
	1. Run REGEDT32 and open the Registry Key
	  \HKEY_CURRENT_USER\Software\Microsoft\Mail\Custom Commands.
	
	2. From the Registry menu, select Save Key and using a valid filename, save the
	  key to a floppy disk so that you can use it later when establishing the
	  Admin2 account.
	
	3. From Admin1's machine, log on to Mail, and from the Mail menu, choose
	  Postoffice Manager.
	
	4. Select the Details option, and write down the required information for Admin1
	  and Admin2 (obtain the password from the administrators; passwords don't
	  appear in the Details dialog box).
	
	5. If Admin1 no longer needs a mail account, delete the user account for Admin2
	  and edit the details of the Admin1 account so that it matches the new
	  Postoffice Administrators account (Admin2) and go to step 9.
	
	6. On Admin1's machine, open the Registry key
	  \HKEY_CURRENT_USER\Software\Microsoft\Mail\Custom Commands.
	
	7. Delete the WGPOMgr1 and WGPOMgr2 entries. Select the entry to delete, choose
	  Delete from the Edit menu, and then choose the Yes Button.
	
	8. On Admin1's machine, choose Exit And Sign Out from the File menu of Mail.
	
	9. On Admin2's machine (if you haven't already done so, choose Exit And Sign
	  Out), open the Registry key \HKEY_CURRENT_USER\Software\Microsoft\Mail\Custom
	  Commands.
	
	  NOTE: Make sure you have Custom Commands highlighted or the following steps
	  will be in error.
	
	10. From the Registry menu, select Restore and, selecting the filename used
	  above, choose the OK button, and then choose the Yes button in the Warning
	  dialog box.
	
	11. Start Mail using the new Admin name and password (these may be the same as
	  the original).
	
	  NOTE: A message may appear that states mail was unable to find your .MMF
	  file. A dialog box then appears that displays the .MMF file that was
	  detected. Select the .MMF file that was detected. Select the .MMF file and
	  choose OK to select the MMF file found on the hard disk drive.
	
	12. Select the Mail option to verify the Postoffice Administrator option is now
	  available on Admin2's machine.
	
	To change the default user name in the Mail logon dialog box, do the
	following:
	
	1. Run REGEDT32 and open the Registry Key
	  \HKEY_CURRENT_USER\Software\Microsoft\Mail\Microsoft Mail.
	
	2. Double-click the Login entry.
	
	3. Change the string to reflect the desired user name.
	
	
	Additional query words: wfw wfwg prodnt po
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	
