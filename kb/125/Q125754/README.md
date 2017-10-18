---
layout: page
title: "Q125754: Cannot Use Multiple Instances of Some Adaptec Controllers"
permalink: kb/125/Q125754/
---

## Q125754: Cannot Use Multiple Instances of Some Adaptec Controllers

	Article: Q125754
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	You cannot use two or more SCSI adapters that use the SPARROW.SYS device
	driver under Windows NT version 3.5.
	
	The Adaptec AHA-1510, AHA-1520, and AHA-1522 adapters use the SPARROW.SYS
	device driver under Windows NT. Since the Windows NT 3.5 SPARROW.SYS device
	driver requires that the SCSI adapter be configured for interrupt (IRQ) 11,
	there will be IRQ conflicts, if you use more than one adapter.
	
	NOTE: See section 15.6 of the Windows NT 3.5 README.TXT file for more
	information.
	
	This was not true under Windows NT version 3.1. Therefore, when you upgrade
	from version 3.1 to version 3.5, you may experience hardware problems that
	did not exist under your previous installation of Windows NT.
	
	To work around these issues, make sure all your Adaptec adapters (AHA-1510,
	AHA-1520, and AHA-1522) are configured for IRQ 11 and remove multiple
	instances of these adapters from your Windows NT configuration.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
