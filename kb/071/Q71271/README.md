---
layout: page
title: "Q71271: Setup Does Not Find Previous Version of Windows"
permalink: kb/071/Q71271/
---

## Q71271: Setup Does Not Find Previous Version of Windows

	Article: Q71271
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Setup program does not see an earlier version of Windows
	if the file WINVER.EXE is not in the Windows directory.
	
	MORE INFORMATION
	================
	
	Setup checks the hard drive for another copy of Windows by looking for
	WINVER.EXE. If this file has been deleted or is not in the Windows directory,
	Setup attempts to install a new copy of Windows.
	
	This is by design.
	
	Additional query words: 3.00 3.00a 3.10 3.11 installed current win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
