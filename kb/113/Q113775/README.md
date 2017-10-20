---
layout: page
title: "Q113775: MS-DOS 6.21: Errors Restoring Compressed Backups"
permalink: /kb/113/Q113775/
---

## Q113775: MS-DOS 6.21: Errors Restoring Compressed Backups

{% raw %}

	Article: Q113775
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an original equipment manufacturer (OEM) version of Microsoft
	MS-DOS 6.21 Backup to restore backups created with an earlier version of
	Microsoft Backup, you receive one of the following error messages:
	
	
	MS-DOS 6.21 Backup (MS-DOS-Based Version)
	-----------------------------------------
	
	  Critical Error
	
	  Cannot retrieve catalog <filename> from disk #1 in drive A.
	
	  -or-
	
	  Alert
	
	  Compression failure within <filename>.
	
	MS-DOS 6.21 Backup for Windows
	------------------------------
	
	  The compression header for the catalog is corrupt. Use rebuild to reconstruct
	  the catalog.
	
	  -or-
	
	  The file <filename> could not be properly restored. Do you want to skip
	  this file?
	
	  -or-
	
	  The compression header for the file <filename> is corrupt. Restore
	  cannot process this file and must stop.
	
	  -or-
	
	  Cannot recover data from damaged diskette using error correction (ECC)
	
	NOTE: This message is displayed when you try to retrieve or rebuild the backup
	catalog.
	
	CAUSE
	=====
	
	Compression code was removed from Microsoft Backup in MS-DOS 6.21. When you use
	Microsoft Backup 6.21 to restore backups made with compression turned on, you
	receive the errors noted above.
	
	RESOLUTION
	==========
	
	If you are restoring backups made on another computer, re-create the backups
	with compression turned off.
	
	If you cannot re-create the backups, use the MS-DOS Expand utility (EXPAND.EXE)
	to expand the required files (using the table below for reference) from the
	original MS-DOS 6.0 or 6.2 disks.
	
	Files Required for Microsoft Backup (MS-DOS-Based Version)
	----------------------------------------------------------
	
	  MSBACKDB.OVL
	  MSBACKDR.OVL
	  MSBACKFB.OVL
	  MSBACKFR.OVL
	  MSBACKUP.EX_    MSBACKUP.EXE
	  MSBACKUP.HL_    MSBACKUP.HLP
	  MSBACKUP.OVL
	  MSBCONFG.HL_    MSBCONFG.HLP
	  MSBCONFG.OVL
	
	Files Required for Microsoft Backup for Windows
	-----------------------------------------------
	
	  MWBACKF.DL_     MWBACKF.DLL
	  MWBACKR.DL_     MWBACKR.DLL
	  MWBACKUP.EX_    MWBACKUP.EXE
	  MWBACKUP.HL_    MWBACKUP.HLP
	  MWGRAFIC.DL_    MWGRAFIC.DLL
	  VFINTD.38_      VFINTD.386
	
	MORE INFORMATION
	================
	
	To change the compression setting in Microsoft Backup 6.0 or 6.2:
	
	1. Choose Backup.
	
	2. Choose Options.
	
	3. Clear the Compress Backup Data check box.
	
	4. Choose OK.
	
	Additional query words: 6.22 6.0 6.00 6.2 6.20 6.21 stop cancel restore ok yes no skip recreate
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	

{% endraw %}
