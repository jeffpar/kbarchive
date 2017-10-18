---
layout: page
title: "Q129716: Setup Warning on Computers Using XtraDrive Is Misleading"
permalink: kb/129/Q129716/
---

## Q129716: Setup Warning on Computers Using XtraDrive Is Misleading

	Article: Q129716
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows 95 on a computer running the ITT XtraDrive disk
	compression software you receive the following warning:
	
	  *******************************************************************
	  The following program(s) or driver(s) are running on your computer.
	  Windows may not install or run correctly with these programs. It
	  is recommended that you close these programs before continuing with
	  Setup. To remove these programs, you may have to modify your
	  AUTOEXEC.BAT or CONFIG.SYS files. When you are done, restart your
	  computer, and then run Setup again. For more information, see
	  SETUP.TXT on Setup Disk 1 or the Windows CD-ROM.
	
	  Click OK to continue with Setup or click Cancel to Quit Setup, and
	  then remove these programs.
	
	  XTRADRIVE.SYS      ITT XtraDrive Software
	  *******************************************************************
	
	CAUSE
	=====
	
	This warning is somewhat misleading. The problem detected is that the ITT
	XtraDrive software is configured to use write caching.
	
	RESOLUTION
	==========
	
	Cancel Setup and reconfigure XtraDrive to disable write caching. Once you have
	disabled XtraDrive's write caching, Windows 95 Setup will run correctly. For
	information about how to disable write caching in XtraDrive, please refer to the
	XtraDrive documentation.
	
	MORE INFORMATION
	================
	
	XtraDrive is manufactured by Integrated Information Technology, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
