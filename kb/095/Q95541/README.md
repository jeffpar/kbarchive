---
layout: page
title: "Q95541: Err Msg: &quot;Cannot Find STRAKCP.DLL&quot; using Z-Nix SuperMouse"
permalink: /kb/095/Q95541/
---

## Q95541: Err Msg: &quot;Cannot Find STRAKCP.DLL&quot; using Z-Nix SuperMouse

	Article: Q95541
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Z-Nix SuperMouse and SuperTracker control panel, you may receive
	the following message when trying to load the Windows 3.1 Control Panel:
	
	  Cannot Find STRAKCP.DLL
	
	After choosing OK, the following message appears:
	
	  Cannot Load STRAK.DRV
	
	To solve this problem, copy the STRAKCP.DLL file from the Mouse directory to your
	Windows SYSTEM subdirectory.
	
	MORE INFORMATION
	================
	
	The Z-Nix SuperMouse has a Windows utility called SuperTrack. This is a separate
	mouse control panel that controls acceleration and sensitivity for the Z-Nix
	mouse. This utility is similar to the POINTER.EXE used with the Microsoft Mouse
	driver version 8.2.
	
	If not setup correctly, the files are placed into the Mouse subdirectory rather
	than your Windows SYSTEM subdirectory.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 znix super mouse track tracker trackball
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
