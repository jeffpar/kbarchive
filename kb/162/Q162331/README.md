---
layout: page
title: "Q162331: Internet Explorer May Not Run with System Policies"
permalink: /kb/162/Q162331/
---

## Q162331: Internet Explorer May Not Run with System Policies

	Article: Q162331
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv msient appscomp kbAppCompatibility
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	SYMPTOMS
	========
	
	When you start Internet Explorer, you may receive the following error message:
	
	  Restrictions:
	  This operation has been cancelled due to restrictions in effect on this
	  computer. Please contact your system administrator.
	
	CAUSE
	=====
	
	A system policy has been created with Iexplore.exe as one of the programs listed
	in the "Run Only Allowed Windows Applications" section.
	
	RESOLUTION
	==========
	
	If Iexplore.exe has not been added to the list of allowed programs, contact your
	system administrator.
	
	If Iexplore.exe has been added to the list of allowed programs, log on with
	administrative privileges and add quotation marks to the beginning and end of
	the string in the registry that points to the path for Iexplore.exe.
	
	Use Registry Editor (Regedt32.exe) to make the changes as follows:
	
	1. Start Regedt32.exe and locate the following registry subkey:
	
	  HKEY_CLASSES_ROOT\CLSID\{FBF23B42-E3F0-101B-8488-00AA003E56F8}
	  \Shell\Open\Command
	
	2. Double-click the "<no name>:REG_SZ:" value.
	
	3. In the string editor, add leading and trailing quotation marks so the string
	  reads:
	
	  "c:\Program Files\Plus!\Microsoft Internet\Iexplore.exe"
	
	4. Quit Registry Editor and restart the computer.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbenv msient appscomp kbAppCompatibility 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
