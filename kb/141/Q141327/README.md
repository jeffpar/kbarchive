---
layout: page
title: "Q141327: Multimedia: WinToon Causes Hang or Page Fault in Kernel32.dll"
permalink: /kb/141/Q141327/
---

## Q141327: Multimedia: WinToon Causes Hang or Page Fault in Kernel32.dll

	Article: Q141327
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the multimedia programs listed at the top of this article,
	the program stops responding (hangs), or you receive an error similar to the
	following:
	
	  FLYEXP32 caused an invalid page fault in module KERNEL32.DLL
	
	CAUSE
	=====
	
	The file Otoon32.dll is corrupt and causes a Page Fault when WinToon animations
	are played.
	
	RESOLUTION
	==========
	
	To resolve this problem, try one of the following:
	
	- Clean the multimedia CD with a soft cloth.
	
	-or-
	
	- Delete the file Otoon32.dll located in the Windows\System folder.
	
	-or-
	
	- Restart Windows 95.
	
	When you restart the multimedia program, the file Otoon32.dll is copied to your
	hard disk, eliminating the problem.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm hangs hanging hanged crashed crash crashes freeze frozen locked locked-up lock hang hanged bombed bomb down
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbZNotKeyword kbKidsSearch kbWorldofFlight kbOceans
	
	=============================================================================
	
