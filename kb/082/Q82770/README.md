---
layout: page
title: "Q82770: Windows 3.1 Setup Error Codes (S000 through S022)"
permalink: kb/082/Q82770/
---

## Q82770: Windows 3.1 Setup Error Codes (S000 through S022)

	Article: Q82770
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Setup error message contains an error code, it also includes some text
	indicating what Setup was trying to do, for example, copying a file. The text of
	the error message indicates whether the error is fatal or not. In some non-fatal
	cases, Setup may be performing an operation (such as copying a file) that is
	needed in order to run Windows. Other times the error may prevent some specific
	feature of Windows from operating properly.
	
	In many cases, the error code is an MS-DOS extended error code. These error codes
	are between 0 and 100. Setup-specific error codes have two different formats,
	depending on whether the error occurs during the character (MS-DOS) mode or the
	Windows graphical user interface (GUI) mode portion of Setup. The character mode
	Setup-specific error numbers are in the format "Snnn", where "nnn" is any three
	digits. The GUI mode error numbers have codes greater than 200.
	
	MORE INFORMATION
	================
	
	Character Mode Setup Error Codes
	--------------------------------
	
	  S001
	
	  Could not open SETUP.INF. SETUP.INF should reside on the first Windows Setup
	  disk for first-time installations or upgrades and should reside in the
	  WINDOWS\SYSTEM subdirectory when Setup is used to change the system
	  configuration after Windows has been set up. If you are changing the
	  configuration, make sure SETUP.INF does not exist in the WINDOWS directory
	  and copy SETUP.INF from the first Windows Setup disk to the WINDOWS\SYSTEM
	  subdirectory and try again. If it is a first-time installation or upgrade,
	  make sure to set the current drive and directory to the location of the Setup
	  program and then run Setup from the MS-DOS prompt.
	
	  S002
	
	  Could not load SETUP.INF. Usually due to lack of memory. May also be due to a
	  corrupt SETUP.INF. Should not occur during a first-time installation or
	  upgrade. After making sure that there is enough memory, follow the
	  instructions for S001.
	
	  S004
	
	  Entry not found in SETUP.INF: [winexec].krnl386. Should not occur during
	  first-time installation or upgrade. Setup has probably found an invalid
	  SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S005
	
	  Entry not found in SETUP.INF: [winexec].krnl286. Setup has probably found an
	  invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S006
	
	  Entry not found in SETUP.INF: [winexec].dosx. Setup has probably found an
	  invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S007
	
	  Entry not found in SETUP.INF: [special_adapter].cdrom. Setup has probably
	  found an invalid SETUP.INF on the user's system. Follow the instructions for
	  S001.
	
	  S008
	
	  Entry not found in SETUP.INF: [winexec].exechimem. Setup has probably found
	  an invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S009
	
	  Entry not found in SETUP.INF: [winexec].himemcmd. Setup has probably found an
	  invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S010
	
	  Entry not found in SETUP.INF: [data].welcome. Setup has probably found an
	  invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S012
	
	  Entry not found in SETUP.INF: [machine] <line>. Setup has probably
	  found an invalid SETUP.INF on the user's system. Follow the instructions for
	  S001.
	
	  S013
	
	  Entry not found in SETUP.INF: [machine] <line>. Setup has probably
	  found an invalid SETUP.INF on the user's system. Follow the instructions for
	  S001.
	
	  S014
	
	  Entry not found in SETUP.INF: [winexec].execstd. Setup has probably found an
	  invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S015
	
	  Entry not found in SETUP.INF: [winexec].execcmd. Setup has probably found an
	  invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S016
	
	  Entry not found in SETUP.INF: [user] section. Setup has probably found an
	  invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S017
	
	  Entry not found in SETUP.INF: [user] section empty. Setup has probably found
	  an invalid SETUP.INF on the user's system. Follow the instructions for S001.
	
	  S018
	
	  Entry not found in SETUP.INF: [user] section corrupt. Setup has probably
	  found an invalid SETUP.INF on the user's system. Follow the instructions for
	  S001.
	
	  S019
	
	  WIN.COM not created. This may be due to missing files, a bad SETUP.INF or
	  OEMSETUP.INF, lack of disk space, or an inability to create or modify the
	  WIN.COM file. When you first install Windows or change display drivers, Setup
	  creates the file WIN.COM from the file WIN.CNF and displays the dependent
	  logo files, usually named *.lgo and *.rle. The logo files are specified in
	  the .INF file for the chosen display.
	
	  Make sure you do not have virus-protection software that does not allow
	  executables to be modified. Try changing the display after exiting Windows
	  and running Setup from the MS-DOS prompt. If you are selecting an original
	  equipment manufacturer (OEM) display, try one of the display drivers that are
	  shipped with Windows 3.1 to see if the OEMSETUP.INF file is not valid or if
	  it specifies files that do not exist. If selecting a supplied display driver
	  does not work, make sure the SETUP.INF file is valid (see error S001 above).
	
	  S020
	
	  SYSTEM.INI was not correctly updated. This will occur when attempting to
	  configure Windows with a new device or for a new system software
	  configuration. The main reason for this problem occurring is lack of memory
	  or a corrupt SYSTEM.INI file. It is also possible to get this error because
	  of a corrupt .INF file. Make sure there is enough memory and that the
	  SYSTEM.INI file is of a reasonable size (not much more than 5K) and try the
	  operation again. Try selecting a different component (for example, select No
	  Network instead of the network selected or select VGA instead of the display
	  that is selected). If this succeeds, copy the SYSTEM.INI file to a backup
	  disk and try again. If not, the SYSTEM.INI or SETUP.INF file is probably
	  corrupted.
	
	  S021
	
	  SYSTEM.INI was not correctly updated. See S020 above.
	
	  S022
	
	  Setup did not save its state in the SYSTEM.INI file. This is due to either
	  insufficient memory or a corrupt SYSTEM.INI file.
	
	Additional query words: 3.1 3.10 3.11 messages
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
