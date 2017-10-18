---
layout: page
title: "Q83318: Novell NetWare 286 Rights Required to Run SETUP /N"
permalink: kb/083/Q83318/
---

## Q83318: Novell NetWare 286 Rights Required to Run SETUP /N

	Article: Q83318
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Novell NetWare 286 rights are required to run the Microsoft
	Windows SETUP /N command from a shared server directory to a network user
	directory:
	
	  In the shared directory, the user running SETUP /N must have Search (S), Open
	  (O), and Read (R) rights.
	
	  In the user directory, the user running SETUP /N must have Create (C), Delete
	  (D), Read (R), Write (W), Open (O), Modify (M), and Search (S) rights. (That
	  is, the user must have all rights except Parental [P].) NetWare 386 uses
	  slightly different privilege naming, but this can be used as a guideline.
	
	This information applies to Microsoft Windows versions 3.0 and 3.0a.
	
	MORE INFORMATION
	================
	
	The following is a discussion of the symptoms of not having the various rights
	(privileges) to the directories when running SETUP /N.
	
	Shared Directory        SETUP /N Returns
	----------------        ----------------
	
	No Search right (S)     Bad command or filename
	No Open right   (O)     Bad command or filename
	No Read right   (R)     Access denied
	
	User Directory          SETUP /N Returns
	--------------          ----------------
	
	No Create right (C)     *
	No Delete right (D)     *
	No Read right   (R)     **
	No Write right  (W)     **
	No Open right   (O)     **
	No Modify right (M)     **
	No Search right (S)     Returns to MS-DOS command prompt with no
	                       message
	
	* File Copy Error. Unknown File Copy Failure: X:win.src
	
	** Setup is having trouble making changes to
	   your SYSTEM.INI file.
	
	In order to make changes to your Windows configuration, you must delete
	WINVER.EXE from your Windows directory and then run Setup again to reinstall
	Windows.
	
	Using the SETUP /N or SETUP command on a local hard drive has been reported to
	also fail in systems with some ARCNET boards configured for IRQ2. In test
	configurations, changing the interrupt from IRQ2 to IRQ3 corrected the problems.
	Novell also confirmed that changing the interrupt on certain cards corrects
	several problems with different (usually older) ARCNET boards. In the test,
	there was nothing to indicate that there should have been any sort of interrupt
	conflict.
	
	The following error message may occur when running SETUP /N on systems with some
	ARCNET cards:
	
	  File copy error: Unknown File Copy Failure
	
	To correct this, use SETUP /I /N. Be sure to use the switches in this order,
	otherwise the /I switch will be ignored. Also confirm the following are true:
	
	1. The Novell Shell version 3.01 is being used.
	
	2. All the Windows 3.0 or 3.0a files have been expanded to the network.
	
	3. All rights for the target directory (except for Parental) are present.
	
	4. All expanded .SY$ files have been renamed.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
