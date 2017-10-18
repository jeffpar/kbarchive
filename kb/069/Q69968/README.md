---
layout: page
title: "Q69968: Automating Network Pointing Devices via SETUP.INF"
permalink: kb/069/Q69968/
---

## Q69968: Automating Network Pointing Devices via SETUP.INF

	Article: Q69968
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Windows 3.0 is set up on a network workstation via the SETUP /N
	command, there are nine possible choices for pointing devices. It is possible to
	add additional pointing device drivers for touch screens, digitizing tablets,
	and trackballs by editing the SETUP.INF before running SETUP /N on the
	individual workstations.
	
	MORE INFORMATION
	================
	
	Use the following outline to add additional pointing device drivers via the
	SETUP.INF file.
	
	1. Copy the appropriate Windows 3.00 device drivers into the shared Windows
	  directory.
	
	2. Edit the SETUP.INF file with a standard ASCII text editor and locate the
	  pointing.device section:
	
	     [pointing.device]
	
	     Identifier=x:drivename, "Description", x:virtualdrivername,
	     dosdriver
	
	  Parameter         Description
	  ----------       ------------
	  <BR/><BR/>
	  Identifier       Driver short name
	  drivername       Driver filename ending in .DRV
	  Description      Title of driver used at setup
	  Virtualdriver    (VMD) Most pointing devices use the internal driver
	                in WIN386.EXE, but the manufacturer may supply one
	                that will end in .386, e.g. "1:summa.386"
	
	  Dosdriver        Pointing device driver in the CONFIG.SYS or
	                AUTOEXEC.BAT that will be replaced by new version if
	                selected (for example, replace old MOUSE.SYS with new
	                version)
	
	3. Add a blank line to the end of this section, and, on it, enter the additional
	  driver.
	
	Example
	-------
	
	To add the following two drivers, SUMMA.DRV and SUMMA.386, add the new line as
	follows:
	
	     Summa = 1:SUMMA.DRV, "Summa IS/100", 1:SUMMA.386
	
	The "1:" or "x:" is showing disk number, where driver is located. On network
	installations this is not valid.
	
	The SETUP.INF file is a comma-delineated text file formatted for 160 columns that
	supplies customized directions to the SETUP.EXE.
	
	Preferred Workstation Setup Method
	----------------------------------
	
	Install Windows 3.0 on a network (see pages 543-556 of the "Microsoft Windows
	User's Guide"), and then run the SETUP /N command on each workstation. In some
	instances (for example, large workstation groups) it may not be efficient to do
	this and then customize each workstation individually. By editing the SETUP.INF
	file with a text editor, it is possible to enhance the SETUP /N command so that
	it customizes each workstation to a company standard.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." Version 3.00, "Networks and Windows," pages
	543-556.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 SETUP.INF, NETWORKS.TXT Kbsetup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
