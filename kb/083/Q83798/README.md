---
layout: page
title: "Q83798: Paradox 3.5 Will Run Under Microsoft Windows 3.0 and 3.1"
permalink: kb/083/Q83798/
---

## Q83798: Paradox 3.5 Will Run Under Microsoft Windows 3.0 and 3.1

	Article: Q83798
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Borland's Paradox version 3.5 runs in any mode of the Microsoft Windows
	operating system version 3.0 or 3.1.
	
	The line VCPIWarning=FALSE needs to be inserted in the [386ENH] section of the
	SYSTEM.INI file. This line prevents the following error message:
	
	  ERROR: you have attempted to run a protected mode application in 386 enhanced
	  mode.
	
	Paradox normally runs in real mode or protected mode. When you run Windows 3.0 or
	3.1 in standard or 386 enhanced mode, Paradox can only be run in real mode.
	
	MORE INFORMATION
	================
	
	PIF Settings
	------------
	
	Some default program information file (PIF) settings for Paradox 3.5 may lead to
	problems in the Microsoft Windows operating system version 3.1. Depending on the
	circumstances, the -SHARE and -REAL parameters may or may not be desirable. In
	addition, the KB Required default setting is set too low in the PIF.
	
	The Windows 3.1 PIF for Paradox 3.5 uses the following optional parameters:
	
	  Standard mode: -REAL -SHARE -WIN<BR/>
	  Enhanced mode: -WIN
	
	The -REAL parameter slows down execution and limits the program. It is required
	for Paradox to run on a network.
	
	The -SHARE parameter allows file sharing. It also requires that SHARE.EXE be
	loaded. If SHARE.EXE is not loaded, Paradox will fail to load and will state
	that you do not have access to a required directory. This message may not be
	visible to you because the PIF is set to close on exit. Paradox will start
	loading and then return to Windows. To see the message, clear the Close Window
	On Exit check box in the PIF.
	
	The default KB Required PIF setting for Paradox under Windows 3.1 is set too low.
	To determine the best setting, experiment with higher settings in relation to
	the amount of memory available on the system.
	
	64K Contiguous Page Frame Requirement
	-------------------------------------
	
	Paradox uses expanded memory. It requires a 64K contiguous page frame but does
	not check if a contiguous page frame is available. If expanded memory is
	available, but the page frame is not 64K contiguous, Paradox will attempt to use
	expanded memory and it will crash. To work around the problem, do one of the
	following:
	
	- Rearrange hardware adapters in the machine to free up a 64K contiguous area
	  in the adapter segment (the area from A000 to EFFF hexadecimal).
	
	  -or-
	
	- Disable expanded memory support in the Paradox PIF. (This applies to enhanced
	  mode only; if you are using real or standard mode, you must disable the
	  external expanded memory manager.)
	
	Running Paradox with Other Applications that Use Expanded Memory
	----------------------------------------------------------------
	
	Under Windows 3.0 enhanced mode, expanded memory handles are global. Paradox
	assumes that no other applications are using expanded memory at the same time.
	If you want to use expanded memory with Paradox, you must ensure that no other
	application that also uses expanded memory is run simultaneously. If another
	program uses expanded memory along with Paradox, Paradox may crash. Paradox
	installs its own expanded memory manager, even under Windows.
	
	Paradox is manufactured by Borland, vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	"Paradox User's Guide," version 3.5, pages 266-275
	
	Additional query words: 3.0a 3.00 3.00a 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
