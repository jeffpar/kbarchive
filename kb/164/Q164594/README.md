---
layout: page
title: "Q164594: WinNT 4.0 Hangs on DEC AlphaServer 2000, 2100, and 2100A System"
permalink: kb/164/Q164594/
---

## Q164594: WinNT 4.0 Hangs on DEC AlphaServer 2000, 2100, and 2100A System

	Article: Q164594
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbhowto
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0 on a Digital Equipment Corporation DEC
	AlphaServer, the setup process may stop responding and may not respond to user
	input.
	
	Windows NT 4.0 may stop responding before or during a system boot at the Blue
	kernel screen although displaying the Operating system version, number of
	processors, and amount of memory. Additionally, the computer's NVRAM variables
	may get corrupted.
	
	This can happen during an initial installation, although performing an Upgrade
	from Windows NT 3.51 to Windows NT 4.0, or after Windows NT 4.0 is already
	installed and running.
	
	CAUSE
	=====
	
	There is a version conflict between certain revisions of the Mainboard, I/O
	module, ARC firmware, and Windows NT 4.0 HAL files that can cause your system to
	malfunction if you run Windows NT on any of the following systems:
	
	- AlphaServer 2000 4/xxx and 5/xxx
	
	- AlphaServer 2100 4/xxx and 5/xxx
	
	- AlphaServer 2100A 4/xxx and 5/xxx
	
	RESOLUTION
	==========
	
	You must upgrade your ARC firmware to version 4.50 or later, and update your
	Windows NT 4.0 HAL files to the version posted on Digital's WWW site.
	
	For information on updating your System firmware and to download the updated HAL
	files, please contact Digital technical support at:
	
	  http://www.windows.digital.com/support
	
	MORE INFORMATION
	================
	
	The methods you use to update the firmware and HAL are different depending on
	whether:
	
	- Windows NT 4.0 is already installed.
	
	- You are performing a fresh installation of Windows NT 4.0.
	
	- You are upgrading from Windows NT 3.51 to Windows NT 4.0.
	
	- You have just replaced your I/O module or mainboard, and your system will not
	  boot the ARC firmware.
	
	NOTE: If you are already running ARC firmware 4.50 or later, you can skip the
	steps in the instructions related to upgrading the firmware. The ARC firmware
	version currently installed in your system is displayed on the ARC Boot screen.
	
	If you are running ARC firmware 4.50 or later, do not downgrade to an earlier
	revision.
	
	STEP A: Updating the System Firmware
	------------------------------------
	
	For information on updating your System firmware, please contact Digital
	technical support at http://www.windows.digital.com/support
	
	
	STEP B: Upgrading HAL on Systems with Windows NT 4.0 Already Installed
	----------------------------------------------------------------------
	
	1. Download the updated Hal.dll files from Digital.
	
	  Please contact Digital technical support at:
	  http://www.windows.digital.com/support
	
	2. Expand the Hal.zip file you downloaded from DEC, and then put them onto a
	  separate floppy disk.
	
	3. On the SYSTEM partition, go to the OS\Winnt40 directory.
	
	  NOTE: If you do not see any files in the right-hand pane, change the File
	  Manager or Explorer settings as appropriate to show all files and file
	  extensions. These files normally have the hidden, system, and read- only
	  attributes set.
	
	4. In your OS\Winnt40 directory, rename the Hal.dll file to Hal.old.
	
	5. Unzip the Hal.zip file you downloaded from DEC into a separate, temporary
	  directory on your hard disk drive. Then Copy the new Hal_name.dll file from
	  the temporary directory on your hard disk drive into the directory OS\Winnt40
	  containing the Hal.old file in your system partition, and rename the file you
	  copied to Hal.dll.
	
	6. Shutdown and restart your system.
	
	STEP C: Installing the Upgraded HAL on a Fresh Installation of Windows NT 4.0
	-----------------------------------------------------------------------------
	
	If you are performing a first time installation of Windows NT 4.0, follow these
	steps to install the updated HAL and firmware files:
	
	1. Upgrade the system Firmware.
	
	  For information on updating your firmware, please contact Digital technical
	  support at: http://www.windows.digital.com/support
	
	2. Download the updated Hal.dll files from Digital.
	
	  Please contact Digital technical support at:
	  http://www.windows.digital.com/support
	
	3. Expand the Hal.zip file you downloaded from DEC and put them onto a separate
	  floppy disk.
	
	4. Begin Windows NT installation. When prompted for your system type, select
	  Other and insert the floppy disk containing the updated HAL files into the
	  floppy disk drive. Press Enter twice to select and confirm that you want to
	  install the files from the floppy disk.
	
	5. Proceed with the remainder of the Windows NT installation normally.
	
	STEP D: Installing the Upgraded HAL and Firmware Files When Upgrading from Windows NT 3.51 to Windows NT 4.0
	------------------------------------------------------------------------------------------------------------
	
	If you already have Windows NT 3.51 installed and are upgrading to Windows NT
	4.0, follow these steps to upgrade the HAL and firmware files:
	
	1. Upgrade the system Firmware.
	
	  For information on updating your firmware, please contact Digital technical
	  support at: http://www.windows.digital.com/support
	
	2. Download the updated Hal.dll files from Digital. Please contact Digital
	  technical support at: http://www.windows.digital.com/support
	
	3. Expand the Hal.zip file you downloaded from DEC and put them onto a separate
	  floppy disk.
	
	4. Begin the Windows NT upgrade. When prompted for your system type, select
	  Other and insert the floppy disk containing the updated HAL files into the
	  disk drive. Press Enter twice to select and confirm that you want to install
	  the files from the floppy disk.
	
	5. Proceed with the remainder of the Windows NT 4.0 upgrade normally.
	
	The products mentioned here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: Alpha hal.dll hangs frozen boot prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA
	
	=============================================================================
	
