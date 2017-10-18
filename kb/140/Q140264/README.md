---
layout: page
title: "Q140264: Issues with Multiple Concentrators with Digi DIGIFEP5.SYS Driver"
permalink: kb/140/Q140264/
---

## Q140264: Issues with Multiple Concentrators with Digi DIGIFEP5.SYS Driver

	Article: Q140264
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On Windows NT Remote Access Service (RAS) servers with multiple Digiboard
	multi-serial adapters attached to 30 or more ports, you may encounter problems
	with ports not resetting, users being disconnected, and "Line Non-Operational"
	errors when you view the ports in RASADMIN. Additionally, the RAS connection is
	intermittently slow .
	
	This problem can be seen on models that utilize the DIGIFEP5.SYS driver.
	
	The ports that are affected do not reactivate until you stop the RAS service and
	the Digifep5 driver.
	
	NOTE: To stop the services from the command line, type:
	
	  NET STOP REMOTEACCESS
	
	  NET STOP DIGIFEP5
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
