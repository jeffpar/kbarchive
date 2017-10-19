---
layout: page
title: "Q76774: README.TXT: Using Windows 2.x Drivers with Windows 3.0"
permalink: /kb/076/Q76774/
---

## Q76774: README.TXT: Using Windows 2.x Drivers with Windows 3.0

	Article: Q76774
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Windows with Multimedia Extensions
	version 1.0 README.TXT file. The Setup program copies this file to the Windows
	with Multimedia Extensions directory.
	
	This information does not apply to later versions of Windows.
	
	USING WINDOWS 2.X DRIVERS WITH WINDOWS 3.0
	==========================================
	
	Windows 2.x display, mouse, sound, system, and communications drivers
	run only in Windows 3.0 real mode. To run Windows 3.0 in standard and
	enhanced 386 modes (that also support the Multimedia extensions), you
	must update these drivers to run Windows 3.0.
	
	To start Windows in real mode, type the following at the MS-DOS prompt
	and press ENTER:
	
	  win /r
	
	If you use Windows 2.x printer drivers with Windows 3.0, you might see
	a warning when you print. As with Windows 2.x applications, 2.x
	printer drivers work reliably only if you run Windows 3.0 in real
	mode.
	
	NOTE: It is recommended that you install only the drivers provided
	with Windows 3.0. If you want to use a special device driver that was
	not provided with Windows, contact the manufacturer for an updated
	driver that works with Windows 3.0.
	
	Additional query words: MMWIN kbmm 1.0 readme
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
