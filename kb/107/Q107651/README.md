---
layout: page
title: "Q107651: 32-Bit File Access Can Cause ScanDisk to Report Harmless Error"
permalink: /kb/107/Q107651/
---

## Q107651: 32-Bit File Access Can Cause ScanDisk to Report Harmless Error

	Article: Q107651
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): MS-DOS:6.2,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 01-OCT-1999
	
	3.11    | 6.20 6.22
	WINDOWS | MS-DOS
	kbtool kberrmsg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run Windows for Workgroups version 3.11 on an MS-DOS 6.2
	DoubleSpace-compressed drive or an MS-DOS 6.22 DriveSpace-compressed drive with
	32-bit file access enabled, the MS-DOS ScanDisk utility may report the following
	error when run at the MS-DOS command prompt
	
	  ScanDisk found <nnnn> bytes of data on drive <x> that might be
	  one or more lost files or directories, but which is probably just taking up
	  space.
	
	where <nnnn> equals the number of bytes of lost files or directories, and
	<x> equals the logical drive ScanDisk was scanning.
	
	NOTE: ScanDisk should not be run from the MS-DOS command prompt within Microsoft
	Windows or Windows for Workgroups. It should be run directly from MS-DOS. If you
	must run ScanDisk from within Windows, use the /CHECKONLY switch. This switch
	prevents ScanDisk from attempting to repair any damage while Windows is running.
	
	CAUSE
	=====
	
	This error message is caused by a problem in Windows for Workgroups 3.11. 32-bit
	file access writes buffers in the order they are used, meaning the first
	information into the buffer is the first information out. 32-bit file access
	also tries to improve access speed by finding contiguous used buffers and
	writing them together. If these two optimization schemes both try to clean the
	buffer simultaneously, an erroneous extra entry in the DoubleSpace or DriveSpace
	file allocation table (MDFAT) can occur.
	
	This problem can also occur when 32-bit file access flushes the entire volume.
	Buffers are written sequentially according to their physical location. This
	optimization has no effect on a compressed volume (since there is no
	physical-to-logical relationship) and can result in erroneous entries in the
	MDFAT.
	
	RESOLUTION
	==========
	
	No saved data is lost. However, data in memory only at the time of the error
	message may be lost. If you choose to correct the problem, ScanDisk repairs the
	volume and creates the standard CHKDSK files (FILEnnnn.CHK), which can be
	deleted. ScanDisk may also report that there are sections of the DoubleSpace or
	DriveSpace volume not being used by any files but marked as unusable; it can
	repair these as well.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 6.20 6.22 vfat mdfat lost entry dblspace drvspace drivespace
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22; WINDOWS:3.11
	
	=============================================================================
	
