---
layout: page
title: "Q132499: Error: AIC78xx - Event ID 11"
permalink: kb/132/Q132499/
---

## Q132499: Error: AIC78xx - Event ID 11

	Article: Q132499
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is written to the system log each time a CD-ROM drive
	connected to an Adaptec 2940 controller is accessed:
	
	  Event ID: 11
	  Source: aic78xx
	
	  The driver detected a controller error on \Device\ScsiPortO.
	
	  0000: 0010000f 00680001 00000000 c004000b
	  0010: 00020012 00000000 00006395 00000000
	  0020: 00000000 00000000 00000000 00000004
	  0030: 00000000 00000005
	
	The error does not cause problems in Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt cd compact disc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
