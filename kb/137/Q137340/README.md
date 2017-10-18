---
layout: page
title: "Q137340: Err Msg: The File C:&#92;W95undo.dat Is Missing or Invalid"
permalink: kb/137/Q137340/
---

## Q137340: Err Msg: The File C:&#92;W95undo.dat Is Missing or Invalid

	Article: Q137340
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error messages when you are trying to remove
	Windows 95 from your computer if Setup fails while it is copying files:
	
	- The file C:\Winboot.ini is missing section [Paths]
	
	- The file C:\Suhdlog.dat is missing or invalid
	
	- Warning: only non-system files can be uninstalled
	
	- The file C:\W95undo.dat is missing or invalid
	
	CAUSE
	=====
	
	These errors occur if Setup fails before the Windows 95 Msdos.sys file is
	created and the uninstall folder is on a drive other than drive C.
	
	Uninstal looks for the "Uninstalldir=" line in the [Paths] section of the
	Msdos.sys file for the location of the W95undo.dat file. If the Windows 95
	Msdos.sys file cannot be located, Windows 95 assumes that the uninstall folder
	is on drive C.
	
	RESOLUTION
	==========
	
	Use the following command to start Uninstal
	
	  UNINSTAL /W <drive>:\ 
	
	where <drive> is the drive containing the backed-up system files.
	
	MORE INFORMATION
	================
	
	The W95undo.dat file contains a backup copy of the system files. During Setup,
	if there is more than one drive on a system, Windows 95 asks where to back up
	the system files. You can choose a drive other than drive C.
	
	Additional query words: w95set
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
