---
layout: page
title: "Q141732: Adaptec AHA154x Driver Fails to Install Second Adapter"
permalink: /kb/141/Q141732/
---

## Q141732: Adaptec AHA154x Driver Fails to Install Second Adapter

	Article: Q141732
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP2,SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP2, SP3 
	- Microsoft Windows NT Server versions 3.51 SP2, SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install a second Adaptec 154x SCSI controller in your computer running
	Windows NT version 3.51 with Service Pack 2 or 3, the driver fails to attach to
	the second adapter and the following events from the AHA154x are logged in the
	System log:
	
	  A conflict has been detected between two drivers which claimed two
	  overlapping memory regions. Driver Aha154x, with device
	  <\Device\ScsiPort1.Translated>, claimed a memory range with starting
	  address in data address 0x28 and 0x2c, and length in data address 0x30.
	
	  At the locations in the data area you will find the BIOS address of the first
	  adapter.
	
	CAUSE
	=====
	
	The driver attempts to use the same BIOS area for the second adapter as it did
	for the first one, even if the second adapters BIOS is disabled or at a
	different address. Because this address is already in use by the first adapter,
	the drivers fails.
	
	The adapter allocates the BIOS area, however, Windows NT does not use it to
	prevent problems with other adapters possibly using that memory addresses (for
	example, network adapter cards).
	
	WORKAROUND
	==========
	
	If you did not encounter any problems with the driver from the Windows NT 3.51
	release, use that driver.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	The AHA154x is manufactured by Adaptec, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.51 prodnt SP2 SP3
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTSsearch kbWinNTS351sp2 kbWinNTW351SP2
	Version           : :3.51 SP2,SP3
	
	=============================================================================
	
