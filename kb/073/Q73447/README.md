---
layout: page
title: "Q73447: MS-DOS 4.0 Redirector Needed When Upgrading PCSA Networks"
permalink: /kb/073/Q73447/
---

## Q73447: MS-DOS 4.0 Redirector Needed When Upgrading PCSA Networks

	Article: Q73447
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When upgrading machines using Digital Equipment Corporation (DEC) Pathworks or
	PCSA networks, you may encounter "Incorrect DOS version" error messages when
	attempting to load REDIR.EXE. This can occur despite using the SETVER command as
	outlined in the version 5.0 "Microsoft MS-DOS Getting Started" manual. You
	should ensure that you are using the DOS 4.0 redirectors because the MS-DOS 3.3
	redirectors do not recognize the version number as reported by SETVER.
	
	MORE INFORMATION
	================
	
	The DOS 4.0 redirector is available on the PCSA Client Setup Disks, Disk 2, as
	REDIR400.EXE. This file should be copied to the hard drive using the following
	command:
	
	  COPY A:REDIR400.EXE [drive:][path]REDIR.EXE
	
	where [drive:][path] are the drive letter and path to the current REDIR.EXE
	file.
	
	MS-DOS 3.3 redirectors are not supported in MS-DOS 5.0.
	
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
