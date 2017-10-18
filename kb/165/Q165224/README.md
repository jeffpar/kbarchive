---
layout: page
title: "Q165224: Cannot Run MS-DOS Application from Shortcut"
permalink: kb/165/Q165224/
---

## Q165224: Cannot Run MS-DOS Application from Shortcut

	Article: Q165224
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS application shortcuts will not work if the policy "Run only allowed
	Windows applications" is enabled with that specific .exe targeted in that
	shortcut.
	
	
	
	RESOLUTION
	==========
	
	1. Create a batch file that contains the path to the MS-DOS executable
	  application that you want to run.
	
	2. Make sure that the MS-DOS application and the batch file are allowed to run
	  through the policy.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: profile lock system security poledit spe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
