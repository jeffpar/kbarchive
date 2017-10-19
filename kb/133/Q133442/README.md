---
layout: page
title: "Q133442: Safe Mode Boot Does Not Process Machine Switch for Himem.sys"
permalink: /kb/133/Q133442/
---

## Q133442: Safe Mode Boot Does Not Process Machine Switch for Himem.sys

	Article: Q133442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to start Windows 95 in Safe mode if your computer requires a
	machine-switch parameter on the Himem.sys line in the Config.sys file in order
	to boot.
	
	CAUSE
	=====
	
	When you start Windows 95 in Safe mode, the Config.sys file is not processed.
	Therefore, the Himem.sys line, and any parameter on the line, is not processed.
	
	RESOLUTION
	==========
	
	To process the Himem.sys line when you start Windows 95 in Safe mode, follow
	these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Step-by-Step Confirmation from the Startup menu.
	
	2. Press Y when you are prompted to load the DoubleSpace driver, press N when
	  you are prompted to process the system registry, press Y when you are
	  prompted to process the startup device drivers, and then press Y when you are
	  prompted to process Himem.sys, Ifshlp.sys, and Setver.exe.
	
	3. Press N when you are prompted to process the startup command file
	  (Autoexec.bat) and when you are prompted to load the Windows graphical user
	  interface.
	
	4. At the command prompt, type "win /d:m" (without the quotation marks) to start
	  Windows 95 in Safe mode.
	
	MORE INFORMATION
	================
	
	The following line is an example of a Himem.sys line with a machine-switch
	parameter:
	
	  device=c:\windows\himem.sys /m:1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
