---
layout: page
title: "Q71850: Windows Err Msg: Another Application Is Using Communication..."
permalink: kb/071/Q71850/
---

## Q71850: Windows Err Msg: Another Application Is Using Communication...

	Article: Q71850
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running Windows 3.0 in real or standard mode, or Windows 3.1 in standard
	mode, the following warning message appears in a dialog box when you run any
	Windows communications program and attempt to start an MS-DOS application (or
	vice versa):
	
	The title bar of the error message display the name of the MS-DOS application,
	then in the error message box it displayS the following:
	
	  Another application is using the communication port. It might lose characters
	  if you decide to start your application now.
	
	  Do you want to start your application? Y/N
	
	MORE INFORMATION
	================
	
	This warning message appears when you start an MS-DOS application while running
	a Windows communication program that uses the communication (COM) ports. The
	active communication program in Windows may lose data or its connection if the
	MS-DOS application uses the same port during its current session.
	
	To avoid this, do one of the following:
	
	- Exit the Windows communications program and then start the MS-DOS
	  application.
	
	  -or-
	
	- In the Windows communications program, set the port connection to none.
	
	NOTE: Even if a PIF file is used for the MS-DOS application where no COM port is
	chosen to modify, the warning message is still displayed because the Windows
	communications program is currently using the port.
	
	This problem does not occur in 386 enhanced-mode Windows because the programs are
	multitasking and the COM ports are virtualized. In standard and real mode, the
	Windows communication programs are suspended in memory until reactivated.
	
	This problem has been tested with the following Windows communication programs:
	
	- Windows 3.0 Terminal Program
	
	- Dynacomm
	
	Additional query words: 3.0 3.00 3.1 3.10 3.11 wincomm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
