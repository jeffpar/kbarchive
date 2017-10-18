---
layout: page
title: "Q245026: Unattended Installation of 3Com NIC Generates Error Message."
permalink: kb/245/Q245026/
---

## Q245026: Unattended Installation of 3Com NIC Generates Error Message.

	Article: Q245026
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a 3Com network interface card (NIC) unattended, you may
	receive the following error message:
	
	  Unable to open C:\$win_nt$\3c90xwin32\i386...
	  3c905
	  3c900
	  3c90x
	
	CAUSE
	=====
	
	This behavior can occur because the 3Com Oemsetup.inf file cannot process the
	'(srcdir)' string variable properly when you use an MS-DOS redirector. The 3Com
	Oemsetup.inf file parses the '(srcdir)' string variable without using a trailing
	backslash (\), which combines two separate folder names together and produces an
	incorrect path. For example, the folder appears as \$win_nt$\3c90xWin32 instead
	of \$win_nt$\3c90x\Win32.
	
	RESOLUTION
	==========
	
	To resolve this problem, append a backslash to every '(srcdir)' reference in the
	Oemsetup.inf file and the Drmonnt.inf file associated with the network interface
	card, and reinstall the NIC driver.
	
	Additional query words: ethernet tbase10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
