---
layout: page
title: "Q190826: Windows 95 Starts Only in Safe Mode After Installing Sound Card"
permalink: kb/190/Q190826/
---

## Q190826: Windows 95 Starts Only in Safe Mode After Installing Sound Card

	Article: Q190826
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbhw win95 kbHardware
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Diamond Monster Sound M80 sound card in a computer running
	Windows 95, you may be able to start Windows 95 only in Safe mode.
	
	CAUSE
	=====
	
	This behavior can occur if the Autoexec.bat file contains an incorrect line.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Using a text editor (such as Notepad), open the Autoexec.bat file.
	
	2. Look for the following line in the Autoexec.bat file:
	
	     C:\Progra~1\Monste~1\F3InitC:\Progra~1\Monste~1\F3dos.bdi
	
	3. If the line exists, change the line to the following two separate lines:
	
	     C:\Progra~1\Monste~1\F3Init
	     C:\Progra~1\Monste~1\F3dos.bdi
	
	4. Save and then close the Autoexec.bat file.
	
	5. Restart your computer.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: diamondmm
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbhw win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
