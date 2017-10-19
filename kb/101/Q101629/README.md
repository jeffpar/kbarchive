---
layout: page
title: "Q101629: Second Member of Mirror or Stripe Set Larger than First"
permalink: /kb/101/Q101629/
---

## Q101629: Second Member of Mirror or Stripe Set Larger than First

	Article: Q101629
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5x, 4.0 
	- Microsoft Windows NT Server versions 3.5x, 4.0 
	-------------------------------------------------------------------------------
	
	When Windows NT creates a mirror set, stripe set, or stripe set with
	parity, the sizes of the disk partitions are approximately equal. Windows
	NT reserves some additional space for administrative data. However, when
	the disk geometry of the disk drives involved is not identical, the Disk
	Administrator rounds the size of the second member UP to the nearest
	cylinder boundary. Depending upon the controller used and BIOS settings
	this may make the size of the secondary member partition larger than the
	first partition. The extra space in the second partition is not used.
	
	Some SCSI controller BIOS's translate drives larger than 1GB to make
	1 cylinders worth of data be equal to up to 8MB - in that case the
	rounding UP can make the secondary partition 8MB larger.
	
	If the drive is not used for booting - translation is not necessary, and
	can be disabled to eliminate the 8MB rounding but the drive must be re-
	formatted after doing so.
	
	Note that Windows NT Workstation does not support mirroring or stripe sets
	with parity.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
