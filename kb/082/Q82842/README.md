---
layout: page
title: "Q82842: 8514 Palette Changes in Windows"
permalink: kb/082/Q82842/
---

## Q82842: 8514 Palette Changes in Windows

	Article: Q82842
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows operating system version 3.1, MS-DOS-based applications and
	Windows-based applications have to contend over the video palette. This may
	cause the available palette to change. As a result, the colors on the screen may
	change when you switch between MS-DOS-based applications and Windows-based
	applications.
	
	MORE INFORMATION
	================
	
	Some 8514 video board configurations share their hardware video palette with the
	pass-through VGA connector. In this case, it is possible for an MS- DOS-based
	application running in an MS-DOS box to alter the color palette of Windows, and
	vice versa. For example, running a palette-animation application in Windows and
	then switching to an MS-DOS-based application (leaving the animation application
	running in the background) can cause colors to change or "cycle" in some
	MS-DOS-based applications.
	
	Additional query words: 3.10 3.1 non-Windows
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
