---
layout: page
title: "Q73728: Switches Available with the MS-DOS 5 Upgrade Setup Program"
permalink: /kb/073/Q73728/
---

## Q73728: Switches Available with the MS-DOS 5 Upgrade Setup Program

{% raw %}

	Article: Q73728
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are six switches available in the Microsoft MS-DOS 5 Upgrade Setup
	routine, including /? (online Help). The other five switches install MS-DOS
	version 5.0 on an existing MS-DOS system. The Setup syntax is
	
	  a:setup  /? /b /f /u /m /i
	
	where the switches are defined as follows:
	
	   Switch  Description
	  ------  -----------
	
	  /?      Display Setup syntax information.
	
	  /B      Uses black-and-white instead of color screen display.
	
	  /F      Installs MS-DOS 5.0 on floppy disks.
	
	  /U      Installs MS-DOS 5.0 even if disk partitions are detected
	          that may be incompatible with MS-DOS 5.0. The README.TXT
	          file includes information on when this is necessary.
	
	  /M      Installs a minimal MS-DOS system. For more information,
	          see the version 5.0 "Microsoft MS-DOS Getting Started"
	          manual.
	
	  /I      (5.0a only) Installs MS-DOS 5.0 without performing the
	          usual video detection and video mode switching. If the
	          system is currently in monochrome video mode, Setup will
	          default to installing monochrome video files for MS-DOS
	          Shell; otherwise, it will default to CGA. You can change
	          the video choice for Shell.
	
	  /F /M   (5.0a only) A single MS-DOS 5.0a bootable floppy is created
	          that contains the following utilities: DEBUG, EDLIN, FDISK,
	          FORMAT, and SYS. This option is designed to create a disk
	          useful for manually installing the Upgrade,
	          troubleshooting, and/or repartitioning.
	
	Valid combinations of these switches include:
	
	  /F /B /I
	  /M /B /I
	  /M /U /B /I
	
	  /M /F /B /I  (5.0a only; for more information on this combination, see
	               above)
	
	Invalid combinations include the following:
	
	  /F /M   (5.0) /M is only valid when installing to a hard drive.
	  /F /U         /U is only valid when installing to a hard drive.
	
	Additional query words: 5.00 5.00a noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	

{% endraw %}
