---
layout: page
title: "Q139204: ECP Port with SMC Chip Set Does Not Transfer Data Properly"
permalink: /kb/139/Q139204/
---

## Q139204: ECP Port with SMC Chip Set Does Not Transfer Data Properly

	Article: Q139204
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a parallel port that is configured for extended capabilities
	port (ECP) mode, you may be unable to print to a printer that is connected to
	the port, or to use a connection made with Direct Cable Connection that uses the
	port. The print job may seem to be printed correctly, or the data may seem to be
	transferred correctly, but some of the data sent to the port may be damaged.
	
	This problem is known to occur with ECP ports that use an SMC chip set. The
	following computers are known to contain ECP ports with the SMC chip set:
	
	- Hewlett-Packard (HP) Vectra
	
	CAUSE
	=====
	
	This problem can occur if the ECP port is not properly initialized. Many ECP
	ports with the SMC chip set are not properly initialized when the computer is
	started.
	
	RESOLUTION
	==========
	
	To resolve this problem, use any one of the following methods:
	
	- Configure the parallel port so that it is not in ECP mode. For information
	  about how to do so, please consult the computer's documentation or
	  manufacturer.
	
	- Use the SMC Setup disk included with your computer to reconfigure the ECP
	  port so that it is properly initialized when you start the computer. To
	  obtain the SMC Setup disk, or for information about how to use the disk to
	  configure the ECP port, please consult the computer's manufacturer.
	
	- Obtain a newer version of the SMC chip set that resolves this problem from
	  the computer's manufacturer.
	
	Additional query words: dcc
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
