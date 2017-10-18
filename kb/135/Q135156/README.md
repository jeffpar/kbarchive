---
layout: page
title: "Q135156: Error Message Running D-Day Encyclopedia Setup Program"
permalink: kb/135/Q135156/
---

## Q135156: Error Message Running D-Day Encyclopedia Setup Program

	Article: Q135156
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
	
	The D-Day Encyclopedia Setup program will not work correctly if the Windows
	folder is not named "Windows." If the folder is named something else, you
	receive the following error message:
	
	  Cannot find CTL3D.DLL.
	  Windows needs this file to run C:\DDAY\MVIEWER2.EXE.
	
	CAUSE
	=====
	
	The D-Day Encyclopedia Setup program is designed to install the Ctl3d.dll file
	in the Windows folder.
	
	RESOLUTION
	==========
	
	Create a folder called "Windows" before you run the Setup program. After Setup
	finishes, copy the Ctl3d.dll file to your actual Windows folder.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
