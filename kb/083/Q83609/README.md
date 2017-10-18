---
layout: page
title: "Q83609: Missing Network Drives in Common Dialog Boxes in Windows 3.1"
permalink: kb/083/Q83609/
---

## Q83609: Missing Network Drives in Common Dialog Boxes in Windows 3.1

	Article: Q83609
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network drives may not appear in some common dialog boxes under Windows 3.1 if
	one or more floppy disk drives are disconnected.
	
	CAUSE
	=====
	
	If a computer has a floppy controller card installed and the CMOS settings are
	set, BIOS indicates the presence of one or more floppy disk drives; however, if
	the floppy disk drives are not connected, the common dialog boxes do not show
	network drives. You can see network drives when you try to open a file from Word
	2.0 for Windows or Microsoft Excel 3.0 for Windows because these applications do
	not use the common dialog boxes. You cannot see network drives when you try to
	open a file from Microsoft Windows Notepad, Write, or any of the other Windows
	3.1 programs because they all use the common dialog boxes (COMMDLG.DLL).
	
	NOTE: This affects all functions supported by the common dialog boxes: File Open,
	File Save, Find, Replace, Color, Font, and Print.
	
	WORKAROUND
	==========
	
	
	You should be able to correct the problem by reconnecting the floppy disk drives
	to the floppy controller card or by removing the floppy controller card from the
	system and reconfiguring the CMOS settings for no floppy disk drives.
	
	The common dialog box dynamic link library (COMMDLG.DLL) relies on BIOS
	information to determine the number of drives and their types. When a remote
	boot system starts from drive A, the network treats the connection as drive A.
	But if the actual computer BIOS doesn't report the existence of a drive A (and
	it shouldn't since there is no physical drive), the common dialog box DLL can't
	determine the number of drives.
	
	If you are unable to correct the problem using the preceding methods, try to work
	around this problem by using the SUBST command before starting Windows. The
	following example creates a virtual drive A that points to the USER directory on
	the network drive C:
	
	  subst a: c:\user
	
	Do not add or remove "substituted" drives while running Windows 3.1. If you
	change the state of the substituted drives from MS-DOS Prompt within Windows,
	Windows 3.1 will NOT work properly.
	
	REFERENCES
	==========
	
	For more information on the SUBST command, see page 571 of the version 5.0
	"Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: appnote 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
