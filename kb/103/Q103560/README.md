---
layout: page
title: "Q103560: DISKCOPY Err Msg: Invalid Drive Specification...Non-Removable"
permalink: kb/103/Q103560/
---

## Q103560: DISKCOPY Err Msg: Invalid Drive Specification...Non-Removable

	Article: Q103560
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you try to use DISKCOPY on a DoubleSpace-compressed drive, you receive one of
	the following error messages:
	
	  MS-DOS 6.0
	----------
	
	  Invalid drive specification
	  Specified drive does not exist or is non-removable
	
	  MS-DOS 6.2
	----------
	
	  Invalid drive specification.
	  Specified drive does not exist, is compressed, or is non-removable.
	
	RESOLUTION
	==========
	
	To correctly copy a DoubleSpace-compressed floppy disk, copy the host drive. For
	example, if you have a compressed floppy disk A and the host drive is J, type
	"diskcopy j: j:" (without the quotation marks) at the MS-DOS command prompt and
	press ENTER.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
