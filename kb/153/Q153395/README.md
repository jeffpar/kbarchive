---
layout: page
title: "Q153395: Error Message: &quot;Exception 0E in VPOWERD&quot; During First Boot"
permalink: /kb/153/Q153395/
---

## Q153395: Error Message: &quot;Exception 0E in VPOWERD&quot; During First Boot

	Article: Q153395
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	VPOWERD may cause a page fault (Fatal Exception error 0E) on the first reboot
	during Windows 95 Setup on certain computer models that support advanced power
	management (APM).
	
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Disable the APM feature during Windows 95 Setup.
	
	   - If you are not using an automated Setup, click the Custom button in the
	     Setup Options screen, and then click the Advanced Power Management check
	     box to clear it in the Computer Settings screen.
	
	   - If you are using an automated Setup, add the following line to the
	     [System] section of the Msbatch.inf file:
	
	  "Power"="No APM" (include the quotation marks)
	
	  This method disables all APM functionality in Windows 95.
	
	- You may be able to resolve this issue by upgrading the computer's BIOS.
	  Contact the computer's manufacturer for information about a possible BIOS
	  upgrade.
	
	
	Additional query words: hp
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
