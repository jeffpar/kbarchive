---
layout: page
title: "Q84954: Windows 3.1 Maintenance Mode Setup Asks for Disk in Drive A"
permalink: /kb/084/Q84954/
---

## Q84954: Windows 3.1 Maintenance Mode Setup Asks for Disk in Drive A

	Article: Q84954
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The first time you run Windows Setup to install third-party device drivers,
	Setup will copy the file OEMSETUP.INF to the WINDOWS\SYSTEM directory as
	OEM?.INF (where ? is the lowest number 0-9 not yet used). The next time you
	run Setup to install or change the third-party display drivers that are
	listed in the OEM?.INF file, Setup will ask for a disk with the Windows 3.1
	logo file in drive A. If you are installing third-party display drivers
	from a drive other than drive A, Windows 3.1 Setup will still ask for the
	Windows 3.1 logo file in drive A, even if there is no drive A in the
	system.
	
	The same thing will occur if you select a display driver already installed
	and choose the option to overwrite the existing driver set with new files.
	
	If you are installing third-party display drivers from a drive other than
	drive A, and are prompted for the Windows 3.1 logo file in drive A, press
	ESC twice and type the path to the Windows 3.1 logo file.
	
	
	Additional query words: 3.10 3.11 vgalogo.lgo herclogo.lgo egamono.lgo egalogo.lgo cgalogo.lgo
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
