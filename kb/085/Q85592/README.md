---
layout: page
title: "Q85592: Windows Err Msg: Windows Directory Does Not Exist"
permalink: kb/085/Q85592/
---

## Q85592: Windows Err Msg: Windows Directory Does Not Exist

	Article: Q85592
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the path in the AUTOEXEC.BAT file does not contain the drive letter for the
	Windows directory, you may receive the following error message when installing a
	Windows-based application through Program Manager:
	
	  Windows Directory does not exist.
	
	The following is an example of a path statement that does not specify a drive:
	
	  path c:\dos;\windows;\excel;\access
	
	MORE INFORMATION
	================
	
	If the path is set according to the example above, and you run the MS-DOS Prompt
	in Windows and type "set" (without the quotation marks) at the MS-DOS command
	prompt, the environment variable will be the same syntax as found in the path.
	Therefore, the environment for Windows will be WINDIR=\WINDOWS, which does not
	specify the drive letter designation. If this is the case, then some Windows
	installation programs may fail to find the Windows directory. Adding the drive
	letter for Windows in the path should solve this problem.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
