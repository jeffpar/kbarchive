---
layout: page
title: "Q194985: Glide API Features Disabled on Video Adapter"
permalink: /kb/194/Q194985/
---

## Q194985: Glide API Features Disabled on Video Adapter

	Article: Q194985
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay
	Last Modified: 24-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 on a computer with a proprietary
	3Dfx function library file (such as the 3dfxgl.dll file installed during the
	installation of id Software's Quake II), you may not be able to access your
	video adapter's support for 3Dfx graphics.
	
	CAUSE
	=====
	
	The service pack Setup program overwrites the existing Opengl32.dll file in the
	%SystemRoot%\System32 folder.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Reinstall the Quake II software and select the Full Install option.
	
	- Rename the Opengl32.dll file located in the %SystemRoot%\System32 folder.
	  Copy the Quake II 3dfxgl.dll file to the %SystemRoot%\System32 folder and
	  rename it to Opengl32.dll.
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "rename" (without quotation marks), and then double-click the
	  "Renaming files" topic. For information about how to copy a file, click
	  Start, click Help, click the Index tab, type "copy" (without quotation
	  marks), and then double-click the "Copying files" topic.
	
	Note that when you use either of these methods, other programs making function
	calls to the OpenGL API may not function properly. To provide support for Quake
	II and other programs that use OpenGL functions, replace the Opengl32.dll file
	in the %SystemRoot%\System32 folder with a copy of the same file from Windows NT
	4.0 Service Pack 3.
	
	NOTE: The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: voodoo II graphics sp4
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
