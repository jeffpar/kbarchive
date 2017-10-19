---
layout: page
title: "Q77178: Mylex 80486 EISA Motherboard and MS-DOS 5.0/6.0/6.2"
permalink: /kb/077/Q77178/
---

## Q77178: Mylex 80486 EISA Motherboard and MS-DOS 5.0/6.0/6.2

	Article: Q77178
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Tangent machine with a Mylex 80486 EISA motherboard, you may
	experience erratic behavior when using Microsoft MS-DOS version 5.0 or 6.0,
	especially when using the Mylex DCE cache controller.
	
	Symptoms include the following:
	
	- Machine stops responding (hangs).
	
	- You can't access directories.
	
	- You can't access the hard drive.
	
	- Your file allocation table (FAT) may be corrupt.
	
	The following application-specific problems have also been experienced with this
	configuration:
	
	- With MS-DOS 5.0 or 6.0 and Windows 3.0, erratic inability to find COMMAND.COM
	  when exiting Windows.
	
	- With Edit, QBasic, and 101-key keyboards, dedicated cursor keys operate as if
	  the SHIFT key has been pressed (that is, they select blocks rather than
	  moving the cursor).
	
	- With EMM386.EXE, when attempting to use CTRL+ALT++ or CTRL+ALT+- to change
	  the processor speed, an
	
	  ILLEGAL INSTRUCTION : SYSTEM HALTED
	
	  error occurs. The only way to recover from this error is with a cold boot.
	
	- When running Memmaker from MS-DOS 6.0, the following error message is
	  displayed:
	
	  Illegal Instruction Trapped
	
	RESOLUTION
	==========
	
	Mylex has confirmed this to be a problem with the Mylex 80486 EISA motherboard.
	In addition, Mylex has confirmed that the Northgate/Mylex 80486 EISA motherboard
	with BIOS version 6.04q is not compatible with EMM386.EXE. The newest revision
	is 6.15, which is compatible with EMM386.EXE.
	
	Contact Mylex for additional information or a BIOS upgrade.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.22 3.00 5.00 milex dos 3rdparty emm386 win30 win31 6.00 6.20 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
