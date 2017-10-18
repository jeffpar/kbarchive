---
layout: page
title: "Q131618: Tape Drive Error Detected with Qlogic Fast SCSI IQ PCI Adapter"
permalink: kb/131/Q131618/
---

## Q131618: Tape Drive Error Detected with Qlogic Fast SCSI IQ PCI Adapter

	Article: Q131618
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.50, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT Backup (NTBACKUP.EXE) with a Wangdat 3100 tape device
	connected to a QLogic Fast SCSI IQ PCI controller, the following error message
	may appear:
	
	  Tape drive error detected
	
	  Tape device reports an error on a request to change physical block size. The
	  tape device reported an error on a request to read the tape hardware failure.
	
	CAUSE
	=====
	
	The default drive parameter for the QLogic Fast SCSI IQ PCI card is incompatible
	with the Wangdat 3100 drive. As a result, the tape drive is not detected by the
	QLogic Fast SCSI IQ PCI controller.
	
	RESOLUTION
	==========
	
	To correct this problem, use the QLogic Fast Install utility and change the
	following QLogic Fast SCSI IQ PCI controller EEPROM drive parameter to:
	
	  Disconnect Allow Set=1
	
	The default value is 0.
	
	For more information, contact QLogic Technical Support at (800) 737-6524.
	
	The QLogic product discussed here is manufactured by QLogic, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: prodnt 3.10 hrdwr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
