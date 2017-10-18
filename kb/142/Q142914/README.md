---
layout: page
title: "Q142914: Error Reading Magneto Optical Drives in Windows NT"
permalink: kb/142/Q142914/
---

## Q142914: Error Reading Magneto Optical Drives in Windows NT

	Article: Q142914
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to access a magneto optical drive in Windows NT, the following
	error message appears:
	
	  The drive cannot find the sector required.
	
	The drive is recognized during the boot sequence; however, Windows NT is not able
	to determine the file structure of the media when accessing the drive.
	
	CAUSE
	=====
	
	This problem occurs if the magneto optical drive has been formatted using the
	Adaptec EZ-SCSI or CorelSCSI format utilities in DOS.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Install the magneto optical drive on another computer running Windows 95 or
	  Windows for Workgroups 3.11. Then create a network share for the drive. In
	  Windows NT, connect to the network share and access the drive.
	
	  -or-
	
	- Back up the contents of magneto optical drive and format the drive using
	  Windows NT Disk Administrator. Restore the drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In Windows NT, removable drives are recommended to use one partition. This means
	that sector zero on the drive must be a Master Boot Record (MBR). In DOS,
	removable drives can be formatted this way or as a floppy drive (this means that
	sector zero contains a BIOS Parameter Block for the file system). The Adaptec
	EZ-SCSI and CorelSCSCI utilities format the removable drives as floppies.
	Windows NT currently does not support this format.
	
	Additional query words: prodnt fat ntfs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
