---
layout: page
title: "Q269559: Error Message Occurs When Installing Network Monitor 2.0"
permalink: kb/269/Q269559/
---

## Q269559: Error Message Occurs When Installing Network Monitor 2.0

	Article: Q269559
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Network Monitor 2.0 or later, you may receive an error message
	that states Microsoft Internet Explorer 4.0 or later must be installed on the
	computer. The Network Monitor installation process then stops responding.
	
	MORE INFORMATION
	================
	
	To install Network Monitor on Windows NT 4.0, use one of the following methods:
	
	1. Install Internet Explorer 4.0 or later, and then install Network Monitor.
	
	  -or-
	
	2. Copy the following files from a computer that has Internet Explorer 4.0 or
	  later installed to the System32 directory:
	
	  Shdocvw.dll
	  Shlwapi.dll
	
	After you complete one of these steps, the installation process continues until
	Network Monitor is successfully installed.
	
	Additional query words: netmon, bloodhoound, steeleye
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbhowto
	
	=============================================================================
	
