---
layout: page
title: "Q80929: Installing IBM Personal Pageprinter 4216-020 with Windows"
permalink: kb/080/Q80929/
---

## Q80929: Installing IBM Personal Pageprinter 4216-020 with Windows

	Article: Q80929
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the preferred method for installing the IBM Personal
	Pageprinter Model 4216-020 with Microsoft Windows. Using this method
	dramatically reduces the number of unrecoverable application errors (UAEs) and
	general protection (GP) faults associated with the standard installation of the
	adapter software required to run this printer.
	
	IBM manufactures three different models of the IBM Personal Pageprinter: the
	4216-020, 4216-030, and 4216-031. This information applies only to the model
	4216-020 with version 1.3.1 of the Personal Pageprinter adapter software.
	
	MORE INFORMATION
	================
	
	The Pageprinter includes an adapter card installed in the computer and a
	printing engine in the printer; these are connected by a cable. The card in the
	computer provides a port called EPT. You must use this hardware to print with
	the Pageprinter 4216-020.
	
	When you start your computer, a line in the AUTOEXEC.BAT file runs the Personal
	Pageprinter Adapter Program (PPAP). The PPAP loads a PostScript interpreter into
	the computer's adapter card. The most current version of the PPAP is 1.3.1. You
	must use this version. The PPAP will not be revised again. IBM discontinued the
	Pageprinter 4216-020 and no longer supports it.
	
	When IBM discontinued the Pageprinter and stopped revising the PPAP, Windows
	version 3.0 had not been released. Because the PPAP is designed for use with
	Windows 2.x, using it with later versions of Windows can cause problems. The
	steps below detail how to use the Pageprinter correctly with Windows versions
	3.0, 3.0a, 3.1, and 3.11.
	
	With Windows version 2.x, the PPAP software must be installed after Windows is
	installed in order for certain files to be updated correctly. Using the
	instructions below, the installation sequence is no longer as important;
	however, it is recommended that you follow the installation order below. To
	install PPAP correctly with Windows 3.0, 3.0a, 3.1, and 3.11, do the following:
	
	1. Remove old copies of Windows and the PPAP. If the PPAP was installed to use a
	  working directory (for example, C:\PUBLISH), this directory also needs to be
	  removed. Be sure to back up any publications that may be stored in the
	  working directory.
	
	2. Install Windows, then install the Windows PostScript printer driver through
	  the Control Panel. Set up this printer choice as the "IBM Personal
	  Pageprinter" (not "IBM Personal Pageprinter II-30" or "IBM Personal Page
	  Printer II-31"). Configure this printer for the EPT port.
	
	  NOTE: You must disable the Print Manager in Control Panel.
	
	3. Follow the IBM instructions for installing the PPAP from the Pageprinter
	  disks. The IBM installation program offers the following choices:
	
	   - PPAP only
	
	   - PPAP with Microsoft Windows and Windows applications
	
	   - PPAP for Local Area Network print server
	
	   - PPAP for Local Area Network workstation with Microsoft Windows
	
	  Choose to install the PPAP only. Windows 2.x required the second choice;
	  however, this choice corrupts the Windows 3.0, 3.0a, 3.1, or 3.11 WIN.INI
	  file.
	
	  Follow the instructions as you are prompted to enter disks. You should be
	  prompted for only disks that are labeled PPDISKx. With the 3.5-inch disk
	  version of the PPAP, which is the most common format, you are prompted for
	  PPDISK1 through PPDISK6.
	
	  When the PPAP installation is finished, you should be able to reboot your
	  system and print to the Pageprinter on the EPT port from Windows.
	
	This sequence does not install the additional Windows screen fonts that are
	provided with the Pageprinter. You can install these manually through the
	Windows Control Panel. To do this, run Control Panel, choose the Fonts icon,
	then choose the Add button. When prompted for a font filename, insert one of the
	disks labeled "PPWSFXx" in the A drive and type A:\PSFONTS, then choose the OK
	button. A list of fonts should appear. Choose the fonts you want to install. You
	can do this for all the PPWSFx disks to add the screen fonts you need.
	
	
	Additional query words: gpf 3.00 3.0 3.0a 3.00a 4216-020 4216-030 4216-031 3.1 3.10 win30 win31 3.11 Solution Pack Aldus PageMaker KBSetup 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
