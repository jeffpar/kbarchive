---
layout: page
title: "Q89103: RAMDrive Icon Replaced with Network Drive Icon in Windows"
permalink: kb/089/Q89103/
---

## Q89103: RAMDrive Icon Replaced with Network Drive Icon in Windows

	Article: Q89103
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.03,2.1,2.11,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If at the MS-DOS command prompt, you set up a RAM drive and connect to a network
	share using the same drive letter, and then start Windows, the MS- DOS Executive
	(Windows versions 3.0a and earlier) or File Manager (Windows 3.1) do not see the
	RAM drive, but do see the network drive.
	
	This is by design.
	
	For example, if your last hard disk drive is drive E, your RAM drive will be set
	up as drive F. If you then try to put a network connection on drive F, your
	Drive F icon in Windows will be your network drive, not your RAM drive.
	
	Additional query words: 3.00 3.00a 3.10 3.11 WIN286 WIN386 ramdrive
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.03,2.1,2.11,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
