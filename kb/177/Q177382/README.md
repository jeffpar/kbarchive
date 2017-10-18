---
layout: page
title: "Q177382: FileSystemObject Object in ASP Does Not Handle DBCS"
permalink: kb/177/Q177382/
---

## Q177382: FileSystemObject Object in ASP Does Not Handle DBCS

	Article: Q177382
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a simple ASP page uses the following procedures to read a file and write it
	to another file:
	
	1. Create a FileSystemObject object.
	
	2. Open a file using OpenTextFile and assign TristateFalse to "format" parameter
	  (ASCII format).
	
	3. Read multiple lines from it using Readline.
	
	4. Write those lines into another file using Writeline.
	
	The expected behavior of the above code is that the contents in the output file
	should be exactly the same as those in the input file. But if the input file is
	in Double Byte Character String (DBCS) format, the contents of the output file
	may not be the same as those in the input file.
	
	CAUSE
	=====
	
	The OEM (original equipment manufacturer) code page was incorrectly used to
	convert strings from Unicode to DBCS and vice versa in Scrrun.dll, while the
	ANSI code page is the right setting used in place of the OEM code page.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1
	--------
	
	1. Convert the input file to Unicode format using Notepad.exe.
	
	2. Assign TristateTrue to "format" parameter of OpenTextFile (Unicode format).
	
	Method 2
	--------
	
	Apply Microsoft Internet Information Server (IIS) version 4.0, which has the fix
	to the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0. The problem has been corrected in IIS 4.0.
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Issue type        : kbbug
	
	=============================================================================
	
