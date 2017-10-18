---
layout: page
title: "Q107256: Defragmenting Stacker-Compressed Drive Before Deleting Files"
permalink: kb/107/Q107256/
---

## Q107256: Defragmenting Stacker-Compressed Drive Before Deleting Files

	Article: Q107256
	Product(s): Microsoft Disk Operating System
	Version(s): 6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Section 4 of the Conversion Disk for Users of Stacker CONVERT.TXT file covers
	the following scenario:
	
	  DoubleSpace Could Not Convert a Stacker Drive Because There Was Not Enough
	  Free Space
	
	Although the CONVERT.TXT file recommends removing unnecessary files to create
	more free space, you may be able to work around this situation by using SDEFRAG
	to defragment the Stacker-compressed drive.
	
	MORE INFORMATION
	================
	
	To defragment the Stacker-compressed drive, type "SDEFRAG" (without the
	quotation marks) at the MS-DOS command prompt and then press ENTER. If you are
	still unable to covert the Stacker-compressed drive to a DoubleSpace-compressed
	drive because of a lack of free space, after you defragment the
	Stacker-compressed drive, follow the procedure in section 4 of the CONVERT.TXT
	file.
	
	Section 4 of the CONVERT.TXT file
	---------------------------------
	
	DoubleSpace Could Not Convert a Stacker Drive Because
	  There Was Not Enough Free Space:
	
	DoubleSpace indicates how much free space needs to be free on your startup or
	uncompressed drive. Make a note of this amount. Then carry out the following
	procedure:
	
	1. Type the following at the command prompt:
	
	  " chkdsk drive:" (without the quotation marks)
	
	  For the drive: parameter, type the drive letter of your uncompressed drive
	  followed by a colon (:). A line similar to the following should appear on
	  your screen:
	
	  20386 bytes available on disk
	
	2. Delete unnecessary files or move files to another drive until you have enough
	  free disk space. You might want to back up the files before you delete them.
	
	  IMPORTANT: Do not delete your COMMAND.COM, AUTOEXEC.BAT, or CONFIG.SYS files,
	  your hidden Stacker or system files, or the STACKER.COM and SSWAP.COM files
	  in your Stacker directory. If you cannot delete enough unnecessary files, use
	  the SDEFRAG /G command to make more uncompressed space available, or contact
	  your disk-compression software vendor.
	
	3. Run DoubleSpace again.
	
	Additional query words: dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : :6.2
	
	=============================================================================
	
