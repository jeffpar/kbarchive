---
layout: page
title: "Q85644: Troubleshooting CD-ROM Problems in Windows 3.1 Enhanced Mode"
permalink: /kb/085/Q85644/
---

## Q85644: Troubleshooting CD-ROM Problems in Windows 3.1 Enhanced Mode

{% raw %}

	Article: Q85644
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbhw kbmm kbdisplay kbfasttip kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you experience problems with a CD-ROM drive when running Microsoft Windows
	version 3.1 in 386 enhanced mode, there are several steps to try to correct the
	problem. This article explains these procedures.
	
	NOTE: Windows does not have any special device drivers or .INI file settings that
	it requires for CD-ROM drives.
	
	MORE INFORMATION
	================
	
	1. If you start Windows from your AUTOEXEC.BAT file, ensure the MSCDEX command
	  is before the WIN command.
	
	2. Make sure the CD-ROM works at the MS-DOS level before starting Windows. To
	  test this, use a data disk. Change the default drive to the CD-ROM. For
	  example, type the following to change to drive E:
	
	  E:
	
	  You should be able to obtain a directory listing by typing "dir" (without the
	  quotation marks) at the MS-DOS command prompt. This test should be used to
	  confirm that the hardware is functioning correctly.
	
	3. Make sure all the correct drivers are being loaded. You should have drivers
	  loaded in both the CONFIG.SYS and AUTOEXEC.BAT files. For example, MSCDEX.EXE
	  should be loaded in the AUTOEXEC.BAT file. The following is an example of a
	  ProAudio driver being loaded in the CONFIG.SYS file:
	
	  device=d:\proaudio\tslcdr.sys /d:mvcd001 /r "ProAudio CD driver
	
	  For troubleshooting purposes, do not load any of the drivers into the upper
	  memory blocks (UMB). For example, don't use LOADHIGH, LH, DEVICEHIGH, or any
	  other UMB manager (such as QEMM or 386MAX) to load the drivers high.
	
	4. Use the right driver versions. The following information is taken from
	  section 11.1 of the Windows 3.1 README.WRI file:
	
	     If you are using a CD-ROM drive with Windows 3.1, you should use
	     version 2.21 of Microsoft MS-DOS CD-ROM Extensions (MSCDEX) with
	     all configurations of CD-ROM drives. If you use version 2.2 or
	     later, you must also remove the following setting from the
	     [386Enh] section of the SYSTEM.INI file:
	
	        device=LANMAN10.386
	
	     This setting can cause some CD-ROM drives to time-out and fail
	     with versions later than 2.2 of MSCDEX. However, if you must
	     use a version earlier than 2.2 of MSCDEX, the above setting is
	     required in the [386Enh] section of your SYSTEM.INI file.
	
	     If a CD-ROM drive causes instability in your system or causes
	     your system to fail, you may need to update the CD-ROM driver.
	     Also, the Media Control Interface (MCI) driver MCICDA.DRV may
	     not work properly with older CD-ROM drivers. Contact your
	     CD-ROM drive manufacturer about obtaining an updated driver.
	
	  Updating the Driver
	
	  The CD-ROM driver is located in the CONFIG.SYS file. If the MSCDEX driver was
	  upgraded with out upgrading the CD-ROM driver, it is possible that the CD-ROM
	  driver itself is out of date. A current CD-ROM driver should be obtained from
	  the original equipment manufacturer (OEM) of the CD-ROM drive.
	
	  Using SETVER If you use a version of MSCDEX earlier than 2.21 and you are
	  using MS-DOS 5.0, you need to load SETVER.EXE from the CONFIG.SYS file.
	  MSCDEX is in the default table for SETVER; therefore, you do not need to add
	  an entry for this.
	
	5. Make sure the CD-ROM can be correctly accessed from standard mode. Again,
	  this doesn't guarantee it will work in 386 enhanced mode, but should be done
	  to verify that the hardware is functioning correctly.
	
	6. If problems persist, you can prevent Windows from using any upper memory
	  block (UMB) space. Either start Windows with the /D:X parameter (WIN /D:X) or
	  add the following line to the [386Enh] section of the SYSTEM.INI file.
	
	        EmmExclude=A000-EFFF
	      
	
	  NOTE: If you are using EMM386.EXE or some other UMB manager, you need to use
	  an exclude statement when loading the UMB manager because those settings will
	  override other memory exclusion switches in Windows 3.1.
	
	
	Additional query words: 3.10 3.1 3.11 tshoot multimedia multi media multi-media cdrom cd rom homemm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
