---
layout: page
title: "Q79840: Remote Drives Overwrite Local Drives"
permalink: kb/079/Q79840/
---

## Q79840: Remote Drives Overwrite Local Drives

	Article: Q79840
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When using the NET USE command to associate a remote block device to a drive
	letter, if the drive letter is already being used by a local block device (such
	as a RAM disk, a floppy disk, or a hard disk), the network drive overwrites the
	local drive. Disconnecting the network drive causes the local drive to return.
	
	CAUSE
	=====
	
	When MS-DOS versions 3.0 and 3.1 were current, some MS-DOS versions 1.x/2.x
	applications still existed. These applications only recognize drives A and B.
	
	Allowing a NET USE of an existing MS-DOS block device drive letter allows you to
	get one of these very old applications to load, run, and read files off the
	network by redirecting one or both of drives A and B to a server.
	
	These applications are the reason the MS-DOS ASSIGN utility was written.
	
	This feature also allows you to "transform" a machine with a very small drive C
	or a machine with only a floppy disk into the equivalent of a diskless
	workstation by redirecting drives A, B, and C.
	
	STATUS
	======
	
	This is a feature of the MS-DOS redirector (both Microsoft Networks and
	Microsoft LAN Manager).
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
