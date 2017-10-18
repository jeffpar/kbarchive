---
layout: page
title: "Q148439: IBM 4019 Prints Very Slowly Under Windows NT"
permalink: kb/148/Q148439/
---

## Q148439: IBM 4019 Prints Very Slowly Under Windows NT

	Article: Q148439
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Printing to an IBM 4019 printer in native mode using the IBM 4019 printer driver
	takes a very long time, compared to the same printer in HP emulation mode using
	the HP Laserjet driver or when using the IBM 4019 printer driver under Windows
	95.
	
	WORKAROUND
	==========
	
	Set the printer to HP emulation mode and use the HP Laserjet printer driver.
	
	MORE INFORMATION
	================
	
	In native mode, the IBM 4019 printer uses a PPDSL standard. In that mode,
	Microsoft's printer driver does not support downloading True Type fonts, so they
	are printed as graphics.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
