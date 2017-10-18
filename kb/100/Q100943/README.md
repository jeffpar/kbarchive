---
layout: page
title: "Q100943: Modifying WIN.INI to Print to the Same File Each Time"
permalink: kb/100/Q100943/
---

## Q100943: Modifying WIN.INI to Print to the Same File Each Time

	Article: Q100943
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to always print to the same file in Microsoft Windows or Microsoft
	Windows for Workgroups, you can place an entry for that particular filename in
	the [Ports] section of the WIN.INI file.
	
	MORE INFORMATION
	================
	
	The new entry appears in the Printer Setup dialog box of Windows-based
	applications or in the Connect dialog box of Control Panel. The following is an
	example of the [Ports] section of the WIN.INI file:
	
	     [Ports]
	     ; A line with [filename].PRN followed by an equal sign causes
	     ; [filename] to appear in the Control Panel's Printer Configuration
	     ; box. Printers connected to [filename] direct output to this file.
	     LPT1:=
	     COM1:=2400,n,8,1,x
	     EPT:=
	     FILE:=
	     LPT1.DOS=
	     LPT2.DOS=
	     C:\MY.TXT=
	
	The example above includes the new entry for the filename MY.TXT at the root
	directory of drive C.
	
	Additional query words: 3.10 3.11 every time
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
