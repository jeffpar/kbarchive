---
layout: page
title: "Q164462: Conner 4mm DAT Tape Devices Fail After About 30 Seconds"
permalink: kb/164/Q164462/
---

## Q164462: Conner 4mm DAT Tape Devices Fail After About 30 Seconds

	Article: Q164462
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Conner 4 mm DAT tape device and after about 30 seconds your backup
	application returns a hardware error.
	
	CAUSE
	=====
	
	Because some of the newer Conner 4mm DAT tape drives hold the busy status for
	more than 30 seconds, the driver assumes the device is no longer functioning.
	This causes the miniport driver to return an incorrect value for GetTapeStatus.
	
	RESOLUTION
	==========
	
	Install the updated Tape.sys file and check with the manufacturer of your tape
	device that you have the latest firmware revision.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 4mm 4 mm
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
