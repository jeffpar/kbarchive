---
layout: page
title: "Q155927: Err Msg: Registry Subkey Already Exists! Installation Failed"
permalink: kb/155/Q155927/
---

## Q155927: Err Msg: Registry Subkey Already Exists! Installation Failed

	Article: Q155927
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install an Olicom Token Ring network adapter and an Intel
	TokenExpress network adapter in the same computer, you may receive the following
	error message:
	
	  Registry subkey already exists!
	  Installation failed
	
	CAUSE
	=====
	
	The Olicom Token Ring adapters and the Intel TokenExpress adapters share some of
	the same registry entries.
	
	RESOLUTION
	==========
	
	To work around this behavior, install the same driver for both network adapters.
	The Olicom Token Ring adapters and Intel TokenExpress adapters are basically the
	same, and can use the same driver.
	
	Additional query words: prodnt netcard setup
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
