---
layout: page
title: "Q96831: How to Boot from the Hard Disk on an IBM PS/1"
permalink: /kb/096/Q96831/
---

## Q96831: How to Boot from the Hard Disk on an IBM PS/1

	Article: Q96831
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install MS-DOS, you receive one of the following error messages:
	
	- 
	
	  Invalid COMMAND.COM
	
	- 
	
	  Cannot load COMMAND, System halted
	
	- 
	
	  Incorrect DOS version
	
	CAUSE
	=====
	
	By default, the IBM PS/1 uses system files located on a read-only memory (ROM)
	chip. The setup program for MS-DOS installs MS-DOS files on either a floppy disk
	or a hard disk. Therefore, before installing MS-DOS, you must change your
	default startup procedure so that it uses the system files on the Setup disk
	instead of those on the ROM chip.
	
	WORKAROUND
	==========
	
	Use the following steps to reinstall MS-DOS:
	
	1. Press and hold down both mouse buttons.
	
	2. Start your PS/1. The computer displays the System menu.
	
	3. From the System menu, choose the Your Software icon. A group of folders
	  appears.
	
	4. Choose the DOS folder. A list of files in your DOS folder appears.
	
	5. Double-click the CUSTOMIZ file. The How System Starts screen appears.
	
	6. Use the DOWN ARROW key to select the "Try Diskette First, then Try Fixed
	  Disk" option.
	
	7. Press the SPACEBAR to choose the option.
	
	8. Use the DOWN ARROW key to select the Read CONFIG.SYS option.
	
	9. Use the RIGHT ARROW key to select the From Disk option.
	
	10. Press the SPACEBAR to choose the option.
	
	11. Use the DOWN ARROW key to select the Read AUTOEXEC.BAT option.
	
	12. Use the RIGHT ARROW key to select the From Disk option.
	
	13. Press the SPACEBAR to choose the option.
	
	14. Press ENTER to save the system startup changes.
	
	15. Restart your computer by pressing CTRL+ALT+DEL, and then run the Setup
	  program for MS-DOS again.
	
	NOTE: In some cases, the PS/1 may revert back to default boot settings if the
	computer is restarted while holding down both mouse buttons.
	
	If this procedure does not work, call IBM Product Support Services for
	assistance.
	
	MORE INFORMATION
	================
	
	The IBM product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.00 5.00 DOS err msg international business machines 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
