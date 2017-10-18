---
layout: page
title: "Q122116: /BASEVIDEO Switch Doesn't Work After Upgrade to 3.5"
permalink: kb/122/Q122116/
---

## Q122116: /BASEVIDEO Switch Doesn't Work After Upgrade to 3.5

	Article: Q122116
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a SCSI Windows NT version 3.1 computer to Windows NT version
	3.5, the /BASEVIDEO switch does not work if you choose to start Windows NT in
	VGA Mode.
	
	CAUSE
	=====
	
	During the upgrade from Windows NT version 3.1 to Windows NT version 3.5, Setup
	fails to remove the /SCSIORDINAL:0 from the end of the ARC path in the BOOT.INI
	file.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the /SCSIORDINAL switch from the ARC path in
	the BOOT.INI file. This switch is not needed if the ARC path begins with
	"Multi."
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
