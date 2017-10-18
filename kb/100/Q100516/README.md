---
layout: page
title: "Q100516: Error 2 Stops OTN Installation of DCA Token Ring Adapters"
permalink: kb/100/Q100516/
---

## Q100516: Error 2 Stops OTN Installation of DCA Token Ring Adapters

	Article: Q100516
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When performing an over-the-network (OTN) installation for LAN Manager on an
	MS-DOS workstation using DCA's token ring adapter (IRMATRAC), the installation
	copies all files from the server onto the MS-DOS workstation, then displays this
	error message:
	
	  An error occurred while reading the file: PROTOCOL.INI
	  Error Code:2
	
	CAUSE
	=====
	
	There is an error in the [IRMATR] section in NSETUP.INF file on server
	(LANMAN\NINSTALL). The NSETUP.INF file contains information for finding the
	adapter driver (IRMATR.DOS) and the PROTOCOL.INI, but its PROTOCOL.INI path in
	section [IRMATR] is defined: RIVERS\TOKENTNG\IRMATRAC\PROTOCOL.INI. The
	"TOKENTNG" should be TOKENRNG.
	
	"Error Code:2" is an extended error message number that means "file not found."
	These errors are listed in the "MS-DOS Programmer's Reference."
	
	RESOLUTION
	==========
	
	Correct the PROTOCOL.INI path in NSETUP.INF, then perform the OTN installation
	again.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
