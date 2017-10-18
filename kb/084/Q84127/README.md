---
layout: page
title: "Q84127: DOCERR: &quot;SDK No Longer Provides C Run-time Libraries&quot; Note"
permalink: kb/084/Q84127/
---

## Q84127: DOCERR: &quot;SDK No Longer Provides C Run-time Libraries&quot; Note

	Article: Q84127
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The second screen displayed by the Windows Software Development Kit (SDK)
	version 3.1 installation program includes the following statement:
	
	  NOTE: The Windows SDK no longer provides C run-time libraries for Windows
	  development. These files are provided by the C compiler vendor with their
	  Windows development environment.
	
	This statement is incorrect. The Windows SDK version 3.1 includes a disk of
	run-time libraries and header files for use with the Microsoft C Optimizing
	Compiler version 6.0. However, the SDK installation program does not install
	these libraries and header files. The libraries disk has its own installation
	batch file.
	
	For more information on the C run-time libraries provided with the Windows SDK
	version 3.1, see page 3 of the "Microsoft Windows Software Development Kit:
	Getting Started" manual.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
