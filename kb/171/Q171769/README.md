---
layout: page
title: "Q171769: Restoring a User Profile On a Windows NT Workstation or Server"
permalink: /kb/171/Q171769/
---

## Q171769: Restoring a User Profile On a Windows NT Workstation or Server

	Article: Q171769
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the repair process in Windows NT and select the options below on
	the restore registry screen, all default settings are restored. No user accounts
	exist, and the administrator password is returned to the password in use at the
	time the Emergency Repair Disk (ERD) was made or updated.
	
	[X] SYSTEM (System Configuration)
	[X] SOFTWARE (Software Information)
	[X] DEFAULT (Default User Profile)
	[X] SECURITY (Security Policy) and SAM (User Accounts Database)
	
	CAUSE
	=====
	
	Choosing to overwrite the registry and replace all SAM and security information
	creates this situation.
	
	RESOLUTION
	==========
	
	The recommended method to restore the proper user account database and domain
	password is to restore the registry from a current tape backup. If a current
	tape backup is not available, or, restoring from tape will cause other problems,
	the following method can be used to restore users. If using this method causes
	other problems, restore the registry from backup or recreate the user accounts.
	
	This resolution assumes that you have the administrator password needed to sign
	on to the local computer and that the user is local, or their profile is stored
	locally (or the user is on the domain but their profile is stored locally).
	
	NOTE: This is not a feasible solution for restoring more than a few users. This
	resolution does not insure that applications will function correctly. Some
	applications replace Windows NT files and can not work with the Windows NT files
	that are restored from the selected options through the ERD process.
	Applications may need to be reinstalled.
	
	If the User Logs On to the Computer Locally
	-------------------------------------------
	
	1. Log on to the local computer with administrator privileges.
	
	2. Recreate the user of the workstation in User Manager.
	
	3. Go to the %SystemRoot%\Profiles\ directory and rename the Default User
	  profile to Default Old.
	
	4. Rename the user profile of the user you are trying to restore, Default User.
	
	5. Log on to the local computer as that user and the Default profile will be
	  assigned to them.
	
	6. Log off the computer as the user, log on to the computer as administrator,
	  and delete the Default User profile.
	
	7. Repeat steps 1-6 to restore user's profiles.
	
	8. Rename Default Old to Default User.
	
	If the User Logs On to the Domain but the Profile is Stored Locally
	-------------------------------------------------------------------
	
	1. Delete the machine account from the domain.
	
	2. Log on to the local computer with administrator privileges and rejoin the
	  domain.
	
	3. Perform steps 3-8 above.
	
	If the User has Successfully Logged On to the
	Computer at Least Once and Created a New Profile
	----------------------------------------------------------------------------------------------
	
	1. Log on to the local computer with administrator privileges.
	
	2. Go to the %SystemRoot%\Profiles directory, and delete the user.000 profile.
	
	3. Perform steps 3-8 above.
	
	For more information regarding Security IDs and the ERD, refer to the following
	Microsoft Knowledge Base articles
	
	  Q162001 Do Not Disk Duplicate Installed Versions of Windows NT
	
	
	  Q150919 How to Prevent a User from Changing the User Profile Type
	
	  Q122857 RDISK /S and RDISK /S- Options in Windows NT
	
	  Q126464 Repair Disk Utility Does Not Update SAM and Security
	
	  Q129037 Windows NT 3.5x and 4.0 Emergency Repair Process Screens
	
	Additional query words: ERD emergency repair disk rdisk rdisk/s
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
