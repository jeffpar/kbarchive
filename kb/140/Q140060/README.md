---
layout: page
title: "Q140060: Error Accessing Floppy Disks Using Windows NT"
permalink: /kb/140/Q140060/
---

## Q140060: Error Accessing Floppy Disks Using Windows NT

	Article: Q140060
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a floppy disk from your Windows NT computer, following error
	message appears:
	
	  STOP: The disk media is not recognized, it may not be formatted.
	
	The same disks on the same computer work correctly with MS-DOS or Windows
	
	1. The same disks also work correctly after your re-format them under Windows
	  NT.
	
	CAUSE
	=====
	
	This occurs on disks that are preformatted or are from a product where the disk
	manufacturer failed to write the media descriptor byte to the disk.
	
	MS-DOS and Windows 95 do not require the media descriptor byte be set, hence this
	problem does not show up with these operating systems.
	
	In most versions of MS-DOS, the first sector contains the media descriptor
	field.
	
	The media descriptor field specifies a value that identifies the type of media
	that the disk is. Some device drivers use the media descriptor to determine
	quickly whether the removable media in the drive has changed.
	
	Following are the valid media descriptor bytes for MS-DOS:
	
	  Byte   Capacity   Media Size and Type
	  -------------------------------------------------
	
	  F0     2.88 MB    3.5-inch, 2-sided, 36-sector
	  F0     1.44 MB    3.5-inch, 2-sided, 18-sector
	  F9     720K       3.5-inch, 2-sided, 9-sector
	  F9     1.2 MB     5.25-inch, 2-sided, 15-sector
	  FD     360K       5.25-inch, 2-sided, 9-sector
	  FF     320K       5.25-inch, 2-sided, 8-sector
	  FC     180K       5.25-inch, 1-sided, 9-sector
	  FE     160K       5.25-inch, 1-sided, 8-sector
	  FE     250K       8-inch, 1-sided, single-density
	  FD     500K       8-inch, 2-sided, single-density
	  FE     1.2 MB     8-inch, 2-sided, double-density
	  F8     -----      Fixed disk
	
	The media descriptor byte is located in sector 0 of the diskette, and looks like
	this:
	
	  addr  data:
	  0000  EB 3C 90 4D 53 44 4F 53 35 2E 30 00 02 01 01 00
	  0010  02 E0 00 40 0B F0 09 00 12 00 02 00 00 00 00 00
	
	                       xx <---- This byte above XX is the media descriptor
	                                byte and is at offset hex 15.
	
	Using NORTON DISKEDIT program, you can manually change that byte based on the
	table above.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51,4.0
	
	=============================================================================
	
