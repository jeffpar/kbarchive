---
layout: page
title: "Q84287: How to Disable Micrologic MoreFonts"
permalink: kb/084/Q84287/
---

## Q84287: How to Disable Micrologic MoreFonts

	Article: Q84287
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedures for turning off the MoreFonts soft font
	package, manufactured by Micrologic Software, in Microsoft Windows operating
	environment versions 3.0 or 3.1.
	
	MORE INFORMATION
	================
	
	By default, MoreFonts is installed in the MF directory. Typeface files are
	copied to the PCLFONTS directory. In addition, the MoreFonts version 3.0
	installation copies four files to the WINDOWS\SYSTEM subdirectory and one file
	to the WINDOWS directory.
	
	Files copied to the WINDOWS directory:
	
	- MF.INI
	
	Files copied to the WINDOWS\SYSTEM directory:
	
	- MFSYS.INI
	
	- MFTYPE.INI
	
	- WINWPS.DLL
	
	- GERONIMO.DLL
	
	The Windows system files are modified as follows:
	
	WIN.INI:
	
	  No entries; no modifications
	
	SYSTEM.INI:
	
	        [BOOT]
	        SYSTEM.DRV=MFSYS.DRV
	        MF.SYSTEM.DRV=SYSTEM.DRV
	
	How to Turn off MoreFonts
	-------------------------
	
	Choose the MoreFonts icon in the Windows Program Manager, then choose the Options
	button and choose the Off button.
	
	How to Disable (Uninstall) MoreFonts
	------------------------------------
	
	In the Windows SYSTEM.INI file, comment out or delete the following lines in the
	[BOOT] section:
	
	     SYSTEM.DRV=MFSYS.DRV
	     MF.SYSTEM.DRV=SYSTEM.DRV
	
	Add the following line to the [BOOT] section of the SYSTEM.INI:
	
	  SYSTEM.DRV=SYSTEM.DRV
	
	How to Reinstall MoreFonts for Windows
	--------------------------------------
	
	1. Disable MoreFonts (see the instructions above).
	
	2. Delete the five .INI and .DLL files listed above from the WINDOWS and
	  WINDOWS\SYSTEM directories:
	
	   - MF.INI
	
	   - MFSYS.INI
	
	   - MFTYPE.INI
	
	   - WINWPS.DLL
	
	   - GERONIMO.DLL
	
	3. Exit Windows. From an MS-DOS command prompt, run the MoreFonts MFSETUP.EXE
	  Setup program.
	
	4. During MoreFonts setup, you must verify that the typeface directory listed is
	  where your .OTL files are located. Press F2 to save this setting.
	
	5. Launch Windows. In Program Manager, choose the MoreFonts icon and install a
	  typeface.
	
	6. If there is no MoreFonts icon in Program Manager, choose Run from the Program
	  Manager File menu, and type the following in the Command Line box:
	
	  C:\MF\INSTWIN.EXE
	
	7. Choose OK.
	
	The MoreFonts product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For more information, contact Micrologic Software.
	
	Additional query words: winword w4wfont 2.00 2.0 2.00a 2.0a 3rdparty More Fonts Micro Logic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
