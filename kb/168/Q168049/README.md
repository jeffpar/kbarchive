---
layout: page
title: "Q168049: HyperTerminal Files Cannot Be Opened If No Modem Is Installed"
permalink: /kb/168/Q168049/
---

## Q168049: HyperTerminal Files Cannot Be Opened If No Modem Is Installed

	Article: Q168049
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
	
	If a Windows NT system has at least one COM port available, but no modems
	installed, HyperTerminal will display an error that it cannot start Session file
	"%s" when you execute a *.ht file. It will then proceed to start a new
	connection. If you try to open one of these pre-configured files (*.ht) from
	within HyperTerminal, it will start a new connection instead of using the
	current connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
