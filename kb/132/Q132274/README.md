---
layout: page
title: "Q132274: Installing MS Plus! Does Not Prevent Windows 95 Uninstall"
permalink: kb/132/Q132274/
---

## Q132274: Installing MS Plus! Does Not Prevent Windows 95 Uninstall

	Article: Q132274
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; Win2000:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are installing Microsoft Plus! for Windows 95, you receive the
	following message:
	
	  Disable Uninstall?
	  If you continue, you will no longer be able to uninstall Windows 95.
	  Do you want to continue?
	
	It appears that if you click Yes, you will not be able to uninstall Windows 95.
	
	MORE INFORMATION
	================
	
	You can uninstall Windows 95 even if you click Yes. However, if you click Yes,
	you cannot use the Microsoft Plus! Setup program to remove Microsoft Plus!. If
	you uninstall Windows 95, the Microsoft Plus! files are left on the hard disk.
	
	If you uninstall Windows 95, the following Microsoft Plus! files are left on the
	hard disk:
	
	Root Directory
	--------------
	
	DRVBIN.BAK DBLBIN.BAK
	
	C:\WINDOWS
	----------
	
	DRVEXE.BAK SCANDSKW.BAK CLIPEXE.001 CARVED~1.BMP
	
	C:\WINDOWS\SYSTEM\IOSUBSYS
	--------------------------
	
	DRVVXD.BAK
	
	C:\WINDOWS\SYSTEM\VMM32
	-----------------------
	
	MRCI2VXD.BAK
	
	C:\WINDOWS\MEDIA
	----------------
	
	THEMIC~1.WAV
	
	C:\WINDOWS\STARTM~1\PROGRAMS\ACCESS~1\INTERN~1
	----------------------------------------------
	
	MSCREATE.DIR
	
	C:\WINDOWS\COMMAND
	------------------
	
	DRVBIN.BAK DRVSYS.BAK SCANDISK.BAK
	
	C:\WINDOWS\CURSORS
	------------------
	
	APPLE.ANI BANANA.ANI COIN.ANI DINOSAUR.ANI FILLITUP.ANI HAND.ANI HORSE.ANI
	PIANO.ANI SBUX2.ANI SIZENESW.ANI SIZENS.ANI SIZENWSE.ANI SIZEWE.ANI TV.ANI
	WINFLAG.ANI
	
	C:\WINDOWS\SYSTEM
	-----------------
	
	DSKAPI16.DLL DSKAPI32.DLL NOMAINT.REG SAGE.EXE SAGE.DLL SAGE.VXD RNASERV.DLL
	COOL.DLL PLUSTAB.DLL THEMES.CPL RESTORE.REG WILDLB32.DLL WL32DLL.DLL URL.DLL
	INETCPL.CPL DANGER.DLL DAVINCI.DLL GOLDEN.DLL NATURE.DLL DIALMON.EXE INETCFG.DLL
	INET16.DLL INETAB32.DLL MINET32.DLL ISO88591.TRN NORWEG.TRN SWEDISH.TRN
	USASCII.TRN DSKMAINT.BAK KOMMCTRL.DLL
	
	Also, a hidden directory called ~mssetup.t may be left on the hard disk.
	
	Additional query words: w95set
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95; Win2000:95
	
	=============================================================================
	
