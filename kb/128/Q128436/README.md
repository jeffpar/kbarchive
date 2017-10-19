---
layout: page
title: "Q128436: Setup and Boot Hangs on HP Vectra XU/XUC Computer"
permalink: /kb/128/Q128436/
---

## Q128436: Setup and Boot Hangs on HP Vectra XU/XUC Computer

	Article: Q128436
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Hewlett-Packard (HP) Vectra XU or XUC computer with onboard AMD 79c974 SCSI
	controller and an AMD PCNET Ethernet LAN network interface card (NIC) may stop
	responding (hang) when Windows NT Setup attempts to detect the network interface
	card (NIC) in your computer. If Setup completes successfully, Windows NT may
	hang during the boot process.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. During Windows NT Setup, install the driver for the AMD 79c974 SCSI
	  controller. The driver is included on the computer in the \MASTERS\SCSI\DISK1
	  subdirectory on the system partition of the hard disk. You can either copy
	  the contents of the subdirectory to a blank floppy disk or point to the
	  specific location on the hard disk during Windows NT Setup. If you have
	  already upgraded the computer BIOS to Version 508, you must download
	  SCSI200.EXE from the HP Bulletin Board Service (BBS) at (208) 344-1691.
	  Extract the driver files and install these drivers provided for the AMD SCSI
	  controller.
	
	2. During Windows NT Setup, use the default video driver (VGA or compatible) for
	  both the HP Vectra XU and XUC computers.
	
	  The HP Vectra XU computer includes an integrated S3 864 video adapter and the
	  HP Vectra XUC computer includes a Matrox Ultima Plus PCI video adapter.
	  Windows NT includes the S3 video driver for the integrated S3 864 video
	  adapter.
	
	3. Change your video driver:
	
	  a. After the installation of Windows NT, download NT35.EXE from the HP BBS
	     for the Matrox Ultima Plus PCI video adapter.
	
	  b. Extract the driver files to a blank floppy disk.
	
	  c. Run Control Panel, choose Display, and choose Change Display Type.
	
	  d. Install the Matrox video driver by specifying the location of the floppy
	     disk.
	
	4. Setup up the network, not during Windows NT Setup, but after the installation
	  of Windows NT is complete:
	
	  a. Download C0201.EXE from the HP BBS.
	
	  b. Run Control Panel, choose Network, and choose Add Adapter.
	
	  c. Select "<Other> Requires disk from manufacturer" and choose
	     Continue.
	
	  d. Specify the location of the AMD PCNET Ethernet LAN NIC driver and install
	     it.
	
	NOTE: If you experience additional problems, refer to your hardware documentation
	or contact HP Technical Support at (208) 323-2551.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
