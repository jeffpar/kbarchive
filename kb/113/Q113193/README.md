---
layout: page
title: "Q113193: PC Adm: Err Msg: Notice 158 Folder in Use... Not Compressed"
permalink: /kb/113/Q113193/
---

## Q113193: PC Adm: Err Msg: Notice 158 Folder in Use... Not Compressed

	Article: Q113193
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Mail Administrator program (ADMIN.EXE) and you select
	Admin, Folder, Compress to compress folders, the following error message may
	appear:
	
	  Notice 158 : Folder in use, they were not compressed.
	  Run Foldcomp -s if this persists.
	
	CAUSE
	=====
	
	This problem is caused by a semaphore lock on a folder file.
	
	RESOLUTION
	==========
	
	The folder that remains on the screen when the Mail Administrator program
	displays the Notice 158 error is not necessarily the subdirectory in which the
	FOLDCOMP -S command needs to be performed.
	
	If the error persists after you run FOLDCOMP -S on the subdirectory displayed,
	run the FOLDCOMP -S command on all folder subdirectories.
	
	Additional query words: 3.00 3.00b 3.20 Admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
