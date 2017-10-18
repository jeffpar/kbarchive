---
layout: page
title: "Q86455: WINFILE.INI with Hidden or System Attibute Causes GP Fault"
permalink: kb/086/Q86455/
---

## Q86455: WINFILE.INI with Hidden or System Attibute Causes GP Fault

	Article: Q86455
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the WINFILE.INI file is assigned the hidden or system attribute, the
	following error message is displayed when you run Windows 3.1:
	
	  Application Error
	  WINFILE Caused a General Protection Fault
	  in module USER.EXE at XXXX:XXXX
	
	RESOLUTION
	==========
	
	To correct this error, remove the hidden or system attribute from the
	WINFILE.INI file.
	
	To display the current attributes of a file, change to the directory the file is
	in. Type the following command, then press ENTER:
	
	  attrib <filename>
	
	To change the attributes of a file, change to the directory that the file is in.
	Use the following command, then press ENTER:
	
	  attrib [+r|-r] [+a|-a] [+s|-s] [+h|-h] [drive:][path][filename]
	
	MORE INFORMATION
	================
	
	The File Manager (WINFILE.EXE) uses the WINFILE.INI file to store configuration
	information. If the WINFILE.INI does not exist, it is created by WINFILE.EXE
	when launched. The MS-DOS hidden and/or system attributes make the WINFILE.INI
	invisible to WINFILE.EXE. When WINFILE.EXE attempts to create a new WINFILE.INI
	file, MS-DOS generates a file creation error, because this file already exists.
	This error generates the GP fault message.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, page 368 "Microsoft
	Windows User's Guide," version 3.1, page 128
	
	Additional query words: 3.10 3.11 err msg gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
