---
layout: page
title: "Q77397: KEYB.COM, German 83/84 Key Keyboard, and Phoenix BIOS"
permalink: /kb/077/Q77397/
---

## Q77397: KEYB.COM, German 83/84 Key Keyboard, and Phoenix BIOS

	Article: Q77397
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Executing the following Debug script will correct problems caused by MS-DOS 5.0
	or later KEYB.COM on a machine with a Phoenix BIOS and German 83/84 key
	keyboard. Symptoms include random machine lock ups or occasional difficulties
	recognizing the keyboard.
	
	MORE INFORMATION
	================
	
	Note: The following Debug script is only valid with the release of KEYB.COM that
	has a file size of 14,986 bytes. If the file has another size, contact your
	computer manufacturer for assistance.
	
	
	Steps to Use Debug
	------------------
	
	1. From the directory containing your MS-DOS files, first make a backup copy of
	  KEYB.COM using the following command:
	
	  " copy keyb.com keyb.bak" (without the quotation marks)
	
	2. Type the following commands listed in the "User Input" column:
	
	Screen               User
	Output               Input                  Comment
	------               -----                  -------
	
	C:>                  Debug keyb.com <ENTER> Starts Debug
	-                    E10B8 <ENTER>          Edits byte 10B8h
	XXXX:10B8 73.        EB <ENTER>             Changes byte 10B8h
	-                    W <ENTER>              Writes change to KEYB.COM
	Writing 03A8A bytes
	-                    Q<ENTER>               Quits Debug
	
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
