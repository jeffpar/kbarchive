---
layout: page
title: "Q185276: Err Msg: Error Writing to LPTx. The System Cannot Find..."
permalink: /kb/185/Q185276/
---

## Q185276: Err Msg: Error Writing to LPTx. The System Cannot Find...

	Article: Q185276
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
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you try to print to a local printer on a standard parallel port (LPT), you
	may receive the following error message:
	
	  Error writing to LPT<port number>.
	  The system cannot find the file specified.
	
	When you try to view Devices in Control Panel, the "Parallel" device is missing.
	
	CAUSE
	=====
	
	This behavior can occur if the registry entry for the parallel port is
	incorrect.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this issue, check the following registry key to see if Windows NT is
	detecting the parallel port, and if not, edit the registry:
	
	HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\MultifunctionAdapter\2
	\Parallel Controller\
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	NOTE: There are keys under MultifunctionAdapter. Only one of these keys should
	have any sub-keys in it. Open the key that has information in it. If a parallel
	port has been detected, there is a folder named "0" underneath the
	ParallelController key. If this entry does not exist in the registry, Windows NT
	is not detecting the port, and the issue is with your hardware or basic
	input/output system (BIOS) settings. If this entry does exist, go to the
	following registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Parallel
	
	Find this value:
	
	Start : REG_DWORD : 0.
	
	Double click this value, change the "0" to a "2", and then click OK. This changes
	the value to 0x2. Restart your computer.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
