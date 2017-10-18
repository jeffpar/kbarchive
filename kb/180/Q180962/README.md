---
layout: page
title: "Q180962: How to Identify When the System Preparation Tool Is Used"
permalink: kb/180/Q180962/
---

## Q180962: How to Identify When the System Preparation Tool Is Used

	Article: Q180962
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to determine if the System Preparation Tool for
	Windows NT 4.0 has been used to prepare a Windows NT-based computer for disk
	duplication or cloning.
	
	MORE INFORMATION
	================
	
	You can use the System Preparation Tool for Windows NT 4.0 in conjunction with a
	disk duplicating or cloning program to duplicate a Windows NT installation from
	one computer to another. The System Preparation Tool for Windows NT 4.0 ensures
	that Windows NT-based computers maintain a unique security identifier (SID) when
	they are cloned. Microsoft supports the use of the System Preparation Tool for
	Windows NT 4.0 for the preparation of a Windows NT-based computer for disk
	duplication. Microsoft does not support the use of third-party SID changing
	programs. You cannot use the System Preparation Tool for Windows NT 4.0 to bring
	a previously cloned Windows NT- based computer into compliance.
	
	To identify a computer that has been prepared for disk duplication by the System
	Preparation Tool for Windows NT 4.0, use the appropriate method.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of Registry Editor can
	be solved. Use Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Check for the Existence of the CloneTag Registry Value
	------------------------------------------------------
	
	When you use the System Preparation Tool for Windows NT 4.0, a CloneTag value is
	placed in the following registry key:
	
	HKEY_LOCAL_MACHINE\System\Setup
	
	The value data of the CloneTag value is set to the date, in hexadecimal format,
	that the System Preparation Tool for Windows NT 4.0 was used on this computer.
	
	Check for the Existence of the Setupcl.exe File
	-----------------------------------------------
	
	When you use the System Preparation Tool for Windows NT 4.0, the Setupcl.exe file
	is placed in the %SystemRoot%\System32 folder.
	
	Additional query words: deploy ghost sysprep
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
