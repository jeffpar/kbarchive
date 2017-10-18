---
layout: page
title: "Q148378: Setup of RAS with Multiple Modems Gives Slow Performance"
permalink: kb/148/Q148378/
---

## Q148378: Setup of RAS with Multiple Modems Gives Slow Performance

	Article: Q148378
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up Remote Access Service (RAS) in Windows NT Server on computers
	with large numbers of modems attached, the Setup process may take an extended
	amount of time to add all attached modems and complete the setup process.
	
	CAUSE
	=====
	
	This slow down occurs when using the modem installer during the RAS setup
	procedure, and was caused by the method used by setup to enumerate each modem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt Time RAS Setup digiboard dun dial-up networking
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
