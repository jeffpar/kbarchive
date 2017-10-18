---
layout: page
title: "Q43295: Executable Modules Must Be Processed by Resource Compiler"
permalink: kb/043/Q43295/
---

## Q43295: Executable Modules Must Be Processed by Resource Compiler

	Article: Q43295
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Resource Compiler (RC.EXE) must process each executable module developed for
	the Microsoft Windows environment. This requirement applies both to applications
	and to dynamic-link libraries (DLLs). Failure to process an executable module
	with RC can cause problems because Windows will use "previous version
	compatibility" behavior for that application. Windows versions 3.0 and 3.1
	display a warning dialog box when the user launches an unmarked application.
	
	MORE INFORMATION
	================
	
	An application should be processed by RC, even if it does not have any
	resources. In versions of Windows earlier than 3.0, it was common practice to
	create a null resource file containing only a comment to provide RC with
	acceptable input. The RC provided with Windows versions 3.0 and 3.1 supports
	marking an application that has no resources with the following syntax:
	
	  RC [switches] module.EXE
	
	RC updates the file header to include the correct version stamp information. The
	switches parameter is optional. One switch is -T which marks an application as
	running only under protected mode Windows. Additional switches are listed in the
	Microsoft Windows Software Development Kit (SDK) documentation.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
