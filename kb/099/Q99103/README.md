---
layout: page
title: "Q99103: FAST! Requires Version 5.0 for Use with MS-DOS 6.0"
permalink: kb/099/Q99103/
---

## Q99103: FAST! Requires Version 5.0 for Use with MS-DOS 6.0

	Article: Q99103
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	According to Future Computer Systems, versions of FAST! earlier than 5.0 may
	cause problems when run with MS-DOS 6.0 or 6.2. If you are running such a
	configuration, contact Future Computer Systems for information on upgrading your
	version of FAST!.
	
	NOTE: FAST! version 3.0 is the minimum version required to operate properly with
	MS-DOS 5.
	
	MORE INFORMATION
	================
	
	FAST! is a disk-caching program. The following three versions of the cache are
	available:
	
	  FASTX.EXE (uses extended memory)
	  FASTE.EXE (uses expanded memory)
	  FASTC.EXE (uses conventional memory)
	
	Versions of FAST! earlier than 3.0x do not access extended memory when used with
	MS-DOS 5.0 and may cause file corruption or data loss when used with
	DoubleSpace, which ships with MS-DOS 6 and 6.2.
	
	For more information, contact Future Computer Systems Technical Support.
	
	FAST! is manufactured by Future Computer Systems, Incorporated, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.00 double space dblspace third-party 6.20 third party 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.22
	
	=============================================================================
	
