---
layout: page
title: "Q147910: Network Printing Options with the Tektronix Phaser"
permalink: /kb/147/Q147910/
---

## Q147910: Network Printing Options with the Tektronix Phaser

	Article: Q147910
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use a Tektronix Phaser product over a network, you can obtain output from
	Windows NT using several different mechanisms. This article explains how to set
	up the printer under Windows NT.
	
	MORE INFORMATION
	================
	
	The following Tektronix Color Printer drivers are shipped with Windows NT 3.51:
	
	Tektronix Phaser 140
	Tektronix Phaser 200e
	Tektronix Phaser 200I
	Tektronix Phaser 220e
	Tektronix Phaser 220I
	Tektronix Phaser 300I
	Tektronix Phaser 340
	Tektronix Phaser 440
	Tektronix Phaser 480
	Tektronix Phaser 540
	Tektronix Phaser II PXi
	Tektronix Phaser II Pxe
	Tektronix Phaser II PX
	Tektronix Phaser III Pxi
	Tektronix Phaser IISD
	Tektronix Phaser IISDX
	Tektronix Phaser Pxi
	Tektronix Phaser PX
	
	CONNECTION OPTIONS
	------------------
	
	Depending on the model, you should have the following Network options:
	
	Parallel
	Serial
	*TCP/IP Printing (LPD)
	Apple Talk
	
	*NOTE: Not all Tektronix Phaser devices have TCP/IP enabled. It may be necessary
	to contact Tektronix for Authorization codes to enable features within the
	device.
	
	TCP/IP:
	
	To install this option, follow the steps below:
	
	Windows NT 3.5 and 3.51 includes network software called "TCP/IP print services
	(lpr print services)." Refer to the Windows NT manual for instructions on how to
	install this network software. After you have installed TCP/IP print services,
	do the following:
	
	1. Open Print Manager, create a new printer, and select the appropriate printer
	  driver. If there is no driver for your printer, follow the steps in the
	  previous section, "Installing a Windows NT PostScript Driver", to install the
	  proper printer driver.
	
	2. Select 'Print to Other' for the Device Port. For Other Device select 'lpr.'
	
	3. For name or address of host providing lpd, enter your printer's IP address
	  (or Host name if known to the network).
	
	4. For the name of the printer on that machine, type in one of the following:
	
	  AUTO: Autoselect, Postscript, HPGL or ASCII Text
	  PS: Postscript Only
	  PSTEXT: ASCII text only
	  HPGL: HPGL files only
	  - (If you are unsure, choose AUTO)
	
	  Click OK to complete the installation.
	
	AppleTalk:
	
	Windows NT 3.5 and 3.51 includes network software called "Services for
	Macintosh." Refer to the Windows NT manual for instructions on how to install
	this network software. After you have installed it, perform the following
	steps:
	
	1. Open Print Manager, create a new printer, and select the appropriate printer
	  driver.
	
	2. Select 'Print to Other' for the Device Port. For Other Device select
	  'AppleTalk Printing Devices.'
	
	3. Windows NT will then search the network for zones or Available AppleTalk
	  Printing Devices.
	
	4. Select the appropriate zone.
	
	5. Windows NT will search the network again for Available AppleTalk Printing
	  Devices within that zone. (This is similar to Chooser on the Mac.)
	
	6. Select your Tektronix printer.
	
	7. At the prompt "Do you want to capture this AppleTalk Printing Device?", if
	  you click Yes, you will hide the printer from regular Mac users, forcing them
	  to use Windows NT Server as a spooler, as long as NT Server allows sharing of
	  this printer.
	
	For Additional information refer to the following:
	
	Tektronix     (800) 835-6100  Technical support
	Tektronix     (503) 627-7111  Main number
	HAL (FaxBack) (503) 682-7450  (direct)or 1-800-835-6100
	
	             Request Document #9506
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: printing tek
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
