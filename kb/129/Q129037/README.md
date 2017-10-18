---
layout: page
title: "Q129037: Windows NT 3.5x and 4.0 Emergency Repair Process Screens"
permalink: kb/129/Q129037/
---

## Q129037: Windows NT 3.5x and 4.0 Emergency Repair Process Screens

	Article: Q129037
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article contains the screens for the Windows NT 3.5x and 4.0
	Emergency repair process.
	
	
	MORE INFORMATION
	================
	
	Windows NT Emergency Repair Process
	---------------------------------------
	
	1. Boot off of the Setup Disk 1
	
	2. Insert Disk 2
	
	------------------------------- Screen 1 ----------------------------------
	Welcome to Setup-----Choose R from the bottom of the screen for repair
	process.
	
	As part of the repair Process, Setup will perform each of the optional
	tasks shown below with an "X" in it's check box.
	
	To perform the selected tasks, press ENTER to indicate "Continue." If you
	want to select or deselect any item in the list, press the UP or DOWN arrow
	key to move the highlight to the item you want to change.
	
	Then press ENTER.
	
	  [X]   Inspect registry files.
	  [X]   Inspect startup environment.
	  [X]   Verify Windows NT system files.
	  [X]   Inspect Boot Sector.
	     Continue <perform selected tasks>
	
	F1=Help      F3=Exit      ESC=Cancel
	
	ENTER=Select/Deselect
	----------------------------- End Screen 1 --------------------------------
	
	*** Explanation of these options:
	
	- Inspect Configuration Registry Files: choosing this option will take the
	  user to a second screen. And this option attempts to load each file in
	  the registry that is selected from that screen to determine whether or
	  not it may have become corrupt. If Setup determines that part of the
	  registry has become corrupted, it will recommend that the file be
	  restored. The user can accept or ignore the recommendation.
	
	- Inspect Startup environment: This option checks the boot files such as
	  NTLDR, NTDETECT.COM etc...
	
	- Verify Windows NT System Files: This selection uses a checksum to verify
	  that each file in the installation is good and matches the files that
	  were originally installed. If files are missing or corrupt, they can be
	  restored from the installation disks or CD.
	
	- Inspect Boot Sector: This option will repair the boor sector on drive C
	  and reinstall the Boot Loader functionality.
	
	------------------------------- Screen 2 ----------------------------------
	Windows Setup
	
	Setup automatically detects floppy disk controllers and standard EDSI/IDE
	disks without user intervention. However on some computers detection of
	certain other mass storage devices, such as SCSI adapters and CD-ROM
	drives, can cause the computer to become unresponsive or to malfunction
	temporarily.
	
	For this reason, you can bypass Setup's mass storage device detection and
	manually select SCSI adapters, CD-ROM drives, and special disk controllers
	(such as drive arrays) for installation.
	
	<B7> To continue, Press ENTER.
	  Setup will attempt to detect mass storage devices in your computer.
	
	<B7> To skip mass storage device detection, press S.
	  Setup will allow you to manually select SCSI adapters, CD-ROM drives,
	  and special disk controllers for installation.
	
	F3=Exit         ENTER=Continue      S=Skip Detection
	----------------------------- End Screen 2 --------------------------------
	
	*** After selecting to continue it will load the SCSI drivers and request
	   setup disk 3
	
	------------------------------- Screen 3 ----------------------------------
	Setup has recognized the following mass storage devices in your computer
	
	  <Your SCSI adapter>  -or-  <None>
	
	<B7> To specify additional SCSI adapters, CD-ROM drives, or special disk
	  controllers for use with Windows NT, including those for which you have
	  a device support disk from a mass storage device manufacturer, press S.
	
	<B7> If you do not have any device support disks from a mass storage device
	  manufacturer, or do not want to specify additional mass storage devices
	  for use with Windows NT, press ENTER.
	
	S=Specify Additional Device   ENTER=Continue   F3=Exit
	----------------------------- End Screen 3 --------------------------------
	
	------------------------------- Screen 4 ----------------------------------
	                          [NT V3.5x specific]
	
	As part of the repair process, Setup may need to replace files on your hard
	disk with original copies from your Windows NT distribution disks.
	
	Because Setup can use either a CD-ROM or 3.5" disks, you must now select
	the media from which Setup should copy original files if it needs to.
	
	<B7> If you have a Windows NT Setup CD-ROM, press ENTER.
	
	<B7> If you have Windows NT 3.5x" Setup disks, press A.
	
	ENTER=CD-ROM Drive      A=Drive      F3=Exit
	----------------------------- End Screen 4 --------------------------------
	
	*** If you choose A the screen is the same but requests you to use the
	   floppy drives.
	
	*** NT V4.0 REQUIRES THE INSTALLATION CD-ROM, FLOPPY OPTION IS UNAVAILABLE
	   SO THIS SCREEN IS SKIPPED.
	
	------------------------------- Screen 4 ----------------------------------
	                          [NT V4.0 specific]
	
	Setup was unable to locate a CD-ROM Drive.
	
	Make sure your CD-ROM drive is switched on and properly connected
	to your computer. If it is a SCSI CD-ROM drive, make sure your
	SCSI Devices are properly terminated. Consult your computer or SCSI
	adapter documentation for more information.
	
	Setup cannot continue. Press F3 to exit.
	
	----------------------------- End Screen 4 --------------------------------
	
	*** NT V4.0 REQUIRES THE INSTALLATION CD-ROM DRIVE BE ACCESSIBLE.
	
	------------------------------- Screen 5 ----------------------------------
	Setup needs to know if you have an Emergency repair disk for the Windows NT
	version X.X installation which you want to repair.
	
	NOTE: Setup can only repair a Windows NT version X.X installation.
	
	<B7> If you have the Emergency Repair Disk, press ENTER.
	<B7> If you do not have the Emergency Repair Disk, press ESC. Setup will
	  attempt to locate the Windows NT version X.X for you.
	
	ENTER=Continue      ESC=Cancel      F3=Exit
	----------------------------- End Screen 5 --------------------------------
	
	*** If you choose ESC, it will find your installation and get to screen 7.
	*** If you choose Continue you get screen 6.
	*** Setup will examine your disks here.
	
	------------------------------- Screen 6 ----------------------------------
	Please insert the disk labeled Windows Emergency Repair Disk into Drive A:
	
	<B7> press Enter when ready.
	
	F3=Exit         ENTER=Continue      ESC=Cancel
	----------------------------- End Screen 6 --------------------------------
	
	------------------------------- Screen 7 ----------------------------------
	Setup has found Windows NT on your hard disk in the directory shown below.
	
	  <location>
	
	<B7> To repair the Windows NT installation shown above, press ENTER.
	<B7> To return to the previous screen, press ESC.
	<B7> To exit Setup, press F3.
	
	F3=Exit         ESC=Cancel         ENTER=Repair.
	----------------------------- End Screen 7 --------------------------------
	
	------------------------------- Screen 8 ----------------------------------
	
	Setup will restore each registry file shown below with an "X" in its check
	box.
	
	To restore the selected files, press ENTER to indicate "Continue." If you
	want to select or deselect any item in the list, press the UP or DOWN ARROW
	key to move the highlight to the item you want to change. Then press ENTER.
	
	WARNING: Restore a registry file only as a last resort. Existing
	configuration may be lost. Press F1 for more information.
	
	  [   ]   SYSTEM (System configuration)
	  [   ]   SOFTWARE (Software Information)
	  [   ]   DEFAULT (Default User Profile)
	  [   ]   NTUSER.DAT (New User profile)     (NT V4.0 only)
	  [   ]   SECURITY ( Security Policy) and
	          SAM (User Accounts Database)
	  Continue (perform selected tasks)
	
	F1=Help         ENTER=Select/Deselect      F3=Exit
	----------------------------- End Screen 8 --------------------------------
	
	Differences Between Windows NT 3.1 and 3.5x Repair Processes
	-----------------------------------------------------------
	
	1. The 3.5 Repair process goes through the 2nd disk before prompting
	  the user to choose the repair process.
	
	2. The 3.5 Repair process offers an additional choice for checking the
	  boot files. It allows the user to select either the Boot Sector or
	  the Startup Environment. The 3.1 repair process offers only the
	  Boot Files which includes both of the previous choices.
	
	3. The 3.5 Repair process offers the ability to specify the path for
	  the repair information. The user does not have to have a physical
	  floppy disk on which the repair information is stored, but can
	  choose to use the information stored in the <SYSTEMROOT>\REPAIR
	  subdirectory.
	
	4. The 3.5 Repair process offers the ability to designate the source
	  media for the original distribution files either CD-ROM or the
	  A: Drive.
	
	5. The 3.5 Repair process offers the choice to insert a disk with a
	  driver for 3rd party disk controllers.
	
	Differences Between Windows NT 3.5 and 4.0 Repair Processes
	-----------------------------------------------------------
	
	Same as the differences stated above with the exception of 4.
	NT V4.0 requires access to the installation CD-ROM Drive.
	
	Additional query words: prodnt ERD
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
