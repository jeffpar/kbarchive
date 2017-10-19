---
layout: page
title: "Q158370: Err Msg: Another Program Is Using the Selected Telephony..."
permalink: /kb/158/Q158370/
---

## Q158370: Err Msg: Another Program Is Using the Selected Telephony...

	Article: Q158370
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a second modem to a computer and attempt to use it, you may receive
	the following error message:
	
	  Another program is using the selected telephony device. Try again after other
	  program completes.
	
	CAUSE
	=====
	
	This error message occurs if a telephony program was started before the modem
	was added.
	
	RESOLUTION
	==========
	
	You must shut down and restart the computer before you can use the second modem.
	
	MORE INFORMATION
	================
	
	When a modem is used, the following components are loaded into memory:
	
	- Modem.sys
	
	- Tapisrv.exe
	
	- Unimodem.tsp
	
	Until these components are unloaded, a TAPI-aware program cannot use a modem that
	was added after these components were started.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
