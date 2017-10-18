---
layout: page
title: "Q168050: Access Violation in Explorer when Viewing &#42;.ht file Properties"
permalink: kb/168/Q168050/
---

## Q168050: Access Violation in Explorer when Viewing &#42;.ht file Properties

	Article: Q168050
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a debugger running and you open the property page for a
	hyperterminal session file (*.ht), and then close the property page, you will
	receive an access violation in Explorer.exe.
	
	NOTE: *.ht files can be found in %winnt%\Profiles\<username>\Start
	Menu\Programs\Accessories\Hyperterminal.
	
	CAUSE
	=====
	
	HyperTerminal calls RegOpenKey to duplicate a handle to a registry item. But
	RegOpenKey does not duplicate the handle, it just returns the one you gave it
	(for example, the Shell's handle). Later, the HyperTerminal .dll closes this
	handle, and then the shell attempts to close the handle that was already closed
	by HyperTerminal.
	
	RESOLUTION
	==========
	
	HyperTerminal now uses RegOpenKeyEx, which does give back a new handle to the
	same item (in other words, duplicates it correctly), instead of RegOpenKey.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt dr watson
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
