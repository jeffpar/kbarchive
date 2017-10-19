---
layout: page
title: "Q148637: Windows 95/98 Overwrites Boot-Sector Field on Floppy Disks"
permalink: /kb/148/Q148637/
---

## Q148637: Windows 95/98 Overwrites Boot-Sector Field on Floppy Disks

	Article: Q148637
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	A floppy disk provided by your computer manufacturer (for example, a system
	reference disk or flash BIOS update disk) or a floppy disk created by one of
	your programs (for example, a backup disk or a copy-protected program
	installation disk) may not be recognized as a valid disk after being accessed in
	Windows using Windows Explorer, a command prompt, or another program.
	
	Programs designed to use the disk may report that it is either unrecognizable or
	damaged, or you may be asked to insert a valid disk when the correct disk is
	already in the disk drive.
	
	This problem is known to occur with the following disks:
	
	
	- IBM Reference Disks and Flash BIOS Update Disks
	
	  After accessing an IBM Flash BIOS Update Disk in Windows 95, you may receive
	  the following error message when you attempt to flash your BIOS with the
	  disk:
	
	  Invalid flash diskette
	
	
	CAUSE
	=====
	
	The tool that created the floppy disk uses a boot-sector field that is used by
	Windows. On floppy disks that are not write protected, Windows writes a unique
	volume identification number to the OEMName field (offset 0x03, or 0003h) of the
	boot sector for use by Volume Tracker (Voltrack.vxd). Volume Tracker ensures
	that the correct disk is in the drive and reports improper disk removal or
	insertion.
	
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, use one of the following methods.
	
	Write-Protect the Disk
	----------------------
	
	If you do not need to write to the floppy disk, set the disk's write- protect
	tab. On write-protected disks, Volume Tracker caches the disk's label, serial
	number, and BIOS Parameter Block (BPB), instead of writing to the boot-sector
	OEMName field.
	
	Add Boot-Sector ID to the NoVolTrack Registry Key
	-------------------------------------------------
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	If your hardware vendor or program writes a unique string to the boot sector to
	identify the disk, add the string and boot-sector offset location to the
	following registry key:
	
	  HKey_Local_Machine\System\CurrentControlSet\Control\FileSystem\ 
	  NoVolTrack
	
	To accomplish this, add a binary value (use the hardware vendor or program name
	for the value name) to the registry key with the value data in the following
	format:
	
	  <xx> <yy> <zz zz zz zz zz zz zz zz>
	
	where <xx> <yy> is the offset in the boot sector where the
	vendor-specific string is located (written in reverse-byte format), and <zz
	zz zz zz zz zz zz zz> is the vendor-specific string in hexadecimal.
	
	For example, if the vendor-specific string is "PVBACKUP" at offset 0003h,
	<xx> is 03 and <yy> is 00 (because 0003h is written 03 00 in
	reverse-byte format). In this case, the value for <zz zz zz zz zz zz zz
	zz> is 50 56 42 41 43 4b 55 50 (the hexadecimal equivalent of "PVBACKUP").
	
	NOTE: The "PVBACKUP" string in this example is already included in the default
	NoVolTrack key created by Windows 95 Setup.
	
	Volume Tracker scans the NoVolTrack key and does not write to the boot- sector
	OEMName field of floppy disks specified in the key.
	
	
	Note that you can create a text file with a .reg extension that includes the
	appropriate settings to add to the NoVolTrack key. You can merge the .reg file
	into the registry using Regedit.exe or batch Setup (Msbatch.inf). This can be
	helpful when you need to add a NoVolTrack entry on multiple computers.
	
	The contents of the .reg file should be
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\FileSystem\ 
	  NoVolTrack]
	  <VendorName>=hex:<xx>,<yy>,<zz,zz,zz,zz,zz,zz,zz,zz>
	
	where <VendorName> is the manufacturer name and <xx>, <yy>, and
	<zz,zz,zz,zz,zz,zz,zz,zz> are as defined above.
	
	NOTE: The registry key should be on one line. It appears on two lines above due
	to limited space.
	
	For IBM Flash BIOS Update Disks, the following .reg file should be merged:
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\FileSystem\ 
	  NoVolTrack]
	  "IBM flash disk"=hex:03,00,49,42,4d,20,35,20,33,66
	
	NOTE: The registry key should be on one line. It appears on two lines above due
	to limited space.
	
	
	Use Only MS-DOS Mode to Access the Disk
	---------------------------------------
	
	Do not access the floppy disk from Windows. If you need to access the floppy disk
	only in MS-DOS mode, specify MS-DOS mode in the program information file (PIF)
	that runs the program you use to access the disk, or boot to a command prompt to
	access the disk. Windows does not perform volume tracking in MS-DOS mode.
	
	WARNING: This resolution assumes that you will never access the disk, or view its
	contents, from Windows (using Windows Explorer, a command prompt, or another
	program). If you do, the OEMName data will be overwritten for Volume Tracker.
	
	MORE INFORMATION
	================
	
	If you can no longer access the floppy disk, contact the manufacturer for a
	replacement disk.
	
	
	REFERENCES
	==========
	
	Microsoft Windows 95 Resource Kit, "Assigning Drive Letters for Removable
	Media," page 652
	
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	
	=============================================================================
	
