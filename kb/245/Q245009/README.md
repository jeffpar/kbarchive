---
layout: page
title: "Q245009: Batch Create User Accounts Without Forcing Password Change."
permalink: /kb/245/Q245009/
---

## Q245009: Batch Create User Accounts Without Forcing Password Change.

	Article: Q245009
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the latest version of the Addusers.exe utility
	to create user accounts in a batch without forcing a password change the next
	time these users log on.
	
	MORE INFORMATION
	================
	
	The Addusers.exe utility is a utility that is included in the Microsoft Windows
	NT Server Resource Kit Supplement 3.
	
	To create user accounts in a batch without forcing a password change the next
	time these users log on:
	
	1. Using a text editor (such as Notepad), create a comma-delimited .txt file
	  with the user names, any other user data (such as 'Full Name' and
	  'Description'), and passwords. The following is an example of the file,
	  without data in the 'Full Name' and 'Description' fields:
	
	 [User]
	 Larry,,password
	 Moe,,password
	 Curly,,password
	 [Global]
	 [Local]
	
	  All of the headers (titles within square brackets) must be present. The two
	  commas between the user name and the password represent the empty 'Full Name'
	  and 'Description' fields, and 'password' is each user's password.
	
	2. At the command prompt, change to the folder where the Addusers.exe utility is
	  located.
	
	3. To create the accounts without the User Must Change Password At Next Logon
	  option and with the Password Never Expires option, type the following command
	  at the command prompt, and then press ENTER
	
	  ADDUSERS /C full path to location of the user file /P:LE
	
	  where full path to location of the user file is the full path to the location
	  of the user file.
	
	  For example, to create users from a comma-delimited file named Myusers.txt
	  located in the C:\Userdata folder, type the following command at the command
	  prompt, and then press ENTER:
	
	  ADDUSERS /C C:\USERDATA\MYUSERS.TXT /P:LE
	
	  To view other account status parameters to use with this utility, type the
	  following command at the command prompt, and then press ENTER:
	
	  ADDUSERS /?
	
	Additional query words: reskit resource kit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
