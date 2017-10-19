---
layout: page
title: "Q65664: Replace Novell 3.01 or Later Capture With 2.12 Capture"
permalink: /kb/065/Q65664/
---

## Q65664: Replace Novell 3.01 or Later Capture With 2.12 Capture

	Article: Q65664
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The new CAPTURE.EXE file shipped with the MS-DOS Windows SHELL Kit version 3.01
	or later is known to cause extreme delays and corrupted print jobs when it is
	used with a Novell 2.12 dedicated or non-dedicated server.
	
	If you experience printing problems when you use Novell NetWare version 2.12 with
	Microsoft Windows version 3.00, you may need to replace the CAPTURE.EXE file.
	The CAPTURE.EXE file shipped with the MS-DOS Windows SHELL Kit version 3.01 or
	later should be replaced with the CAPTURE.EXE shipped with Novell NetWare
	version 2.12. The CAPTURE.EXE file is normally located in the Z:\PUBLIC
	directory.
	
	MORE INFORMATION
	================
	
	Follow the steps below to replace this file:
	
	1. Exit Windows.
	
	2. Change to the Z:\PUBLIC directory where the Novell utilities are kept.
	
	3. Type "FLAG CAPTURE.EXE SRW" (without the quotation marks). Note that you may
	  have to be logged in as a supervisor to do this.
	
	4. Place the Novell PUBLIC2 disk in drive A.
	
	5. Type "COPY A:CAPTURE.EXE (3/1/89) Z:\PUBLIC" (without the quotation marks) .
	
	6. Type "FLAG CAPTURE.EXE SRO" (without the quotation marks).
	
	7. Log out and then reboot.
	
	8. Restart your network session.
	
	The Novell NetWare 2.12 version of CAPTURE.EXE (dated: 3/01/89) is located on the
	PUBLIC2 disk. For more information, please call Novell Technical Support.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
