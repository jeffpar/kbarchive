---
layout: page
title: "Q82517: Using AutoCAD with Windows 3.1"
permalink: kb/082/Q82517/
---

## Q82517: Using AutoCAD with Windows 3.1

	Article: Q82517
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains notes on how to use AutoCAD 386 with Windows 3.1 and is
	divided into the following sections:
	
	- Default PIF Setting Provides Poor Performance
	
	- Running AutoCAD with a UMB Provider
	
	- Running AutoCAD in 386 Enhanced Mode
	
	MORE INFORMATION
	================
	
	Default PIF Setting Provides Poor Performance
	---------------------------------------------
	
	The default program information file (PIF) settings for AutoCAD 386 are for a
	minimum configuration. These settings usually result in poor performance.
	
	The PIF Editor in Windows 3.1 can be used to modify the AutoCAD 386 PIF file
	settings to optimize the performance of AutoCAD.
	
	Standard Mode PIF Changes
	-------------------------
	
	- XMS MEMORY REQUIRED can be set to 1. This forces XMS memory to be provided to
	  an application. (Unless a required amount is given, no XMS memory is provided
	  in standard mode.)
	
	- XMS MEMORY DESIRED can be set between 1024 and 4096. 1024 significantly
	  improves performance. 4096 is the value recommended by the manufacturer for
	  best performance.
	
	- Other Requirements. For these settings to work, you must have adequate XMS
	  memory available. If adequate XMS memory is not available, no adverse effects
	  are noticeable, but performance is only improved by the real amount of XMS
	  provided. You must also have an equivalent amount of disk space free for a
	  swap file.
	
	Running AutoCAD with a UMB Provider
	-----------------------------------
	
	AutoCAD runs in standard mode only if no upper memory block (UMB) manager, such
	as EMM386.EXE, installed. To run in 386 enhanced mode, upgrade to AutoCAD for
	Windows.
	
	Running AutoCAD in 386 Enhanced Mode
	------------------------------------
	
	You must upgrade to AutoCAD for Windows to run in 386 enhanced mode.
	
	
	AutoCAD is manufactured by Autodesk, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 lim limulator winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
