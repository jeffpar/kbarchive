---
layout: page
title: "Q173518: Stop: 0xC000012F -Image File Did Not Have the Correct Format"
permalink: /kb/173/Q173518/
---

## Q173518: Stop: 0xC000012F -Image File Did Not Have the Correct Format

	Article: Q173518
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message as your computer restarts:
	
	  Stop: 0xC000012F STATUS_INVALID_IMAGE_NOT_MZ
	
	  The specified image file did not have the correct format, it did not have an
	  initial MZ.
	
	This error may also occur following installation of new drivers to the system,
	such as adding a new video driver, or is often seen during either an upgrade or
	new installation of Windows NT.
	
	CAUSE
	=====
	
	This error is caused by the system being unable to load a needed file because of
	the file being corrupted. This usually occurs during the file copy process, and
	is often because of a hardware malfunction. It may be a one-time occurrence, but
	often is a signal for the user to do a through examination of system hardware to
	determine what is causing the corruption.
	
	NOTE: The parameter 0xc000012f may also be seen in conjunction with other Trap
	Codes such as 0x0000006b and is usually shown as the first parameter following
	the trap:
	
	  STOP 0x0000006b (0xc000012f, 0xxxxxxxxx, 0xxxxxxxxx,0xxxxxxxxx)
	
	WORKAROUND
	==========
	
	Because this trap code is caused by a corrupted file required to load Windows
	NT, and the trap screen does not always reference which specific file caused the
	problem, the best solution is usually basic trouble shooting.
	
	It is recommended to have a good back up of anything on the computer that the
	user considers valuable before proceeding with the different procedures.
	
	Windows NT was Already Installed and Running
	--------------------------------------------
	
	If the stop error occurred following a change in hardware drivers, press the
	space bar to select the Last Known Good option during startup, and then change
	the necessary components when the computer comes up.
	
	Try selecting [VGA MODE] option from the boot menu, this will display the Windows
	NT system files on the screen as they are loaded and may give you a clue about
	which file is corrupt.
	
	Use the Emergency Repair Disk to replace the missing or damaged driver file on
	the partition by following the procedure outlined in the following Microsoft
	Knowledge Base articles:
	
	ARTICLE-ID: Q103280
	TITLE : Using an Emergency Repair Disk Created by Windows NT
	
	ARTICLE-ID: Q164471
	TITLE : Replacing System Files Using a Modified Emergency Repair Disk
	
	This will allow you to perform a system repair to replace the corrupted Windows
	NT system file.
	
	If Performing an Initial Windows NT Installation or Upgrade
	-----------------------------------------------------------
	
	If the computer has MS-DOS or another operating system installed, copy the i386
	directory from the Windows NT installation CD to C:\i386, and at a command
	prompt carry out the following command:
	
	WINNT /b.
	
	This often allows the installation to proceed, but if Windows NT will not install
	in this manner, you may want to consider the following options:
	
	- When installing on a new computer with little or nothing else on it, reformat
	  the hard drive and install using the three setup disks, or booting with DOS,
	  copying the i386 directory, and carry out a WINNT /b command as above. If you
	  are using the three setup disks, consider making a new set using the WINNT
	  /ox switch to help eliminate the possibility of a bad floppy disk.
	
	- Disable caching options and BIOS shadowing.
	
	- Removing all possible hardware to take the computer down to a bare box with
	  only one hard drive and controller in order to eliminate possible hardware
	  conflicts.
	
	- Ask the computers' manufacturer if a newer System BIOS is available, if so,
	  flash the BIOS using the manufacturers instructions.
	
	Because this error is usually associated with hardware, it is recommended to
	troubleshoot the computer from that stand point, including the motherboard,
	controller, memory, hard drive, and CD-ROM drive.
	
	Additional query words: file corruption
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
