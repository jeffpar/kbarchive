---
layout: page
title: "Q114631: What to Do When You Have a Damaged FoxPro Disk"
permalink: /kb/114/Q114631/
---

## Q114631: What to Do When You Have a Damaged FoxPro Disk

	Article: Q114631
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you suspect that you have a damaged FoxPro floppy disk, first verify that the
	disk itself is damaged. Make sure that there is not another problem with the
	system or hardware that interferes with the Setup program.
	
	If your disk is indeed damaged, call the Microsoft Sales Information Center at
	(800) 426-9400 to obtain new FoxPro disks.
	
	
	MORE INFORMATION
	================
	
	Common Error Messages
	---------------------
	
	You may receive one of the following error messages during Setup:
	
	
	- Please insert disk: <diskname>
	
	-or-
	
	- The file "<filename>" appears to be missing from the installation disk.
	  You may either continue installation with the remaining files, or stop Setup.
	
	Start the Macintosh Without INITs and CDEVs
	-------------------------------------------
	
	NOTE: FoxPro for Macintosh requires Macintosh System 7 or later.
	
	Complete the following steps to start the Macintosh without loading system
	extensions (INITs) or Control Panel devices (CDEVs):
	
	1. Restart the Macintosh.
	
	2. Hold down the SHIFT key while the computer reboots and until the message
	  "Welcome to Macintosh. Extensions Off." is displayed.
	
	  NOTE: Some computer configurations require certain INITs or CDEVs to function
	  properly. These include systems that use third-party hardware, such as
	  monitors, accelerators, network cards, and so forth. Some password-protection
	  programs require INITs to decrypt the boot sector of the hard disk and to
	  allow startup.
	
	  CAUTION: PREPARE A BOOTABLE FLOPPY DISK FOR YOUR PARTICULAR HARDWARE
	  CONFIGURATION BEFORE ALTERING THE SYSTEM FOLDER ON YOUR HARD DISK.
	
	3. Run the FoxPro Setup program again.
	
	Rebuild the Desktop on the FoxPro Floppy Disk
	---------------------------------------------
	
	1. Verify that the FoxPro disk is not locked (that the sliding tab is shut).
	
	2. While holding down the COMMAND and OPTION keys, insert the FoxPro disk into
	  the floppy disk drive.
	
	3. When you are prompted to rebuild the Desktop file, choose OK.
	
	4. Run the FoxPro Setup program again.
	
	Other Troubleshooting Suggestions
	---------------------------------
	
	If the procedures listed above do not solve your problem, try the following:
	
	- Install FoxPro on a different Macintosh.
	
	  If the FoxPro disks work on another Macintosh, the problem may be with your
	  floppy disk drive.
	
	- Copy the contents of the floppy disk to the hard disk.
	
	  If the floppy disk does not successfully copy to the hard disk, try copying a
	  different floppy disk (one not included with FoxPro) to the hard disk. If
	  that floppy disk copies to the hard disk successfully, it is likely that the
	  FoxPro floppy disk is damaged.
	
	Additional query words: VFoxMac FoxMac 2.50b 2.50c tshoot troubleshoot troubleshooting corrupt corrupted bad errmsg err msg akz
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	
