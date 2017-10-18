---
layout: page
title: "Q108750: You Must Use &quot;DBLSPACE /FORMAT A:&quot; to Format That Drive"
permalink: kb/108/Q108750/
---

## Q108750: You Must Use &quot;DBLSPACE /FORMAT A:&quot; to Format That Drive

	Article: Q108750
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you unmount a compressed volume file (CVF) on a floppy disk drive and then
	try to use the MS-DOS FORMAT command to format a floppy disk, you may receive
	the following message
	
	  You must use "DBLSPACE /FORMAT <X>:" to format that drive.
	
	where <X> is the floppy disk drive letter.
	
	CAUSE
	=====
	
	This message is caused by the new Automount feature in MS-DOS 6.2. Any command
	that attempts to access a floppy disk drive containing a disk with a CVF mounts
	that CVF.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Change to the drive letter that contains the compressed floppy disk (usually
	  A: or B:) by typing "A:" (without the quotation marks) or "B:" (without the
	  quotation marks).
	
	2. Type "dblspace /unmount <x>:" (without the quotation marks) where
	  <x> is the floppy disk drive letter.
	
	3. Type "format <x>:" (without the quotation marks) where <x> is the
	  floppy disk drive letter.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
