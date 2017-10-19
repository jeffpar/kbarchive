---
layout: page
title: "Q216167: How to Increase a Command-Prompt Window Size"
permalink: /kb/216/Q216167/
---

## Q216167: How to Increase a Command-Prompt Window Size

	Article: Q216167
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbdisplay kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can modify the size of a Windows NT command-prompt window with the MODE
	command-line utility. However, note that it is possible to create a window size
	that is larger than your screen can display.
	
	MORE INFORMATION
	================
	
	To modify the vertical size of a command-prompt window:
	
	- At a command prompt, type "mode con lines=x" (without the quotation marks),
	  and then press ENTER.
	
	To modify the horizontal size of a command-prompt window:
	
	- At a command prompt, type "mode con cols=x" (without the quotation marks),
	  and then press ENTER.
	
	NOTE: In both examples, <x> represents the number of lines or columns to
	display.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
