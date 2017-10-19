---
layout: page
title: "Q71787: Stacker Disk-Compression Utility with Windows"
permalink: /kb/071/Q71787/
---

## Q71787: Stacker Disk-Compression Utility with Windows

	Article: Q71787
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	STAC Electronics' Stacker disk-compression program creates logical drives and
	makes exact copies of the old drives, except that the files are compressed to
	save space. The compressed files are then uncompressed as needed.
	
	The following files are not compressed by Stacker:
	
	- MSDOS.SYS
	
	- IO.SYS
	
	- COMMAND.COM
	
	- CONFIG.SYS
	
	- AUTOEXEC.BAT
	
	This article covers the following usage issues with Stacker:
	
	- Editing CONFIG.SYS and AUTOEXEC.BAT Files
	
	- Using the STAC Coprocessor Card
	
	- Stacker and Windows Temporary Swap Files
	
	- Formatting Floppy Disks in File Manager
	
	MORE INFORMATION
	================
	
	Editing CONFIG.SYS and AUTOEXEC.BAT Files
	-----------------------------------------
	
	Because of the way Stacker works, the CONFIG.SYS and the AUTOEXEC.BAT files that
	are on the "new" logical drive need to be edited instead of the ones that are in
	the root of drive C. This may give the appearance that the CONFIG.SYS and
	AUTOEXEC.BAT files are not being read during startup.
	
	To determine where drive C has been reassigned to, use the SWAPMAP utility that
	comes with Stacker. This shows you the drive to which drive C has been copied.
	Then, edit the CONFIG.SYS and AUTOEXEC.BAT files on that drive as you normally
	would.
	
	Using the STAC Coprocessor Card
	-------------------------------
	
	If you are using the STAC coprocessor card and are trying to run Windows in 386
	enhanced mode, you must add an EMMEXCLUDE statement to the [386Enh] section of
	the SYSTEM.INI file to exclude the area of memory that the card uses. To find
	the address that needs to be excluded, look for the following line in the
	CONFIG.SYS file
	
	     device=<path>\stacker.com /b=<address> c:\stacvo1.000
	
	where <address> is a hexadecimal number. The address plus the next 16
	kilobytes (K) should be excluded. The default address is CC00. In this case, the
	line would be:
	
	      emmexclude=cc00-cfff
	
	If you are still unable to run 386 enhanced mode, STAC Technical Support suggests
	excluding the paragraph below the address as well. In this case, the line would
	be:
	
	      emmexclude=c800-cfff
	
	The temporary file that Windows creates when it comes up should be located on the
	uncompressed portion of the hard disk. Allow a minimum of 2 megabytes (MB) free
	on the uncompressed portion of the hard disk. If a permanent swap file is being
	used, locate it and allocate space on the uncompressed portion of the disk.
	
	Do not use SMARTDRV.SYS version 3.x with Stacker; they were not designed to work
	together.
	
	Stacker and Windows Temporary Swap Files
	----------------------------------------
	
	If you run Windows on a compressed drive using Stacker, temporary swap files can
	be placed on an uncompressed portion of your disk to reduce fragmentation of the
	Stacker drive.
	
	To accomplish this, add the following entry to the SYSTEM.INI file under the
	heading [386Enh]
	
	  PagingDrive=<drive letter>
	
	where <drive letter> is an uncompressed drive.
	
	For example, if drive C was the only drive before the Stacker installation,
	installing Stacker creates drive D, which then becomes the uncompressed portion
	of the disk. Use the following PagingDrive parameter to indicate drive D:
	
	  PagingDrive=D
	
	Formatting Floppy Disks in File Manager
	---------------------------------------
	
	On some systems using Stacker 3.1 or 4.0, Windows File Manager is not able to
	format floppy disks. Formatting usually fails at either the 99 percent mark or
	when Windows attempts to create the root directory. The failure usually
	indicates a conflict with Stacker's base drive feature, which specifies the
	drive letter from which Stacker drive letters start.
	
	There are two ways to resolve this conflict:
	
	- Instead of using File Manager, format floppy disks at an MS-DOS command
	  prompt using the MS-DOS FORMAT command.
	
	  -or-
	
	- Disable Stacker's use of the base drive feature.
	
	  NOTE: This changes the order of your device-driven drive letters. For
	  information on this procedure, contact STAC Electronics Technical Support.
	
	For additional information about Stacker or Stacker's interaction with Windows,
	contact STAC Electronics.
	
	The product included here is manufactured by STAC Electronics, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	Stacker version 2.0 README.DOC
	
	Additional query words: 3.00 3.00a 3.10 3.11 win31 3rdparty third-party stack
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
