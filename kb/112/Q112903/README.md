---
layout: page
title: "Q112903: PC Gen: Err Msg: Notice 51: No Folders to Select"
permalink: kb/112/Q112903/
---

## Q112903: PC Gen: Err Msg: Notice 51: No Folders to Select

	Article: Q112903
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under versions 2.1x, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, when
	you access folders from the MS-DOS client, the following error message may
	appear:
	
	  Notice 51:
	  No folders to select
	
	CAUSE
	=====
	
	This error can be caused by a corrupt or missing private folder index file. It
	can also be caused when you try to access private folders created in Mail for
	Windows from the MS-DOS client.
	
	RESOLUTION
	==========
	
	If the index file is missing, restore it from a backup copy. The index file
	(.IDX) should reside in the following sub-directory:
	
	  maildata\folders\loc\xxxxxxxx
	
	where XXXXXXXX is your associated hexadecimal filename. The index file will be
	named using the same hexadecimal number (XXXXXXX.IDX). Run LISTUSER.EXE to
	obtain your hexadecimal number.
	
	If no valid backup exists, run FIXIDX.EXE to recreate the folder index file.
	
	NOTE: The following procedure will remove the human-readable folder names. In
	order to recreate the folder names later, DUMPFLD.EXE should be run against all
	folders before hand, in order to obtain the original name:
	
	  dumpfld xxxxxxxx.fld
	
	Once you obtain all the information you need, you can run FIXIDX.EXE (from your
	private folders sub-directory) using the following command:
	
	  fixidx xxxxxxxx.idx xxxxxxxx
	
	where XXXXXXXX.IDX is the index file to be created and XXXXXXXX is the your
	hexadecimal filename.
	
	Folder names can be re-assigned to their original, human-readable names from
	within the client using Options, Folders, Modify.
	
	MORE INFORMATION
	================
	
	For additional information on the LISTUSER.EXE and DUMPFLD.EXE utilities, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities
	
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
