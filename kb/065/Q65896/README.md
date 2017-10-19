---
layout: page
title: "Q65896: Mislabeled Windows 3.00 Disk"
permalink: /kb/065/Q65896/
---

## Q65896: Mislabeled Windows 3.00 Disk

	Article: Q65896
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some packages of Microsoft Windows version 3.0 contain incorrectly labeled
	3.5-inch disks. Disks 1 through 4 are labeled correctly. Disks labeled 5, 6, and
	7 are actually disks 4, 5, and 6, respectively. The correct Disk 7, which
	contains printer drivers, is missing. The confirmed build number (from the bar
	code sticker on the Windows 3.0 box) for this situation is #50-00-777-09-02.
	
	MORE INFORMATION
	================
	
	During the Setup program for Windows 3.0, you are prompted to insert Disk 5 and
	continue, but Setup does not recognize Disk 5 when it is inserted. If you insert
	Disk 6 instead, Setup proceeds until it asks for Disk 6, at which point it will
	again not recognize the disk. Inserting Disk 7 allows the Setup to continue.
	
	The Windows Setup can be completed successfully (less printer support) if you DO
	NOT install printers during Setup, and you substitute the appropriate disks for
	the mislabeled ones asked for by the program.
	
	To receive free replacement disks, call Microsoft Product Support at (425)
	454-2030.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
