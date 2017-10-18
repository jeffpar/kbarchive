---
layout: page
title: "Q103803: X400: X400ADM Utility Memory Requirements"
permalink: kb/103/Q103803/
---

## Q103803: X400: X400ADM Utility Memory Requirements

	Article: Q103803
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The version 3.2 Microsoft Mail Gateway to X.400 Administrator program
	(X400ADM.EXE) requires at least 400K of conventional memory on the machine that
	is used to run it.
	
	To determine the largest executable program size that can be run, use the
	Microsoft MS-DOS MEM command.
	
	For additional information about maximizing conventional memory, consult your
	MS-DOS and network operating system documentation.
	
	MORE INFORMATION
	================
	
	One way to run the utility more efficiently is to move it to a local hard disk
	drive, and then start the program from that drive. The Gateway Administrator
	program must run on a machine with FAT partitions.
	
	Create a directory on your local hard disk, and then copy these executables into
	that directory:
	
	  X400ADM.EXE
	  ADM2.EXE
	  X400CMAP.EXE
	  X400DMAP.EXE
	  PRINTCFG.EXE
	  X400ADM.HLP
	
	These files should be located in the path you specify for the executables
	directory during installation of the gateway component.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
