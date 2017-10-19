---
layout: page
title: "Q264584: How to Change Registry Values or Permissions from a Command Line"
permalink: /kb/264/Q264584/
---

## Q264584: How to Change Registry Values or Permissions from a Command Line

	Article: Q264584
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change a registry value or registry permissions from a command line or from a
	script, use the Regini.exe utility that is included in the Windows NT Server 4.0
	Resource Kit.
	
	MORE INFORMATION
	================
	
	The syntax for changing registry values or permissions with Regini is:
	
	REGINI [-m \\machinename] files
	
	where the -m \\machinename option is used to modify the registry of a remote
	machine, and files represents the names of the script files that contain the
	changes to the registry.
	
	The text file or files should contain the registry changes in the following
	format:
	
	\Registry\Hiveroot\Subkeys registry value=data [permissions]
	
	The Regini utility works with kernel registry strings. When you gain access to
	the registry in User mode with HKEY_LOCAL_MACHINE, HKEY_CURRENT_USER, and so on,
	the string is converted in Kernel mode as follows:
	
	- HKEY_LOCAL_MACHINE is converted to \registry\machine.
	
	- HKEY_USERS is converted to \registry\user.
	
	- HKEY_CURRENT_USER is converted to \registry\user\user_sid, where user_sid is
	  the Security ID associated with the user.
	
	- HKEY_CLASSES_ROOT is converted to \registry\machine\software\classes.
	
	For example, a script file to change the registry value DiskSpaceThreshold
	located in the HKEY_LOCAL_MACHINE hive to the value 0x00000000 would be written
	as follows:
	
	\registry\machine\system\currentcontrolset\services\lanmanserver\parameters
	DiskSpaceThreshhold = REG_DWORD 0x00000000
	
	Registry key permissions are specified by binary numbers separated by spaces,
	corresponding to Regini.doc file numbers that specify certain permissions given
	to specific groups. (For example, the number 1 specifies Administrators - Full
	Control). You can use the Resource Kit utility REGDMP to get the current
	permissions of a registry key in the binary number format.
	
	CAUTION: When you use Regini to change permissions, the current permissions are
	replaced, not edited.
	
	The following example script file shows the syntax for changing permissions on a
	registry key:
	
	\Registry\Machine\Software [1 5 10]
	
	This script modifies HKEY_LOCAL_MACHINE\Software to have the permissions:
	
	Administrators - Full Control
	Creator/Owner - Full Control
	Everyone - Read
	
	For more information, refer to the Regini.doc file that is included in the
	Windows NT Server 4.0 Resource Kit.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
