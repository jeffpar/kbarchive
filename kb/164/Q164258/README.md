---
layout: page
title: "Q164258: DPT SCSI Controller can Loose Requests When Reset"
permalink: /kb/164/Q164258/
---

## Q164258: DPT SCSI Controller can Loose Requests When Reset

	Article: Q164258
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under heavy stress or when restarting during Setup, there can be disk corruption
	with a DPT caching SCSI host adapter.
	
	This only happens when the write cache of the DPT adapter is enabled and hardware
	level RAID 5 is used.
	
	CAUSE
	=====
	
	When there is a reset on the SCSI bus because of a timeout or a system Reset,
	the Windows NT driver does not properly handle the uncompleted commands in the
	command queue of the DPT adapter.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact DPT for an updated version of Dptscsi.sys or
	for information on updated firmware. You can contact DPT at:
	
	  http://www.dpt.com/drivers.html
	
	NOTE: Because Web sites are constantly updated, the site address may change
	without notice. If this occurs, please contact the manufacturer directly.
	
	Additional query words: DPT smartcache smartraid
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
