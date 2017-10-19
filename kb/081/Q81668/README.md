---
layout: page
title: "Q81668: LANTASTI.386 Must Be On PATH= Environment"
permalink: /kb/081/Q81668/
---

## Q81668: LANTASTI.386 Must Be On PATH= Environment

	Article: Q81668
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows in enhanced mode with Artisoft LANtastic 4.x,
	Windows stops responding (hangs) after displaying the Windows logo.
	
	CAUSE
	=====
	
	When you run Windows in enhanced mode with LANtastic 4.x, the LANTASTI.386 file
	must be located in a directory that is included in the MS-DOS PATH= environment
	variable. If it is not, Windows cannot load properly.
	
	The problem does not occur if the network software has not been started before
	running Windows, or if you are running Windows in another mode.
	
	RESOLUTION
	==========
	
	At the MS-DOS command prompt, type
	
	  path
	
	to display the current value of PATH. PATH is usually set in the AUTOEXEC.BAT
	file. If LANTASTI.386 is not in a directory on the PATH= line, either copy it to
	a directory that is in the PATH= or add its directory to the PATH.
	
	MORE INFORMATION
	================
	
	For more information on using LANtastic 4.x and Windows 3.0, query on:
	
	  LANtastic and 4 and Windows
	
	The Artisoft product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 lan tastic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
