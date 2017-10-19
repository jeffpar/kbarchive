---
layout: page
title: "Q139600: Registry Editor Save Key Saves Key on Wrong Computer"
permalink: /kb/139/Q139600/
---

## Q139600: Registry Editor Save Key Saves Key on Wrong Computer

	Article: Q139600
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Registry Editor (REGEDT32.EXE), open the registry of a remote
	computer, and attempt to save the registry information of a specific key by
	choosing Save Key from the Registry menu, the following error message appears:
	
	  Registry Editor could not accomplish the requested operation.
	
	CAUSE
	=====
	
	If the remote computer and the local computer have the same directory structure
	for the destination directory, the registry key is saved on the remote computer.
	This problem also occurs if you typed in a local path. If there's already a file
	with this name locally, the local file is deleted.
	
	WORKAROUND
	==========
	
	To work around this problem, create a directory with a unique name on the remote
	computer and save to that directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
