---
layout: page
title: "Q112301: PC Dirsync: Err Msg: File Error Sorting Queue Usrtrans.glb"
permalink: /kb/112/Q112301/
---

## Q112301: PC Dirsync: Err Msg: File Error Sorting Queue Usrtrans.glb

	Article: Q112301
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The update transactions that you expect may not appear in the global address
	list and the following error messages may appear in the Dirsync.log file:
	
	  FATAL [150] Could not append transactions to the updates file
	  ERROR [45] File error sorting queue usrtrans.glb
	
	CAUSE
	=====
	
	This problem occurs when the Usrtrans.glb file is corrupted. The corruption may
	be due to a network problem. If this is the case, network rights and network
	hardware may need to be examined. Slow or unreliable network interface cards in
	the workstation or file server may need to be examined as well.
	
	Another cause of the error [45] is a Sortlock.glb file in the postoffice's GLB
	subdirectory. Sortlock.glb is a temporary file that ensures that Import.exe is
	not run on the same PO at the same time.
	
	An additional cause for an error [45] is a corrupt Reqconf.glb file. Depending on
	the nature of the corruption, LISTDS can be used to fix the corrupt file. The
	problems with the Reqconf.glb file result in ONLY an error [45] in the
	Dirsync.log with no accompanying error messagess:
	
	  Status Microsoft (R) Mail Import v3.2
	  Error [45] File error sorting queue: USRTRANS
	  Status Import is finished.
	
	NOTE: The specific issues dealt with had a corrupt pointer to the Usrtrans file
	in the Reqconf.glb file. This was corrected by setting all of the pointers (4
	total) to -1. An alternate way to correct a corrupt Reqconf.glb file is to copy
	a Reqconf.glb file from another postoffice that is not experiencing this
	problem. Then do a local reset on the postoffice that is experiencing the error
	[45].
	
	For additional information about the steps for a local reset, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	RESOLUTION
	==========
	
	Reset the Usrtrans.glb file to zero bytes, and ensure that the requestor
	postoffice asks for a full import from the directory synchronization (dirsync)
	server by following these steps:
	
	1. From MS-DOS, change to the GLB subdirectory in the Mail database.
	
	2. Use the MS-DOS TYPE command to reset the size of the Usrtrans.glb file to
	  zero bytes:
	
	  type "NUL > USRTRANS.GLB" (without the quotation marks)
	
	3. Delete the temporary files if they are present in the GLB directory:
	  Igwtrans.glb, Inmetran.glb, Iusrtran.glb, Srvupds.glb, Requpds.glb, and any
	  Sortxxx files, where XXXX is a number.
	
	  Verify that Srvtrans.glb, Gwtrans.glb, and Nmetrans.glb are zero bytes.
	
	4. Verify that:
	
	  a. There is sufficient disk space available; go to the dirsync server, add
	     the file sizes for all USR files in the USR subdirectory in the Mail
	     database, and then triple that amount.
	
	  b. The workstation running Dispatch.exe has set FILES=60 (or greater) in the
	     Config.sys file.
	
	  c. There are sufficient network access rights available for the dispatch
	     machine.
	
	  d. The network hardware is reliable.
	
	5. Allow dirsync to run through another cycle.
	
	If the error reoccurs after these steps, perform steps 1 and 2 again, and then
	proceed with the following steps:
	
	6. Run Import.exe on the dirsync server. Use the following command to create the
	  Resync.glb file.
	
	  option '-S'
	
	7. Copy the Resync.glb file from the dirsync server's GLB directory to the
	  requestor's GLB directory.
	
	8. Delete the Resync.glb file from the dirsync server.
	
	9. Allow dirsync to run through another cycle.
	
	Additional query words: fatal150 error45 150 45 pcmailfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	Issue type        : kbprb
	
	=============================================================================
	
