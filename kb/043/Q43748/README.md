---
layout: page
title: "Q43748: Changing Printers During Print Job Affects Output"
permalink: /kb/043/Q43748/
---

## Q43748: Changing Printers During Print Job Affects Output

	Article: Q43748
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	When you use the spooler during a print job, do not use the Control
	Panel (or any other method) to change the connections of the currently
	active printer.
	
	For example, if a job is currently printing to a LaserJet on LPT2, do
	not try to connect an Epson to that port (and change the LaserJet to
	something else), and do not try to change the LaserJet to a different
	port until the print job is done. Doing so may result in the loss of
	the rest of the print job or in severely garbled output.
	
	This information also applies to Windows/386.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
