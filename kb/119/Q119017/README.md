---
layout: page
title: "Q119017: PC DirSync: Err Msg: Possible Database Corruption Detected..."
permalink: /kb/119/Q119017/
---

## Q119017: PC DirSync: Err Msg: Possible Database Corruption Detected...

	Article: Q119017
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T1 phase of automatic directory synchronization (Dir-Sync), or when
	you manually run the requestor transmit process REQMAIN -T, the following error
	messages may be displayed in the DIRSYNC.LOG file:
	
	  Status Microsoft (R) Mail DirSync Requestor V3.2
	  Warning[ 2] Error opening file: REQTRANS
	  Fatal [ 40] Possible database corruption detected: REQTRANS
	  Warning[152] Failure to transmit requestor updates
	  Status Requestor process failed.
	
	CAUSE
	=====
	
	This error occurs when the REQTRANS.GLB transaction file is missing from the GLB
	subdirectory on the postoffice.
	
	RESOLUTION
	==========
	
	You can create a zero-byte REQTRANS.GLB file; however, this is not a complete
	resolution to this problem. The resolution depends on whether the postoffice is
	a Dir-Sync server postoffice or a requestor postoffice. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q119014 How to Recover from Missing REQTRANS.GLB File
	
	MORE INFORMATION
	================
	
	Other Symptoms Associated with a Missing REQTRANS.GLB File
	----------------------------------------------------------
	
	With REQTRANS.GLB missing from the GLB subdirectory on the postoffice, if you try
	to add a user via the Mail Administrator program by selecting Local- Admin,
	Create, the following error message will result:
	
	  Notice 40-Error in sending updated users and groups
	
	Also, if you try to use the IMPORT utility (IMPORT.EXE) to add a user while
	REQTRANS.GLB is missing, the following error message results:
	
	  Warning[ 2] Error opening file: REQTRANS
	
	When you run the Mail Administrator program and select Config, Dir-Sync,
	Requestor, Export with REQTRANS.GLB missing, NO error message will be displayed
	and the transactions will not be placed in the transaction file. The REQCONF.GLB
	file is modified and will reflect this date as the last export date, even
	through the export was not successful.
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
