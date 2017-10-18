---
layout: page
title: "Q112923: PC Adm: Err Msg: Notice 99 Unable to Access Address Record"
permalink: kb/112/Q112923/
---

## Q112923: PC Adm: Err Msg: Notice 99 Unable to Access Address Record

	Article: Q112923
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1x, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, when
	you modify local user details on your postoffice from within ADMIN.EXE, the
	following error may occur:
	
	  Notice 99
	  Unable to Access Address Record
	
	CAUSE
	=====
	
	The cause can be insufficient network rights and file corruption, particularly
	with the Access files (ACCESS.GLB, ACCESS2.GLB, and ACCESS3.GLB).
	
	RESOLUTION
	==========
	
	The Access files should be checked by using the following figures to divide the
	file size by. The file is not corrupt if the number you get after dividing is a
	whole number.
	
	NOTE: Although the files may divide out correctly, this does not guarantee that
	they are corruption free.
	
	  ACCESS.GLB      divide by      586
	  ACCESS2.GLB     divide by       69
	  ACCESS3.GLB     divide by      512
	
	The ADMIN.NME and ADMINSHD.NME files can be checked; they should be the same size
	and date stamp. If the ADMIN.NME file is corrupt (it should be divisible by 45),
	you can run ACCTONME.EXE to regenerate it.
	
	The corrupt ADMIN.NME file will need to be zeroed out. Delete the file then use
	the following command:
	
	  type AAA > ADMIN.NME
	
	ACCTONME can then be run from the root of the mail database. Copy the newly
	generated ADMIN.NME file to ADMINSHD.NME.
	
	The preferred method of resolving this error message is to restore from backup.
	The files to restore are ACCESS.GLB, ACCESS2.GLB, ACCESS3.GLB, ADMIN.NME,
	ADMINSHD.NME, ADMIN.GRP, and ADMINSHD.GRP. They should all be restored from the
	most recent valid backup.
	
	If users have been added to the mail system since this backup, these users will
	have to be redefined after the restoration.
	
	For the MS-DOS workstation users, they should make an archive of their mail
	folders and Inbox, prior to restoring the files, which can be de-archived upon
	recreation of the mailbox.
	
	For Mail for Windows users, they should make a backup of their .MMF file, prior
	to restoring the files, which can be re-imported using Import Folders upon
	recreation of their mailbox.
	
	Additional query words: 2.10x 3.00 3.00a 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
