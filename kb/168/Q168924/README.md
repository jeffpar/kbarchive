---
layout: page
title: "Q168924: Print to File with 5Si Mx PS Driver Inserts Wrong Control Code"
permalink: kb/168/Q168924/
---

## Q168924: Print to File with 5Si Mx PS Driver Inserts Wrong Control Code

	Article: Q168924
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a file with a HP LaserJet 5Si Mx PostScript driver, the output
	file contains an offending PJL command, which causes the entire PostScript file
	to print as plain text when sending to a PostScript printer.
	
	With Windows NT 3.51, when you print to a file with a HP LaserJet 5SiMx
	postscript driver, it works correctly.
	
	RESOLUTION
	==========
	
	@PJL commands are for job control purpose. You will have to disable the job
	control commands from the PostScript output if you are generating PostScript
	files to be post-processed by other programs.
	
	You can disable the job control commands through the user interfaces by following
	these steps:
	
	1. On Start, click Settings and then click Printers.
	
	2. Click the HP 5Si Mx printer icon one time and then select Document Defaults
	  from the File menu.
	
	3. Click the Advanced tab.
	
	4. Open Document Options and then open PostScript options
	
	5. Select the Generate Job Code option, set it to No, and then click OK.
	
	Additional query words: command
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbinfo
	
	=============================================================================
	
