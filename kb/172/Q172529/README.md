---
layout: page
title: "Q172529: Printer access with Control Panel disabled by a Policy"
permalink: kb/172/Q172529/
---

## Q172529: Printer access with Control Panel disabled by a Policy

	Article: Q172529
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the
	registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Administrators can use System Policies to lock down a Windows NT 4.0 system to a
	great degree. This ability can include denying users access to Control Panel.
	However, in taking away access to Control Panel, users can no longer use Add
	Printer to install or connect to a printer.
	
	MORE INFORMATION
	================
	
	The following is a work around allowing users to access the Printers icon part
	of Control Panel.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	NOTE: The changes outlined in this article apply to all users of any workstation
	or server that is modified.
	
	1. Log on to Windows NT as the administrator.
	
	2. Run Regedt32.exe.
	
	3. Go to the following registry key:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Explorer
	
	  Under RemoteComputer\NameSpace, there will be a key with a CLSID of
	  {2227A280-3AEA-1069-A2DE-08002B30309D}. The value of the key is <No
	  Name>:REG_SZ:Printers.
	
	4. Create an exact copy of this key and value in either of the two following
	  places:
	
	     HKLM\Software\Microsoft\Windows\CurrentVersion
	     \Explorer\Desktop\Namespace
	
	  OR
	
	     HKLM\Software\Microsoft\Windows\CurrentVersion
	     \Explorer\MyComputer\NameSpace
	
	  NOTE: The above registry keys are each one path; they have been wrapped for
	  readability.
	
	  To add this key and value, perform the following steps:
	
	  a. Select NameSpace in Regedt32.
	
	  b. On the Edit menu, click Add Key.
	
	  c. For Key Name, type {2227A280-3AEA-1069-A2DE-08002B30309D} and leave Class
	     blank.
	
	  d. Select the key you just created and, on the Edit menu, click Add Value.
	
	  e. Leave Value Name blank. In the Data Type list, click REG_SZ. Click OK.
	
	  f. In the string editor, type Printers.
	
	5. After the CLSID is copied with the appropriate value, all users logging on to
	  this computer will have access to the Printer Control Panel.
	
	If placed in Desktop\Namespace, the Printer icon will always be on the desktop of
	all users, and hidden only if all items on the desktop are hidden with System
	Policies. If placed in MyComputer\Namespace, the Printer icon will always be in
	My Computer and Explorer.
	
	Additional query words: print policy spe lock ed restricted
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
