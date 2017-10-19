---
layout: page
title: "Q124017: Encarta 1995: How to Rewrite a Damaged Driver"
permalink: /kb/124/Q124017/
---

## Q124017: Encarta 1995: How to Rewrite a Damaged Driver

	Article: Q124017
	Product(s): Microsoft Home Kids Products
	Version(s): 1995 edition
	Operating System(s): 
	Keyword(s): kbsetup kbimu
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a driver used in Encarta 1995 is damaged, reinstalling the product does not
	necessarily rewrite the damaged driver. A better solution to this issue is to
	rename the file and then recopy it from the Encarta CD-ROM. Note that the system
	drivers on the Encarta 1995 CD-ROM are compressed. To copy these files, you must
	run the manual installation program or use the DECOMP.EXE command to decompress
	the files.
	
	NOTE: Windows 95/98 includes newer versions of each driver on the Encarta 1995
	CD-ROM. Do not use the following procedure to replace sound or video drivers in
	Windows 95 or Windows 98.
	
	MORE INFORMATION
	================
	
	Using DECOMP.EXE
	----------------
	
	You can use DECOMP.EXE to decompress individual files. For example, at an MS-DOS
	command prompt, change to the AAMSSTP directory on the Encarta CD-ROM and then
	type the following line at the MS-DOS prompt
	
	  "decomp <drive>:\Aamsstp\System\Msacm.dr_ C:\Windows\System\Msacm.drv"
	  (without the quotation marks)
	
	where <drive> is the letter of your CD-ROM drive and C:\Windows is the
	folder in which Windows is installed.
	
	For information about changing directories in MS-DOS and executing MS-DOS
	commands, please see your MS-DOS documentation.
	
	Using MANUAL.BAT
	----------------
	
	WARNING: Do not use these steps if you are using Microsoft Windows 95/98 or
	Microsoft Windows NT. The manual installation program uses a batch file to copy
	Windows 3.x system files onto your hard disk. Allowing these files to be
	overwritten in Windows 95/98 or Windows NT may cause improper system
	performance.
	
	If you run the MANUAL.BAT file without any parameters, it decompresses and copies
	all of the necessary system files to the hard disk, as follows:
	
	1. Type the following at the MS-DOS prompt, and then press ENTER:
	
	  "set syspath=c:\ " (without the quotation marks)
	
	  This tells the MANUAL.BAT file where the system path is located.
	
	2. At the MS-DOS prompt, change to the Aamsstp\Manual subdirectory on the
	  Encarta CD. Type MANUAL.BAT. All of the system files are copied to a
	  Encfiles\System subdirectory. Copy the desired drivers to the Windows\System
	  subdirectory.
	
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbsetup kbimu 
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEnCyc1995Mac
	Version           : :1995 edition
	Issue type        : kbhowto
	
	=============================================================================
	
