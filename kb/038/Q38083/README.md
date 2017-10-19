---
layout: page
title: "Q38083: Mac DOS: DayStar LocalTalk PC Interface Board"
permalink: /kb/038/Q38083/
---

## Q38083: Mac DOS: DayStar LocalTalk PC Interface Board

	Article: Q38083
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a brief description of the DayStar Digital PC Interface board,
	which is available from DayStar Digital. For more information about this
	AppleTalk network card, contact DayStar technical support at (404) 967- 6050.
	
	The system requirements for this product are as follows:
	
	- MS-DOS version 3.0 or later
	
	- 256K RAM
	
	The DayStar LocalTalk PC Interface board allows an IBM PC or compatible, IBM PS/2
	Model 25, or IBM PS/2 Model 30 computer to connect to the LocalTalk local area
	network.
	
	The default factory settings for the DayStar LocalTalk PC Interface board are as
	follows:
	
	  Description          Default     Other Possible Values
	  ------------------------------------------------------------------
	
	  Interrupt            None        None
	  DMA Channel          None        None
	  Board Address        340H        300H, 330H, 350H
	
	The board address used by the PC Interface card can be changed by moving jumpers
	(plastic clips) on the JB1 jumper block of the card. For more information on
	changing the board address, see the DayStar LocalTalk Interface board
	documentation.
	
	The software device driver DTALK.EXE must be loaded into memory before the PC
	Interface board is used with the AppleTalk network. This device driver can
	either be loaded into memory when your computer starts (by modifying the
	AUTOEXEC.BAT file) or run from the MS-DOS prompt. If you change the default
	board address of the card, the DTALK software driver must be informed of the
	change through a switch setting. The syntax of the command used for installing
	the device driver is as follows
	
	  DTALK [/ADDRESS=xxx]
	
	where "xxx" denotes the new address.
	
	MORE INFORMATION
	================
	
	DayStar Digital also manufactures the MC Interface board, designed for the Micro
	Channel Architecture of the IBM PS/2 models 50, 60, and 80.
	
	The DayStar Digital PC Interface board is manufactured by DayStar Digital, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS
	Version           : :3.0
	
	=============================================================================
	
