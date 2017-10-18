---
layout: page
title: "Q122750: PC DirSync: Files to Check If IMPORT.EXE Does Not Complete"
permalink: kb/122/Q122750/
---

## Q122750: PC DirSync: Files to Check If IMPORT.EXE Does Not Complete

	Article: Q122750
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While the last step (T3) of directory synchronization (Dir-Sync) is being
	performed on a Microsoft Mail for PC Networks postoffice, the Import program
	(IMPORT.EXE) may fail with an error message in the DIRSYNC.LOG file, indicating
	a problem with one of the transaction files.
	
	CAUSE
	=====
	
	When Dir-Sync processes are NOT actively being performed against a postoffice,
	the following files, located in the GLB subdirectory, should all be zero bytes
	in length:
	
	  USRTRANS.GLB
	  NMETRANS.GLB
	  GWTRANS.GLB
	  SRVTRANS.GLB
	
	Likewise, the following files should not exist at all in the GLB subdirectory if
	Dir-Sync is NOT being performed against a postoffice:
	
	  IUSRTRAN.GLB
	  INMETRAN.GLB
	  IGWTRANS.GLB
	  SRVUPDS.GLB
	  REQUPDS.GLB
	  SORTxxxx.GLB (where xxxx is a number)
	  ILOCAL.GLB
	  INDEX.GLB
	
	On occasion, because of network or other problems, IMPORT.EXE will not complete
	successfully (logging an error message in the DIRSYNC.LOG file). While Dir-Sync
	is NOT actively occurring, you may find one or more of the files that should be
	zero bytes in length will actually have some size (greater than zero).
	
	RESOLUTION
	==========
	
	To resolve this problem, try the following options:
	
	1. Run IMPORT.EXE against the postoffice and see if the Import process will
	  successfully complete:
	
	  import admin -p<password> -y -q -d<drive_letter>
	
	2. If IMPORT.EXE fails again, zero out the file(s) that have a size greater than
	  zero bytes, with the MS-DOS TYPE command
	
	  type nul > <filename>
	
	  where <filename> is SRVTRANS.GLB, USRTRANS.GLB, NMETRANS.GLB, or
	  GWTRANS.GLB.
	
	  If, while Dir-Sync is NOT being actively performed on a postoffice, any of the
	  files that should not exist in the GLB subdirectory of the Mail database
	  (listed above) actually do exist, you should delete those files.
	
	Another file to check, which may occassionaly cause problems with the IMPORT.EXE
	process, is the RESYNC.GLB. If a RESYNC.GLB file exists in the GLB subdirectory
	of the postoffice and IMPORT.EXE with the -Q option does not properly process
	this file (RESYNC.GLB should automatically be deleted from the GLB subdirectory
	by IMPORT.EXE), the administrator should manually delete this file.
	
	REFERENCES
	==========
	
	For more information, please see the "Directory Synchronization (Dir-Sync)"
	document. For the text of this document and/or for more information about how to
	obtain it, please see the following article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	Additional query words: 3.00 3.20 dirsync dirsynch
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
