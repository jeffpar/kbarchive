---
layout: page
title: "Q95856: Removing MS-DOS 6 Upgrade After Compressing a Drive"
permalink: kb/095/Q95856/
---

## Q95856: Removing MS-DOS 6 Upgrade After Compressing a Drive

	Article: Q95856
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You cannot use the MS-DOS 6 Upgrade Uninstall disk to restore your previous
	version of MS-DOS if you have compressed any of your hard disk drives with
	DoubleSpace or a third-party disk-compression program unless you remove all
	traces of the disk-compression software.
	
	
	If you attempt to restore your previous version of MS-DOS and you have compressed
	your hard disk drive with DoubleSpace, you receive the following error:
	
	  Because you installed DoubleSpace after installing MS-DOS 6, you cannot
	  restore your previous version of DOS.
	
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	MORE INFORMATION
	================
	
	If you have compressed you hard disk drive with DoubleSpace and would like to
	restore your previous version of MS-DOS, query on the following words in the
	Microsoft Knowledge Base and follow the procedure in the article about removing
	DoubleSpace and preserving your files:
	
	  " preserve and doublespace and remove and ms-dos " (without the quotation
	  marks)
	
	After you have followed the procedure in the article, restart your computer from
	the clean hard drive, then place the Uninstall disk in drive A, and type:
	
	  " a:uninstal " (without the quotation marks)
	
	For more information about restoring your previous version of MS-DOS, query on
	the following words in the Microsoft Knowledge Base:
	
	  " uninstall and no and disk and old_dos " (without the quotation marks)
	
	If you have compressed your hard disk drive with a third-party disk compression
	program, consult your documentation or contact the manufacture for assistance in
	removing the software before running Uninstall.
	
	Additional query words: 6.00 6.20 6.21 6.22 double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
