---
layout: page
title: "Q67517: EXPAND.EXE Error Msg: Can't Open Output File &lt;filename.ext&gt;"
permalink: /kb/067/Q67517/
---

## Q67517: EXPAND.EXE Error Msg: Can't Open Output File &lt;filename.ext&gt;

	Article: Q67517
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the EXPAND.EXE utility that comes with Microsoft Windows version
	3.0, you may get the error message
	
	  Can't Open Output File : <filename.ext>
	
	when you attempt to expand a file. This error occurs when you try to replace a
	previous copy of a file that has been set with the read-only attribute. By using
	the MS-DOS Attrib command, or by going into the File Manager and choosing Change
	Attributes from the File menu, you can change the file attributes back to
	read/write. You will then be able to expand the file and successfully replace
	the original.
	
	MORE INFORMATION
	================
	
	For more information about using the EXPAND.EXE utility, see the README.TXT file
	located in your WINDOWS directory.
	
	This can also occur with the MS-DOS 5 EXPAND.EXE utility.
	
	Additional query words: WIN30 3.00 3.00a 3.0 3.0a dos 5.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
