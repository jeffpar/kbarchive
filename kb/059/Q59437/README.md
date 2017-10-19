---
layout: page
title: "Q59437: fstat() Gets Different Results Under FAT and HPFS"
permalink: /kb/059/Q59437/
---

## Q59437: fstat() Gets Different Results Under FAT and HPFS

	Article: Q59437
	Product(s): See article
	Version(s): 5.10 6.00 | 5.10 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 11-JUL-1990
	
	The documentation for fstat() in the "Microsoft C Run-Time Library
	Reference," Page 303, states that the same value (time of last
	modification of file) is placed in the fields st_atime, st_ctime, and
	st_mtime.
	
	This is correct under DOS. However, the OS/2 High Performance File
	System (HPFS) stores different values in each of those fields. The
	documentation is incomplete in this regard.
	
	The fstat() call checks to see if the operating system returns values
	for various times. If not, fstat() copies the same value into all
	three fields. Otherwise, fstat() returns the values supplied by the
	operating system.
	
	OS/2 Version 1.20 HPFS maintains all three of these values. A call to
	fstat() then puts the three values in the fields. The FAT file system
	does NOT maintain these three values so fstat() returns the same file
	time in all three variables.
