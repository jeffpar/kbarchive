---
layout: page
title: "Q245031: Use a Script to Change Registry Permissions from Command Prompt."
permalink: kb/245/Q245031/
---

## Q245031: Use a Script to Change Registry Permissions from Command Prompt.

	Article: Q245031
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
	
	This article describes how to use a script to change permissions defined in a
	registry key from a command prompt by using the Regini.exe utility included with
	Microsoft Windows NT Server 4.0 Resource Kit. The Resource Kit is a separate
	product that can be purchased from Microsoft.
	
	MORE INFORMATION
	================
	
	CAUTION: When you use a script to change registry permissions, you replace the
	entire set of current permissions defined in a registry key. For example, if you
	have four types of users whose permissions are defined in a particular registry
	key, and you create and run a script file that changes the permissions for only
	three of the four types of users, the information about the fourth type is
	deleted.
	
	To use a script to change permissions defined in a registry key from a command
	prompt:
	
	1. Install the latest version of the Windows NT Server 4.0 Resource Kit.
	
	2. Create a script file that contains the change commands:
	
	  a. Start any text editor (such as Notepad).
	
	  b. Type the registry keys and the appropriate permissions in the following
	     format
	
	  \Registry\hive\key [permissions]
	
	     where hive is the name of the registry hive, key is the name of the
	     registry key, and [permissions] is the binary number format of the
	     permissions.
	
	     For example, to modify the HKEY_LOCAL_MACHINE\Software registry key to give
	     the Administrators group and the Creator/Owner group Full Control
	     permission and the Everyone group Read permission, type the following
	     string:
	
	  \Registry\Machine\Software [1 5 8]
	
	     NOTE: You must type the permissions in the binary number format. You must
	     also refer to the registry hive in the predefined format. For more
	     information about how to refer to a registry hive in a script file and
	     about the binary numbers for various types of permissions, refer to the
	     'Reference to Registry Hives and Binary Number Representation for
	     Permissions' section in this article.
	
	  c. Save and then close the script file.
	
	3. Type the following command at a command prompt, and then press ENTER
	
	  REGINI [-m \\computername] scriptname
	
	  where computername is the name of the computer and scriptname is the name of
	  the script file you just created.
	
	  NOTE: Use the -m option only when you edit the registry of a remote computer.
	  Be sure to include the entire path to the script file.
	
	Reference to Registry Hives and Binary Number Representation for Permissions
	
	Refer to registry hives as indicated below:
	
	 HKEY_LOCAL_MACHINE - \Registry\Machine
	 HKEY_USERS - \Registry\Users
	 HKEY_CURRENT_USER - \Registry\User\User_SID (where User_SID is the current user's security identifier)
	
	Permissions and their binary number representations are as follows:
	
	Administrator Full 1
	Administrator R 2
	Administrator RW 3
	Administrator RWD 4
	Creator Full 5
	Creator RW 6
	World Full 7
	World R 8
	World RW 9
	World RWD 10
	Power Users Full 11
	Power Users RW 12
	Power Users RWD 13
	System Op Full 14
	System Op RW 15
	System Op RWD 16
	System Full 17
	System RW 18
	System R 19
	Administrator RWX 20
	
	You can use the Regdmp utility, also included with the Resource Kit, to obtain
	the current permissions of a registry key in the binary number format.
	
	Additional query words: security
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
