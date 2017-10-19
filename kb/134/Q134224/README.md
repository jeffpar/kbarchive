---
layout: page
title: "Q134224: PC MMTA: Err Msg: Drive X: Is Invalid"
permalink: /kb/134/Q134224/
---

## Q134224: PC MMTA: Err Msg: Drive X: Is Invalid

	Article: Q134224
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup for the Mail Multitasking MTA for OS/2 (MMTA), the following
	error may be displayed:
	
	  Drive X: is invalid
	
	where X is the drive letter.
	
	CAUSE
	=====
	
	The OS/2 MMTA Setup program does not recognize free space over 1 gigabyte in
	size.
	
	RESOLUTION
	==========
	
	Install the OS/2 MMTA on a hard drive that has less than 1 GB in free space.
	Then copy the MMTA files to the other drive.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : :3.2
	
	=============================================================================
	
