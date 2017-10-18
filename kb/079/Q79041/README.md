---
layout: page
title: "Q79041: LANtastic and Zero-Length Files"
permalink: kb/079/Q79041/
---

## Q79041: LANtastic and Zero-Length Files

	Article: Q79041
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,4.0,4.01,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Artisoft LANtastic network operating system in conjunction with
	applications that use file control blocks (FCBs), zero-length files may result.
	Artisoft is aware of the problem and makes the following suggestions:
	
	- Use MS-DOS 3.3
	
	- Do not use applications that use FCBs
	
	- Do not open multiple files in applications that use FCBs
	
	MORE INFORMATION
	================
	
	According to Artisoft, the zero-length files may result when an application that
	uses FCBs opens, references, and closes multiple files, but the server software
	still recognizes the files as being open.
	
	FCBs are used in MS-DOS versions 1.x to maintain compatibility with CP/M. In
	later versions of MS-DOS, file handles are commonly used to access files rather
	than FCBs, although FCBs are still supported.
	
	The LANtastic network supports multiple servers. For a workstation to act as a
	server, it must simply run the server software on top of MS-DOS. No proprietary
	operating system is needed.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the product's performance
	or reliability.
	
	REFERENCES
	==========
	
	"The MS-DOS Encyclopedia," Microsoft Press, 1988
	
	Additional query words: 6.22 3.30 4.00 4.01 5.00 5.00a 6.00 6.20 lantastic
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.3,4.0,4.01,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
