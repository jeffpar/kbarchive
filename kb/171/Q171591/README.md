---
layout: page
title: "Q171591: Syntax Examples of WinNT Server Registry Resource Kit Utilities"
permalink: kb/171/Q171591/
---

## Q171591: Syntax Examples of WinNT Server Registry Resource Kit Utilities

	Article: Q171591
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information and examples of syntax for some of the
	utilities in the Windows NT Server 4.0 Resource Kit. The command-line help and
	Server Resource Kit help files may not make clear the syntax of these
	utilities.
	
	The utilities discussed here are: Regchg, Regread, Regsec, and Rregchg.
	
	MORE INFORMATION
	================
	
	Regchg.exe
	----------
	
	Change or add registry values on the local computer. You cannot add keys. It
	operates on keys in the HKEY_LOCAL_MACHINE hive only. Use quotation marks around
	the hive path name if the path name has a space in it.
	
	Usage: regchg "<HiveName>\<Path>" <ValueName> <DataType>
	<Value>
	
	Examples: regchg "system\test key" Test REG_SZ 123
	regchg system\test2 "test value" REG_SZ 123
	regchg system\test2 Test REG_SZ 123
	
	If the value named Test does not exist, it will be created and assigned the value
	of 123.
	
	Regread.exe
	-----------
	
	Reads the registry of a local or a remote system, parses out values, and outputs
	them to the screen. Regread operates on keys in the HKEY_LOCAL_MACHINE hive
	only.
	
	Usage: regread \\<ServerName> <RegistryPath(Optional)>
	<KeyName(Optional)>
	
	Examples: regread \\server system\test2 testvalue
	regread \\server "system\test key" "test value"
	
	Regsec.exe
	----------
	
	This utility can produce very undesirable affects. Primarily, it is a simple way
	to make a workstation more secure so only Administrators who log on to the
	workstation have expected behavior. All non-administrators will have essentially
	an unusable workstation.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q160511 Regsec.exe Gives Strange Results for Non-Administrators
	
	Removes the Everyone group from the permissions list for HKEY_LOCAL_MACHINE,
	HKEY_CLASSES_ROOT, and HKEY_CURRENT_USER hives on the local computer.
	
	The command does not take parameters or switches.
	
	Usage: regsec
	
	Rregchg.exe
	-----------
	
	Creates or changes registry values on a remote computer. See Regchg.exe for
	limitations.
	
	Usage: rregchg \\<ServerName> "<HiveName>\<Path>"
	<ValueName> <DataType> <Value>
	
	Examples: rregchg \\server "system\test key" TestData REG_SZ 123
	
	For more information on the Rregchg.exe tool, please see the following Microsoft
	Knowledge Base article:
	
	  Q163327 How to Use the Rregchg.exe Tool
	
	Additional query words: reskit utils command line DOS prompt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
