---
layout: page
title: "Q149985: NEC READY Boot Disk Configuration for SB16 to Work in FS5."
permalink: /kb/149/Q149985/
---

## Q149985: NEC READY Boot Disk Configuration for SB16 to Work in FS5.

	Article: Q149985
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the NEC Ready Sound Card in Microsoft Flight Simulator, you must
	configure it as a Sound Blaster 16 (SB16).
	
	MORE INFORMATION
	================
	
	The following steps assume your CD-ROM drive is drive D and that Windows is
	installed in the Windows folder on drive C.
	
	1. Run Flight Simulator Setup inside Windows. To do this, click Start, click
	  Run, type d:\setup, and then press ENTER.
	
	2. Create a Windows startup disk by following these steps:
	
	  a. Insert a blank floppy disk into the floppy drive. This disk becomes your
	     startup disk.
	
	  b. Click Start, point to Settings, and then click Control Panel.
	
	  c. Double-click Add/Remove Programs.
	
	  d. Click the Startup Disk tab.
	
	  e. Click Create Disk.
	
	3. Create the Autoexec.bat and Config.sys files listed below on the startup
	  disk.
	
	  Autoexec.bat
	  ------------
	
	    set sound16=c:\opti930
	    c:\opti930\sndinit /b
	    PATH C:\WINDOWS;C:\WINDOWS\COMMAND
	    SET TEMP=C:\TEMP
	    LH C:\WINDOWS\COMMAND\MSCDEX /d:mscd000 /l:e /m:12
	    C:\NECUTILS\LMOUSE.COM
	    C:\WINDOWS\SMARTDRV.EXE
	    C:
	    CD FLTSIM5
	
	  Config.sys
	  ----------
	
	    DEVICE=C:\WINDOWS\HIMEM.SYS
	    DEVICEHigh=C:\WINDOWS\EMM386.EXE ram
	    DOS=HIGH,UMB
	    DEVICEHIGH=C:\WINDOWS\COMMAND\DRVSPACE.SYS /move
	    FILES = 35
	    DEVICEHIGH=C:\dos\OAKV111.SYS /d:mscd000 /m:s /p:170p /v
	
	  NOTE: If the drive is compressed, there is not room in memory to load the
	  CDROM Driver. Use the REM command to remark out the lines above, that contain
	  either MSCDEX or OAKV111.SYS.
	
	4. Restart the computer with the startup disk in the floppy drive.
	
	5. Run Fight Simulator Setup from the MS-DOS command prompt and test the sound
	  card with Autodetect. To do this, follow these steps:
	
	  a. At the "C:\fltsim5" command prompt, type "setup" (without the quotation
	     marks), and then press ENTER.
	
	  b. Use the DOWN ARROW key to select the sound card, and then press ENTER.
	
	  c. Select Autodetect, and then press ENTER. Follow the instructions on the
	     screen to complete the installation.
	
	The above steps work on NEC Ready models 7022, 9012, 9022, 9522, and 9532. The
	MS-DOS drivers are installed by factory default. They are also available after
	the NEC Product Recovery CD-ROM has reinitialized the hard disk. If you need the
	latest NEC Recovery CD-ROM, call NEC Technologies at (800)632-4525.
	
	The MS-DOS sound card driver does not work correctly in a MS-DOS Window or in a
	virtual machine.
	
	After using the DOS sound card driver, the sound card needs to be reset before
	the Windows sound driver works correctly. The sound card can be reset by
	shutting down and restarting the computer, or the sound card can be
	automatically reset by the Windows sound driver when you exit Windows.
	
	Additional query words: 5.00 5.10 5.x flightsim fltsim dos d_fltsim flt sim
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.0,5.1
	Issue type        : kbinfo
	
	=============================================================================
	
