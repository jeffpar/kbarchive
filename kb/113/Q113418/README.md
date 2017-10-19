---
layout: page
title: "Q113418: HOW TO: Determine Whether a Drive Is a RAM Drive"
permalink: /kb/113/Q113418/
---

## Q113418: HOW TO: Determine Whether a Drive Is a RAM Drive

	Article: Q113418
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are no C language functions or C run-time functions to determine whether
	or not a drive is a RAM drive. The GetFileType() API may be called by Win32
	applications to obtain the type of a particular drive from the operating system.
	More information may be found about GetFileType() in the Win32 SDK Reference of
	the Visual C++ 32-bit Edition Books Online.
	
	For MS-DOS and Win16 applications, although there are no definitive methods
	available, several possible ways exist to determine that a given drive is
	"probably" a RAM drive. The remainder of this article will briefly discuss each
	of four methods to check for a RAM drive. Note that for all methods each drive
	of the host system must be checked.
	
	MORE INFORMATION
	----------------
	
	Method 1:
	
	Check the drive's volume label. This method is probably the most common. The
	Microsoft RAMDRIVE.SYS uses a volume label of "MS-RAMDRIVE". However, this is
	not guaranteed to be the volume label and will probably not be the volume label
	on RAM drives from other companies. A user may also change this by using the
	label command.
	
	Method 2:
	
	Call Interrupt 21h Function 44h subfunction 0Dh, which is a generic I/O control
	function for block devices. Most devices support this function. However,
	RAMDRIVE.SYS currently does not support it. This lack of support can be used to
	identify a RAM drive. Load the CX register with 0860h to get disk drive device
	parameters; if the function fails, leaving the carry flag set, the drive is
	probably a RAM drive.
	
	Method 3:
	
	Check how many FAT tables the drive has; if it has only 1, it is probably a RAM
	drive. Because RAMDRIVE.SYS does not support the IOCTL functions, the only way
	to determine the number of FAT tables is to use INT 25, Absolute Disk Read. Make
	note of the warnings that this function has been superseded and is not supported
	under Windows. For more information and a sample showing how to use INT 25,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q102870 SAMPLE: Reading the Boot Sector of a Drive
	
	Method 4:
	
	Finally, call Interrupt 21h Function 44h subfunction 09h to check whether the
	drive is remote. If the value returned in DX is 0x0800, having only bit 11 set,
	the drive is probably a RAM drive. This is known to be a RAM drive by deduction.
	Because bits 6 and 7 are clear, it is known that this device does not accept
	IOCTL functions, like most devices. Because bit 12 is clear, this is not a
	network drive, and so on.
	
	Because none of the above methods is guaranteed, it is best to use a combination
	of these methods. First eliminate the obvious, such as network drives, local
	hard drives, CD-ROM drives, and so forth. Then try to determine whether or not
	the given drive is a RAM drive.
	
	Additional query words: detect find
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
