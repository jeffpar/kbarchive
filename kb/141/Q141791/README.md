---
layout: page
title: "Q141791: Invalid Accounts Created with ADDUSERS.EXE"
permalink: /kb/141/Q141791/
---

## Q141791: Invalid Accounts Created with ADDUSERS.EXE

	Article: Q141791
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the User Manager for Domains you get the following error message when trying
	to manage a user or group account with a name created with the ADDUSERS.EXE
	utility included in the Windows NT Resource kit:
	
	  User Manager for Domains
	  The following error occurred accessing the properties of the user/group
	  %user/group name%:
	
	  The filename, directory name, or volume label syntax is incorrect.
	  The user/group properties cannot be edited or viewed at this time.
	
	CAUSE
	=====
	
	When you used the ADDUSERS.EXE utility to create a user or group account name
	containing one or more invalid characters, the utility failed to check for
	invalid characters and give you an error message.
	
	A Windows NT user name or global group name can be up to 20 characters long. It
	can contain any upper case or lower case character except the following:
	
	  " / \ [ ] : ; | = , + * ? >.
	
	In addition to the above characters, a Windows NT user name or group name can not
	contain a tab entry.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	To work around this problem:
	
	- Delete User accounts with invalid names by using ADDUSERS.EXE with the /e
	  switch. Use ADDUSERS /? for more details.
	
	  -or-
	
	- Restore a good accounts database from a backup tape.
	
	NOTE: User or Group accounts with invalid names can not be deleted from the User
	Manager for Domains. The ADDUSERS utility can delete the user and group accounts
	with invalid names. You will receive the following error when attempting to
	delete the invalid accounts:
	
	  The following error occurred when trying to delete <username> the
	  username or groupname parameter is invalid.
	
	The accounts can also be renamed to valid names and then deleted.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Windows NT Workstation and Server version
	4.0.
	
	Additional query words: prodnt 4.0
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351
	Version           : :3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
