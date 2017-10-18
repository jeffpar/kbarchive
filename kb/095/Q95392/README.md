---
layout: page
title: "Q95392: INFO: Managing Icons Extracted Using ExtractIcon()"
permalink: kb/095/Q95392/
---

## Q95392: INFO: Managing Icons Extracted Using ExtractIcon()

	Article: Q95392
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 17-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ExtractIcon() API is new to Windows version 3.1. The Window 3.1 Software
	Development Kit (SDK) "Programmer's Reference, Volume 2: Functions" description
	of this function, on page 296, does not address management of the memory
	occupied by the icons extracted using ExtractIcon. This article provides that
	information.
	
	MORE INFORMATION
	================
	
	When an application calls ExtractIcon(), it passes an hInstance. When that
	hInstance is terminated, the memory occupied by that icon is automatically
	freed.
	
	Applications that extract several icons during their lifetime may not be able to
	keep several unused icons in memory. Such applications can call DestroyIcon to
	free memory occupied by icons.
	
	If application A needs to pass a handle to an icon to application B in the
	system, it should make a copy of the icon with CopyIcon() using the hInstance of
	application B. This ensures that even if application A quits while application B
	is still using the icon, the handle to the icon passed to application B will
	still be valid.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
