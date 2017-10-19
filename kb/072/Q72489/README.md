---
layout: page
title: "Q72489: Support for LINK.EXE Shipped with MS-DOS"
permalink: /kb/072/Q72489/
---

## Q72489: Support for LINK.EXE Shipped with MS-DOS

	Article: Q72489
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.2,3.21,3.3,3.3a,4.0,4.01,4.01a,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 4.01a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LINK.EXE will combine compiled programs with the .OBJ extension and produce an
	executable (.EXE) file. However, the linker that came with your language package
	should always be used first. The LINK.EXE file that shipped with MS-DOS will not
	recognize any specific concerns for the language you are using and may fail.
	
	LINK may or may not work in any given situation. Determining the reasons for a
	LINK failure is virtually impossible, and therefore, Microsoft does not provide
	technical support for this portion of the MS-DOS environment.
	
	This information does not directly apply to Microsoft MS-DOS version 5.0, because
	LINK was not included. However, it is possible that you may have difficulty
	linking your programs after installing MS-DOS 5.0.
	
	During the installation process, MS-DOS 5.0 leaves LINK or any other linking
	programs in the DOS subdirectory. (It does not delete any files that it doesn't
	need to copy to the hard drive.) It also adds C:\DOS to the beginning of the
	PATH statement.
	
	An earlier DOS LINK utility or even a linker from another language could end up
	first in the searchlist. When you attempt to link files, you may get strange new
	errors or may not even be able to start the linker. If this happens, delete the
	undesired linking program and make sure the PATH includes the subdirectory
	containing the linker you are using.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.2,3.21,3.3,3.3a,4.0,4.01,4.01a,5.0
	
	=============================================================================
	
