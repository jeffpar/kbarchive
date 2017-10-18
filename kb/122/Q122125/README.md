---
layout: page
title: "Q122125: Information: Card Soft PCMCIA Drivers and Definitions"
permalink: kb/122/Q122125/
---

## Q122125: Information: Card Soft PCMCIA Drivers and Definitions

	Article: Q122125
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbhw kb3rdparty kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a list of the 11 Windows and MS-DOS PCMCIA card drivers,
	.CPL, and .HLP files supplied with version 2.0 of Card Soft Socket Services. The
	list includes a brief explanation of the functionality of each file.
	
	MORE INFORMATION
	================
	
	Filename                   Description
	-------------------------------------------------------------------
	
	PCMCS.EXE                  Provides the services of the PCMCIA Card
	                          Service 2.0.
	
	PCMSS.EXE                  Provides the services of the PCMCIA Socket
	                          Services 2.0.
	
	PCMINFO.EXE                Executed in MS-DOS, provides an array of
	                          information about each socket and any
	                          cards installed in the socket of the
	                          laptop PC.
	
	WPCMINFO.CPL/WPCMINFO.HLP  Executed in Windows and provides
	                          information about each socket and the
	                          cards installed in the socket of the
	                          portable PC. These files are to be placed
	                          into the Windows SYSTEM subdirectory.
	
	PCMSCD.EXE (Super Client   Provides the service for utilizing several
	Driver Services)           modems, fax cards and network cards.
	
	PCMVCD.386 (Windows VxD    Allows modem and fax cards to be available
	for fax-modem cards)       to all sessions under Windows.
	
	PCMATA.SYS (Virtual        Provides services for reading and writing
	Driver, PCMCIA ATA Fixed   data on PCMCIA ATA Fixed Disks. Also
	Disks)                     creates a logical drive that you can use
	                          to access the PCMCIA ATA card, EEPROM and
	                          Flash cards.
	
	PCMFFCS.EXE (MS-Flash File Provides the service of the Client Driver
	System II Client Driver)   to use Microsoft Flash File System II.
	
	MS-FLASH.SYS               Installs the Microsoft Flash File System
	                          on your computer. The Flash File System is
	                          designed for use with Flash Memory Cards.
	
	DBLFLASH.EXE               Compresses the files you save on a Flash
	                          Memory Card. Only those files saved after
	                          you install the DBLFLASH.EXE device driver
	                          will be compressed. If you do not install
	                          the DBLFLASH.EXE device driver, or if you
	                          use a nocomp switch when installing the
	                          MS-FLASH.SYS device driver, the files you
	                          save will remain uncompressed.
	
	MEMCARD.EXE                Starts the Memcard program, which
	                          configures and maintains a memory card.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
