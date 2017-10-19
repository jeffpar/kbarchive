---
layout: page
title: "Q121521: Printing Locally from a Toshiba Laptop 3600 or 4600c"
permalink: /kb/121/Q121521/
---

## Q121521: Printing Locally from a Toshiba Laptop 3600 or 4600c

	Article: Q121521
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint kbhw kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Toshiba Laptop 4600c or T6400DXC is docked, it is not possible to print
	locally through the parallel port unless the port is set to Output.
	
	MORE INFORMATION
	================
	
	This has been tested specifically with Toshiba Laptop 4600c model PA1202U and
	docking station model PA2701U. It is possible to print locally with the parallel
	port set to Bi-directional rather than Output if the laptop is not in the
	docking station. The Toshiba 3600 does not print under Windows NT version 3.5
	when the parallel port is set to Bi-directional mode in CMOS. This applies
	whether the Toshiba 3600 is in or out of the docking station.
	
	Tests with Toshiba Laptop T6400DXC have shown that you can get to Setup by
	pressing the F1 key during bootup.
	
	To set the parallel port to Output:
	
	1. Boot to MS-DOS and run TSetup.
	
	2. Select Parallel Port.
	
	3. If Parallel Port is set to Bi-directional, press SPACEBAR to change it to
	  Output.
	
	4. Save the settings.
	
	NOTE: It is not necessary to change this setting for MS-DOS or Windows for
	Workgroups printing.
	
	The Toshiba products discussed here are manufactured by Toshiba America, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: wfw wfwg prodnt local
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
