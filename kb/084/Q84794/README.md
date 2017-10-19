---
layout: page
title: "Q84794: Windows Err Msg: Cannot Run DOS Application in Second..."
permalink: /kb/084/Q84794/
---

## Q84794: Windows Err Msg: Cannot Run DOS Application in Second...

	Article: Q84794
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages when you run Windows version
	3.1:
	
	  Cannot run DOS application in second instance of Windows
	
	  -or-
	
	  Cannot start non-windows application in second instance of Windows
	
	CAUSE
	=====
	
	This problem occurs when you have outdated Windows 3.0 system files in the
	Windows \SYSTEM subdirectory.
	
	RESOLUTION
	==========
	
	To correct this problem locate and replace the outdated files.
	
	Check the Windows \SYSTEM subdirectory for old .MOD files. The following files
	could cause the above error message if they are dated earlier than 3-10-92:
	
	  WINOLDAP.MOD
	  WINOA386.MOD
	  WINOA286.MOD
	
	To correct this problem, expand the WINOLDAP.MOD file into the WINDOWS\SYSTEM
	directory, as follows:
	
	  c:\windows\expand a:\winoldap.mo_ c:\windows\system\winoldap.mod
	
	If you are running Windows 3.1 on a 386 or higher machine, you will also need to
	expand WINOA386.MOD as follows:
	
	  c:\windows\expand a:\winoa386.mo_ c:\windows\system\winoa386.mod
	
	Windows 3.1 does not need WINOA286.MOD; it is a Windows 3.0 file.
	
	Additional query words: 3.10 3.11 applications err msg
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
