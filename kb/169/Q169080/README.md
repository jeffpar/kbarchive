---
layout: page
title: "Q169080: Cannot Select System.dat File with Emergency Recovery Utility"
permalink: kb/169/Q169080/
---

## Q169080: Cannot Select System.dat File with Emergency Recovery Utility

	Article: Q169080
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Emergency Recovery Utility (ERU) that is included on the
	Windows 95 CD-ROM, you may be unable to select the System.dat check box.
	
	CAUSE
	=====
	
	The System.dat file is too large to fit on a floppy disk.
	
	RESOLUTION
	==========
	
	To back up the System.dat file with the ERU, back up to a folder on your hard
	disk with enough free space for the System.dat file and any other files you
	select. To do so, use the following steps:
	
	1. Double-click the Eru.exe file in the Other\Misc\Eru folder on the Windows 95
	  CD-ROM.
	
	2. Click Next.
	
	3. When you are prompted "Please select the drive or path in which you wish to
	  save the emergency recovery information," click Other Directory.
	
	4. Click Next.
	
	5. In the Directory box, type the path of the folder you are backing up to, and
	  then click Next.
	
	6. Click Custom.
	
	7. Click a file to select or clear the check box. By default, files listed in
	  the Optional Files box are all selected for backup.
	
	8. Click OK, and then click Next. The ERU copies the files selected.
	
	9. Click OK.
	
	MORE INFORMATION
	================
	
	If you select the System.dat check box and the System.dat file is too large to
	fit on a floppy disk, the box briefly appears to be checked before it is cleared
	by the ERU.
	
	For additional information about the Emergency Recovery Utility, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q139437 Windows 95 Emergency Recovery Utility
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
