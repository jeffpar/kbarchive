---
layout: page
title: "Q75272: Problems Printing on Novell Network with MS-DOS 5.0"
permalink: /kb/075/Q75272/
---

## Q75272: Problems Printing on Novell Network with MS-DOS 5.0

	Article: Q75272
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing the Novell network redirector, attempting to print to a local
	parallel printer immediately returns the error:
	
	  Not ready writing to LPT1
	
	This error can be caused if the Novell SHELL.CFG file contains a line setting the
	number of local printers to zero. Changing this line to indicate the correct
	number of local printers may remedy this problem. For example, if you have one
	parallel printer connected to LPT1, confirm that the SHELL.CFG file contains
	
	  LOCAL PRINTERS=1
	
	or delete the LOCAL PRINTERS= line from the SHELL.CFG file altogether.
	
	MORE INFORMATION
	================
	
	Novell recommends adding LOCAL PRINTERS=0 into the SHELL.CFG file only if the
	workstation does not have a printer connected to its parallel port. By adding
	this line, you can prevent a workstation from hanging if the SHIFT and PRINT
	SCREEN keys are pressed while the workstation is not spooling.
	
	For more information on Novell Netware and the SHELL.CFG file, please contact
	your authorized Novell reseller.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
