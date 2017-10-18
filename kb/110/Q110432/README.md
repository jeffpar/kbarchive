---
layout: page
title: "Q110432: SFM: Printing Postscript Fails, Err Msg: Invalid Access"
permalink: kb/110/Q110432/
---

## Q110432: SFM: Printing Postscript Fails, Err Msg: Invalid Access

	Article: Q110432
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to an HP Laserwriter through Services for Macintosh (SFM) from a
	Macintosh computer to a Windows NT Advanced Server computer, the print job may
	fail with the following error:
	
	  ERROR: invalidaccess
	  OFFENDING COMMAND: setdefaulttimeouts
	
	  STACK:
	
	  300
	  60
	0
	
	This problem occurs when you use either the 6.x or 7.x versions of the HP
	Laserwriter drivers. This problem does not occur if you use the 8.x versions of
	the driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. A supported fix is now available, but is not fully regression-
	tested and should be applied only to systems experiencing this specific problem.
	Unless you are severely impacted by this specific problem, Microsoft recommends
	that you wait for the service pack release containing this fix. Contact
	Microsoft Product Support Services for more information.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
