---
layout: page
title: "Q72723: QRAM 1.01 LOADHI FILES +M Command Fails Under DOS 5.0"
permalink: /kb/072/Q72723/
---

## Q72723: QRAM 1.01 LOADHI FILES +M Command Fails Under DOS 5.0

	Article: Q72723
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running Quarterdeck's QRAM version 1.01 LOADHI FILES +M command in the
	AUTOEXEC.BAT file under Microsoft MS-DOS version 5.0 will hang your machine.
	Having this command in the AUTOEXEC.BAT file will also cause QRAM's optimize
	program to go into an endless loop, displaying the message "optimize signature"
	on the screen. This is a problem in QRAM's FILES.COM program that Quarterdeck is
	aware of and currently researching.
	
	Until a new version of QRAM is released, the only workarounds are to not use the
	LOADHI FILES +M command or to use the FILES.COM program from QRAM version 1.0.
	
	MORE INFORMATION
	================
	
	QRAM is a product manufactured by Quarterdeck to provide upper memory support on
	80286-based machines that use Chips and Technologies NEAT chip set. QRAM version
	1.01 is required to run Manifest with MS-DOS 5.0.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	This information applies to MS-DOS version 5.0.
	
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
