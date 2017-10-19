---
layout: page
title: "Q126672: COMMAND.COM Parses Long Filenames to 8.3 Standard"
permalink: /kb/126/Q126672/
---

## Q126672: COMMAND.COM Parses Long Filenames to 8.3 Standard

	Article: Q126672
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a file to a file whose long filename contains a plus sign (+) at
	an MS-DOS command prompt in Windows 95, COMMAND.COM parses the long filename
	into an MS-DOS 8.3 standard filename. For example, if you type
	
	  " copy vxd__.ini vxd++.ini " (without the quotation marks)
	
	the destination file is actually named INI.
	
	This behavior occurs whether you type the command at an MS-DOS command prompt in
	Windows 95 or you boot the computer in the previous version of MS- DOS installed
	on the computer and then type the command.
	
	RESOLUTION
	==========
	
	Place the last argument on the command line in quotation marks to use the long
	filename. For example, type
	
	  " copy vxd__.ini "vxd++.ini" " (without the quotation marks)
	
	to create a destination file called VXD++.INI.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you do not use quotation marks around the long filename, the filename is
	parsed by COMMAND.COM, and COMMAND.COM sees the plus sign as a filename
	separator. For example, typing
	
	  " copy a+b c " (without the quotation marks)
	
	copies the files A and B together into a single file called C.
	
	Typing
	
	  " copy "a+b" c " (without the quotation marks)
	
	copies the file A+B to a file called C.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
