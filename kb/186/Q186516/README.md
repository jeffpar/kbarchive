---
layout: page
title: "Q186516: Terminal Server Commands: FLATTEMP"
permalink: /kb/186/Q186516/
---

## Q186516: Terminal Server Commands: FLATTEMP

	Article: Q186516
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FLATTEMP enables or disables flat temporary directories.
	
	NOTE: When you enable this utility, it changes the permissions on the TEMP
	directory to:
	
	Logged on user FC
	Administrator FC
	System FC
	
	No other accounts will be in the ACL and the "Everyone" and "Creator/Owner"
	groups are removed. All users will need to modify their environment variables,
	for TEMP and TMP, to point to their home directory. If users do not change their
	variables, they will not have access to the TEMP directory.
	
	Syntax
	------
	
	flattemp [/query] [/enable] [/disable] [/?]
	
	Parameters
	----------
	
	none
	
	/query
	
	  Queries the current setting.
	
	/enable
	
	  Enables flat temporary directories.
	
	/disable
	
	  Disables flat temporary directories.
	
	/? (help)
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	Security Restrictions
	---------------------
	
	Only administrators can run flattemp.
	
	FLATTEMP -- Additional Notes
	----------------------------
	
	The default method of creating temporary directories for multiple users (usually
	pointed to by the TEMP and TMP environment variables) is to create
	subdirectories in the TEMP directory, using the logon ID as the subdirectory
	name. For example, if the TEMP environment variable points to the directory
	C:\TEMP, the temporary directory assigned to the user logon ID 4 is C:\TEMP\4.
	
	Use the flattemp command to prevent subdirectories from being created and to
	point directly to the TEMP directory. This is useful when you want the users'
	temporary directories to be contained in their home directories, whether on a
	Terminal Server's local drive or on a network share drive. You should use this
	command only when each user has a unique home directory.
	
	To configure a unique home directory for each user, follow these steps:
	
	1. Log on as the user.
	
	2. Start the System application in Control Panel.
	
	3. Set the user's environment variables, TEMP and TMP, to a TEMP directory in
	  the user's home directory; for example, X:\Users\Bobw\Temp.
	
	After each user has a unique TEMP directory, use flattemp /enable to enable flat
	temporary directories.
	
	WARNING: You may encounter application errors if the user's temporary directory
	is on a network drive. This happens when the network share momentarily becomes
	inaccessible over the network. No disk corruption happens, but because the
	application's temporary files are either inaccessible or out of synchronization,
	the application responds as if the disk has crashed. Therefore, moving the
	temporary directory to a network drive is not recommended. The default is to
	keep the temporary directories on the local hard disk. If you experience strange
	behavior or disk corruption errors with certain applications, stabilize your
	network or move the temporary directories back to the local hard disk.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
