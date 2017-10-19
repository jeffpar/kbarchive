---
layout: page
title: "Q130397: PC MMTA: Digiboard Error Messages"
permalink: /kb/130/Q130397/
---

## Q130397: PC MMTA: Digiboard Error Messages

	Article: Q130397
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install a Digiboard card and driver on a Microsoft Mail Multitasking
	MTA (MMTA) workstation, the driver may report one or more errors while trying to
	load from the CONFIG.SYS into memory.
	
	MORE INFORMATION
	================
	
	The following is a list of Digiboard driver error messages, along with a
	description and/or the most likely cause to the error:
	
	  Could not find BIOS file
	  Could not find FEP file
	  Could not find data file
	
	One or more files were missing from the digipath directory. The default digipath
	directory is C:\DIGI. If the driver and data files were in a different
	directory, that directory must be specified in the Digiboard driver command line
	with the /F:DIGIPATH parameter.
	
	  IO Port Not Responding
	  I/O port address set incorrectly, or conflicting with some other device
	
	The I/O port address does not match the dip switch settings, or the I/O address
	is already in use by another device. Verify the I/O setting, or try a different
	I/O address.
	
	  DigiBoard BIOS will not boot
	  DigiBoard BIOS will not respond
	  DigiCHANNEL board will not respond to commands from the driver
	
	The above errors are typically due to a memory conflict, or a memory cache
	conflict. Try a different memory address setting and/or disable the memory
	cache.
	
	  Driver Failed to Hook Timer
	  System Cannot Allocate Memory
	
	A system call to OS/2 has failed. The most likely cause is an incompatibility
	between the Digiboard driver and the OS/2 version.
	
	  Invalid Command Line Arguments
	  Syntax error in the command line in CONFIG.SYS.
	
	The DEVICE= line for the Digiboard driver contains invalid information. Double
	check the Digiboard driver command-line entry for syntax errors.
	
	For more information on the Digiboard driver, see the documentation accompanying
	the Digiboard installation software, such as the INSTALL.DOC on the installation
	diskette or the Digiboard manuals.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	
