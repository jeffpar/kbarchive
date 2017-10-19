---
layout: page
title: "Q163413: Upgrade to Windows NT 4.0 May Not Keep All Registry Settings"
permalink: /kb/163/Q163413/
---

## Q163413: Upgrade to Windows NT 4.0 May Not Keep All Registry Settings

	Article: Q163413
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows NT 3.51 to Windows NT 4.0, entries under the
	following registry key are not maintained:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ServiceGroupOrder\ 
	List
	
	CAUSE
	=====
	
	This key is overwritten during the Windows NT 4.0 Setup process and old settings
	are not maintained.
	
	RESOLUTION
	==========
	
	Reinstall the program or driver to create the new class entry in Windows NT
	version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: symarray class install
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
