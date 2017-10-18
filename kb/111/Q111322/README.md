---
layout: page
title: "Q111322: INFO: Code Page Information Stored in Byte 29 of Table Header"
permalink: kb/111/Q111322/
---

## Q111322: INFO: Code Page Information Stored in Byte 29 of Table Header

	Article: Q111322
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.5a,2.5b; WINDOWS:2.5a,2.5b,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Code page information is stored in byte 29 of the header of a database (table)
	file (.DBF).
	
	NOTE: The first byte in the header of a database is referred to as 0 byte. If the
	first byte if referred to as 1, then the code page is 30.
	
	MORE INFORMATION
	================
	
	The program CPZERO.PRG is automatically installed in your main FoxPro directory
	in FoxPro version 2.x. In Visual FoxPro, the CPZERO.PRG program is located in
	the VFP\TOOLS\CPZERO directory. CPZERO.PRG is provided to reset a table's code
	page to zero. To see an example of how to modify a table's code page, view the
	contents of CPZERO.PRG.
	
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin codepage set collate to akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Version           : MACINTOSH:2.5b; MS-DOS:2.5a,2.5b; WINDOWS:2.5a,2.5b,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
