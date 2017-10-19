---
layout: page
title: "Q122566: Default Printer Changed to Bootup Value if Spooler Restarted"
permalink: /kb/122/Q122566/
---

## Q122566: Default Printer Changed to Bootup Value if Spooler Restarted

	Article: Q122566
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 3.5, if you stop and then restart the Spooler service, the
	default printer changes back to the bootup value, even if it has been changed by
	the Print Manager since you booted the computer.
	
	
	WORKAROUND
	==========
	
	Reboot the computer to ensure that the current default printer remains the
	default if the Spooler service is ever restarted.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
