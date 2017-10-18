---
layout: page
title: "Q131663: Setup Error Message: Error SU0358"
permalink: kb/131/Q131663/
---

## Q131663: Setup Error Message: Error SU0358

	Article: Q131663
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
	
	When you are installing Windows 95, you may receive the following error
	message:
	
	  Error SU0358
	
	  Setup detected one or more MS-DOS-based programs running on your computer.
	  Close your MS-DOS programs, and then click OK to continue. Or, click Cancel
	  to quit Setup.
	
	CAUSE
	=====
	
	Setup cannot continue while an MS-DOS-based program is running. The MS-DOS-based
	program may be running in a hidden virtual machine so that it is not visible
	when you press ALT+TAB or in the Close Program dialog box.
	
	NOTE: Windows 95 supports running MS-DOS-based programs in hidden virtual
	machines (VMs). Hidden VMs do not display program windows or show up as running
	programs. Hidden VMs are created by the developer of a program.
	
	RESOLUTION
	==========
	
	To work around this problem, use any one of the following methods:
	
	- Press ALT+TAB to cycle through the running programs and close the
	  MS-DOS-based program.
	
	- Press CTRL+ALT+DEL to open the Close Program dialog box and close the
	  MS-DOS-based program.
	
	- Cancel Setup. Remove the MS-DOS-based program from the Startup group or from
	  the Load= or Run= line in the WIN.INI file and then restart Windows.
	
	MORE INFORMATION
	================
	
	The WinPrinter driver by LaserMaster is an example of an MS-DOS-based program
	that runs in a hidden VM and is not visible when you press ALT+TAB or
	CTRL+ALT+DEL. To disable WinPrinter, remove the WinPrinter icons from the
	Startup group, restart the computer, and then run Windows 95 Setup again.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: winjet winspool
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
