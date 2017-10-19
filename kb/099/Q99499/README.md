---
layout: page
title: "Q99499: DBLSPACE.EXE Modifies the DBLSPACE.INI Settings"
permalink: /kb/099/Q99499/
---

## Q99499: DBLSPACE.EXE Modifies the DBLSPACE.INI Settings

	Article: Q99499
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DBLSPACE.EXE may modify the DBLSPACE.INI file when certain DoubleSpace functions
	are called from either the full-screen DoubleSpace maintenance program or the
	command line.
	
	MORE INFORMATION
	================
	
	DBLSPACE.INI is a text file used by DoubleSpace to control memory use, drive
	letter reservation, and DoubleSpace drive mounting. This file is critical for
	proper access and management of DoubleSpace-compressed drives. It is
	automatically created during the initial setup of DoubleSpace and may later be
	modified when certain DoubleSpace functions are used.
	
	WARNING: If you edit the DBLSPACE.INI file with incorrect settings, your system
	may stop responding (hang) when you restart it or you may lose access to your
	compressed drives.
	
	For more information on the DBLSPACE.INI file, query on the following words in
	the Microsoft Knowledge Base:
	
	  " dblspace.ini and file and settings " (without the quotation marks)
	
	The section below describes how the various lines in the DBLSPACE.INI file are
	modified by DBLSPACE.EXE:
	
	MaxRemovableDrives=, FirstDrive=, LastDrive=, MaxFileFragments=
	---------------------------------------------------------------
	
	The first four entries that are typically seen in every DBLSPACE.INI file are
	MaxRemovableDrives=, FirstDrive=, LastDrive=, and MaxFileFragments=. The
	following DoubleSpace functions, called from the command line or from the
	full-screen DoubleSpace maintenance program, cause these entries to be added to
	the DBLSPACE.INI file (if they are not already there):
	
	  DBLSPACE /CHKDSK                          DBLSPACE /FORMAT
	  DBLSPACE /COMPRESS                        DBLSPACE /MOUNT
	  DBLSPACE /CREATE                          DBLSPACE /UNMOUNT
	  DBLSPACE /DEFRAGMENT                      DBLSPACE /RATIO
	  DBLSPACE /DELETE                          DBLSPACE /SIZE
	
	ActivateDrive=
	--------------
	
	The DBLSPACE.INI entry used to mount a compressed volume file (CVF) every time a
	computer boots is the ActivateDrive= <value>. This entry is added to the
	DBLSPACE.INI file when the following DoubleSpace functions are called:
	
	  DBLSPACE /COMPRESS
	  DBLSPACE /CREATE
	  DBLSPACE /MOUNT
	
	In addition, when DBLSPACE /UNMOUNT is called, any ActivateDrive= entry
	corresponding to the drive being unmounted is removed.
	
	Additional query words: 6.00 dblspace doublespace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
