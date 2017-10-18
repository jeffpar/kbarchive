---
layout: page
title: "Q99449: Err Msg: Error Reading Partition Table with Stacker Disk"
permalink: kb/099/Q99449/
---

## Q99449: Err Msg: Error Reading Partition Table with Stacker Disk

	Article: Q99449
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to format a mounted STAC Electronics Stacker floppy disk using the
	MS-DOS FORMAT command, one of the following error messages may appear:
	
	- Error reading partition table. Format terminated.
	
	-or-
	
	- Extended error 21. Format terminated.
	
	WORKAROUND
	==========
	
	To work around this problem and format the disk, unmount the Stacker floppy disk
	with the following steps:
	
	1. Unmount the Stacker floppy disk by typing "exit" (without the quotation
	  marks) at the MS-DOS command prompt.
	
	  NOTE: EXIT is a Stacker command that removes the Stacker terminate-
	  and-stay-resident (TSR) program responsible for automatically mounting floppy
	  disks.
	
	2. Type "format <x>:" (without the quotation marks) where <x> is the
	  floppy disk drive.
	
	Stacker, is manufactured by STAC Electronics, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: 6.22 6.00 6.20 3rdparty third-party third party
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
