---
layout: page
title: "Q106481: Installing MS-DOS 5, 6, 6.2 Upgrade from a Network Server"
permalink: kb/106/Q106481/
---

## Q106481: Installing MS-DOS 5, 6, 6.2 Upgrade from a Network Server

	Article: Q106481
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to install the MS-DOS Upgrade packages from a network server;
	this provides a more efficient way to upgrade multiple workstations.
	
	This article covers the following topics:
	
	- Putting Unexpanded MS-DOS Files on the Network Server
	
	- Putting MS-DOS Files on a Server to Upgrade a Diskless Workstation
	
	NOTE: These procedure do not change your licensing agreement. You still must have
	one copy of MS-DOS (or a license) for each computer on which you install
	MS-DOS.
	
	Putting Unexpanded MS-DOS Files on the Network Server
	-----------------------------------------------------
	
	To put the unexpanded MS-DOS files on a network server:
	
	1. Create a directory on the server (for example, DOS62).
	
	2. Copy all the files from each MS-DOS Upgrade disk to that directory.
	
	Instead of upgrading from floppy disk, each user on the network can now upgrade
	his or her workstation from the network server.
	
	Putting MS-DOS Files on a Server to Upgrade a Diskless Workstation
	------------------------------------------------------------------
	
	To install MS-DOS Upgrade on a diskless workstation, most network administrators
	copy the MS-DOS files to the network and then prepare boot images.
	
	If you have MS-DOS 5.0, you can copy the expanded MS-DOS files to the network
	using one of the following methods:
	
	- Install MS-DOS 5.0 on a workstation that has both a floppy disk drive and a
	  hard disk and then copy the MS-DOS files to the network server.
	
	-or-
	
	- Using a workstation that has a floppy disk drive, run SETUP /F to install all
	  MS-DOS program files to floppy disks and then copy the MS-DOS files to the
	  network server.
	
	If you have MS-DOS 6.0 or 6.2, you can copy the expanded MS-DOS file to the
	network using one of the following methods:
	
	- Install MS-DOS 6.0 or 6.2 on a workstation that has both a floppy disk drive
	  and a hard disk and then copy the MS-DOS files to the network server.
	
	-or-
	
	- Using a workstation that has both a floppy disk drive and a hard disk, run
	  SETUP /Q to expand the MS-DOS files to a network drive. Using this method
	  does not install the optional MS-DOS programs (Microsoft Backup, Microsoft
	  Anti-Virus, Microsoft Undelete).
	
	  NOTE: MS-DOS 6.0 and 6.2 SETUP /F create only one disk containing a few of the
	  MS-DOS files and therefore are not useful for putting the MS-DOS files on a
	  network server.
	
	Additional query words: msbackup 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
