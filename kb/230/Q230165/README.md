---
layout: page
title: "Q230165: Terminal Server User's Home Directory Is Not Set Correctly"
permalink: /kb/230/Q230165/
---

## Q230165: Terminal Server User's Home Directory Is Not Set Correctly

	Article: Q230165
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Home directories are not mapped correctly for users with existing profiles.
	Their home directory and root drive point to the default path of
	%SystemRoot%\Profiles\%Username%. The drive letter set in the home directory
	connect box does appear in My Computer in the Terminal Server session. No error
	messages are displayed to the user.
	
	CAUSE
	=====
	
	This problem occurs because the user's profile already contains a drive mapped
	to the same drive letter that was specified for the user's home directory. After
	the system finds that the drive letter is already in use, it does not map the
	drive and does not correctly set the homepath or homedrive variables. The user
	retains the default settings pointing to:
	
	  Home Directory Path: %SystemRoot%\Profiles\%Username%
	  HOMEDRIVE=C:
	  HOMEPATH=\Wtsrv\Profiles\%Username%
	
	This also affects the root drive because it is set through the Usrlogon.cmd
	script when the user logs on. Listed below is the portion of Usrlogon.cmd that
	connects rootdrive:
	
	  Rem
	  Rem Map the User's Home Directory to a Drive Letter
	  Rem
	
	  Net Use %RootDrive% /D >NUL: 2>&1
	  Subst %RootDrive% /d >NUL: 2>&1
	  Subst %RootDrive% %HomeDrive%%HomePath%
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the mapped drive from the user's profile or set
	the home directory to another drive letter.
	
	MORE INFORMATION
	================
	
	For more detailed information on how Rootdrive is used in Terminal Server,
	please see the following Microsoft Knowledge Base article:
	
	  Q195950 How and Why ROOTDRIVE Is Used on Windows Terminal Server
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
