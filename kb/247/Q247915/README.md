---
layout: page
title: "Q247915: Cannot Import Config.nt FILES Value into 16-Bit Program"
permalink: /kb/247/Q247915/
---

## Q247915: Cannot Import Config.nt FILES Value into 16-Bit Program

	Article: Q247915
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a 16-bit program in a Microsoft Windows NT Workstation 4.0-based
	virtual DOS machine (VDM), you are not able to import the value set by the
	Config.nt FILES environment variable into the 16-bit application.
	
	CAUSE
	=====
	
	This behavior occurs because only the VDM uses the environment variables set in
	the Config.nt file. These variables are not saved to the registry.
	
	RESOLUTION
	==========
	
	To resolve this behavior, write a program (or use a third-party utility) that
	extracts the value after 'FILES=' to allow that value to be used in another
	program or service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
