---
layout: page
title: "Q80570: Switching from DR-DOS 6.0 to MS-DOS 5.0"
permalink: kb/080/Q80570/
---

## Q80570: Switching from DR-DOS 6.0 to MS-DOS 5.0

	Article: Q80570
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Switching from DR-DOS 6.0 to MS-DOS 5.0 is accomplished much like you would
	switch from MS-DOS 4.x or 5.0 to another version of DOS. However, when switching
	from DR-DOS 6.0 to MS-DOS, some additional steps may be necessary IF:
	
	- The DR-DOS security system was used to safeguard the entire system.
	
	-or-
	
	- The DELWATCH utility was used.
	
	MORE INFORMATION
	================
	
	System Security
	---------------
	
	When you use the DR-DOS Setup utility to install the DR-DOS security system,
	DR-DOS Setup does the following:
	
	- Adds a driver to the CONFIG.SYS file that asks for your password at bootup.
	  If you do not enter the correct password, the system does not boot.
	
	- Changes the partition type of the DR-DOS partition(s). This is to prevent a
	  user from booting MS-DOS on a floppy disk and accessing the drive.
	
	However, the password can be disabled by editing the CONFIG.SYS file, however,
	the hard drive partition(s) will be inaccessible to MS-DOS unless you have
	removed the security option using DR-DOS Setup. If you have ever used this
	security option, do the following:
	
	- Use the DR-DOS Setup utility to remove the system security.
	
	- If you have disabled the utility by directly modifying the CONFIG.SYS file,
	  use the DR-DOS Setup utility to re-enable and then disable system security.
	
	
	DELWATCH
	--------
	
	The DR-DOS 6.0 DELWATCH utility changes how DR-DOS implements deletions. Under
	MS-DOS (and non-DELWATCH DR-DOS) behavior, a file is deleted by marking the
	first character of a file with the "E5" character, and then marking the area of
	the disk that the file was stored "unused" in the file allocation table (FAT).
	DELWATCH marks the file as "pending delete" by changing the first character of
	the file to the "05" character. These files are not really deleted until the
	utility DELPURGE is used.
	
	"Pending delete" files can cause confusion to MS-DOS and its utilities (such as
	CHKDSK and UNDELETE) as well as third-party disk utility programs. Before using
	MS-DOS, do the following:
	
	- Determine if you have "pending delete" files using the DR-DOS 6.0 CHKDSK
	  utility.
	
	- If you load DELWATCH in the AUTOEXEC.BAT or CONFIG.SYS file, remove the
	  DELWATCH command and reboot to disable DELWATCH.
	
	- Run DELPURGE immediately before booting MS-DOS or installing the MS-DOS 5
	  Upgrade.
	
	The product included here, DR-DOS, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.20 3.30 3.30a 4.00 5.00 5.00a 5.0 5.0a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
