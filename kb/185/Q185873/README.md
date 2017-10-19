---
layout: page
title: "Q185873: Reg.exe Displays Access Denied Error When Querying Registry"
permalink: /kb/185/Q185873/
---

## Q185873: Reg.exe Displays Access Denied Error When Querying Registry

	Article: Q185873
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Reg.exe may display an "Access denied" error when it is used to query the
	registry on a remote computer running Windows NT 4.0 Workstation or Server.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Confirm the following if this error is encountered:
	
	- The user account used to query the remote computer has at least Read Access
	  to the WINREG key on the remote computer being queried. Use the Permissions
	  command on the Security menu of Regedt32.exe to grant the appropriate user or
	  group Read Access to the WINREG key located under
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers. By
	  default, only administrators have access to this key.
	
	- The user account used to establish the connection to the remote computer has
	  either Read Only or Full Control on the registry key being queried. No
	  combination of Special Access permissions will allow a remote user to query a
	  registry key on a remote computer.
	
	
	- You are using version 1.04 or later of Reg.exe. To determine the version
	  number of Reg.exe, type
	
	  REG.EXE /?
	
	  at the Windows NT command prompt.
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
