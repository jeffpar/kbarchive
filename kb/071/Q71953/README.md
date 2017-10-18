---
layout: page
title: "Q71953: Windows Setup Brings Up DR-DOS Setup"
permalink: kb/071/Q71953/
---

## Q71953: Windows Setup Brings Up DR-DOS Setup

	Article: Q71953
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If DR-DOS version 5.0 is installed after Microsoft Windows has been installed,
	the Windows Setup program (SETUP.EXE) may be overwritten by the SETUP.EXE file
	from the DR-DOS installation.
	
	MORE INFORMATION
	================
	
	To determine if this has occurred, from the Windows Main Group, choose Windows
	Setup. If Windows SETUP.EXE has been overwritten, clicking the Windows Setup
	icon will load the DR-DOS setup screen.
	
	To correct the problem:
	
	1. Copy the DR-DOS SETUP.EXE file to the DR-DOS directory.
	
	2. From the Windows Disk 1, copy the SETUP.EXE file into the WINDOWS directory.
	
	3. Click the Windows Setup icon to confirm the Windows Setup program now works.
	
	Additional query words: 3.00 3.0 3.00a 3.10 3.1 3.11 Digital Research win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
