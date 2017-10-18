---
layout: page
title: "Q175932: Could Not Load Ntkrnlmp.exe. The Error Code Is 4"
permalink: kb/175/Q175932/
---

## Q175932: Could Not Load Ntkrnlmp.exe. The Error Code Is 4

	Article: Q175932
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows NT Server on a Digital Equipment Corp. (DEC)
	Alpha computer that had a different operating system installed, such as UNIX or
	VMS, the following error message may be displayed:
	
	  %system_root%\alpha\ntkrnlmp.exe could not be loaded. The error code
	  is 4.
	
	CAUSE
	=====
	
	There are three possible causes.
	
	- The computer is running with outdated firmware.
	
	- Outdated Arcinst.exe was used to create the system partition.
	
	- The computer was configured using an EISA configuration utility (ECU) for
	  another operating system.
	
	RESOLUTION
	==========
	
	1. Check with DEC for the latest firmware for the model Alpha computer in
	  question.
	
	
	2. If you are installing Windows NT 3.51, please refer to the following
	  Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q138221
	  TITLE : Problems Creating Partitions with Arcinst.exe in Windows NT 3.51
	
	  The Arcinst.exe in Windows NT 4.0 has not had any reported problems.
	
	3. Download the proper ECU utility from DEC and use it to view and then save
	  your computer's EISA configuration settings.
	
	Additional query words: Alpha DEC arcinst.exe ntkrnlmp.exe
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
