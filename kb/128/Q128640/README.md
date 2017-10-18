---
layout: page
title: "Q128640: Boca Vortek Drivers Cause &quot;Error in EXE File&quot; Error Message"
permalink: kb/128/Q128640/
---

## Q128640: Boca Vortek Drivers Cause &quot;Error in EXE File&quot; Error Message

	Article: Q128640
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Vortek Utilities SET RES tool to change the display resolution
	and Windows 95 restarts your computer, you receive the following error message
	and are returned to a command prompt:
	
	  Error in EXE file
	
	If Windows 95 does not restart your computer, the correct resolution is displayed
	until the next time you start Windows 95. You receive the error message at that
	time and are returned to a command prompt.
	
	CAUSE
	=====
	
	The SET RES tool attempts to modify the WIN.COM file and causes the WIN.COM file
	to have a size of 0 bytes. Windows 95 cannot load without a valid WIN.COM file.
	
	RESOLUTION
	==========
	
	Restart your computer and boot to a command prompt by pressing the F8 key when
	you see the "Starting Windows 95" message. Choose "Command Prompt Only" when you
	are prompted. Then, replace the damaged WIN.COM file by extracting the WIN.CNF
	file from the original Windows 95 disks or CD-ROM.
	
	To extract the WIN.CNF file, follow these steps:
	
	1. If you are using diskettes, insert Disk 3 in the appropriate disk drive. If
	  you are using the CD-ROM, insert the CD-ROM in the CD-ROM drive.
	
	2. Change to the <windows>\COMMAND directory, where <windows> is
	  your Windows 95 directory.
	
	3. If you are using Disk 3, type the following command
	
	  " extract <sd>:\win95_03.cab win.cnf /L <dd>:\<windows>
	  win.com /Y " (without the quotation marks)
	
	  where <sd> is the disk drive containing Disk 3, <dd> is the hard
	  disk containing Windows 95, and <windows> is the Windows 95 directory.
	  For example, if you have Disk 3 in drive A, and Windows 95 is in the WINDOWS
	  directory on drive C, type:
	
	  " extract a:\win95_03.cab win.cnf /L c:\windows win.com /Y " (without the
	  quotation marks)
	
	4. If you are using the CD-ROM, type the following command
	
	  " extract <sd>:\win95\win95_03.cab win.cnf /L <dd>:\<win>
	  win.com /Y " (without the quotation marks)
	
	  where <sd> is the CD-ROM drive, <dd> is the hard disk containing
	  Windows 95, and <win> is the Windows 95 directory. For example, if the
	  CD-ROM drive is drive D, and Windows 95 is in the WINDOWS directory on drive
	  C, type:
	
	  " extract d:\win95\win95_03.cab win.cnf /L c:\windows win.com /Y " (without
	  the quotation marks)
	
	NOTE: The /Y switch causes the EXTRACT command to replace the existing WIN.COM
	file without prompting you for confirmation.
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
