---
layout: page
title: "Q112887: PC Gen: Err Msg: Notice 6 Error in Mail Header Retrieval"
permalink: kb/112/Q112887/
---

## Q112887: PC Gen: Err Msg: Notice 6 Error in Mail Header Retrieval

	Article: Q112887
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0b, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access mail messages from the MS-DOS client, the following error may
	appear:
	
	  Notice 6
	  Error in Mail Header Retrieval
	
	CAUSE
	=====
	
	This error can occur if your .MBG or .KEY file is missing, corrupted, or
	hidden.
	
	NOTE: If the postoffice resides on a Novell server, you can search for hidden
	files using either of the following NetWare commands:
	
	  ndir *.* /H
	
	  -or-
	
	  flag *.*
	
	RESOLUTION
	==========
	
	Restore your .KEY and .MBG files from a valid backup copy or make hidden files
	viewable. Should no backup be available, your mail system can be repaired by
	creating a test user and copying its new .KEY and .MBG files as follows:
	
	1. Restore the backup file to a local drive.
	
	2. Sign in, move all mail in the mailbox to a folder, and archive the folder.
	
	3. Determine the users hex id by using LISTUSER.EXE.
	
	4. Using the hex id, identify the users KEY and MBG Files, for example,
	  00000004.KEY and 00000004.MBG.
	
	5. Using debug, the following methods explain how to reset a KEY file and create
	  a new MBG.
	
	  a. To Reset a .KEY File
	
	  debug 00000004.KEY
	  -f100,32f,0
	  -w
	  -q
	
	  b. To Create/Reset an .MBG file:
	
	  M:\MBG> type nul > 00000004.MBG
	
	6. Sign in as the new user, and unarchive the folder.
	
	NOTE: You can verify that the file was created by using the MS-DOS DIR command to
	check for the existence of a zero-byte 00000004.MBG file.
	
	NOTE: To copy a new .MBG file, you need to use the XCOPY command rather than the
	COPY command. New .MBG files are of zero length. Therefore, it cannot be copied
	with the COPY command.
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1x,3.0,3.0b,3.2
	
	=============================================================================
	
