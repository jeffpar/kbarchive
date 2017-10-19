---
layout: page
title: "Q122440: Err Msg: Cannot Load Catalog From Tape"
permalink: /kb/122/Q122440/
---

## Q122440: Err Msg: Cannot Load Catalog From Tape

	Article: Q122440
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Backup program (NTBACKUP.EXE) with any tape device
	connected to a QLogic PCI SCSI adapter on a PCI bus, the following error message
	may appear:
	
	  Cannot load catalog from tape
	
	CAUSE
	=====
	
	There is a problem with the SCSI adapter driver for the QLogic PCI SCSI adapter.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Use another supported SCSI adapter. Refer to the Windows NT version 3.5
	  Hardware Compatibility List.
	
	  -or-
	
	- Call QLogic Technical Support at (800) 737-6524 for more information.
	
	The QLogic product discussed here is manufactured by QLogic, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: prodnt controller
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
