---
layout: page
title: "Q128724: Unable to stop more than 13 services"
permalink: /kb/128/Q128724/
---

## Q128724: Unable to stop more than 13 services

	Article: Q128724
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application installs a Windows NT service, it may also install other
	dependent services. If more than 13 dependent services are installed, you
	receive the following error message when you stop the primary service:
	
	  More data is available
	
	None of the dependent services stop. If you manually stop the dependent services
	until there are fewer than 13 running, stopping the primary service will
	correctly stop all the dependent services.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	Additional query words: prodnt 3.50 Control Panel Services
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
