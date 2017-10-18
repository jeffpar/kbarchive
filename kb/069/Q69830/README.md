---
layout: page
title: "Q69830: Oracle Requires Windows 3.0a to Run in Standard Mode"
permalink: kb/069/Q69830/
---

## Q69830: Oracle Requires Windows 3.0a to Run in Standard Mode

	Article: Q69830
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-DOS-based version of Oracle (a relational database) system stops
	responding (hangs) if it is run under Window version 3.0 in standard mode.
	
	RESOLUTION
	==========
	
	Oracle requires Microsoft Windows version 3.0a or later to run correctly under
	standard mode Windows. Windows 3.0a contains a correction to the MS-DOS
	protected-mode interface (DPMI) that Windows uses for memory management. Changes
	made to the Windows 3.0a MS-DOS extender (DOSX.EXE) have now made DPMI
	(interrupt 31h) translation services reentrant. This change allows Oracle to run
	correctly in standard mode.
	
	MORE INFORMATION
	================
	
	Oracle running under standard-mode Windows can access both local and remote
	databases. You can only access the remote databases (NOT the local databases)
	when running in enhanced mode. Oracle products do not run in real mode.
	
	The Oracle product included here is manufactured by a vendor independent of
	Microsoft. We make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
