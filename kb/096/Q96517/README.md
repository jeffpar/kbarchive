---
layout: page
title: "Q96517: Using DoubleSpace to Compress a Bootable Hard Card"
permalink: /kb/096/Q96517/
---

## Q96517: Using DoubleSpace to Compress a Bootable Hard Card

{% raw %}

	Article: Q96517
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You should not use DoubleSpace to compress your boot drive if that drive
	requires a device driver in the CONFIG.SYS file. Because the DoubleSpace driver
	(DBLSPACE.BIN) is loaded with IO.SYS before the CONFIG.SYS file is processed,
	Microsoft does not support this configuration.
	
	If you want to use DoubleSpace on such a drive, you should create a new
	compressed drive using free space on the boot drive. For more information on
	this procedure see "Using Custom Setup" on pages 121-123 of the "Microsoft
	MS-DOS 6 User's Guide," or type HELP DBLSPACE /CREATE at the MS-DOS prompt.
	
	MORE INFORMATION
	================
	
	If you choose to compress your boot drive (DoubleSpace Express Setup), your
	computer may not start properly. For example, if drive C is a Plus Hardcard and
	you compress that drive, DoubleSpace cannot automatically mount the drive on
	startup and your system may not boot from C. You can either mount the drive from
	the MS-DOS command prompt or from the AUTOEXEC.BAT. This article outlines the
	procedures necessary to accomplish this.
	
	
	Mounting the DoubleSpace Drive from the MS-DOS Command Prompt
	-------------------------------------------------------------
	
	You can manually mount the DoubleSpace drive from the command line by using the
	DBLSPACE /MO command.
	
	Mounting the DoubleSpace Drive from the AUTOEXEC.BAT File
	---------------------------------------------------------
	
	If you want to mount the compressed drive from the AUTOEXEC.BAT file, you must
	copy the CONFIG.SYS and AUTOEXEC.BAT files to the host drive, copy the device
	drivers called from those files, and then add a line to the AUTOEXEC.BAT file to
	mount the compressed drive. To do this, follow the procedure outlined below.
	
	NOTE: This procedure does not work if your drive does not meet the following
	conditions:
	
	- It is bootable (that is, accessed by the BIOS during the startup process).
	
	- It is a system disk. (If it is not, use the SYS command to transfer the
	  MS-DOS system files.)
	
	To automatically mount the compressed drive:
	
	1. Compress the boot drive with DoubleSpace. For example, to compress drive C,
	  type the following at the MS-DOS command prompt:
	
	  " DBLSPACE /COMPRESS C:" (without the quotation marks)
	
	2. Ensure the following files are in the root directory of the host drive (the
	  drive containing the compressed volume file [CVF]):
	
	  IO.SYS
	  MSDOS.SYS
	  COMMAND.COM
	  DBLSPACE.BIN
	  DBLSPACE.000
	
	  To determine which drive is the host drive, type "DBLSPACE /LIST" (without the
	  quotation marks) at the MS-DOS command prompt.
	
	  Since the files listed above have read-only, hidden, and system file
	  attributes set, use the /A parameter to see the files. To do this, type DIR
	  /A at the MS-DOS command prompt.
	
	3. Copy the following three files to the root of the host drive: DBLSPACE.EXE,
	  CONFIG.SYS, and AUTOEXEC.BAT.
	
	  For example, if H is your host drive, you would use the following three
	  commands to copy these files:
	
	  copy c:\dos\dblspace.exe h:\
	  copy c:\config.sys h:\
	  copy c:\autoexec.bat h:\
	
	4. Copy any files called from the CONFIG.SYS file to the host drive. For
	  example, if the command DEVICE=C:\DOS\HIMEM.SYS is in your CONFIG.SYS file,
	  copy HIMEM.SYS to the host drive with the following command:
	
	  copy c:\dos\himem.sys h:\
	
	5. Edit the CONFIG.SYS file on the host drive to reflect the new location of the
	  device drivers. Given the above HIMEM.SYS example, change the CONFIG.SYS file
	  on the host drive (H) to read as follows:
	
	  device=c:\himem.sys
	
	6. Add the following line to the AUTOEXEC.BAT file on the host drive:
	
	  DBLSPACE /MO
	
	7. Any other programs or executable files called from the AUTOEXEC.BAT file
	  should be located on the host drive. If they are not, you need to edit the
	  AUTEXEC.BAT file to reference the correct drive letter. The host and boot
	  drive letters swap when the DBLSPACE /MO line is run from the AUTEOXEC.BAT
	  file.
	
	
	Additional query words: 6.00 double space DS plus hardcard hard card inpulse 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
