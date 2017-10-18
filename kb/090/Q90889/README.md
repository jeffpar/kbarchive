---
layout: page
title: "Q90889: Problems Printing Graphics Using LPTx.OS2 or COPY Command"
permalink: kb/090/Q90889/
---

## Q90889: Problems Printing Graphics Using LPTx.OS2 or COPY Command

	Article: Q90889
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you print a graphic or bitmapped image to a FILE or LPTx.OS2, part of the
	output may be truncated. This article discusses possible workarounds for this
	problem.
	
	MORE INFORMATION
	================
	
	Printing to a FILE
	------------------
	
	When you print a graphic or bitmapped image to a FILE, the CTRL+Z character may
	exist in the FILE. Because the CTRL+Z character is misinterpreted by the printer
	as an end-of-file marker, part of the graphic image is truncated. Adding the /b
	(binary) switch corrects this problem. The syntax for the command is as
	follows:
	
	- COPY <filename.ext> LPTx: /b
	
	  -or-
	
	- COPY <filename.ext> COMx: /b
	
	Note: This command must be entered at the MS-DOS prompt; it cannot be entered
	from within a virtual machine inside Windows.
	
	Adding the /b switch tells the printer that the file is in binary format. As a
	result, all the data, including CTRL+Z, is treated as part of the graphic
	image.
	
	Printing to LPTx.OS2
	--------------------
	
	LPTx.OS2 option does not invoke the /b switch. To print a graphics image, you
	must print the graphics image to a FILE with the following steps:
	
	1. In the Control Panel window, choose the Printers icon. Choose the
	  Configuration button, and select FILE: as the printer port.
	
	2. Choose the print option within the Windows application from which you are
	  trying to print.
	
	3. When you are prompted for a filename, name the file using standard MS-DOS
	  conventions. The file is then placed in the current WINDOWS directory. You
	  may also choose to include a full path before the filename to save the file
	  to a path of your choice.
	
	4. Exit Windows.
	
	5. Move into the WINDOWS directory, or the path specified in step 3, and type
	  the following:
	
	   - COPY <filename.ext> LPTx: /b
	
	     -or-
	
	   - COPY <filename.ext> COMx: /b
	
	Additional query words: msdos win30 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
