---
layout: page
title: "Q92397: Bernoulli Drives and Windows"
permalink: kb/092/Q92397/
---

## Q92397: Bernoulli Drives and Windows

	Article: Q92397
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following two sections describe issues and workarounds for using Bernoulli
	drives with Windows.
	
	BERNOULLI DRIVES AND WINDOWS 3.1
	--------------------------------
	
	After the Windows logo screen displays when starting Windows 3.1 in enhanced mode
	with a Bernoulli drive present and active, your system may stop responding
	(hang). If so, try the following:
	
	1. Disable SMARTDRV.EXE in the AUTOEXEC.BAT file to prevent caching the
	  Bernoulli drive by typing the following line:
	
	  C:\WINDOWS\SMARTDRV.EXE D-
	
	  where "D" is Bernoulli drive
	
	2. Check the Bernoulli driver version. Version 7.02 is the latest version as of
	  April 22, 1992. Versions 7.00 and higher are compatible with Windows 3.1. If
	  you have version 4.81 or below, call IOMEGA to obtain the latest version of
	  the driver. If you use an IBM PS/2 machine with Micro Channel Architecture
	  (MCA), you need to use version 7.02.
	
	3. Check to ensure that a permanent swap file was not created on the Bernoulli
	  drive. If you find one, remove it and re-create it on a standard hard drive,
	  or use a temporary swap file on the Bernoulli drive.
	
	4. It may be necessary to insert the following line to the [386ENH] section of
	  the SYSTEM.INI file to provide greater compatibility with the Bernoulli
	  drive:
	
	  [386ENH] VIRTUALHDIRQ=OFF
	
	  Note: To test if this line is required, start Windows with the following
	  command line:
	
	  WIN /d:v
	
	  If Windows starts successfully, include VIRTUALHDIRQ=OFF.
	
	5. Make sure the switches on the Bernoulli adapter card are set correctly. In
	  addition, the switches on the DEVICE=RCD.SYS line in the CONFIG.SYS file
	  should be configured correctly for your machine.
	
	Settings on the Bernoulli Adapter Card
	--------------------------------------
	
	Switch number 4 on the card should be set "up" or "on" for compatibility with 286
	or faster machines.
	
	The switch should be set "down" or "off" for compatibility with XT or MCA
	machines.
	
	Settings in the CONFIG.SYS
	--------------------------
	
	In the CONFIG.SYS file, the RCD.SYS driver is installed for use with the
	Bernoulli drive. The RCD.SYS driver works in conjunction with switch number 4 on
	the adapter card. The appropriate switches for the RCD.SYS line in the
	CONFIG.SYS file vary depending on your hardware. The applicable switches are
	listed below. For more information on configuring your Bernoulli drive, please
	consult your manual, or call Bernoulli.
	
	The RCD.SYS /F option allows access to the Bernoulli drive for fast host machines
	(mainly 286 and 386 machines. The RCD.SYS /F0 option allows access to the drive
	for 486 machines only. If you are using the /F option, you must set the
	controller card switch for Programmed I/O. For more information, refer to the
	Bernoulli documentation.
	
	The RCD.SYS /L option locks the Bernoulli drive cartridge, disabling the Eject
	button on the drive.
	
	
	The RCD.SYS /M0 option uses Programmed I/O data transfer and bypasses Direct
	Memory Access. This option is used for all MCA machines when operating in
	Windows 3.1.
	
	The RCD.SYS /N option disables the connection to any network.
	
	The RCD.SYS /P option notifies the parallel adapter of the Bernoulli drive to
	slow down the transfer of data to and from the parallel port(s).
	
	When this problem occurs in Windows 3.1 386 enhanced mode, the physical hard disk
	may run continuously until a break is issued. To discover exactly what is
	causing the Bernoulli drive to work incorrectly, run RCDDIAG.EXE (a diagnostic
	program), and contact IOMEGA technical support.
	
	BERNOULLI DRIVES AND WINDOWS 3.0
	--------------------------------
	
	When you start Windows 3.0 in enhanced mode on a Bernoulli drive, your system may
	stop responding (hang). If so, you may have a conflict between your RCD.SYS
	command-line parameters and your Bernoulli card configuration.
	
	RCD.SYS normally uses DMA for I/O. The RCD.SYS /F command-line option specifies
	programmed I/O instead of DMA. If you are using RCD.SYS without the /F option,
	set your controller card's switch for DMA; if you are using the /F option, you
	must set the controller card switch for programmed I/O.
	
	The products included here are manufactured by IOMEGA, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 bern burn born birn
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
