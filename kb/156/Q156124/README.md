---
layout: page
title: "Q156124: XFOR: How to Use a Resync.glb with an Exchange Requestor"
permalink: /kb/156/Q156124/
---

## Q156124: XFOR: How to Use a Resync.glb with an Exchange Requestor

	Article: Q156124
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail directory synchronization, the Import utility can be used to
	create a Resync.glb file. This file can then be used to resynchronize the
	requestor with the dir-sync server (DSS) by replacing the sync numbers and the
	address lists on the Microsoft Mail Requestor Postoffice with the copy the DSS
	maintains.
	
	You can use this file with an Exchange Requestor by placing it in the Dxadata
	directory and stopping and starting the Directory Synchronization service. This
	will populate the Exchange import containers with the Microsoft Mail addresses
	and resynchronize the Requestor Sync numbers.
	
	MORE INFORMATION
	================
	
	Resync.glb can be created in the Maildata\glb subdirectory on the Microsoft Mail
	dir sync server postoffice by carrying out:
	
	  Import -s admin -p[password] -d[drive]
	
	Resync.glb is typically used to troubleshoot the dir-sync process. It contains
	both the sync numbers (as the DSS sees them), and the actual addresses stored by
	the DSS.
	
	NOTE: After creating Resync.glb with the import utility, this file must be
	removed from the Maildata\glb directory on the DSS. If you do not remove this
	file, it may cause problems with the Global Address List of the DSS.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q150976 XFOR: How to Create a Resync.glb File From an Exchange DSS
	
	  Q119449 PC DirSync: Description of RESYNC.GLB
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	Additional query words: dir-sync dirsynch dirsync resync
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
