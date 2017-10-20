---
layout: page
title: "Q103548: MS-DOS FORMAT Does Not Preserve Clusters Marked Bad"
permalink: /kb/103/Q103548/
---

## Q103548: MS-DOS FORMAT Does Not Preserve Clusters Marked Bad

{% raw %}

	Article: Q103548
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.22 
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions of the FORMAT command in versions of MS-DOS earlier than 6.2 do not
	preserve bad cluster markers in the file allocation table (FAT).
	
	For added safety, run a third-party surface scan program after you run FORMAT or
	upgrade to MS-DOS version 6.2.
	
	MORE INFORMATION
	================
	
	Any hard disk may a have a few bad sectors. Disk surface scan programs, such as
	Microsoft MS-DOS ScanDisk, Symantec's Norton Utilities Norton Disk Doctor
	(NDD.EXE), and Central Point Software DiskFix can detect (and mark as bad)
	sectors that are marginally reliable. This is done by marking the cluster that
	contains the bad sector with a special entry in the file allocation table
	(FAT)--FF7h in 12-bit FATs and FFF7h in 16-bit FATs.
	
	Versions of MS-DOS FORMAT earlier than 6.2 do not preserve entries marked as bad
	in the FAT. Instead, FORMAT clears the FAT, performs its own disk integrity
	test, and marks clusters with unreliable sectors as bad. Since the FORMAT
	integrity test is not as thorough as some surface scan programs, and because
	sector failures can be intermittent, FORMAT may not detect bad sectors that were
	previously marked as bad by a surface scan utility.
	
	MS-DOS 6.2 FORMAT preserves the FAT entries that are marked as bad (rather than
	marking them good and retesting them). This reduces the risk of a marginally
	reliable sector being marked as usable.
	
	In some circumstances, it is desirable to not preserve the bad cluster markers.
	For example, an errant program may damage the FAT and fill in entries with
	inappropriate bad cluster markers. In such a case, you can use the FORMAT /C
	command. The /C switch directs FORMAT to clear the FAT (ignoring bad clusters
	markers) and revert to its pre-MS-DOS 6.2 behavior. Note, you should run
	Microsoft ScanDisk or a third-party surface scan program after performing a
	FORMAT /C command.
	
	WARNING: If you are experiencing increasing problems with bad sectors on your
	disk, be sure to perform frequent backups of your data and run ScanDisk (or a
	similar disk utility) regularly. If problems persist consult your hardware
	vendor.
	
	Additional query words: 6.00 6.20 crc data error reading writing drive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS622 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.22; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
