---
layout: page
title: "Q80270: PC Rmt: Err Msg: Directory Specified Not Remote..."
permalink: /kb/080/Q80270/
---

## Q80270: PC Rmt: Err Msg: Directory Specified Not Remote...

	Article: Q80270
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When updating Remote Mail for Microsoft Mail for PC Networks, the following
	error message will appear if the specified directory is missing key files:
	
	  Directory specified is not a Microsoft Mail Remote database.
	
	CAUSE
	=====
	
	The specified path must have a CONNECT.GLB or CONNECT.MAI file of 695 bytes. If
	this file is missing, the Install program will not update the Remote Mail.
	
	RESOLUTION
	==========
	
	If the file is missing or damaged, take the following steps to create a new
	one:
	
	1. Run the Install program, and install a new copy of Remote Mail to another
	  directory.
	
	2. Copy the CONNECT.MAI file from the new installation of Remote Mail to the old
	  Remote Mail directory.
	
	3. Run the Install program again and specify the old Remote Mail directory.
	
	Additional query words: 2.10 3.00 err msg error message
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS kbMailRemote210DOS
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
