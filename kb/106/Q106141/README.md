---
layout: page
title: "Q106141: FORMAT and DISKCOPY Errors with Stacker 3.x"
permalink: /kb/106/Q106141/
---

## Q106141: FORMAT and DISKCOPY Errors with Stacker 3.x

{% raw %}

	Article: Q106141
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.2,3.3,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.2, 3.3, 4.0, 4.0a, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running STAC Electronics Stacker version 3.0 or 3.1 on your computer,
	you may receive the following errors when you use the MS-DOS DISKCOPY and FORMAT
	commands on floppy disks:
	
	With DISKCOPY:
	
	  Formatting while copying
	  Drive types or diskette types not compatible
	  Copy process ended
	  Copy another diskette (Y/N)?
	
	With FORMAT:
	
	  Existing format differs from that specified
	  This disk cannot be unformatted.
	  Proceed with format (Y,N)?
	
	  -or-
	
	  Parameter not compatible with fixed disk.
	  Format terminated.
	
	  -or-
	
	  Error reading partition table. Format terminated.
	
	  -or-
	
	  Extended error 21. Format terminated.
	
	CAUSE
	=====
	
	According to STAC Electronics, these problems are caused by Stacker's AutoMount
	feature. If you remove a Stacker-compressed floppy disk and insert an
	uncompressed disk in the same drive, you may be unable to use the MS-DOS
	DISKCOPY and FORMAT commands on the uncompressed disk until the drive is
	unmounted. In addition, a Stacker-compressed disk must first be unmounted before
	it can be formatted with the MS-DOS FORMAT command.
	
	WORKAROUND
	==========
	
	To work around these problems, first unmount the disk drive. This can be done by
	typing "stacker -x:" (without the quotation marks) at the MS-DOS command prompt
	(where <x> is the letter of the floppy disk drive) or by removing the
	compressed floppy disk from the drive and rebooting the computer.
	
	MORE INFORMATION
	================
	
	Stacker 3.0 and 3.1 are manufactured by STAC Electronics, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	REFERENCES
	==========
	
	"Stacker 3.0 for Windows and DOS User's Guide," pages 137 and 274
	
	
	Additional query words: 6.22 6.00 6.20 6.21 6.0 6 msdos format.com diskcopy.com error message 3rdparty stacked
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS320 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS330 kbMSDOS500a
	Version           : MS-DOS:3.2,3.3,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
