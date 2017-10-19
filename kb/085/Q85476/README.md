---
layout: page
title: "Q85476: LOAD=, RUN=, and StartUp Group Ignored in Windows"
permalink: /kb/085/Q85476/
---

## Q85476: LOAD=, RUN=, and StartUp Group Ignored in Windows

	Article: Q85476
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a shell other than Program Manager (PROGMAN.EXE) is specified on the SHELL=
	line in the [boot] section of the SYSTEM.INI file, programs in the Windows 3.1
	StartUp group may not run. Also, any applications listed on the LOAD= and RUN=
	lines may not run with Windows 3.0 and 3.1, depending on the shell.
	
	MORE INFORMATION
	================
	
	LOAD and RUN= Lines
	-------------------
	
	When you start Windows, Program Manager looks at the LOAD= and RUN= lines for
	programs to run at startup. Third-party shells may not read these line. For
	information on compatibility and functionality with LOAD= and RUN= lines,
	contact the product vendor.
	
	Note: Norton Desktop for Windows (NDW) does read these lines and loads programs
	on the LOAD= and RUN= lines.
	
	Windows StartUp Group and Norton Desktop for Windows
	----------------------------------------------------
	
	If you install Norton Desktop for Windows over Windows 3.1, none of the
	applications in the StartUp group run when you start Windows. Although NDW
	converts the group to its shell, it does not transfer the applications in the
	StartUp group to its autostart group. You must transfer the StartUp group to the
	autostart group that NDW creates.
	
	UAE with Excel for Windows or Word for Windows as Shell
	-------------------------------------------------------
	
	In Windows 3.0, if you use Microsoft Excel for Windows or Microsoft Word for
	Windows as the shell, an Unrecoverable Application Error (UAE) is generated.
	
	In Windows 3.1, most Microsoft applications can be loaded as a shell without
	problems. Word, Excel, PowerPoint, and Project are examples of Microsoft
	programs that can be loaded as a shell but do not recognize the Load= and Run=
	lines or the StartUp group.
	
	Currently, Program Manager, File Manager, and the Windows 3.0 MS-DOS Executive
	are the only Microsoft programs created for Windows that recognize the Load= and
	Run= functions. In Windows 3.1, the StartUp group is also ignored because it is
	also run only by the default Windows Program Manager.
	
	Norton Desktop for Windows is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.1 3.10 winfest automatic automatically
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
