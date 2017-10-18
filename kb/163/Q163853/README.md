---
layout: page
title: "Q163853: RAS Phone Book Terminal in Chinese Function Does Not Work"
permalink: kb/163/Q163853/
---

## Q163853: RAS Phone Book Terminal in Chinese Function Does Not Work

	Article: Q163853
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): KBSIMCH kbIntlDev
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Simplified Chinese version(s) of Windows NT 3.51.
	
	SYMPTOMS
	========
	
	The RAS Phone Book Terminal (in Chinese) function does not work under Simplified
	Chinese Windows NT 3.51 Service Pack 4. When Terminal is selected for either
	Before Dialing or After Dialing, the following message is displayed:
	
	  Error 659: The media .INI file refers to an unknown device name.
	
	RESOLUTION
	==========
	
	To resolve this problem, add a [Terminal] entry (in English) in the Swich.inf
	file and select the Terminal in English, not the one in Chinese, when the
	Terminal function is required.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Simplified Chinese Windows NT
	version 3.51. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt remote access service services
	
	======================================================================
	Keywords          : KBSIMCH kbIntlDev 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbbug
	
	=============================================================================
	
