---
layout: page
title: "Q82411: Lotus Express Version 1.0"
permalink: /kb/082/Q82411/
---

## Q82411: Lotus Express Version 1.0

	Article: Q82411
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Lotus Express is an electronic mail package that runs under MS-DOS versions 3.x
	or earlier. However, a utility called METRO.EXE version 1.11a allows Lotus
	Express to run under MS-DOS versions 4.x and 5.0. For more information, contact
	Lotus Express customer support.
	
	For proper use of Lotus Express with Microsoft Windows, do the following:
	
	- Do not load Lotus Express before starting Windows. Instead, start Lotus
	  Express from a program information file (PIF) after loading Windows. The
	  Lotus Express icon and EXPRESS.PIF file are included with the Windows Setup
	  disks.
	
	- In standard mode, you must close Lotus Express to switch to other tasks. As a
	  result, Lotus Express can't run in the background.
	
	- In enhanced mode, Lotus Express can run in the background, but you may still
	  encounter problems. The KB Required (Memory Requirements) field may be
	  reduced from 320K to 155K if needed in EXPRESS.PIF.
	
	WARNING: Lotus Express version 1.0, even when run from its PIF, may still be
	incompatible with Windows.
	
	MORE INFORMATION
	================
	
	The Lotus Express documentation states that Lotus Express should be loaded
	BEFORE running Windows, and should be unloaded AFTER exiting Windows.
	
	This is NOT recommended with the Microsoft Windows versions 3.1 and 3.11.
	
	The following can occur if Lotus Express is running before starting Windows:
	
	- With Lotus Express running, Windows 3.1 Setup may fail because of
	  insufficient memory to read SETUP.INF. Either unload Lotus Express (press
	  ALT+SHIFT+END) before running Setup, or load HIMEM.SYS and EMM386.EXE at
	  bootup before running Lotus Express and Windows Setup.
	
	
	- With Lotus Express running before loading Windows 3.1 in standard mode, some
	  applications may appear to load; however, only the icons appear on desktop.
	  You can call Lotus Express screens ONLY from the FIRST MS-DOS box, and you
	  must exit screens to switch tasks. If you attempt to unload Lotus Express
	  from an MS-DOS box, it won't work. If after such an attempt you want to close
	  the MS-DOS box, the system will stop responding (hang or restart).
	
	- With Lotus Express running before loading Windows in 386 enhanced mode, some
	  applications may not be able to run due to insufficient memory. It is
	  possible to decrease the KB Required field (Memory Requirements) in the PIF
	  for some applications to enable them to run. Problems loading large files may
	  be encountered. You can access Lotus Express screens ONLY from ANY ONE
	  virtual machine session. Windows may experience contention between Lotus
	  Express and any application for some resources such as COM ports, which will
	  require your intervention.
	
	- In either mode, Lotus Express will not re-install itself from an MS-DOS box
	  or virtual-machine session. Also, Lotus Express sometimes cannot unload
	  itself from memory when you press ALT+SHIFT+END, which requires you to
	  restart your system after exiting Windows.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	KBCategory: kbsetup kb3rdparty
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
