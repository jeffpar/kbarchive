---
layout: page
title: "Q168127: &quot;Install New Modem&quot; and Modem List is Blank."
permalink: kb/168/Q168127/
---

## Q168127: &quot;Install New Modem&quot; and Modem List is Blank.

	Article: Q168127
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The list of modem manufacturers and models in the Install New Modem wizard may
	be blank when you click "Don't detect my modem, I will select it from a list."
	You should be able to view the available modems even if you do not have one
	installed.
	
	CAUSE
	=====
	
	The list of modems do not appear if the hidden folder \%SYSTEMROOT%\Inf is empty
	or missing.
	
	RESOLUTION
	==========
	
	To resolve this problem, expand the .In_ files from the Windows NT CD to the
	\%SYSTEMROOT%\Inf folder or copy them from another Windows NT computer to this
	folder.
	
	MORE INFORMATION
	================
	
	The Modem.inf file contained in the \<WinntRoot>\System32\Ras folder is
	used only when installing RAS. It is not used by the Modem.cpl application to
	provide the list of available modems. This list is built by the modems available
	in the \%SYSTEMROOT%\Inf folder.
	
	Additional query words: empty modem prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
