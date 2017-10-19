---
layout: page
title: "Q66530: SYS.COM Requirements in MS-DOS versions 2.0-6.0"
permalink: /kb/066/Q66530/
---

## Q66530: SYS.COM Requirements in MS-DOS versions 2.0-6.0

	Article: Q66530
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a description of the requirements needed to use the MS-DOS SYS
	command (SYS.COM) to transfer the MS-DOS system files. Changes that have been
	made to the SYS command since its introduction in MS-DOS version 2.0 are
	described below.
	
	MORE INFORMATION
	================
	
	System files are used to boot MS-DOS. For safety, the system files are marked
	with the hidden, system, and read-only attributes, and cannot be changed using
	the ERASE, DEL, or COPY command. For a disk to boot MS-DOS, these files must
	occupy a specific location on the disk. The names of these system files vary
	among original equipment manufacturers (OEMs). The most common names used are:
	
	  IO.SYS and MSDOS.SYS
	
	-or-
	
	  IBMBIO.COM and IBMDOS.COM
	
	A disk can only be made bootable in MS-DOS by using the FORMAT /S, DISKCOPY, or
	SYS command.
	
	SYS Original Functionality
	--------------------------
	
	The following is a brief overview of the SYS command's original functionality:
	
	SYS.COM copies the hidden system files from the default drive to the specified
	destination drive and updates the boot sector of the destination drive. Each
	version of SYS only recognizes system files that have the same filenames as its
	version of MS-DOS. The MS-DOS boot sequence requires that the system files be
	the first files in the disk data area, that they be contiguous (that is, not
	fragmented), and that they occupy the first two entries in the root directory.
	
	SYS copies the files to the destination if there is empty space for them at the
	beginning of the disk. If the destination disk is already bootable and its
	system files have the same names, SYS replaces the existing system files. SYS
	does not copy COMMAND.COM. To make a bootable C drive, boot with the original
	MS-DOS disk, and enter the following at the drive A prompt:
	
	  sys c:
	  copy command.com c:\ 
	
	Changes to SYS
	--------------
	
	Changes to SYS include the following (by MS-DOS version number):
	
	  Version   Description of Changes
	  -------   ----------------------
	  3.3       MS-DOS allows system files to be noncontiguous
	            (fragmented). However, the system files must still occupy
	            the first two directory entries, and the first three
	            sectors of IO.SYS (or IBMBIO.COM) must be located
	            in the first three sectors of the disk data area.
	  4.0       When either or both of the following conditions are met,
	
	            - The first three sectors are allocated, and not to the
	              first system file, but there is enough free space on
	              the drive to copy the system files over.
	
	            - The SYS command does not recognize the first two files
	              in the root directory as system files, but the root
	              directory is not full.
	
	            the SYS command will, if necessary, move the first two
	            directory entries and/or the data located in the first
	            three sectors of the disk to another location, and then
	            copy the system files. This allows you to use SYS to
	            change from PC-DOS to MS-DOS; however, the PC-DOS system
	            files will not be deleted.
	
	            The SYS command will execute properly in earlier versions
	            of MS-DOS if the drive formats are compatible; however,
	            this is not guaranteed in all circumstances. If it is
	            impossible to boot MS-DOS 4.0 before running SYS, using
	            the SYS command on a floppy drive is the safest course of
	            action.
	
	  5.0       MS-DOS 5.0 SYS.COM recognizes both the Microsoft system
	            file names (IO.SYS and MSDOS.SYS) and the IBM system file
	            names (IBMBIO.COM and IBMDOS.COM) as system files. So,
	            when using the SYS command to transfer MS-DOS to a system
	            that booted with PC-DOS, IBMBIO.COM and IBMDOS.COM will
	            be deleted.
	
	            The first three sectors of IO.SYS do not need to be in
	            the first three sectors of the data area; however, they
	            must be contiguous.
	
	            SYS copies COMMAND.COM to the destination disk.
	            An optional second parameter to specify the source of the
	            system files is supported when running in MS-DOS 5.0.
	
	            Again, running the SYS command without booting MS-DOS 5.0
	            is not recommended. If you cannot boot MS-DOS 5.0, use
	            the SYS command on a disk in drive A, and use that disk
	            to boot MS-DOS 5.0.
	
	  6.0       SYS copies DBLSPACE.BIN to the destination disk, as well
	            as copying IO.SYS, MSDOS.SYS, and COMMAND.COM.
	
	Additional query words: 2.00 3.10 3.20 3.30 3.30a 4.00 5.00 6.0 6.20 6.21 6.22 no room on destination disk
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
