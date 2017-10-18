---
layout: page
title: "Q136446: Devices on Secondary Future Domain TMC-3260 PCI SCSI Not Found"
permalink: kb/136/Q136446/
---

## Q136446: Devices on Secondary Future Domain TMC-3260 PCI SCSI Not Found

	Article: Q136446
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	On your computer configured with one Future Domain TMC-3260 PCI controller,
	after you add a second Future Domain TMC-3260 PCI controller, Windows NT File
	Manager and Disk Administrator do not recognize devices connected to the
	secondary SCSI controller.
	
	This problem occurs even though the system BIOS recognizes the devices connected
	to the primary and secondary SCSI controllers during the computer startup
	process.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use another supported secondary SCSI controller.
	For a list of supported SCSI controllers, refer to the Windows NT Hardware
	Compatibility List (HCL).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt fd adapter
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
