---
layout: page
title: "Q111459: CONFIG and AUTOEXEC on Compressed and Host Drive Do Not Match"
permalink: kb/111/Q111459/
---

## Q111459: CONFIG and AUTOEXEC on Compressed and Host Drive Do Not Match

	Article: Q111459
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you try to upgrade to MS-DOS 6.2 while you are running AddStor SuperStor, you
	may receive the following error message:
	
	  Error: Setup cannot install MS-DOS on your computer. The copy of the
	  CONFIG.SYS or AUTOEXEC.BAT file on your compressed drive does not match the
	  corresponding file on your uncompressed drive
	
	CAUSE
	=====
	
	SuperStor maintains two copies of the CONFIG.SYS and AUTOEXEC.BAT files: one on
	the compressed drive and the other on the uncompressed drive. If these files are
	not identical, you receive the above error.
	
	RESOLUTION
	==========
	
	To make the CONFIG.SYS and AUTOEXEC.BAT files identical on both the compressed
	and uncompressed drives, do the following:
	
	If the compressed drive (C in this example) has the more current versions of the
	CONFIG.SYS and AUTOEXEC.BAT files:
	
	1. Delete the CONFIG.SYS and AUTOEXEC.BAT files from the uncompressed drive (D
	  in this example) by typing:
	
	  " del d:\config.sys
	  del d:\autoexec.bat" (without the quotation marks)
	
	2. Copy the CONFIG.SYS and AUTOEXEC.BAT files from the compressed drive to the
	  uncompressed drive by typing:
	
	  " copy c:\config.sys d:\config.sys
	  copy c:\autoexec.bat d:\autoexec.bat" (without the quotation marks)
	
	3. Run SETUP again.
	
	If the uncompressed drive (D in this example) has the more current versions of
	the CONFIG.SYS and AUTOEXEC.BAT files:
	
	1. Delete the CONFIG.SYS and AUTOEXEC.BAT files from the compressed drive (C in
	  this example) by typing:
	
	  " del c:\config.sys
	  del c:\autoexec.bat" (without the quotation marks)
	
	2. Copy the CONFIG.SYS and AUTOEXEC.BAT files from the uncompressed drive to the
	  compressed drive by typing:
	
	  " copy d:\config.sys c:\config.sys
	  copy d:\autoexec.bat c:\autoexec.bat" (without the quotation marks)
	
	3. Run SETUP again.
	
	MORE INFORMATION
	================
	
	In most cases, the copies of the CONFIG.SYS and AUTOEXEC.BAT files on the
	compressed drive are more current than those on the uncompressed drive. To
	verify this, do the following:
	
	1. Go to the uncompressed drive (usually drive D) by typing "D:" (without the
	  quotation marks) at the C:\> prompt.
	
	2. At the D:\> prompt, type "dir config.sys" (without the quotation marks)
	  and write down the date of this file. Then type "dir autoexec.bat" (without
	  the quotation marks) at the D:\> prompt and write down the date of this
	  file if one exists.
	
	3. Now go to the compressed drive (usually drive C) by typing "C:" (without the
	  quotation marks) at the D:\> prompt.
	
	4. Again, check the date of the CONFIG.SYS and AUTOEXEC.BAT files using the
	  process outlined in step 2.
	
	
	Additional query words: 6.20 setup DoubleSpace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
