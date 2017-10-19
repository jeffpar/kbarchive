---
layout: page
title: "Q151717: Cannot Exit MS-DOS Mode"
permalink: /kb/151/Q151717/
---

## Q151717: Cannot Exit MS-DOS Mode

	Article: Q151717
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to exit MS-DOS mode, the computer may boot back into MS-DOS mode.
	
	CAUSE
	=====
	
	This behavior can occur if multiple instances of MS-DOS mode were started and
	the original Config.sys and Autoexec.bat files have been replaced.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Use any text editor (such as Edit.com) to create a new Config.sys file in the
	  root folder of your boot drive. The Config.sys file must not contain the
	  following line:
	
	  DOS=Single
	
	2. Create a new Autoexec.bat file in the root folder of your boot drive. The
	  Autoexec.bat file must not contain the following line:
	
	  c:\<windows>\win.com /wx
	
	  Where <windows> is the name of your Windows folder.
	
	3. Restart the computer.
	
	MORE INFORMATION
	================
	
	When you restart the computer in MS-DOS mode, you can specify custom Config.sys
	and Autoexec.bat files in any of the following locations:
	
	- The properties for the program you are running in MS-DOS mode.
	
	- The properties for a shortcut that starts the program you are running in
	  MS-DOS mode.
	
	- The properties for the "Exit to Dos.pif" file that is used to start Windows
	  95 in MS-DOS mode.
	
	When you double-click the program or shortcut, or click the "Restart the computer
	in MS-DOS mode" option in the Shut Down Windows dialog box, the Config.sys and
	Autoexec.bat files in the root folder of the boot drive are renamed to
	Config.wos and Autoexec.wos, and the custom Config.sys and Autoexec.bat files
	are copied from one of the above locations to the root folder. When you exit
	MS-DOS mode, the current Config.sys and Autoexec.bat files are renamed to
	Config.app and Autoexec.app, the original Config.sys and Autoexec.bat files are
	restored from the Config.wos and Autoexec.wos files, and the Config.wos and
	Autoexec.wos files are deleted.
	
	If a second instance of MS-DOS mode is started before you exit the first
	instance, the original Config.sys file contained in the Config.wos file may be
	replaced with a Config.sys file that contains the following line:
	
	  DOS=Single
	
	When you then attempt to exit MS-DOS mode and start Windows 95 normally, the
	original Config.sys file is restored from the Config.wos file. Because this
	Config.sys file contains the above line, the computer boots into MS-DOS mode.
	
	For additional information about the process that occurs when you restart your
	computer in MS-DOS mode, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138996 Description of Restarting Computer in MS-DOS Mode
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q130448 Cannot Quit MS-DOS Mode
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	
	=============================================================================
	
