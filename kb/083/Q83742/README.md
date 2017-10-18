---
layout: page
title: "Q83742: Autocad with SMARTDrive 4.0 Requires NewDX Patch"
permalink: kb/083/Q83742/
---

## Q83742: Autocad with SMARTDrive 4.0 Requires NewDX Patch

	Article: Q83742
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Microsoft Windows operating system version 3.1, running
	Autocad 11 and Autocad 386 generates the following error message when run
	outside of Windows if SMARTDrive (SMARTDRV.EXE) version 4.0 is loaded
	
	  Use vdisk switch signature at address xxxxxh
	
	where xxxxxh is the address.
	
	To correct this problem, use the NewDX program that ships with Autocad to avoid
	conflicting with SMARTDrive.
	
	MORE INFORMATION
	================
	
	NewDX is in compressed format. When it is run, it decompresses itself and
	supplies the necessary files and Help document. NewDX determines where Autocad
	starts using extended memory.
	
	Example: If you have 8 MB of RAM and 2 MB of it is being used by SMARTDrive, then
	you should tell NewDX to start using extended memory above where SMARTDrive is
	active.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 vcpi
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
