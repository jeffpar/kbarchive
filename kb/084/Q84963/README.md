---
layout: page
title: "Q84963: dBASE IV Text Not Being Displayed in Reverse Video in Cells"
permalink: kb/084/Q84963/
---

## Q84963: dBASE IV Text Not Being Displayed in Reverse Video in Cells

	Article: Q84963
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When dBASE IV is run in a window under Microsoft Windows 3.1, the text in cells
	may not be displayed in reverse video if the VGA with Monochrome display driver
	that comes with Windows 3.1 is used.
	
	RESOLUTION
	==========
	
	To correct this problem, use Windows Setup to install the standard VGA 16-color
	video driver. In most cases, this corrects the problem.
	
	MORE INFORMATION
	================
	
	The VGA with Monochrome display driver provides only four shades of gray for
	MS-DOS-based applications in a window. The standard VGA 16-color display driver
	provides 16 shades of gray for MS-DOS-based applications running in a window.
	
	If dBASE IV is running full screen under Windows, it correctly reverses the video
	for text in cells.
	
	DBASE IV is manufactured by Ashton-Tate, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 highlight inverse 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
