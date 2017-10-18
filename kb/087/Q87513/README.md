---
layout: page
title: "Q87513: Using Hewlett-Packard Intellifont with Windows 3.1"
permalink: kb/087/Q87513/
---

## Q87513: Using Hewlett-Packard Intellifont with Windows 3.1

	Article: Q87513
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses using Hewlett-Packard (HP) Intellifont version 1.01 with
	Microsoft Windows. Intellifont is an HP font package for HP LaserJet III series
	and DeskJet 500 printers. This article discusses the following issues:
	
	- Intellifont Installs the Wrong Printer Driver
	
	- HP Intellifont fonts do not rotate with Windows 3.1
	
	- HP Intellifont does not work on a 286 computer
	
	- Italic Font Problems in Ami Pro
	
	- General Information
	
	MORE INFORMATION
	================
	
	Intellifont Installs the Wrong Printer Driver
	---------------------------------------------
	
	If HP Intellifont is installed after Windows 3.1, it installs an earlier version
	of the HP III printer driver HPPCL5A.DRV. Windows 3.1 ships with and requires
	version 3.89.
	
	To correct this problem:
	
	1. From the File Manager window, delete the current HP III printer driver
	  (HPPCL5A.DRV) from the WINDOWS\SYSTEM directory.
	
	2. From the Control Panel window, choose the Printers icon.
	
	3. Select the existing HP LaserJet III driver from the list of Installed
	  Printers.
	
	4. Choose the Remove button.
	
	5. Choose the Yes button.
	
	6. Choose the Add button.
	
	7. From List Of Printers, select HP LaserJet III.
	
	8. Choose the Install button.
	
	
	HP Intellifont fonts do not rotate with Windows 3.1
	---------------------------------------------------
	
	There is no solution to this problem. These fonts cannot be rotated with Windows
	3.1. The only option is to use TrueType fonts.
	
	
	HP Intellifont does not work on a 286 computer
	----------------------------------------------
	
	When upgrading a Windows 3.0 installation, on a 286 computer with Intellifont
	installed, Setup will exit to MS-DOS without clearing the screen. You will need
	to restart the computer to return to MS-DOS. If the upgrade is attempted again,
	Windows displays the following error message:
	
	  SETUP Could not load USER.EXE
	
	Hewlett-Packard (HP) and Agfa are aware of this problem. The only workaround to
	this situation is to edit the SYSTEM.INI file and reinstall Windows 3.1. You
	will be able to use TrueType fonts with Windows 3.1, but you will not be able to
	use your Intellifonts on a 286 machine. If the following changes are made to the
	SYSTEM.INI file's [boot] section, you should be able to finish upgrading to
	Windows 3.1.
	
	1. Edit the SYSTEM.INI's [boot] section with an ASCII text editor.
	
	2. Comment out the following lines by placing a semicolon (;) at the front of
	  the lines:
	
	  display.drv=ifw.drv
	  chain_display.drv=vga.drv
	
	  For example:
	
	  ;display.drv=ifw.drv
	  ;chain_display.drv=vga.drv
	
	3. Add the following line:
	
	  " display.drv=vga.drv" (without the quotation marks)
	
	You should now be able to successfully upgrade to Windows 3.1, but you will not
	be able to use Intellifont any longer.
	
	Italic Font Problems in Ami Pro
	-------------------------------
	
	Intellifont screen fonts cannot be correctly italicized on screen in Samna's Ami
	Professional word processor under the Microsoft Windows. When you try to
	italicize some text, the screen does not display the text correctly even though
	the text prints out in italics.
	
	To correct the italicized characters on the screen, choose View Preferences from
	the View menu, and clear the Display As Printed check box.
	
	
	General Information
	-------------------
	
	Application name:   HP Intellifont
	Manufacturer:       Hewlett-Packard
	Application type:   Font utility
	RAM required:       1 MB
	Disk space needed:  1 MB
	
	Changes to Windows files:
	
	  SYSTEM.INI:
	  [boot]
	  display.drv=IFW.DRV
	  CHAIN_DISPLAY.DRV=vga.drv
	
	  WIN.INI
	  [Intellifont]
	  SupportFiles=c:[path]\hpifont
	  ifwstatus=1
	  FontSUmUpdt=0
	
	Files and directories placed somewhere other than the application's
	own directory:
	
	  Windows program directory:
	
	  IFWGUIDE.WRI
	  IFW.EXE
	  IFW.HLP
	
	  Windows \SYSTEM directory:
	
	  IFW.DRV
	  HPPCL5A.DRV
	  HPPCL5A.HLP
	
	The HP products included here are manufactured by HP, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 3.10 laser jet lotus 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
