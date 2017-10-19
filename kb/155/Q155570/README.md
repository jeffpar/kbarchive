---
layout: page
title: "Q155570: Cheyenne ARCServe Does Not Work with Windows NT Drivers"
permalink: /kb/155/Q155570/
---

## Q155570: Cheyenne ARCServe Does Not Work with Windows NT Drivers

	Article: Q155570
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer's tape drive cannot be detected using Cheyenne ARCServe backup
	software.
	
	-or-
	
	Arcserve may recognize the drive, but regardless of format it will not recognize
	any tape in the drive. Specifically, in Arcserve Manager, if you select Device,
	there will be no tape listed. Arcserve will normally show that a tape is loaded
	in the drive even if the tape format is not compatible with Arcserve software.
	
	CAUSE
	=====
	
	A Windows NT tape device driver is loaded and started.
	
	RESOLUTION
	==========
	
	Remove the Windows NT drivers and load the ARCServe drivers according to
	Cheyenne's instructions.
	
	
	MORE INFORMATION
	================
	
	This behavior is by design. Cheyenne does not use the Windows NT driver model.
	If you load the Windows NT driver, it "claims" that device, and the device
	cannot be accessed by the ARCServe drivers.
	
	ARCServe is manufactured by Cheyenne, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
