---
layout: page
title: "Q104279: PC DB: Creating or Resetting a .KEY and .MBG Pair"
permalink: kb/104/Q104279/
---

## Q104279: PC DB: Creating or Resetting a .KEY and .MBG Pair

	Article: Q104279
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0x and 3.2 of Microsoft Mail for PC Networks, it is sometimes
	necessary to re-create or reset the .KEY and .MBG files. This article describes
	the process.
	
	NOTE: Before you make any modifications to the files, make copies of them
	(*.OLD). Use the .OLD files to restore if something goes wrong and to track down
	possibly orphaned .MAI files, if needed.
	
	MORE INFORMATION
	================
	
	NOTE: An easier way to reset the .KEY and .MBG files can be done with
	MAILQ16.EXE. For more information on how to run MAILQ16.EXE, refer to the
	following article in the Knowledge Base:
	
	  Q130285 Resetting or Rebuilding Mailbags with MAILQ16.EXE
	
	In the following examples, substitute the filenames of the appropriate .KEY and
	.MBG files for the INQUEUE.KEY and INQUEUE.MBG that were used as examples.
	
	To create a new .KEY file
	-------------------------
	
	  debug INQUEUE.KEY
	  -rcx
	  CX 0000
	  :230
	  -f100,32f,0
	  -w
	  -q
	
	To reset a .KEY file
	--------------------
	
	  debug INQUEUE.KEY
	  -f100,32f,0
	  -w
	  -q
	
	To create/reset an .MBG file
	----------------------------
	
	  M:\MBG> type nul > INQUEUE.MBG
	
	NOTE: You can verify that the file was created by using the MS-DOS DIR command to
	check for the existence of a zero-byte INQUEUE.MBG file.
	
	Additional query words: 3.00 3.00a 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN300b
	Version           : WINDOWS:3.0,3.0a,3.0b,3.2
	
	=============================================================================
	
