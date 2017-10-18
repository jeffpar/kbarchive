---
layout: page
title: "Q84925: Order of Groups in PROGMAN.INI"
permalink: kb/084/Q84925/
---

## Q84925: Order of Groups in PROGMAN.INI

	Article: Q84925
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The group windows listing of the PROGMAN.INI file does not have to be in
	sequential order for Microsoft Windows version 3.1 to load the group windows
	correctly. However, for Windows versions 3.0 and 3.0a, this listing must be in
	order.
	
	MORE INFORMATION
	================
	
	In Windows 3.0, the [groups] section of the PROGMAN.INI file must to be in
	sequential order for Windows to properly load the groups (as in the example
	below).
	
	     [Groups]
	     Group1=C:\WIN31\NONWINDO.GRP
	     Group2=C:\WIN31\GAMES.GRP
	     Group3=C:\WIN31\ACCESSOR.GRP
	     Group4=C:\WIN31\MAIN.GRP
	
	In Windows 3.1, the groups listing of the PROGMAN.INI file does not have to be in
	sequential order. The group listing can have breaks in the numbering order or be
	in any numeral sequence (as in the example below).
	
	     [Groups]
	     Group1=C:\WIN31\NONWINDO.GRP
	     Group3=C:\WIN31\ACCESSOR.GRP
	     Group2=C:\WIN31\GAMES.GRP
	     Group4=C:\WIN31\MAIN.GRP
	     Group5=C:\WIN31\WindowsA.GRP
	     Group10=C:\WIN31\OTHER.GRP
	
	Additional query words: 3.00 3.00a 3.10 3.11 network setup
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
