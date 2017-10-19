---
layout: page
title: "Q101061: CHKDSK Reports &quot;Probable Non-DOS Disk&quot;"
permalink: /kb/101/Q101061/
---

## Q101061: CHKDSK Reports &quot;Probable Non-DOS Disk&quot;

	Article: Q101061
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
	
	When you run CHKDSK on a logical MS-DOS or DoubleSpace-compressed drive, you may
	receive the following error message if the drive was not partitioned or
	formatted with MS-DOS utilities, or if the media descriptor byte in the file
	allocation table (FAT) for the drive is incorrect or corrupted:
	
	  Probable non-DOS disk
	  Continue (Y/N)?
	
	MORE INFORMATION
	================
	
	This error message may occur for one of the following reasons:
	
	- The disk was not formatted with the MS-DOS FORMAT command or was partitioned
	  using a nonstandard partitioning scheme. The CHKDSK command should be used
	  only on MS-DOS disks. Confirm that the disk or drive is an MS-DOS disk and
	  that it is formatted.
	
	  Some disks not formatted with the MS-DOS FORMAT command may cause the CHKDSK
	  command to display this message; however, the CHKDSK process may still
	  function properly. If you have a nonstandard partitioning scheme, make sure
	  the correct device drivers are loaded.
	
	- The media descriptor byte in one or both of the file allocation tables (FATs)
	  for the drive producing the error message is incorrect or corrupted.
	
	  If the drive has been partitioned and formatted with MS-DOS, you can use a
	  disk editor (such a Norton DiskEdit) to edit the FAT. The FAT should be
	  viewed as hexidecimal. The first byte in the FAT for a hard (fixed) disk
	  should be "F8" (without the quotation marks). The following is an example of
	  the first three lines of the FAT and the location of the media descriptor
	  byte:
	
	     00000000:  F8 FF FF FF 03 00 04 00 - 05 00 06 00 07 00 08 00
	     00000010:  09 00 0A 00 0B 00 0C 00 - 0D 00 0E 00 0F 00 10 00
	     00000020:  11 00 12 00 13 00 14 00 - 15 00 FF FF 17 00 18 00
	
	  WARNING: The above text is an example. You should NOT use a disk editor to
	  change your FAT to match the above text.
	
	  The media descriptor byte is the first two digits after the colon (:) in the
	  first line, in this example. "F8." This is the correct setting for all MS-DOS
	  formatted fixed disks (hard disk drives). Below is an abridged list of valid
	  entries for the media descriptor byte and the media type the descriptor
	  denotes:
	
	     F8     Fixed disk
	     F0     3.5-inch, 2-sided, 18-sector
	     F9     3.5-inch, 2-sided, 9-sector
	     F9     5.25-inch, 2-sided, 15-sector
	     FC     5.25-inch, 1-sided, 9-sector
	     FD     5.25-inch, 2-sided, 9-sector
	     FE     5.25-inch, 1-sided, 8-sector
	     FF     5.25-inch, 2-sided, 8-sector
	     FE     8-inch, 1-sided, single-density
	     FD     8-inch, 2-sided, single-density
	     FE     8-inch, 2-sided, double-density
	     FD     8-inch, 2-sided, double-density
	
	REFERENCES
	==========
	
	"The MS-DOS Encyclopedia," Microsoft Press, 1988
	
	Additional query words: dblspace 6.00 nondos
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
