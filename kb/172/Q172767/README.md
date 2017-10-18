---
layout: page
title: "Q172767: Migration Tool for NetWare Cannot Find Domain Controller"
permalink: kb/172/Q172767/
---

## Q172767: Migration Tool for NetWare Cannot Find Domain Controller

	Article: Q172767
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsgkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Migration Tool for NetWare (Nwconv.exe) on a computer running
	Windows NT, you may receive the following error message:
	
	  Cannot connect to server: <servername>
	  The Network name cannot be found
	
	where <servername> is the name of the domain controller you are migrating
	to. This can occur even if the server you are migrating to is the one from which
	you are running the Migration Tool for NetWare.
	
	CAUSE
	=====
	
	This behavior can occur when the ADMIN$ share on the domain controller you are
	attempting to migrate to is inaccessible or has been removed. This situation can
	occur in Windows NT 4.0 if you run the System Policy editor, open the registry,
	and then save it (without making changes).
	
	RESOLUTION
	==========
	
	Verify that the administrative shares are being created at startup or restart
	the computer for the changes to take affect.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	     LanmanServer\Parameters
	
	2. Verify that AutoShareServer is set to 1, or delete the AutoShareServer value.
	
	For additional information, refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q156365 Hidden Shares Are No Longer Available After Using System Policy
	
	Additional query words: migrating path error nwconv convert
	
	======================================================================
	Keywords          : kberrmsg kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
