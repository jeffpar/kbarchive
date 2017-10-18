---
layout: page
title: "Q81605: Setting Up LANtastic 4.x with Windows 3.0"
permalink: kb/081/Q81605/
---

## Q81605: Setting Up LANtastic 4.x with Windows 3.0

	Article: Q81605
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to install LANtastic versions 4.x network drivers for
	use with Windows 3.0. According to Artisoft, the peer-to-peer network LANtastic
	4.x is fully compatible with Windows 3.0. In addition, according to Artisoft,
	Windows 386 enhanced mode will now run on a LANtastic server also being used as
	a workstation (nondedicated server).
	
	The information that follows discusses both installation and upgrade of LANtastic
	drivers for a local installation of Windows 3.0 on a workstation and the setup
	of LANtastic drivers for a shared network installation of Windows 3.0.
	
	MORE INFORMATION
	================
	
	Setup for Local Installation of Windows
	---------------------------------------
	
	You must run the SETUP.EXE program from Windows to add the enhanced mode
	LANtastic 4.x drivers for Windows.
	
	NOTE: You must have the drivers copied to the appropriate directory on your hard
	drive before you run the Windows Setup program (so that Windows can find the
	drivers).
	
	To install the LANtastic 4.x drivers for Windows 3.0:
	
	1. Change to your Windows directory (C:\WINDOWS by default).
	
	2. Run Windows Setup without any parameters by typing the following at the
	  MS-DOS command prompt:
	
	  setup
	
	3. From the System Information Screen, select Network.
	
	4. Select Other (requires disk provided by manufacturer).
	
	5. Replace the A:\ path with the path to the directory where you installed the
	  LANtastic Network Operating System (NOS) files. For example:
	
	  c:\lantasti
	
	  Setup will find the file OEMSETUP.INF that contains the necessary settings for
	  Windows to use when it executes. These settings will be copied into the
	  Windows SYSTEM.INI file so that these parameters will be used each time you
	  run Windows.
	
	6. Select LANtastic Network Operating System 4.0.
	
	7. Setup will return to the main menu with LANtastic NOS 4.0 as the network.
	  Press ENTER to accept the new Windows configuration. Setup will make the
	  changes and return to the MS-DOS command prompt.
	
	Setup for a Shared Copy of Windows
	----------------------------------
	
	To install a shared copy of Windows on a LANtastic network, follow the
	instructions in the "Putting Windows on a Network" section on page 553 of the
	"Microsoft Windows User's Guide." After expanding all the Windows disks into the
	shared directory, change to the shared directory and make all the files
	read-only by using the MS-DOS ATTRIB command, as follows:
	
	  attrib +r *.*
	
	Each network workstation can now log into the network and redirect a drive
	designation to the shared Windows directory on the server. For example, type the
	following:
	
	  net use w: \\server_name\c-drive cd\winshare setup /n
	
	Users can now set up to either their local hard drives or their directory on the
	server drive. The network selected should be Microsoft Network or 100-percent
	compatible.
	
	Once Windows is installed, exit to MS-DOS and run Windows Setup from the WINDOWS
	directory using the SETUP /N command. Then do the following:
	
	1. Select Network.
	
	2. Select Other (requires disk provided by manufacturer).
	
	3. Backspace over the A:\ path and enter the path to the user's LANtastic
	  Network Operating System (NOS) files. For example:
	
	  c:\lantasti
	
	4. Setup will use the OEMSETUP.INF from this directory. Select LANTASTIC NETWORK
	  OPERATING SYSTEM 4.0.
	
	5. Press ENTER to accept this configuration. Windows is now set up to run on the
	  LANtastic network.
	
	Additional Notes for Both Configurations
	----------------------------------------
	
	The following line should have been added to the [boot] section of the SYSTEM.INI
	file:
	
	     network.drv=LANTNET.DRV
	
	The following lines should have been added in the [386Enh] section of the
	SYSTEM.INI file:
	
	     network=*vnetbios,lantasti.386
	     EMMExclude=D800-DFFF
	     PerVMFiles=0
	     NetHeapSize=64
	     NetAsynchTimeout=5.0
	     NetAsynchFallback=TRUE
	
	Note: If you are upgrading from earlier versions of LANtastic 2.x or 3.x, you
	need to remove the following lines from the [386Enh] section of the SYSTEM.INI
	file:
	
	     InDOSPolling=TRUE
	     ReflectDOSInt2a=TRUE
	     UniqueDOSPSP=TRUE
	
	LANtastic is manufactured by Artisoft, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	Artisoft technical bulletin: "Multitasking Software: Microsoft Windows 3.0"
	(WIN300 07.19.91)
	
	SYSINI3.TXT from Windows 3.0
	
	Additional query words: 3.00 3.00a lan tastic lan-tastic set-up artasoft 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
